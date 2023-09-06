<script>
    export let title = 'Que buscamos?';
    export let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,600;1,400;1,900&display=swap');
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: rgba(97, 0, 161, 0.301);;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        color: white;
        height: 65vh;
        width: 30vw;
        border: 2px white solid;
        border-radius: 1.5rem;
        box-sizing: border-box;
        padding: 0 3rem 1rem;
    }
    h3{
        font-size: 2rem;
        text-align: center
        ;    }
</style>

<div>
    <h3>{title}</h3>
    <p>{content}</p>
</div>

