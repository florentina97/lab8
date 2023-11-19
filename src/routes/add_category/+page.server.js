// import dependencies
// Zod: validator
// superforms: form helper
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';

const schema = z.object({
	id: z.number().optional(),
	name: z.string(),
	description: z.string()
});


// Page load
export async function load({ fetch, params }) {
	// Build form
	const form = await superValidate(schema);

	// Return form and categories
	return {
		form
	};
}

export const actions = {
	// default form submitd
	default: async ({ request, fetch }) => {
		debugger
		// retrieve form data and validate
		const form = await superValidate(request, schema);

		console.log('POST', form);

		if (!form.valid) {
			return fail(400, { form });
		}

        const response = await fetch('/api/categories', {
            method: 'POST',
            body: JSON.stringify(form.data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const new_cat = await response.json();

		// return form and message
		return message(form, `success: new category added`);
	}
};
