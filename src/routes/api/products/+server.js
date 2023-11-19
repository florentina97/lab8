import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

export async function GET({ request, cookies }) {

    const products = await supabase
    .from('product')
    .select('*')

    if (products.error) {
        return json({
            status: products.status,
            error: products.error
        });
    }
    console.log(products)
    return json({
        data: products.data,
        status: products.status
    });
}

export async function POST({ request, cookies }) {
    // Get data from request body
    let data = await request.json();

    // Insert data
    const cat = await supabase
    .from('product')
    .insert([data])
    .select()


    return json({
        data: cat.data
    });
}