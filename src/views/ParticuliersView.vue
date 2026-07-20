<script setup lang="ts">
import { RouterLink } from "vue-router"
import { particulierRates, company } from "@/data/content"
</script>

<template>
  <section class="px-6 pb-16 pt-32 sm:pt-40">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Particuliers</p>
      <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">Un espace de stockage pour chaque besoin</h1>
      <p class="mx-auto mt-4 max-w-xl text-text/60">
        Déménagement, rénovation, stockage saisonnier ou manque de place chez vous : nos box sécurisés s'adaptent à votre situation, sans
        engagement de durée.
      </p>
    </div>
  </section>

  <section class="mx-auto max-w-4xl px-6 pb-20">
    <div class="overflow-hidden rounded-3xl border border-primary/10 bg-white">
      <table class="w-full text-left text-sm">
        <thead class="bg-primary/5 text-primary">
          <tr>
            <th scope="col" class="px-6 py-4 font-semibold">Volume</th>
            <th scope="col" class="px-6 py-4 font-semibold">Prix TTC / mois</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-primary/10">
          <tr v-for="rate in particulierRates" :key="rate.volume">
            <td class="px-6 py-4 font-medium text-primary">{{ rate.volume }}</td>
            <td class="px-6 py-4 text-accent font-semibold">{{ rate.price }}&nbsp;€</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-4 text-xs text-text/50">
      Frais d'entrée de 68&nbsp;€ (payés une seule fois) et caution de 150&nbsp;€ par chèque non encaissé — détail complet sur la page
      <RouterLink to="/comment-ca-marche" class="underline">Comment ça marche</RouterLink>.
    </p>
  </section>

  <section class="mx-auto max-w-4xl px-6 pb-24">
    <h2 class="text-2xl font-semibold text-primary">Exemples d'utilisation</h2>
    <div class="mt-6 grid gap-4 sm:grid-cols-2">
      <div class="rounded-2xl border border-primary/10 bg-white p-5">
        <p class="font-medium text-primary">Déménagement</p>
        <p class="mt-1 text-sm text-text/60">Gardez vos meubles et effets personnels en sécurité pendant le transfert.</p>
      </div>
      <div class="rounded-2xl border border-primary/10 bg-white p-5">
        <p class="font-medium text-primary">Rénovation</p>
        <p class="mt-1 text-sm text-text/60">Protégez vos biens pendant les travaux de votre logement.</p>
      </div>
      <div class="rounded-2xl border border-primary/10 bg-white p-5">
        <p class="font-medium text-primary">Stockage saisonnier</p>
        <p class="mt-1 text-sm text-text/60">Vêtements d'hiver, équipements de sport, vélos, décorations de Noël.</p>
      </div>
      <div class="rounded-2xl border border-primary/10 bg-white p-5">
        <p class="font-medium text-primary">Manque d'espace</p>
        <p class="mt-1 text-sm text-text/60">Libérez de la place chez vous tout en gardant vos objets à portée de main.</p>
      </div>
    </div>
  </section>

  <section class="bg-primary px-6 py-16 text-center text-white">
    <h2 class="text-2xl font-semibold sm:text-3xl">Un devis gratuit et personnalisé</h2>
    <p class="mx-auto mt-3 max-w-md text-white/70">Appelez-nous ou écrivez-nous, nous vous répondons rapidement.</p>
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
