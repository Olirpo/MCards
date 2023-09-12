<script>
    const scrollToCategoria = () => {
        const categoriaDestino = document.querySelector('section');
        if(categoriaDestino){
            categoriaDestino.scrollIntoView({ behavior: "smooth" });
        }
        
    }
    import Card from '$lib/present-card.svelte'
    import Button from '$lib/button.svelte'
    import A from '$lib/button-a.svelte'
</script>  

<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <a data-sveltekit-reload href="/login" class="text-white no-underline">
        Inicia Sesión
    </a>
    <div class="w-1/2">
        <h1 class="flex justify-right mx-0 mt-14 mb-10 font-black italic text-5xl">MCards</h1>
        <span class="text-right italic text-xl font-normal">Desarrolla tu <strong>consciencia</strong> musical para ser mejor musico. <br> <strong>Oye</strong> y <strong>crea</strong> al siguiente nivel.</span>
        <div class="flex justify-around mx-0 my-5">
            <Button click={scrollToCategoria} texto="Conoce más" color=#3e007183></Button>
            <A texto="Registrarse" color=#aa225683 href="/register"></A>
          </div>
    </div>
</main>
<section class="flex flex-col justify-center items-center w-full h-screen bg-no-repeat bg-segundo-fondo bg-cover bg-right-top box-border font-poppins">
    <div class="flex justify-around w-full h-4/5">
        <Card></Card>
        <Card></Card>
    </div>
    <A texto="Comienza Ahora" color="#14bd30a8" href="/register"></A>
</section>
<style>
    strong{
        font-style: normal;
        font-weight: 600;
    }
    @import '../styles/landing.css';
</style>