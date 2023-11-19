<script>
// Get data returned by load()
// The products are included in 'data'
export let data;
</script>

<!-- The HTML content of the page-->

<div class="m-4">

    <!-- A Bootstrap styled table -->
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>Id</th>
                <th>Category ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Stock</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <!-- Iterate trough the products array, adding a new table row for each product -->
            {#each data.products as product}
            <tr>
                <td><a href={`/products/${product.id}`}>{product.id}</a></td>
                <td>{product.category_id}</td>
                <td>{product.product_name}</td> 
                <td>{product.product_description}</td> 
                <td>{product.product_price}</td> 
                <td>{product.product_stock}</td>                   
            </tr>
            {/each} <!-- end the 'each' loop-->
        </tbody>
    </table>
</div>