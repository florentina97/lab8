<script>
    export let data;

    /**
	 * @param id {number}
	 */
	async function filterByCat(id) {
		let endpoint = '/api/products/';

		if (id != 0) {
			endpoint = `${endpoint}category/${id}`;
		}

		console.log('api endpoint: ', endpoint);

		// Call fetch
		const response = await fetch(endpoint);

		// if resonse code 200 (ok)
		if (response.ok) {
			// get json from resonse
			const json = await response.json();
			data.products = json.data;
		}
	}
</script>

<!-- The HTML content of the page-->

<div class="container">
  <div class="row">
    <!-- Page Header -->
    <h2 class="mt-5">Products from Supabase</h2>
  </div>
  {#if data.categories && data.products}
  <div class="row">
    <div class="col-sm-2">
      <!-- Page Body Left Column (menu) -->
      <div id="categories" class="list-group">
        <button on:click={() => filterByCat(0)} class="list-group-item list-group-item-action">
            All Categories
        </button>
        {#each data.categories as cat}
            <button
                on:click={() => filterByCat(Number(cat.id))}
                class="list-group-item list-group-item-action"
            >
                {cat.id}
            </button>
        {/each}
    </div>
    </div> <!-- End category col -->
    <div class="col-sm-10">
      <!-- Page Body Right Side (Content goes here) -->
      <div id="products">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Name</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {#each data.products as product }
            <tr>
                <td>{product.id}</td>
                <td>{product.category_id}</td>
                <td>{product.product_name}</td>
                <td>{product.product_description}</td>
                <td>{product.product_stock}</td>
                <td>{product.product_price}</td>
               
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div> <!-- End locations col -->
  </div> <!-- End Row -->
  {:else}
  <p> No data to display</p>
{/if}
</div> <!-- End Main Content-->
