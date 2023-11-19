/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  let category;

  try {
    // Call fetch
    const id = parseInt(params.id);
    const res_category = await fetch(`/api/categories/${id}`);
    console.log(params);
    // if resonse code 200 (ok)
    if (res_category.ok) {
      // get json from resonse
      category = await res_category.json();
      console.log(category.data[0]);
    }
  } catch (error) {
    // an error occured - return status code amd mesage
    return {
      status: 500,
      error: new Error(`Could not fetch data`),
    };
  }

  return {
    category: category.data[0],
  };
}
