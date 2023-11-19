<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */

	// dependencies
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	// create form instance
	const { form, errors, enhance, delayed, message, constraints, reset } = superForm(data.form);
</script>

<div class="m-5">
	<!--Show message after sucessful add location-->
	{#if $message}
		<h4 class="message" class:success={$page.status < 400} class:error={$page.status >= 400}>
			{$message}
		</h4>
		<p>Id: {$form.id}</p>
		<p>Category ID: {$form.category_id}</p>
		<p>Name: {$form.product_name}</p>
		<p>Description: {$form.product_description}</p>
		<p>Stock: {$form.product_stock}</p>
		<p>Price: {$form.product_price}</p>
	{:else}
		<h1>Add Product</h1>
		<!-- Bootstrap Form Layout-->
		<div class="w-75 mw-300 p-3">
			<!-- this form will post when submitted -->
			<form method="POST" use:enhance>
				<div class="mb-3">
					<label for="id" class="form-label">Id</label>
					<input type="number" name="id" class="form-control" bind:value={$form.id} />
				</div>

				<!-- category id -->
				<div class="mb-3">
					<label for="category_id" class="form-label">Category ID</label>
					<input type="text" name="category_id" class="form-control" bind:value={$form.category_id} />
				</div>

				<!-- name -->
				<div class="mb-3">
					<label for="product_name" class="form-label">Name</label>
					<input type="text" name="product_name" class="form-control" bind:value={$form.product_name} />
				</div>
                
				<!-- description -->
				<div class="mb-3">
                    <label for="product_description" class="form-label">Description</label>
					<input
                    type="text"
                    name="product_description"
                    class="form-control"
                    bind:value={$form.product_description}
					/>
				</div>

                <!-- stock -->
                <div class="mb-3">
                    <label for="product_stock" class="form-label">Stock</label>
                    <input type="number" name="product_stock" class="form-control" bind:value={$form.product_stock} />
                </div>
                
                <!-- price -->
                <div class="mb-3">
                    <label for="product_price" class="form-label">Price</label>
                    <input type="number" name="product_price" class="form-control" bind:value={$form.product_price} />
                </div>

				<!-- submit button -->
				<div class="mb-3">
						<button class="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	{/if}
</div>
