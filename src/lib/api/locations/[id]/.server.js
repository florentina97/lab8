import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import { supabase } from '$lib/supabase.js';

// Get locations by id
export async function GET({ params, request, cookies }) {
	let id = 0;
    //checking if the ID if params.id is present and if it's a number 
	if (params.id && !isNaN(parseInt(params.id))) {
		id = parseInt(params.id); //converted from string to number and assigned to variable ID

	}

	if (id > 0) { //doing the request to find the location by ID
		const locations = await supabase
			.from('locations')
			.select('*')
			.eq('id', id)
			.order('name', { ascending: true });

		if (locations.error) {
			return json({
				status: locations.status,
				error: locations.error
			});
		}

		return json({
			data: locations.data,
			status: locations.status
		});
	}
	return json({
		status: 400,
		error: 'Bad Request'
	});
}