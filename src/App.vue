<template>
    <main class="main">
        <theme-switcher/>
        <h1 class="title">
            Hello
            <br/>
            World!
        </h1>
        <trail-on-canvas/>
    </main>
</template>

<script>
import TrailOnCanvas from '@/components/MouseTailCanvas.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import {DEFAULT_THEME} from '@/constants'

export default {
    name: 'App',
    components: { ThemeSwitcher, TrailOnCanvas },
    mounted() {
        // check if the theme was selected by the user
        const storedTheme = localStorage.getItem('theme')
        storedTheme
            ? document.body.setAttribute('data-theme', storedTheme)
            : document.body.setAttribute('data-theme', DEFAULT_THEME)
    },
}
</script>

<style>
#app {
    font-family: var(--font-tilt-warp);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: var(--gradient-color-bg);
    width: 100vw;
    height: 100vh;
}
.main {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
.title {
    font-family: var(--font-tilt-prism);
    font-weight: bold;
    font-size: 280px;
    position: relative;
    background-image: var(--gradient-h1-bg);
    color: #fff;
    animation: gradientAnimation 10s linear infinite;
    /* Set the background-clip property to text to clip the gradient to the text */
    background-clip: text;
    /* Set the text-fill-color property to transparent to make the text transparent */
    -webkit-text-fill-color: transparent;
    background-size: 20%;
    background-repeat: repeat;
    cursor: default;

    flex: 1;
    display: flex;
    align-items: center;
}

@keyframes gradientAnimation {
    50% {
        background-size: 10%;
    }
}

@media screen and (max-width: 1200px) {
    .title {
        font-size: 220px;
    }
}

@media screen and (max-width: 900px) {
    .title {
        font-size: 180px;
    }
}

@media screen and (max-width: 700px) {
    .title {
        font-size: 130px;
    }
}

@media screen and (max-width: 700px) {
    .title {
        font-size: 90px;
    }
}

</style>
