import { withSentry } from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { getSdk, Result } from "../../interfaces/fauna";
import { client } from "../../lib/faunaGraphQlClient";
import mailjet from "node-mailjet";
import {
  html as successHtml,
  text as successText,
} from "../../lib/email/success";
import {
  html as failureHtml,
  text as failureText,
} from "../../lib/email/failure";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers.authorization !== "Bearer " + process.env.CRON_SECRET!) {
    res.status(401).json("Unauthorized");

    return;
  }

  if (req.method !== "POST") {
    res.status(405).json("Method not allowed");

    return;
  }

  const sdk = getSdk(client);
  const { emailQueue } = await sdk.EmailsInQueue();
  const mailjetClient = mailjet.connect(
    process.env.MAILJET_API_KEY!,
    process.env.MAILJET_API_SECRET!
  );

  const mailjetRes = await mailjetClient
    .post("send", { version: "v3.1" })
    .request({
      Messages: emailQueue.data.map((queue) => {
        return {
          From: {
            Email: "noreply@3hhareketi.org",
            Name: "3H Akademi",
          },
          To: [
            {
              Email: queue?.email,
            },
          ],
          Subject: queue?.result
            ? "3H Akademi Eğitiminizi Başarıyla Tamamladınız"
            : "3H Akademi Eğitiminiz Başarısız Oldu",
          TextPart: queue?.result
            ? successText({ id: queue?.result?._id! })
            : failureText({ id: queue?.result?._id! }),
          HTMLPart: queue?.result
            ? successHtml({
                result: queue?.result as Result,
                curriculumName: queue?.result.curriculumName,
                url: queue?.result._id,
              })
            : failureHtml({
                result: queue?.result as Result,
              }),
        };
      }),
    });

  res.status(200);
};

export default withSentry(handler);
