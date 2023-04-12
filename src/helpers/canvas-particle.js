export class Particle {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.size = Math.random() * 15 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = color
        // this.color = 'hsl(' + hue + ', 100%, 50%)'
        // this.shadowOffsetX = 0
        // this.shadowOffsetY = 0
        // this.shadowBlur = 0
        // this.shadowColor = colors[colorPosition + 1]
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
        // this.x += this.speedX / 1.5
        // this.y += this.speedY / 1.5
        if (this.size > 0.2) this.size -= 0.1
        // if (this.shadowBlur < 3) this.shadowBlur += 1
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        // ctx.shadowOffsetX = this.shadowOffsetX
        // ctx.shadowOffsetY = this.shadowOffsetY
        // ctx.shadowBlur = this.shadowBlur
        // ctx.shadowColor = this.shadowColor
    }
}

export const handleParticles = (particlesArray, ctx) => {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw(ctx)
        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x
            const dy = particlesArray[i].y - particlesArray[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 100) {
                ctx.beginPath()
                ctx.strokeStyle = particlesArray[i].color
                ctx.lineWidth = 0.2
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                ctx.stroke()
                ctx.closePath()
            }
        }
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1)
            i--
        }
    }
}
