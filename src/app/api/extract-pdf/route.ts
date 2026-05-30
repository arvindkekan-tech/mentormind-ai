import { NextRequest, NextResponse } from "next/server";

import PDFParser from "pdf2json";

export async function POST(
  request: NextRequest
) {
  try {
    const formData =
      await request.formData();

    const file =
      formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: "No file uploaded",
        },
        {
          status: 400,
        }
      );
    }

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    const pdfParser =
      new PDFParser();

    const extractedText =
      await new Promise<string>(
        (resolve, reject) => {

          pdfParser.on(
            "pdfParser_dataError",
            (errData: any) =>
              reject(errData.parserError)
          );

          pdfParser.on(
            "pdfParser_dataReady",
            () => {

              const text =
                pdfParser
                  .getRawTextContent();

              resolve(text);
            }
          );

          pdfParser.parseBuffer(
            buffer
          );
        }
      );

    return NextResponse.json({
      success: true,
      text: extractedText,
    });

  } catch (error: any) {

    console.log(
      "PDF Extraction Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}