<script>
    import Nav from "../../components/Nav.svelte";
    import { member } from '../../hooks/auth';
    import Inspect from "../../components/products/Inspect.svelte";
    import AuthForm from "../../components/AuthForm.svelte";
    import { page } from '$app/stores';

    const identifier = $page.params.identifier
    let logged_member;
    let login = false;
    let togglePage = true;
    const toggleLogin = () => { 
        login = login !== true;
        if (login == true) {
            togglePage = false;
        }
    }
    
    const enablePage = () => {
        togglePage = true;
    }

    member.subscribe(value => {
        logged_member = value;
    });
</script>

<Nav on:toggleLogin ={toggleLogin}/>

<div class="mx-auto my-4 max-w-7xl">
    {#if login}
        <AuthForm on:loginEnd="{enablePage}" on:log= {toggleLogin}/>
    {:else if togglePage}
        <Inspect identifier={identifier}/>
    {/if}
</div>

