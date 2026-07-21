<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { ArrowRight, Truck, PackageCheck, Boxes, Home, Building2 } from "lucide-vue-next"
import HeroKinetic from "@/components/hero/HeroKinetic.vue"
import ReassuranceIconStrip from "@/components/reassurance/ReassuranceIconStrip.vue"
import BentoGallery from "@/components/gallery/BentoGallery.vue"
import SecureBoxMotif from "@/components/illustrations/SecureBoxMotif.vue"
import { complementaryServices } from "@/data/content"
import { useScrollReveal } from "@/lib/useScrollReveal"

const serviceIcons = [Truck, PackageCheck, Boxes]

const rootEl = ref<HTMLElement | null>(null)
useScrollReveal(rootEl)
</script>

<template>
  <div ref="rootEl">
    <HeroKinetic />
    <ReassuranceIconStrip />

    <section class="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div data-reveal-group class="grid gap-6 sm:grid-cols-2">
        <RouterLink
          to="/particuliers"
          data-reveal-item
          class="card-surface-dark group flex flex-col justify-between rounded-3xl p-8 text-white transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:p-10"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-full bg-white/10">
              <Home class="size-5 text-accent" aria-hidden="true" />
            </div>
            <h2 class="mt-4 text-2xl font-semibold sm:text-3xl">Particuliers</h2>
            <p class="mt-3 text-white/70">
              Déménagement, rénovation, stockage saisonnier ou simplement plus de place chez vous : un box adapté à chaque besoin.
            </p>
          </div>
          <span class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Voir les tarifs
            <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </RouterLink>

        <RouterLink
          to="/professionnels"
          data-reveal-item
          class="card-surface card-surface-interactive group flex flex-col justify-between rounded-3xl p-8 sm:p-10"
        >
          <div>
            <div class="flex size-11 items-center justify-center rounded-full bg-accent/10">
              <Building2 class="size-5 text-accent" aria-hidden="true" />
            </div>
            <h2 class="mt-4 text-2xl font-semibold text-primary sm:text-3xl">Professionnels</h2>
            <p class="mt-3 text-text/60">Stock, archives, matériel ou domiciliation : des locaux de 18 à 100 m² avec accès poids lourds.</p>
          </div>
          <span class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Voir les tarifs
            <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </RouterLink>
      </div>
    </section>

    <BentoGallery />

    <section class="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <h2 class="text-3xl font-semibold text-primary sm:text-4xl">Le Mans Box vous accompagne</h2>
      <div data-reveal-group class="mt-10 grid gap-6 sm:grid-cols-3">
        <div
          v-for="(service, i) in complementaryServices"
          :key="service.title"
          data-reveal-item
          class="card-surface card-surface-interactive rounded-2xl p-6"
        >
          <div class="flex size-10 items-center justify-center rounded-full bg-accent/10">
            <component :is="serviceIcons[i]" class="size-5 text-accent" aria-hidden="true" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-primary">{{ service.title }}</h3>
          <p class="mt-2 text-sm text-text/60">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-primary px-6 py-20 text-center text-white sm:py-28">
      <SecureBoxMotif color="#f6f3ec" :opacity="0.08" class="pointer-events-none absolute -left-16 top-1/2 w-72 -translate-y-1/2 -rotate-6" aria-hidden="true" />
      <SecureBoxMotif color="#e8622c" :opacity="0.1" class="pointer-events-none absolute -right-10 bottom-0 w-48 rotate-12" aria-hidden="true" />
      <h2 class="relative text-3xl font-semibold sm:text-4xl">Une question, un devis ?</h2>
      <p class="relative mx-auto mt-4 max-w-xl text-white/70">Contactez-nous pour un devis gratuit et personnalisé, sans engagement.</p>
      <RouterLink
        to="/contact"
        class="relative mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white shadow-[0_10px_28px_-10px_rgba(232,98,44,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_18px_36px_-12px_rgba(232,98,44,0.7)]"
      >
        Nous contacter
      </RouterLink>
    </section>
  </div>
</template>
