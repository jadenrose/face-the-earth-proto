<template>
    <main class="Watch container">
        <YoutubeEmbed videoId="RNi2PqkGY9g" />
    </main>
</template>

<script>
import YoutubeEmbed from '../../components/elements/youtubeEmbed/YoutubeEmbed.vue'

export default {
    name: 'Watch',
    components: {
        YoutubeEmbed,
    }
}
</script>

<style>
</style>