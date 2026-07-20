<script setup lang="ts">
import { MapPin, Phone } from "lucide-vue-next"
import { centers, company } from "@/data/content"
</script>

<template>
  <section class="px-6 pb-16 pt-32 sm:pt-40">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Où sommes-nous</p>
      <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">3 centres en Sarthe, un seul numéro</h1>
      <a :href="company.phoneHref" class="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-accent">
        <Phone class="size-5" aria-hidden="true" />
        {{ company.phone }}
      </a>
    </div>
  </section>

  <section class="mx-auto max-w-5xl px-6 pb-24">
    <div class="grid gap-6 sm:grid-cols-3">
      <div v-for="center in centers" :key="center.name" class="rounded-3xl border border-primary/10 bg-white p-6">
        <MapPin class="size-6 text-accent" aria-hidden="true" />
        <h2 class="mt-4 text-lg font-semibold text-primary">{{ center.name }}</h2>
        <p class="mt-1 text-sm text-text/60">{{ center.address }}</p>
        <p class="text-sm text-text/60">{{ center.postalCode }} {{ center.city }}</p>
      </div>
    </div>
  </section>
</template>
