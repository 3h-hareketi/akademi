import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import path from "path";
import { PDFDocument } from "pdf-lib";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getSession();
  const formUrl = path.join(
    "https://" + process.env.VERCEL_URL + "/" || "/",
    "certificate_template.pdf"
  );
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);

  const form = pdfDoc.getForm();

  const nameField = form.getTextField("Ad Soyad");
  nameField.enableReadOnly();

  nameField.setText(session?.user?.name || "Kullanici Adi Yok");

  const pdfBytes = await pdfDoc.save();

  const buffer = Buffer.from(pdfBytes);

  response.setHeader("Content-Type", "application/pdf");
  response.setHeader("Content-Length", buffer.length);
  response.send(buffer);
}
