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
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <!-- Iterate trough the products array, adding a new table row for each product -->
                {#each data.categories as category}
                <tr>
                    <td>{category.id}</td>
                    <td>{category.category_name}</td>
                    <td>{category.category_description}</td>                 
                </tr>
                {/each} <!-- end the 'each' loop-->
            </tbody>
        </table>
    </div>