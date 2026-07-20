<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { RouterLink } from "vue-router"
import { gsap } from "gsap"
import SecureBoxMotif from "@/components/illustrations/SecureBoxMotif.vue"

const rootEl = ref<HTMLElement | null>(null)
const words = ["Un", "box", "sécurisé,", "disponible", "tout", "de", "suite."]

let ctx: gsap.Context | undefined

onMounted(() => {
  if (!rootEl.value) return
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  ctx = gsap.context(() => {
    const wordEls = rootEl.value!.querySelectorAll<HTMLElement>("[data-word]")
    const restEls = rootEl.value!.querySelectorAll<HTMLElement>("[data-fade]")

    if (prefersReducedMotion) {
      gsap.set([wordEls, restEls], { opacity: 1, y: 0 })
      return
    }

    gsap.set(wordEls, { opacity: 0, y: "0.4em" })
    gsap.set(restEls, { opacity: 0, y: 12 })

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.to(wordEls, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05 })
    tl.to(restEls, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
  }, rootEl.value)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <section ref="rootEl" class="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 pt-24">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <SecureBoxMotif color="#12233f" :opacity="0.05" class="absolute -left-16 top-[12%] w-64 -rotate-6 sm:w-80" />
      <SecureBoxMotif color="#12233f" :opacity="0.05" class="absolute -right-10 bottom-[8%] w-56 rotate-12 sm:w-72" />
      <SecureBoxMotif color="#e8622c" :opacity="0.07" class="absolute right-[8%] top-[6%] w-32 rotate-3 sm:w-40" />
    </div>

    <div class="mx-auto max-w-3xl text-center">
      <p data-fade class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">N°1 du stockage en Sarthe</p>

      <h1 class="mt-6 overflow-hidden text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.05] tracking-tight text-primary">
        <span v-for="(word, i) in words" :key="i" class="inline-block">
          <span data-word class="inline-block">{{ word }}</span>
          <span v-if="i < words.length - 1">&nbsp;</span>
        </span>
      </h1>

      <p data-fade class="mx-auto mt-6 max-w-xl text-lg text-text/70">
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
