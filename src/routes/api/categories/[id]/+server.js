import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import { supabase } from '$lib/supabase.js';

// Get categories for a category by category_id
export async function GET({ params, request, cookies }) {
	let id = 0;
	if (params.id && !isNaN(parseInt(params.id))) {
		id = parseInt(params.id);

	}

	if (id > 0) {
		const categories = await supabase
			.from('category')
			.select('*')
			.eq('id', id)

		if (categories.error) {
			return json({
				status: categories.status,
				error: categories.error
			});
		}

		return json({
			data: categories.data,
			status: categories.status
		});
	}
	return json({
		status: 400,
		error: 'Bad Request'
	});
}
