<script>
    import NoLogged from "$lib/No-logged.svelte";
    import Logged from "$lib/Logged.svelte";
    let user = {
        loggedIn : true
    }
</script>
{#if user.loggedIn}
<Logged></Logged>
{:else}
<NoLogged></NoLogged>
{/if}