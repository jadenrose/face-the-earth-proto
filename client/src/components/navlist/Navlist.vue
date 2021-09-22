<template>
    <ul class="navlist">
        <li v-for="route in store.state.routes" :key="route.id">
            <router-link
                @click="() => store.setShowMobileNav(false)"
                class="navlink"
                :to="route.path"
                >{{ route.text }}</router-link
            >
        </li>
    </ul>
</template>

<script>
import { inject } from 'vue'

export default {
    name: 'Navlist',
    setup () {
        const store = inject('store')

        return {
            store
        }
    }
}
</script>