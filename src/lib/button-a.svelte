<script>
    export let texto = 'Botón default';
    export let color = '';
    export let href = '/';
</script>
<a style={'background-color: ' + color} href={href}>{texto}</a>
<style>
      a{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: white;
        width: 225px;
        height: 50px;
        border: 2px rgb(165, 165, 165) solid;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: large;
        font-weight: 600;
        text-align: center;
    }
</style>