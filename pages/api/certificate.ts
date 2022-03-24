import { NextApiRequest, NextApiResponse } from "next";
import generatePdf from "../../utils/generatePdf";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const certificate = await generatePdf();

  response.status(200).json({
    statusCode: 200,
    isBase64Encoded: true,
    headers: {
      "Content-Type": "application/pdf",
    },
    body: certificate,
  });
}
