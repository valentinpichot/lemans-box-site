<script setup lang="ts">
import { company, centers } from "@/data/content"
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:pt-40">
    <h1 class="text-3xl font-semibold text-primary">Mentions légales</h1>

    <div class="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-text/70">
      <div>
        <h2 class="text-base font-semibold text-primary">Éditeur du site</h2>
        <p class="mt-2">
          {{ company.name }}<br />
          Siège social : {{ centers[0].address }}, {{ centers[0].postalCode }} {{ centers[0].city }}<br />
          Téléphone : {{ company.phone }}<br />
          Email : {{ company.email }}<br />
          Forme juridique, SIRET et numéro RCS : <em>à compléter par {{ company.name }}</em>
        </p>
      </div>

      <div>
        <h2 class="text-base font-semibold text-primary">Directeur de la publication</h2>
        <p class="mt-2">
          <em>À compléter par {{ company.name }}</em>
        </p>
      </div>

      <div>
        <h2 class="text-base font-semibold text-primary">Hébergement du site</h2>
        <p class="mt-2">
          Vercel Inc.<br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
          <a href="https://vercel.com" class="underline" target="_blank" rel="noopener noreferrer">vercel.com</a>
        </p>
      </div>

      <div>
        <h2 class="text-base font-semibold text-primary">Conception du site</h2>
        <p class="mt-2">
          V-Studios<br />
          23 chemin de la Papinière, 72230 Ruaudin<br />
          <a href="mailto:valentinpichot2@gmail.com" class="underline">valentinpichot2@gmail.com</a>
        </p>
      </div>

      <div>
        <h2 class="text-base font-semibold text-primary">Propriété intellectuelle</h2>
        <p class="mt-2">
          L'ensemble des contenus présents sur ce site (textes, logo, visuels) est la propriété de {{ company.name }}, sauf mention
          contraire, et ne peut être reproduit sans autorisation préalable.
        </p>
      </div>
    </div>
  </section>
</template>
