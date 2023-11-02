<script lang="ts">
    import { supabaseClient } from "$lib/supabase.js";

    /* 
    Esta funcion te va a llevar a google para que elijas la cuenta y te va a retornar al home con los siguientes query params 
    En el +page.server.[ts,js] vas a poder trabajar con los query params y obtener los datos del usuario usando el access_token
    Como ejemplo podes probar el jwt.io para ver los datos de la cuenta del token


    - access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6ImY4b2w0aFJnNldRbEF4ZlAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjk4ODgzOTgwLCJpYXQiOjE2OTg4ODAzODAsImlzcyI6Imh0dHBzOi8va3FnbnVhbnNzbHd1dGxlbXN6dWUuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjE5YzE2YTFiLTBhOTQtNDNhMS04MjA5LTg1YTgyOWNhMGNiNCIsImVtYWlsIjoiY2FtaWxvZGlwYW9sbzEwQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZ29vZ2xlIiwicHJvdmlkZXJzIjpbImdvb2dsZSJdfSwidXNlcl9tZXRhZGF0YSI6eyJhdmF0YXJfdXJsIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTG9kYkptaDBQcUh5ZnpfbEVrYUlEMGxkU0kwcWRpeGhwbG9pRmpFc3J6PXM5Ni1jIiwiZW1haWwiOiJjYW1pbG9kaXBhb2xvMTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6ImNhbWlsbyBkaSBwYW9sbyIsImlzcyI6Imh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbSIsIm5hbWUiOiJjYW1pbG8gZGkgcGFvbG8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTG9kYkptaDBQcUh5ZnpfbEVrYUlEMGxkU0kwcWRpeGhwbG9pRmpFc3J6PXM5Ni1jIiwicHJvdmlkZXJfaWQiOiIxMDg4NjAwMzc5OTI1Mjg2OTc4MDYiLCJzdWIiOiIxMDg4NjAwMzc5OTI1Mjg2OTc4MDYifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvYXV0aCIsInRpbWVzdGFtcCI6MTY5ODg4MDM4MH1dLCJzZXNzaW9uX2lkIjoiNTQwMGZiNmEtYmI1Zi00N2I3LWEzODUtYWQ3YWNiMzUwMGUxIn0.QJoXffH2xWu8nDcCVB6MbXOvVM7HKCDTByCDw2ceEtY
    - expires_at=1698883980
    - expires_in=3600
    - provider_token=ya29.a0AfB_byCKIKs3NhksWSqJZKGBQyTgP1rU8iUes5T7M25VYQOJgAkoQ28SN5vVB4xDW14m9CKRCrNAOUzzB6IoWFo3lVmQViSdrkKHSi2wu-qU4KTpGInOWb3LhBAxt-mTA0eCtqjxIrWEtHoVWP2ZZffavD7PsTo1mqBVaCgYKASwSARISFQGOcNnCLmqRDUGh7n8NUWsXcKETVQ0171
    - refresh_token=4sAt4MXnmSUB1UVIEH6Hog&token_type=bearer
    */
    const loginWithGoogle = () => {
        supabaseClient.auth.signInWithOAuth({
            provider: "google",
        });
    };
</script>

<main
    class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6"
>
    <!--
    <Header texto="Registrate" url="/register" />
    <div class="w-full flex justify-center">
        <form class="socials" method="POST" use:enhance={submitSocialLogin}>
            <button formaction="?/login&provider=github" class="btn btn-ghost"
                >Github</button
            >
            <button formaction="?/login&provider=discord" class="btn btn-ghost"
                >Discord</button
            >
            <button formaction="?/login&provider=google" class="btn btn-ghost"
                >Google</button
            >
        </form>
    </div>
    -->

    <button class="btn-google" on:click={loginWithGoogle}>
        <img src="/images/google.png" alt="logo de google" />
        Iniciar sesion
    </button>
</main>

<style>
    .btn-google {
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        outline: none;
        border: 1px solid white;
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: 0.3s;
    }

    .btn-google:hover {
        transform: translateY(-0.2rem);
        background-color: rgba(0, 0, 0, 0.5);
    }

    .btn-google > img {
        width: 2rem;
        height: 2rem;
    }
</style>
