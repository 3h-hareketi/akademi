import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getSdk as getFaunaSdk } from "../../interfaces/fauna";
import { getSdk as getGraphCmsSdk } from "../../interfaces/graphcms";
import { client as faunaClient } from "../../lib/faunaGraphQlClient";
import { client as graphCmsClient } from "../../lib/graphCmsClient";

type Data = {
  result?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
  }

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  if (!req.query.slug) {
    res.status(400).json({ message: "Missing slug" });
  }

  if (!req.query.score) {
    res.status(400).json({ message: "Missing score" });
  }

  const graphCmsSdk = getGraphCmsSdk(graphCmsClient);
  const { curriculum } = await graphCmsSdk.CurriculumBySlug({
    slug: req.query.slug as string,
  });

  const faunaSdk = getFaunaSdk(faunaClient);
  const { createResult: result } = await faunaSdk.Result({
    curriculumName: curriculum!.title,
    user: { connect: session?.user?.id! },
    score: parseInt(req.query.score as string),
    date: Date.now(),
  });

  res.status(200).json({ result: result._id });
}
