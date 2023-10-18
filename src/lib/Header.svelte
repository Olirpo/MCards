<script>
    export let texto = 'Inicia Sesión';
    export let url = '/';
</script>
<header class="w-screen flex justify-between px-6">
    <a href="/" class="flex justify-right mx-0 font-black text-5xl">MCards</a>
    <a data-sveltekit-reload href={url} class="text-white no-underline">
        {texto}
    </a>
</header>