import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail'
import {SENDGRID_API_KEY} from '$env/static/private';
sgMail.setApiKey(SENDGRID_API_KEY);

const PDF_GUIDE_URL =
	"https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf"

export async function POST({request}) {
	const requestBody = await request.json()
	const response = await fetch(PDF_GUIDE_URL)
	//binary data in array
	const pdfBuffer = await response.arrayBuffer()
	const base64PDF = Buffer.from( pdfBuffer).toString('base64')

	const customerEmail = requestBody.data.object.customer_details.email
	const customerName = requestBody.data.object.customer_details.name

	const message = {
		to: customerEmail,
		from: "gue@test.ch",
		subject: "alles gut",
		html: `<p>Thank you ${customerName}</p>`,
		attachments: [
			{
				content: base64PDF,
				filename:"digital ebook.pdf",
				type: "application/pdf",
				disposition: "attachment",
			}
		]
	}
	await sgMail.send(message)

	console.log(requestBody)
	return json({success: "email sent"})
}