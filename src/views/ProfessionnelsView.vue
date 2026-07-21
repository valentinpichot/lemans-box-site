<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { Check } from "lucide-vue-next"
import { proRates, proEquipment, proServices, company } from "@/data/content"
import SecureBoxMotif from "@/components/illustrations/SecureBoxMotif.vue"
import { useScrollReveal } from "@/lib/useScrollReveal"

const rootEl = ref<HTMLElement | null>(null)
useScrollReveal(rootEl)
</script>

<template>
  <div ref="rootEl">
    <section class="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
      <SecureBoxMotif color="#12233f" :opacity="0.04" class="pointer-events-none absolute -right-16 -top-10 w-72 rotate-6" aria-hidden="true" />
      <div class="relative mx-auto max-w-3xl text-center">
        <SecureBoxMotif color="#e8622c" class="mx-auto mb-4 w-10" aria-hidden="true" />
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Professionnels</p>
        <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">Des locaux adaptés à votre activité</h1>
        <p class="mx-auto mt-4 max-w-xl text-text/60">
          Stock, archives, matériel, e-commerce ou domiciliation : nos espaces de 18 à 100&nbsp;m² s'adaptent à l'évolution de votre
          entreprise.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 pb-16">
      <div data-reveal-group class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="rate in proRates"
          :key="rate.surface"
          data-reveal-item
          class="card-surface card-surface-interactive group rounded-2xl p-6"
        >
          <div class="flex items-baseline justify-between">
            <p class="text-lg font-semibold text-primary">{{ rate.surface }}</p>
            <p class="text-sm text-text/50">{{ rate.volume }}</p>
          </div>
          <p class="mt-3 text-3xl font-semibold text-primary transition-colors group-hover:text-accent">
            {{ rate.price }}&nbsp;€ <span class="text-sm font-normal text-text/50">HT / mois</span>
          </p>
        </div>
      </div>
      <p class="mt-6 text-center text-xs text-text/50">Prix hors frais d'entrée (68&nbsp;€, payés une seule fois).</p>
    </section>

    <section class="mx-auto max-w-5xl px-6 pb-16">
      <h2 class="text-2xl font-semibold text-primary">Équipements inclus</h2>
      <div data-reveal-group class="mt-6 grid gap-3 sm:grid-cols-2">
        <div
          v-for="item in proEquipment"
          :key="item"
          data-reveal-item
          class="card-surface card-surface-interactive flex items-center gap-3 rounded-xl p-4"
        >
          <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
            <Check class="size-4 text-accent" aria-hidden="true" />
          </div>
          <p class="text-sm text-text/70">{{ item }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 pb-24">
      <h2 class="text-2xl font-semibold text-primary">Services additionnels</h2>
      <div data-reveal-group class="mt-6 grid gap-3 sm:grid-cols-2">
        <div
          v-for="item in proServices"
          :key="item"
          data-reveal-item
          class="card-surface card-surface-interactive flex items-center gap-3 rounded-xl p-4"
        >
          <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
            <Check class="size-4 text-accent" aria-hidden="true" />
          </div>
          <p class="text-sm text-text/70">{{ item }}</p>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-primary px-6 py-16 text-center text-white">
      <SecureBoxMotif color="#f6f3ec" :opacity="0.08" class="pointer-events-none absolute -left-10 -top-10 w-56 -rotate-12" aria-hidden="true" />
      <h2 class="relative text-2xl font-semibold sm:text-3xl">Discutons de votre besoin en entreprise</h2>
      <p class="relative mx-auto mt-3 max-w-md text-white/70">Un devis gratuit et adapté à votre activité.</p>
      <div class="relative mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          :href="company.phoneHref"
          class="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(232,98,44,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_16px_32px_-12px_rgba(232,98,44,0.7)]"
        >
          {{ company.phone }}
        </a>
        <RouterLink
          to="/contact"
          class="inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Nous écrire
        </RouterLink>
      </div>
    </section>
  </div>
</template>
