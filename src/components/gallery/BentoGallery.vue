<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ShieldCheck, Car, Building2, Thermometer, HandHelping, Calendar } from "lucide-vue-next"
import SecureBoxMotif from "@/components/illustrations/SecureBoxMotif.vue"

gsap.registerPlugin(ScrollTrigger)

const tiles = [
  { icon: ShieldCheck, label: "Accès sécurisé 24h/24" },
  { icon: Car, label: "Accès direct en voiture" },
  { icon: Building2, label: "Solutions professionnelles" },
  { icon: Thermometer, label: "Box isolés et propres" },
  { icon: HandHelping, label: "Aide au déménagement" },
  { icon: Calendar, label: "Paiement simple et flexible" },
]

const rootEl = ref<HTMLElement | null>(null)
let ctx: gsap.Context | undefined

onMounted(() => {
  if (!rootEl.value) return
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  ctx = gsap.context(() => {
    const items = gsap.utils.toArray<HTMLElement>("[data-bento-tile]", rootEl.value!)

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 })
      return
    }

    gsap.set(items, { opacity: 0, y: 24 })
    ScrollTrigger.create({
      trigger: rootEl.value,
      start: "top 75%",
      once: true,
      onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power2.out" }),
    })
  }, rootEl.value)
})

onUnmounted(() => ctx?.revert())
</script>

<template>
  <section ref="rootEl" class="mx-auto max-w-6xl px-6 py-20 sm:py-28">
    <div class="mx-auto mb-12 max-w-2xl text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Pourquoi Le Mans Box</p>
      <h2 class="mt-4 text-3xl font-semibold text-primary sm:text-4xl">Tout ce qu'il faut savoir en un coup d'œil</h2>
    </div>

    <div class="grid grid-cols-2 gap-4 [grid-auto-flow:dense] sm:auto-rows-[150px] sm:grid-cols-4">
      <div
        data-bento-tile
        class="relative col-span-2 row-span-2 flex flex-col justify-end overflow-hidden rounded-3xl bg-primary p-6 text-white"
      >
        <SecureBoxMotif
          color="#f6f3ec"
          :opacity="0.14"
          class="pointer-events-none absolute -right-8 -top-8 w-48 rotate-6"
          aria-hidden="true"
        />
        <p class="relative text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Sécurité</p>
        <h3 class="relative mt-2 text-2xl font-semibold sm:text-3xl">Vos affaires, protégées jour et nuit</h3>
        <p class="relative mt-2 text-sm text-white/70">Vidéosurveillance, contrôle d'accès et alarmes sur nos 3 centres.</p>
      </div>

      <div
        v-for="tile in tiles.slice(0, 4)"
        :key="tile.label"
        data-bento-tile
        class="flex flex-col items-center justify-center gap-2 rounded-2xl border border-primary/10 bg-white p-4 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="flex size-10 items-center justify-center rounded-full bg-accent/10">
          <component :is="tile.icon" class="size-5 text-accent" aria-hidden="true" />
        </div>
        <p class="text-xs font-medium text-primary">{{ tile.label }}</p>
      </div>

      <div
        data-bento-tile
        class="flex flex-col items-center justify-center gap-1 rounded-2xl bg-accent p-4 text-center text-white"
      >
        <p class="text-3xl font-semibold">29&nbsp;€</p>
        <p class="text-xs text-white/85">à partir de, par mois</p>
      </div>

      <div
        v-for="tile in tiles.slice(4)"
        :key="tile.label"
        data-bento-tile
        class="flex flex-col items-center justify-center gap-2 rounded-2xl border border-primary/10 bg-white p-4 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="flex size-10 items-center justify-center rounded-full bg-accent/10">
          <component :is="tile.icon" class="size-5 text-accent" aria-hidden="true" />
        </div>
        <p class="text-xs font-medium text-primary">{{ tile.label }}</p>
      </div>

      <div
        data-bento-tile
        class="flex flex-col items-center justify-center gap-1 rounded-2xl border border-primary/10 bg-white p-4 text-center"
      >
        <p class="text-3xl font-semibold text-primary">3</p>
        <p class="text-xs text-text/60">centres en Sarthe</p>
      </div>
    </div>
  </section>
</template>
