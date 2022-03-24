/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";
// import PDF from "../../services/PDF";

export const handler = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const doc = new PDFDocument({ size: [10, 10], margin: 1 });
  console.log(doc);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `PDF generation succesful`,
    }),
  };
};
