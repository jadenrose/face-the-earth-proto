<template>
    <header class="header">
        <Navbar />
    </header>
</template>

<script>
import Navbar from '../navbar/Navbar.vue'

export default {
    name: 'Header',
    components: {
        Navbar
    },
    setup () {
        const smallScreen = false
        const showMobileMenu = false

        return {
            smallScreen,
            showMobileMenu,
        }
    }
}
</script>

<style>
@import "./header.css";
</style>