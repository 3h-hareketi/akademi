import { Session } from "next-auth";
import path from "path";
import { PDFDocument } from "pdf-lib";
async function generatePdf(session: Session | null) {
  const formUrl = path.join(
    "http://localhost:3000",
    "certificate_template.pdf"
  ); // TODO
  const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);

  const form = pdfDoc.getForm();

  const nameField = form.getTextField("Ad Soyad");

  nameField.setText(session?.user?.name || "Kullanici Adi Yok");

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

export default generatePdf;
