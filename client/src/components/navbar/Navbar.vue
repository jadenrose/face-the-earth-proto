<template>
    <div class="navbar pv-small">
        <div class="container">
            <Logo />
            <Nav />
        </div>
    </div>
</template>

<script>
import Logo from '../elements/logo/Logo.vue'
import Nav from '../nav/Nav.vue'

export default {
    name: 'Navbar',
    components: {
        Logo,
        Nav,
    }
}
</script>

<style>
@import "./navbar.css";
</style>