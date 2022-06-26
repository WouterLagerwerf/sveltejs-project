<script>
    import Nav from "../components/Nav.svelte";
    import { member } from '../hooks/auth';
    import Home from "../components/Home.svelte";
    import AuthForm from "../components/AuthForm.svelte";

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
{#if login}
    <AuthForm on:loginEnd="{enablePage}" on:log= {toggleLogin}/>
{:else if togglePage}
    <Home />
{/if}
