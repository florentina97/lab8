// import dependencies
// Zod: validator
// superforms: form helper
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';

const schema = z.object({
	id: z.number().optional(),
	category_id: z.number().optional(),
	product_name: z.string(),
	product_description: z.string(),
	product_stock: z.number().optional(),
	product_price: z.number().optional()
});


// Page load
export async function load({ fetch, params }) {
	// Build form
	const form = await superValidate(schema);

	return {
		form,
	};
}

export const actions = {
	// default form submit
	default: async ({ request, fetch }) => {
		debugger
		// retrieve form data and validate
		const form = await superValidate(request, schema);

		console.log('POST', form);

		if (!form.valid) {
			return fail(400, { form });
		}

        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(form.data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const new_cat = await response.json();
		

		// return form and message
		return message(form, `success: new Product added`);
	}
};
