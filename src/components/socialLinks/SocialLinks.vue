<template>
    <ul class="social-links">
        <li
            class="social-list-item"
            v-for="link in store.state.socials"
            :key="link.id"
        >
            <a :href="link.url" target="_blank">
                <i :class="`fab ${link.className}`"></i>
            </a>
        </li>
    </ul>
</template>

<script>
import { inject } from 'vue'

export default {
    name: 'SocialLinks',
    setup () {
        const store = inject('store')

        return {
            store
        }
    }
}
</script>

<style>
</style>