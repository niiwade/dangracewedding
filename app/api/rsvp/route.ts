import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const body = await req.json() as SheetForm;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:B1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.message]],
      },
    });

    return NextResponse.json({ data: response.data });
  } catch (e) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Only POST requests are allowed" },
    { status: 405 }
  );
}
