/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    let categories;
  
    try {
      // Call fetch
      const res_categories = await fetch("/api/categories");
  
      // if resonse code 200 (ok)
      if (res_categories.ok) {
        // get json from resonse
        categories = await res_categories.json();
      }
    } catch (error) {
      // an error occured - return status code amd mesage
      return {
        status: 500,
        error: new Error(`Could not fetch data`),
      };
    }
  
    return {
        categories: categories.data,
    };
  }
  