<script>
    import Categoria from '$lib/Categoria.svelte'
</script>  

<main class="w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border py-6">
    <header class="w-screen flex justify-between px-6">
        <h1 class="flex justify-right mx-0 font-black italic text-5xl">MCards</h1>
        <a data-sveltekit-reload href="/login" class="text-white no-underline">
            Cerrar Sesión
        </a>
    </header>
   <div class="flex justify-around mt-10" >
    <Categoria titulo="Intervalos" descripcion="Ni idea"></Categoria>
    <Categoria titulo="Notas" descripcion="Ni idea"></Categoria>
    <Categoria titulo="Acordes" descripcion="Ni idea"></Categoria>
   </div>
</main>

<style>
    @import '../styles/landing.css';
</style>