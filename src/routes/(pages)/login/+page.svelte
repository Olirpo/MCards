<script>
    /** @type {import('./$types').PageData} */
    export let data;
<<<<<<< HEAD
    import Login from '$lib/components/Login.svelte'
=======
    import Login from '$lib/Login.svelte';
    import Header from '$lib/Header.svelte';
>>>>>>> 111d8e660aeecc5c0951f1bbfac7e51169e4345a
</script>
<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <Header texto="Registrate" url="/register"></Header>
    <div class="w-full flex justify-center">
            <Login></Login>
    </div>
    
</main>

