<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { RouterLink } from "vue-router"
import { gsap } from "gsap"

const rootEl = ref<HTMLElement | null>(null)
const imageEl = ref<HTMLImageElement | null>(null)
const words = ["Un", "box", "sécurisé,", "disponible", "tout", "de", "suite."]

let ctx: gsap.Context | undefined
let onImageLoad: (() => void) | undefined

function revealImage(prefersReducedMotion: boolean) {
  if (!imageEl.value) return
  if (prefersReducedMotion) {
    gsap.set(imageEl.value, { autoAlpha: 1, scale: 1 })
    return
  }
  gsap.to(imageEl.value, { autoAlpha: 1, scale: 1, duration: 1.4, ease: "power2.out" })
}

onMounted(async () => {
  if (!rootEl.value) return
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // Reveal the background photo only once it's actually decoded — avoids a hard "pop"
  // once the network finishes loading it, independent of the text animation timing.
  onImageLoad = () => revealImage(prefersReducedMotion)
  if (imageEl.value?.complete) {
    onImageLoad()
  } else {
    imageEl.value?.addEventListener("load", onImageLoad, { once: true })
  }

  // Wait for the display font so the word spans don't reflow (and visibly jump)
  // mid-animation when it swaps in — caps the wait so a slow font never blocks the hero.
  try {
    await Promise.race([document.fonts?.ready, new Promise((resolve) => setTimeout(resolve, 300))])
  } catch {
    // ignore — proceed with whatever font is currently active
  }

  if (!rootEl.value) return

  ctx = gsap.context(() => {
    const wordEls = rootEl.value!.querySelectorAll<HTMLElement>("[data-word]")
    const restEls = rootEl.value!.querySelectorAll<HTMLElement>("[data-fade]")

    if (prefersReducedMotion) {
      gsap.set([wordEls, restEls], { autoAlpha: 1, y: 0 })
      return
    }

    gsap.set(wordEls, { autoAlpha: 0, y: "0.4em" })
    gsap.set(restEls, { autoAlpha: 0, y: 12 })

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    tl.to(wordEls, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.05 })
    tl.to(restEls, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 }, "-=0.4")
  }, rootEl.value)
})

onUnmounted(() => {
  ctx?.revert()
  if (onImageLoad) imageEl.value?.removeEventListener("load", onImageLoad)
})
</script>

<template>
  <section ref="rootEl" class="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 pt-24">
    <div class="absolute inset-0 -z-10" aria-hidden="true">
      <img
        ref="imageEl"
        src="/images/hero-storage.jpg"
        alt=""
        class="size-full scale-105 object-cover opacity-0"
        fetchpriority="high"
        width="1869"
        height="1920"
      />
      <div class="absolute inset-0 bg-primary/75"></div>
    </div>

    <div class="mx-auto max-w-3xl text-center">
      <p data-fade class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">N°1 du stockage en Sarthe</p>

      <h1 class="mt-6 overflow-hidden text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.05] tracking-tight text-white">
        <span v-for="(word, i) in words" :key="i" class="inline-block">
          <span data-word class="inline-block">{{ word }}</span>
          <span v-if="i < words.length - 1">&nbsp;</span>
        </span>
      </h1>

      <p data-fade class="mx-auto mt-6 max-w-xl text-lg text-white/75">
        3 centres à Ruaudin, Coulaines et Saint-Mars-la-Brière. Sans engagement, dès 29&nbsp;€/mois.
      </p>

      <div data-fade class="mt-10">
        <RouterLink
          to="/particuliers"
          class="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white transition-colors hover:bg-accent-light"
        >
          Voir les tarifs
        </RouterLink>
      </div>
    </div>
  </section>
</template>
