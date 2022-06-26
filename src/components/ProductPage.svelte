<script>
    import Product from './Product.svelte'
    let products = [
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'}, 
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
        {"title": 'Basic Tee', 'src' : 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},
    ];
</script>

{#each products as product}
    <Product {...product} />
{/each}

