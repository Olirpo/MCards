<script>
    export let texto = 'Botón default';
    export let color = '';
    export let href = '/';
    export let hover = '';
</script>
<a style={'background-color: ' + color} class="flex justify-center items-center text-white h-12 w-56 cursor-pointer rounded-lg border-2 border-slate-300 border-solid font-poppins text-lg font-semibold text-center non-italic" data-sveltekit-reload href={href}>{texto}</a>
