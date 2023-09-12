<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Button from '$lib/button.svelte'
    import A from '$lib/button-a.svelte'
</script>
<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <a data-sveltekit-reload href="/login" class="text-white no-underline">
        Inicia Sesión
    </a>
    <div class="w-1/2">
        <h1 class="flex justify-right mx-0 mt-14 mb-10 font-black italic text-5xl">MCards</h1>
        <span class="text-right italic text-xl font-normal">Registrate <strong class="font">ahora.</strong><br> Es <strong>gratis.</strong>
        <div class="w-full flex justify-around mx-0 my-5">
            <Button texto="Conoce más" color=#3e007183></Button>
            <A texto="Registrarse" color=#aa225683 href="/register"></A>
          </div>
    </div>
</main>

<style>
    strong{
        font-style: normal;
        font-weight: 600;
    }
    @import '../styles/landing.css';
</style>
