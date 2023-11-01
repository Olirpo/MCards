<script>
    /** @type {import('./$types').PageData} */
    import Button from '$lib/components/button.svelte'
    import A from '$lib/components/button-a.svelte'
    import Input from '$lib/components/Input.svelte'
    import Register from '$lib/components/Register.svelte'
    import Header from '$lib/components/Header.svelte'
</script>
<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <Header texto="Inicia Sesión" url="/login"></Header>
    <div class="w-full flex justify-center">
            <Register></Register>
    </div>
</main>

