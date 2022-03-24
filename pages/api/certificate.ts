import { NextApiRequest, NextApiResponse } from "next";
import generatePdf from "../../utils/generatePdf";

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const stream = await generatePdf();
  return {
    statusCode: 200,
    isBase64Encoded: true,
    headers: {
      "Content-type": "application/pdf",
    },
    body: stream.toString("base64"),
  };
}
export default handler;
