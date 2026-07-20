<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const imageTiles = [
  { src: "/images/acces-securise.png", label: "Accès sécurisé 24h/24" },
  { src: "/images/drive-acces.png", label: "Accès direct en voiture" },
  { src: "/images/solution-pro.png", label: "Solutions professionnelles" },
  { src: "/images/box-isoles.png", label: "Box isolés et propres" },
  { src: "/images/aide-demenagement.png", label: "Aide au déménagement" },
  { src: "/images/paiement-utilisation.png", label: "Paiement simple et flexible" },
]

const wrapperEl = ref<HTMLElement | null>(null)
const heroEl = ref<HTMLElement | null>(null)
const heroContentEl = ref<HTMLElement | null>(null)
const slotEl = ref<HTMLElement | null>(null)

let ctx: gsap.Context | undefined

onMounted(() => {
  if (!wrapperEl.value || !heroEl.value || !slotEl.value || !heroContentEl.value) return

  const isMobile = window.innerWidth < 768
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  ctx = gsap.context(() => {
    const wrapper = wrapperEl.value!
    const hero = heroEl.value!
    const heroContent = heroContentEl.value!
    const slot = slotEl.value!
    const tiles = gsap.utils.toArray<HTMLElement>("[data-tile]", wrapper)

    const slotRect = () => {
      const w = wrapper.getBoundingClientRect()
      const s = slot.getBoundingClientRect()
      return { top: s.top - w.top, left: s.left - w.left, width: s.width, height: s.height }
    }

    if (isMobile || prefersReducedMotion) {
      const r = slotRect()
      gsap.set(hero, { position: "absolute", top: r.top, left: r.left, width: r.width, height: r.height, borderRadius: "1rem" })
      gsap.set(heroContent, { opacity: 0 })
      gsap.set(tiles, { scale: 1, opacity: 1 })
      return
    }

    gsap.set(hero, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" })
    gsap.set(tiles, { scale: 0.75, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top top",
        end: "+=140%",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })

    tl.to(heroContent, { opacity: 0, y: -16, ease: "none" }, 0)
    tl.to(
      hero,
      {
        top: () => slotRect().top,
        left: () => slotRect().left,
        width: () => slotRect().width,
        height: () => slotRect().height,
        borderRadius: "1rem",
        ease: "none",
      },
      0
    )
    tiles.forEach((tile) => {
      tl.to(tile, { scale: 1, opacity: 1, ease: "none" }, 0)
    })
  }, wrapperEl.value)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <section ref="wrapperEl" class="relative min-h-[100svh] w-full overflow-hidden bg-primary">
    <div ref="heroEl" class="flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary">
      <svg class="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="#f6f3ec" stroke-width="1.5" fill="none" opacity="0.5">
          <path d="M60 220 L140 180 L220 220 L140 260 Z" />
          <path d="M60 220 L60 280 L140 320 L140 260 Z" />
          <path d="M220 220 L220 280 L140 320 L140 260 Z" />
          <path d="M180 140 L260 100 L340 140 L260 180 Z" />
          <path d="M180 140 L180 200 L260 240 L260 180 Z" />
          <path d="M340 140 L340 200 L260 240 L260 180 Z" />
        </g>
      </svg>
      <div ref="heroContentEl" class="relative z-10 px-6 text-center text-white">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Nos centres en un coup d'œil</p>
        <h2 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold">Simple. Sécurisé. Sarthois.</h2>
      </div>
    </div>

    <div class="relative z-10 grid grid-cols-3 gap-3 p-3 sm:gap-4 sm:p-4">
      <div
        v-for="tile in imageTiles.slice(0, 4)"
        :key="tile.label"
        data-tile
        class="neo-glass flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center"
      >
        <img :src="tile.src" :alt="tile.label" width="125" height="125" class="size-12 object-contain" loading="lazy" />
        <p class="text-xs font-medium text-white">{{ tile.label }}</p>
      </div>

      <div ref="slotEl" class="aspect-square" aria-hidden="true"></div>

      <div
        v-for="tile in imageTiles.slice(4)"
        :key="tile.label"
        data-tile
        class="neo-glass flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center"
      >
        <img :src="tile.src" :alt="tile.label" width="125" height="125" class="size-12 object-contain" loading="lazy" />
        <p class="text-xs font-medium text-white">{{ tile.label }}</p>
      </div>

      <div data-tile class="neo-glass flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl p-4 text-center">
        <p class="text-2xl font-semibold text-accent">29&nbsp;€</p>
        <p class="text-xs text-white/80">à partir de, par mois</p>
      </div>

      <div data-tile class="neo-glass flex aspect-square flex-col items-center justify-center gap-1 rounded-2xl p-4 text-center">
        <p class="text-2xl font-semibold text-accent">3</p>
        <p class="text-xs text-white/80">centres en Sarthe</p>
      </div>
    </div>
  </section>
</template>
