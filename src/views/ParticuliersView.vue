<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { Home, Hammer, Snowflake, PackageOpen } from "lucide-vue-next"
import { particulierRates, company } from "@/data/content"
import SecureBoxMotif from "@/components/illustrations/SecureBoxMotif.vue"
import { useScrollReveal } from "@/lib/useScrollReveal"

const useCases = [
  { icon: Home, title: "Déménagement", description: "Gardez vos meubles et effets personnels en sécurité pendant le transfert." },
  { icon: Hammer, title: "Rénovation", description: "Protégez vos biens pendant les travaux de votre logement." },
  { icon: Snowflake, title: "Stockage saisonnier", description: "Vêtements d'hiver, équipements de sport, vélos, décorations de Noël." },
  { icon: PackageOpen, title: "Manque d'espace", description: "Libérez de la place chez vous tout en gardant vos objets à portée de main." },
]

const rootEl = ref<HTMLElement | null>(null)
useScrollReveal(rootEl)
</script>

<template>
  <div ref="rootEl">
    <section class="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
      <SecureBoxMotif color="#12233f" :opacity="0.04" class="pointer-events-none absolute -right-16 -top-10 w-72 rotate-6" aria-hidden="true" />
      <div class="relative mx-auto max-w-3xl text-center">
        <SecureBoxMotif color="#e8622c" class="mx-auto mb-4 w-10" aria-hidden="true" />
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Particuliers</p>
        <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">Un espace de stockage pour chaque besoin</h1>
        <p class="mx-auto mt-4 max-w-xl text-text/60">
          Déménagement, rénovation, stockage saisonnier ou manque de place chez vous : nos box sécurisés s'adaptent à votre situation, sans
          engagement de durée.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-5xl px-6 pb-20">
      <div data-reveal-group class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <div
          v-for="rate in particulierRates"
          :key="rate.volume"
          data-reveal-item
          class="card-surface card-surface-interactive group rounded-2xl p-5 text-center"
        >
          <p class="text-sm font-medium text-text/60">{{ rate.volume }}</p>
          <p class="mt-2 text-3xl font-semibold text-primary transition-colors group-hover:text-accent">{{ rate.price }}&nbsp;€</p>
          <p class="text-xs text-text/50">TTC / mois</p>
        </div>
      </div>
      <p class="mt-6 text-center text-xs text-text/50">
        Frais d'entrée de 68&nbsp;€ (payés une seule fois) et caution de 150&nbsp;€ par chèque non encaissé — détail complet sur la page
        <RouterLink to="/comment-ca-marche" class="underline">Comment ça marche</RouterLink>.
      </p>
    </section>

    <section class="mx-auto max-w-4xl px-6 pb-24">
      <h2 class="text-2xl font-semibold text-primary">Exemples d'utilisation</h2>
      <div data-reveal-group class="mt-6 grid gap-4 sm:grid-cols-2">
        <div
          v-for="useCase in useCases"
          :key="useCase.title"
          data-reveal-item
          class="card-surface card-surface-interactive rounded-2xl p-5"
        >
          <div class="flex size-10 items-center justify-center rounded-full bg-accent/10">
            <component :is="useCase.icon" class="size-5 text-accent" aria-hidden="true" />
          </div>
          <p class="mt-3 font-medium text-primary">{{ useCase.title }}</p>
          <p class="mt-1 text-sm text-text/60">{{ useCase.description }}</p>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-primary px-6 py-16 text-center text-white">
      <SecureBoxMotif color="#f6f3ec" :opacity="0.08" class="pointer-events-none absolute -left-10 -top-10 w-56 -rotate-12" aria-hidden="true" />
      <h2 class="relative text-2xl font-semibold sm:text-3xl">Un devis gratuit et personnalisé</h2>
      <p class="relative mx-auto mt-3 max-w-md text-white/70">Appelez-nous ou écrivez-nous, nous vous répondons rapidement.</p>
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
