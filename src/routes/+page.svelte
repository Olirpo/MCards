<script>
    import NoLogged from "$lib/components/No-logged.svelte";
    import Logged from "$lib/components/Logged.svelte";
    let user = {
        loggedIn : false
    }
</script>
{#if user.loggedIn}
<Logged></Logged>
{:else}
<NoLogged></NoLogged>
{/if}