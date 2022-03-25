import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSdk as getFaunaSdk } from "../../interfaces/fauna";
import { getSdk as getGraphCmsSdk } from "../../interfaces/graphcms";
import { client as faunaClient } from "../../lib/faunaGraphQlClient";
import { client as graphCmsClient } from "../../lib/graphCmsClient";

type Request = {
  slug: string;
  score: number;
};

type Response = {
  result?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const session = await getSession({ req });
  const date = new Date();

  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
  }

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  const data: Request = JSON.parse(JSON.stringify(req.body));

  if (!data.slug) {
    res.status(400).json({ message: "Missing slug" });
  }

  if (!data.score) {
    res.status(400).json({ message: "Missing score" });
  }

  const graphCmsSdk = getGraphCmsSdk(graphCmsClient);
  const { curriculum } = await graphCmsSdk.CurriculumBySlug({
    slug: data.slug,
  });

  const requiredCorrectAnswerCount =
    (curriculum?.articles?.length! * curriculum?.threshold!) / 100;

  if (data.score < requiredCorrectAnswerCount) {
    res.status(200).json({ message: "Score is not enough" });
  }

  const faunaSdk = getFaunaSdk(faunaClient);
  const { createResult: result } = await faunaSdk.Result({
    curriculumName: curriculum!.title,
    user: { connect: session!.user.id },
    score: data.score,
    date: date.toISOString(),
  });

  res.status(200).json({ result: result._id });
}
