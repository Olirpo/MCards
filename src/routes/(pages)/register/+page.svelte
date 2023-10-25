<script>
<<<<<<< HEAD
    /** @type {import('./$types').PageData} */
    export let data;
    import Button from '$lib/components/button.svelte'
    import A from '$lib/components/button-a.svelte'
    import Input from '$lib/components/Input.svelte'
    import Register from '$lib/components/Register.svelte'
=======
    /** @type {import('./$types').PageData} **/
    import Register from '$lib/Register.svelte'
    import Header from '$/lib/Header.svelte';
>>>>>>> 111d8e660aeecc5c0951f1bbfac7e51169e4345a
</script>
<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <Header texto="Inicia Sesión" url="/login"></Header>
    <div class="w-full flex justify-center">
            <Register></Register>
    </div>
</main>

