import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PDFDocument, TextAlignment } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getSession({ req: request });

  const formUrl =
    process.env.NODE_ENV === "production"
      ? "https://" + process.env.VERCEL_URL
      : "http://localhost:3000" + "/certificate_template.pdf";

  const fontUrl =
    process.env.NODE_ENV === "production"
      ? "https://" + process.env.VERCEL_URL
      : "http://localhost:3000" + "/Merriweather-Italic.ttf";

  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);

  pdfDoc.registerFontkit(fontkit);
  const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer());
  const customFont = await pdfDoc.embedFont(fontBytes);

  const form = pdfDoc.getForm();

  const nameField = form.getTextField("katilimcinin adi soyadi");
  nameField.setText(session?.user?.name || "");
  nameField.enableReadOnly();
  nameField.setAlignment(TextAlignment.Center);
  nameField.updateAppearances(customFont);

  const curriculumField = form.getTextField("egitimin adi");
  curriculumField.setText("Sertifika #1");
  curriculumField.enableReadOnly();
  curriculumField.setAlignment(TextAlignment.Center);
  curriculumField.updateAppearances(customFont);

  const pdfBytes = await pdfDoc.save();

  const buffer = Buffer.from(pdfBytes);

  response.setHeader("Content-Type", "application/pdf");
  response.setHeader("Content-Length", buffer.length);
  response.send(buffer);
}
