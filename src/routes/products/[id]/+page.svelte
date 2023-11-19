<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<div class="container">
    {#if data.product}
	<p>id: {data?.product?.id}</p>
	<p>Category Id: {data.product?.category_id}</p>
	<p>Name: {data.product?.product_name}</p>
	<p>Description: {data.product?.product_description}</p>
	<p>Stock: {data.product?.product_stock}</p>
	<p>Price: {data.product?.product_price}</p>
    {:else}
        <strong>No product with this id</strong>
    {/if}
</div>
