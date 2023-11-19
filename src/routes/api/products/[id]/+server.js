import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import { supabase } from '$lib/supabase.js';

// Get products for a category by category_id
export async function GET({ params, request, cookies }) {
	let id = 0;
	if (params.id && !isNaN(parseInt(params.id))) {
		id = parseInt(params.id);

	}

	if (id > 0) {
		const products = await supabase
			.from('product')
			.select('*')
			.eq('id', id)

		if (products.error) {
			return json({
				status: products.status,
				error: products.error
			});
		}

		return json({
			data: products.data,
			status: products.status
		});
	}
	return json({
		status: 400,
		error: 'Bad Request'
	});
}
