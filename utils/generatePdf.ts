import PDFDocument from "pdfkit";

async function generatePdf(): Promise<Buffer> {
  return new Promise((resolve: Function) => {
    const doc = new PDFDocument();
    doc.text("Certificate #1");
    doc.end();
    const buffers: any = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });
  });
}

export default generatePdf;
