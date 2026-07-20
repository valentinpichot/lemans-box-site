<script setup lang="ts">
import { RouterLink } from "vue-router"
import { ArrowRight } from "lucide-vue-next"
import HeroKinetic from "@/components/hero/HeroKinetic.vue"
import ReassuranceIconStrip from "@/components/reassurance/ReassuranceIconStrip.vue"
import ZoomParallaxGallery from "@/components/gallery/ZoomParallaxGallery.vue"
import { complementaryServices } from "@/data/content"
</script>

<template>
  <HeroKinetic />
  <ReassuranceIconStrip />

  <section class="mx-auto max-w-6xl px-6 py-20 sm:py-28">
    <div class="grid gap-6 sm:grid-cols-2">
      <RouterLink
        to="/particuliers"
        class="group flex flex-col justify-between rounded-3xl bg-primary p-8 text-white transition-transform hover:-translate-y-1 sm:p-10"
      >
        <div>
          <h2 class="text-2xl font-semibold sm:text-3xl">Particuliers</h2>
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
        class="group flex flex-col justify-between rounded-3xl border border-primary/10 bg-white p-8 transition-transform hover:-translate-y-1 sm:p-10"
      >
        <div>
          <h2 class="text-2xl font-semibold text-primary sm:text-3xl">Professionnels</h2>
          <p class="mt-3 text-text/60">Stock, archives, matériel ou domiciliation : des locaux de 18 à 100 m² avec accès poids lourds.</p>
        </div>
        <span class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Voir les tarifs
          <ArrowRight class="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </RouterLink>
    </div>
  </section>

  <ZoomParallaxGallery />

  <section class="mx-auto max-w-6xl px-6 py-20 sm:py-28">
    <h2 class="text-3xl font-semibold text-primary sm:text-4xl">Le Mans Box vous accompagne</h2>
    <div class="mt-10 grid gap-6 sm:grid-cols-3">
      <div v-for="service in complementaryServices" :key="service.title" class="rounded-2xl border border-primary/10 bg-white p-6">
        <h3 class="text-base font-semibold text-primary">{{ service.title }}</h3>
        <p class="mt-2 text-sm text-text/60">{{ service.description }}</p>
      </div>
    </div>
  </section>

  <section class="bg-primary px-6 py-20 text-center text-white sm:py-28">
    <h2 class="text-3xl font-semibold sm:text-4xl">Une question, un devis ?</h2>
    <p class="mx-auto mt-4 max-w-xl text-white/70">Contactez-nous pour un devis gratuit et personnalisé, sans engagement.</p>
    <RouterLink
      to="/contact"
      class="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-semibold text-white transition-colors hover:bg-accent-light"
    >
      Nous contacter
    </RouterLink>
  </section>
</template>
