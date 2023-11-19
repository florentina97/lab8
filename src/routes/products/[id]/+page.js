/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    let product;
  
    try {
      // Call fetch
      const id = parseInt(params.id);
      const res_product = await fetch(`/api/products/${id}`);
      console.log(params);
      // if resonse code 200 (ok)
      if (res_product.ok) {
        // get json from resonse
        product = await res_product.json();
        console.log(product.data);
      }
    } catch (error) {
      // an error occured - return status code amd mesage
      return {
        status: 500,
        error: new Error(`Could not fetch data`),
      };
    }
  
    return {
        product: product.data[0],
    };
  }
  