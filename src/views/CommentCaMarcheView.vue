<script setup lang="ts">
import { ref } from "vue"
import { Euro, ShieldCheck, CalendarClock, CreditCard, CalendarDays, CircleCheck, KeyRound, FileCheck } from "lucide-vue-next"
import { howItWorksSteps, conditions, requiredDocuments } from "@/data/content"
import SecureBoxMotif from "@/components/illustrations/SecureBoxMotif.vue"
import { useScrollReveal } from "@/lib/useScrollReveal"

const conditionIcons = [Euro, ShieldCheck, CalendarClock, CreditCard, CalendarDays, CircleCheck, KeyRound]

const rootEl = ref<HTMLElement | null>(null)
useScrollReveal(rootEl)
</script>

<template>
  <div ref="rootEl">
    <section class="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
      <SecureBoxMotif color="#12233f" :opacity="0.04" class="pointer-events-none absolute -right-16 -top-10 w-72 rotate-6" aria-hidden="true" />
      <div class="relative mx-auto max-w-3xl text-center">
        <SecureBoxMotif color="#e8622c" class="mx-auto mb-4 w-10" aria-hidden="true" />
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Comment ça marche</p>
        <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">Simple, rapide et flexible</h1>
        <p class="mx-auto mt-4 max-w-xl text-text/60">Notre processus vous permet de louer un box en quelques étapes seulement.</p>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-6 pb-20">
      <ol data-reveal-group class="relative space-y-8">
        <div class="absolute left-5 top-5 bottom-5 w-px bg-primary/10" aria-hidden="true"></div>
        <li v-for="(step, i) in howItWorksSteps" :key="step.title" data-reveal-item class="relative flex gap-5">
          <span
            class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
          >
            {{ i + 1 }}
          </span>
          <div class="pt-1.5">
            <h2 class="font-semibold text-primary">{{ step.title }}</h2>
            <p class="mt-1 text-sm text-text/60">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="bg-white/60 px-6 py-20">
      <div class="mx-auto max-w-5xl">
        <h2 class="text-2xl font-semibold text-primary">Conditions générales</h2>
        <div data-reveal-group class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(item, i) in conditions"
            :key="item.title"
            data-reveal-item
            class="rounded-2xl border border-primary/10 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex size-9 items-center justify-center rounded-full bg-accent/10">
              <component :is="conditionIcons[i]" class="size-4 text-accent" aria-hidden="true" />
            </div>
            <p class="mt-3 text-sm font-semibold text-primary">{{ item.title }}</p>
            <p class="mt-1 text-sm text-text/60">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-6 py-20">
      <h2 class="text-2xl font-semibold text-primary">Documents à préparer</h2>
      <div data-reveal-group class="mt-6 grid gap-3 sm:grid-cols-2">
        <div
          v-for="doc in requiredDocuments"
          :key="doc"
          data-reveal-item
          class="flex items-center gap-3 rounded-xl border border-primary/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <div class="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
            <FileCheck class="size-4 text-accent" aria-hidden="true" />
          </div>
          <p class="text-sm text-text/70">{{ doc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
