<script setup lang="ts">
import { RouterLink } from "vue-router"
import { Check } from "lucide-vue-next"
import { proRates, proEquipment, proServices, company } from "@/data/content"
</script>

<template>
  <section class="px-6 pb-16 pt-32 sm:pt-40">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Professionnels</p>
      <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">Des locaux adaptés à votre activité</h1>
      <p class="mx-auto mt-4 max-w-xl text-text/60">
        Stock, archives, matériel, e-commerce ou domiciliation : nos espaces de 18 à 100&nbsp;m² s'adaptent à l'évolution de votre
        entreprise.
      </p>
    </div>
  </section>

  <section class="mx-auto max-w-4xl px-6 pb-16">
    <div class="overflow-x-auto rounded-3xl border border-primary/10 bg-white">
      <table class="w-full text-left text-sm">
        <thead class="bg-primary/5 text-primary">
          <tr>
            <th scope="col" class="px-6 py-4 font-semibold">Surface</th>
            <th scope="col" class="px-6 py-4 font-semibold">Volume</th>
            <th scope="col" class="px-6 py-4 font-semibold">Prix HT / mois</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-primary/10">
          <tr v-for="rate in proRates" :key="rate.surface">
            <td class="px-6 py-4 font-medium text-primary">{{ rate.surface }}</td>
            <td class="px-6 py-4 text-text/60">{{ rate.volume }}</td>
            <td class="px-6 py-4 font-semibold text-accent">{{ rate.price }}&nbsp;€ HT</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-4 text-xs text-text/50">Prix hors frais d'entrée (68&nbsp;€, payés une seule fois).</p>
  </section>

  <section class="mx-auto max-w-4xl px-6 pb-16">
    <h2 class="text-2xl font-semibold text-primary">Équipements inclus</h2>
    <ul class="mt-6 grid gap-3 sm:grid-cols-2">
      <li v-for="item in proEquipment" :key="item" class="flex items-start gap-2 text-sm text-text/70">
        <Check class="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
        {{ item }}
      </li>
    </ul>
  </section>

  <section class="mx-auto max-w-4xl px-6 pb-24">
    <h2 class="text-2xl font-semibold text-primary">Services additionnels</h2>
    <ul class="mt-6 grid gap-3 sm:grid-cols-2">
      <li v-for="item in proServices" :key="item" class="flex items-start gap-2 text-sm text-text/70">
        <Check class="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
        {{ item }}
      </li>
    </ul>
  </section>

  <section class="bg-primary px-6 py-16 text-center text-white">
    <h2 class="text-2xl font-semibold sm:text-3xl">Discutons de votre besoin en entreprise</h2>
    <p class="mx-auto mt-3 max-w-md text-white/70">Un devis gratuit et adapté à votre activité.</p>
    <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
      <a
        :href="company.phoneHref"
        class="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-light"
      >
        {{ company.phone }}
      </a>
      <RouterLink
        to="/contact"
        class="inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white hover:bg-white/10"
      >
        Nous écrire
      </RouterLink>
    </div>
  </section>
</template>
