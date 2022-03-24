import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import generatePdf from "../../utils/generatePdf";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getSession();
  const pdfBytes = await generatePdf(session);
  const buffer = Buffer.from(pdfBytes);

  response.status(200).json({
    statusCode: 200,
    isBase64Encoded: true,
    headers: {
      "Content-Type": "application/pdf",
    },
    body: buffer.toString("base64"),
  });
}
