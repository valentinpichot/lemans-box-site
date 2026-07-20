<script setup lang="ts">
import { ref } from "vue"
import { MapPin, Phone } from "lucide-vue-next"
import { centers, company } from "@/data/content"
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
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Où sommes-nous</p>
        <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">3 centres en Sarthe, un seul numéro</h1>
        <a
          :href="company.phoneHref"
          class="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-accent transition-colors hover:text-accent-light"
        >
          <Phone class="size-5" aria-hidden="true" />
          {{ company.phone }}
        </a>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 pb-24">
      <div data-reveal-group class="grid gap-6 sm:grid-cols-3">
        <div
          v-for="center in centers"
          :key="center.name"
          data-reveal-item
          class="group rounded-3xl border border-primary/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl"
        >
          <div class="flex size-11 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent">
            <MapPin class="size-5 text-accent transition-colors group-hover:text-white" aria-hidden="true" />
          </div>
          <h2 class="mt-4 text-lg font-semibold text-primary">{{ center.name }}</h2>
          <p class="mt-1 text-sm text-text/60">{{ center.address }}</p>
          <p class="text-sm text-text/60">{{ center.postalCode }} {{ center.city }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
