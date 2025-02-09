
import type { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"

type SheetForm = {
  name: string,
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' })
  }


  const body = req.body as SheetForm

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
      },

      scopes: [
        'https://ww.googleapis.com/auth/drive',
        'https://ww.googleapis.com/authdrive.file',
        'https://ww.googleapis.com/auth/spreadsheets'
      ]
    })

    const sheets = google.sheets({
      auth,
      version: 'v4'
    })


    const response = sheets.spreadsheets.values.append(
      {
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A1:B1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [body.name, body.message]
          ]
        }
      }
    )

    return res.status(200).json({data: (await response).data})

  } catch (e) {

    return res.status(500).send({message: "Something went wrong"})

  }

}