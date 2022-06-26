
<script>
    import { fly, fade } from 'svelte/transition';
    export let title;
    export let src;
</script>
<div on:click="{() => { window.location.href=`/products/${title}`}}" transition:fade="{{duration: 200}}" class="group relative">
    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
    <img src={src} alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
    </div>
    <div class="mt-4 flex justify-between">
    <div>
        <h3 class="text-sm text-gray-700">
        <a href="#">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {title}
        </a>
        </h3>
        <p class="mt-1 text-sm text-gray-500">Black</p>
    </div>
    <p class="text-sm font-medium text-gray-900">$35</p>
    </div>
</div>
