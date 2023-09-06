<script>
    const scrollToCategoria = () => {
        const categoriaDestino = document.querySelector('section');
        if(categoriaDestino){
            categoriaDestino.scrollIntoView({ behavior: "smooth" });
        }
        
    }
    import Card from '$lib/present-card.svelte'
    import Button from '$lib/button.svelte'
</script>  
<main>
    <a href="./">
        Inicia Sesión
    </a>
    <div>
        <h1>MCards</h1>
        <span>Desarrolla tu <strong>consciencia</strong> musical para ser mejor musico. <br> <strong>Oye</strong> y <strong>crea</strong> al siguiente nivel.</span>
        <div class="buttons">
            <Button click={scrollToCategoria} texto="Conoce más" color=#3e007183></Button>
            <Button texto="Registrarse" color=#aa225683></Button>
          </div>
    </div>
</main>
<section>
    <div class="carousel">
        <Card></Card>
        <Card></Card>
    </div>
    <Button texto="Comienza Ahora" color="#14bd30a8"></Button>
</section>
<style >
    @import '../styles/landing.css';
</style>