import { json } from '@sveltejs/kit';
import Stripe from 'stripe';
//now this is ok because the code runs only on the server
import {STRIPE_API_KEY} from '$env/static/private';
import {PRICE_ID} from '$env/static/private';
//man könnte es wohl auch von private importieren - ginge wohl auch
import {PUBLIC_FRONTEND_URL} from '$env/static/public';
//create an instance of stripe so that it always lives on the server
const stripe = new Stripe(STRIPE_API_KEY)

export async function POST() {
	try {
		//console.log(stripe)
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price: PRICE_ID,
					quantity: 1,
				}
			],
			mode: "payment",
			success_url: `${PUBLIC_FRONTEND_URL}/checkout/success`,
			cancel_url: `${PUBLIC_FRONTEND_URL}/checkout/failure`,
		})

		return json({ sessionId: session.id })
	} catch (error) {
		return json({error}, {status: 500});
	}
}