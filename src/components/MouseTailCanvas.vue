<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import {lightPalette, darkPalette} from '@/constants/colorPalettes'
import {circularIndex} from '@/helpers/circularIndex'
import {Particle, handleParticles} from '@/helpers/canvas-particle'
import {mapState} from 'vuex'

export default {
  methods: {
    handleResize(canvas) {
      window.addEventListener('resize', function () {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      })
    },

    handleMouseMove(canvas, particlesArray) {
      canvas.addEventListener('mousemove', (event) => {
        const getIndex = circularIndex(this.colors)

        for (let i = 0; i < 10; i++) {
          particlesArray.push(
              new Particle(event.x, event.y, this.colors[getIndex()]),
          )
        }
      })
    },
  },
  computed: {
    colors() {
      return this.theme === 'light' ? darkPalette : lightPalette
    },
    ...mapState({
                  theme: state => state.theme.theme,
                }),
  },
  mounted() {
    const canvas = this.$refs.canvas
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particlesArray = []
    // let hue = 0

    this.handleResize(canvas)
    this.handleMouseMove(canvas, particlesArray)


    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // ctx.fillStyle = 'rgba(0,0,0,0.02)';
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      handleParticles(particlesArray, ctx)
      // hue += 2

      requestAnimationFrame(animate)
    }

    animate()
  },
    beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
    this.$refs.canvas.removeEventListener('mousemove', this.handleMouseMove)
  },
}
</script>

<style scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
