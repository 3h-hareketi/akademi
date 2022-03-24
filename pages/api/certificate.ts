import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PDFDocument } from "pdf-lib";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getSession({ req: request });

  const formUrl =
    process.env.NODE_ENV === "production"
      ? "https://" + process.env.VERCEL_URL
      : "http://localhost:3000" + "/certificate_template.pdf";

  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);

  const form = pdfDoc.getForm();

  const nameField = form.getTextField("Katılımcının adı soyadı");
  nameField.setText(session?.user?.name || "Kullanici Adi Yok");
  nameField.enableReadOnly();

  const curriculumField = form.getTextField("Eğitimin adı");
  curriculumField.setText("Sertifika #1");
  curriculumField.enableReadOnly();

  const pdfBytes = await pdfDoc.save();

  const buffer = Buffer.from(pdfBytes);

  response.setHeader("Content-Type", "application/pdf");
  response.setHeader("Content-Length", buffer.length);
  response.send(buffer);
}
