<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Button from '$lib/components/button.svelte'
    import A from '$lib/components/button-a.svelte'
    import Input from '$lib/components/Input.svelte'
    import Register from '$lib/components/Register.svelte'
</script>
<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <header class="w-full flex justify-between">
        <h1 class="flex justify-right mb-5 font-black italic text-5xl">MCards</h1>
        <a data-sveltekit-reload href="/login" class="text-white no-underline">
        Inicia Sesión
        </a>
    </header>
    <div class="w-full flex justify-center">
            <Register></Register>
    </div>
</main>

