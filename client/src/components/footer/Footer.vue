<template>
    <footer class="pv-med">
        <div class="container">
            <Logo />
        </div>
    </footer>
</template>

<script>
import Logo from '../elements/logo/Logo.vue'

export default {
    name: 'Header',
    components: {
        Logo
    }
}
</script>

<style>
@import "./footer.css";
</style>