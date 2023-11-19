<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;

</script>

<div class="container">
    {#if data.category}
	<p>id: {data.category?.id}</p>
	<p>name: {data.category?.category_name}</p>
	<p>description: {data.category?.category_description}</p>
    {:else}
        <strong>No category with this id</strong>
{/if}
</div>
