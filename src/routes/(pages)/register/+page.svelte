<script>
    /** @type {import('./$types').PageData} **/
    import Register from '$lib/Register.svelte'
    import Header from '$/lib/Header.svelte';
</script>
<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <Header texto="Inicia Sesión" url="/login"></Header>
    <div class="w-full flex justify-center">
            <Register></Register>
    </div>
</main>

