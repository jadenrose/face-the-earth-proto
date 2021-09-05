<template>
    <nav class="mobile-nav">
        <div class="container">
            <CloseBtn />
            <Navlist />
            <SocialLinks />
        </div>
    </nav>
</template>

<script>
import CloseBtn from '../elements/closeBtn/CloseBtn.vue'
import Navlist from '../navlist/Navlist.vue'
import SocialLinks from '../socialLinks/SocialLinks.vue'

export default {
    name: 'MobileNav',
    components: {
        Navlist,
        SocialLinks,
        CloseBtn,
    }
}
</script>

<style>
@import "./nav.css";
</style>