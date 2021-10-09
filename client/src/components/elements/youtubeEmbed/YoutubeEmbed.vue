<template>
    <div class="YoutubeEmbed">
        <iframe
            :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    name: 'YoutubeEmbed',
    props: {
        videoId: String,
    },
}
</script>

<style>
@import "./youtubeEmbed.css";
</style>