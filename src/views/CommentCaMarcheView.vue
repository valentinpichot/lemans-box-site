<script setup lang="ts">
import { howItWorksSteps, conditions, requiredDocuments } from "@/data/content"
</script>

<template>
  <section class="px-6 pb-16 pt-32 sm:pt-40">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Comment ça marche</p>
      <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">Simple, rapide et flexible</h1>
      <p class="mx-auto mt-4 max-w-xl text-text/60">Notre processus vous permet de louer un box en quelques étapes seulement.</p>
    </div>
  </section>

  <section class="mx-auto max-w-3xl px-6 pb-20">
    <ol class="space-y-8">
      <li v-for="(step, i) in howItWorksSteps" :key="step.title" class="flex gap-5">
        <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          {{ i + 1 }}
        </span>
        <div>
          <h2 class="font-semibold text-primary">{{ step.title }}</h2>
          <p class="mt-1 text-sm text-text/60">{{ step.description }}</p>
        </div>
      </li>
    </ol>
  </section>

  <section class="bg-white/60 px-6 py-20">
    <div class="mx-auto max-w-4xl">
      <h2 class="text-2xl font-semibold text-primary">Conditions générales</h2>
      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <div v-for="item in conditions" :key="item.title" class="rounded-2xl border border-primary/10 bg-white p-5">
          <p class="text-sm font-semibold text-primary">{{ item.title }}</p>
          <p class="mt-1 text-sm text-text/60">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto max-w-3xl px-6 py-20">
    <h2 class="text-2xl font-semibold text-primary">Documents à préparer</h2>
    <ul class="mt-6 space-y-2 text-sm text-text/70">
      <li v-for="doc in requiredDocuments" :key="doc" class="flex items-start gap-2">
        <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"></span>
        {{ doc }}
      </li>
    </ul>
  </section>
</template>
