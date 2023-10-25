
<script>
    export let texto = 'Botón default';
    export let color = '';
    export let click = ()=>{};
</script>
<input class="bg-transparente " type="text" placeholder={texto} style={'background-color: ' + color} on:click={click}>
