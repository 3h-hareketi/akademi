import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PDFDocument, TextAlignment } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { getSdk } from "../../interfaces/fauna";
import { client } from "../../lib/faunaGraphQlClient";
import baseUrl from "../../lib/baseUrl";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getSession({ req: request });
  const sdk = getSdk(client);

  const { findResultByID: data } = await sdk.ResultByID({
    id: request.query.id as string,
  });

  if (!data) {
    response.status(404).json("Result not found");
  }

  const formUrl = baseUrl + "/certificate_template.pdf";
  const fontUrl = baseUrl + "/Merriweather-Italic.ttf";

  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);

  pdfDoc.registerFontkit(fontkit);
  const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer());
  const customFont = await pdfDoc.embedFont(fontBytes);

  const form = pdfDoc.getForm();

  const nameField = form.getTextField("Katilimcinin adi soyadi");
  nameField.setText(session?.user?.name || session?.user?.email || "");
  nameField.setAlignment(TextAlignment.Center);
  nameField.updateAppearances(customFont);

  const curriculumField = form.getTextField("egitimin ismi");
  curriculumField.setText(data?.curriculumName);
  curriculumField.setAlignment(TextAlignment.Center);
  curriculumField.updateAppearances(customFont);
  form.flatten();
  const pdfBytes = await pdfDoc.save();

  const buffer = Buffer.from(pdfBytes);

  response.setHeader("Content-Type", "application/pdf");
  response.setHeader("Content-Length", buffer.length);
  response.send(buffer);
}
