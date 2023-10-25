<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import Login from '$lib/components/Login.svelte'
    import Header from '$lib/components/Header.svelte'
</script>
<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <Header texto="Registrate" url="/register"></Header>
    <div class="w-full flex justify-center">
            <Login></Login>
    </div>
    
</main>

