import { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const doc = new PDFDocument({ size: [10, 10], margin: 1 });
  console.log(doc);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `PDF generation succesful`,
    }),
  };
}
export default handler;
