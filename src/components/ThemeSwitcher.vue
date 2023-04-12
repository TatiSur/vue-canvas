<template>
    <div class="theme-switcher" :onClick="toggleTheme">
        <img
                src="@/assets/planet-icon.svg"
                alt="planet"
                class="planet_icon"
        />
        <img
                src="@/assets/sun.svg"
                alt="sun"
                class="btn__icon sun_icon"
                :class="theme === 'dark' ? 'hidden' : 'show'"
        />
        <img
                src="@/assets/moon.svg"
                alt="moon"
                class="btn__icon moon_icon"
                :class="theme === 'light' ? 'hidden' : 'show'"
        />
    </div>

</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    computed: {
        ...mapState({
                        theme: state => state.theme.theme,
                    }),
    },
    methods: {
        ...mapActions({ setTheme: 'theme/setTheme' }),
        toggleTheme() {
            const newTheme = this.theme === 'dark' ? 'light' : 'dark'
            this.setTheme(newTheme)
        },
    },
}
</script>

<style scoped>
.theme-switcher {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    gap: 25px;
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 50px;
    cursor: pointer;
}

.planet_icon {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.btn__icon {
    transition: all ease-in-out .7s;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 15;
    transform: translate(-50%, -120%);
}

.moon_icon {
    width: 20px;
    height: 20px;
}

.sun_icon {
    width: 24px;
    height: 24px;
}

.hidden {
    opacity: 0;
    animation: hidden .5s linear;
}

.show {
    opacity: 1;
    animation: show .5s linear;
}

@keyframes hidden {
    100% {
        left: 100%;
    }
}

@keyframes show {
    0% {
        left: 0;
    }
}

.theme-switcher:hover .btn__icon {
    transform: scale(120%) translate(-50%, -100%);
}

.theme-switcher:hover .moon_icon {
    box-shadow: 0 -10px 50px 2px rgba(96, 131, 168, 1);
}

.theme-switcher:hover .sun_icon {
    box-shadow: 0 -10px 50px 11px rgba(214,165,137,1);
}
</style>
