<script>
    export let titulo
    export let descripcion
<<<<<<< HEAD:src/lib/Categoria.svelte
    import A from '$lib/button-a.svelte'
    
=======
    import A from '$lib/components/button-a.svelte'
>>>>>>> 8d656298268d0b5286dcd2ab426c0f10c7a0c924:src/lib/components/Categoria.svelte
</script>
<div class="flex flex-col justify-between items-center w-3/5 h-full font-poppins flex-1 border-r-2 border-gray-600 background-traslucido">
    <div class="flex flex-col items-center">
        <h2 class="text-3xl font-semibold">{titulo}</h2>
        <span class="w-3/4 mt-3 text-">{descripcion}</span>
    </div>
    <A color="#14bd30a8" hover="" texto="Comienza"></A>
</div>