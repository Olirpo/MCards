<script>
    export let texto = 'Botón default';
    export let color = '';
    export let click = ()=>{};
</script>
<button style={'background-color: ' + color} on:click={click}>{texto}</button>
<style>
      button{
        cursor: pointer;
        color: white;
        width: 225px;
        height: 50px;
        border: 2px rgb(165, 165, 165) solid;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: large;
        font-weight: 600;
    }
</style>