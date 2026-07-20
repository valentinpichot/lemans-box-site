<script setup lang="ts">
import { RouterLink } from "vue-router"
import { Phone, Mail } from "lucide-vue-next"
import { company, centers } from "@/data/content"

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-primary text-white/80">
    <div class="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
      <div class="lg:col-span-1">
        <img src="/images/logo.png" alt="Le Mans Box" class="h-10 w-auto brightness-0 invert" width="145" height="128" />
        <p class="mt-4 text-sm leading-relaxed">
          N°1 du stockage en Sarthe. Box sécurisés pour particuliers et professionnels, sans engagement.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-white">Navigation</h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li><RouterLink to="/particuliers" class="transition-colors hover:text-white">Particuliers</RouterLink></li>
          <li><RouterLink to="/professionnels" class="transition-colors hover:text-white">Professionnels</RouterLink></li>
          <li><RouterLink to="/comment-ca-marche" class="transition-colors hover:text-white">Comment ça marche</RouterLink></li>
          <li><RouterLink to="/contact" class="transition-colors hover:text-white">Contact</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-white">Nos centres</h3>
        <ul class="mt-4 space-y-3 text-sm">
          <li v-for="center in centers" :key="center.name">
            <p class="font-medium text-white">{{ center.name }}</p>
            <p>{{ center.address }}, {{ center.postalCode }} {{ center.city }}</p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
        <ul class="mt-4 space-y-3 text-sm">
          <li>
            <a :href="company.phoneHref" class="flex items-center gap-2 transition-colors hover:text-white">
              <Phone class="size-4 shrink-0" aria-hidden="true" />
              {{ company.phone }}
            </a>
          </li>
          <li>
            <a :href="company.emailHref" class="flex items-center gap-2 transition-colors hover:text-white">
              <Mail class="size-4 shrink-0" aria-hidden="true" />
              {{ company.email }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Le Mans Box — Tous droits réservés.</p>
        <div class="flex gap-4">
          <RouterLink to="/mentions-legales" class="transition-colors hover:text-white">Mentions légales</RouterLink>
          <RouterLink to="/politique-de-confidentialite" class="transition-colors hover:text-white">
            Politique de confidentialité
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
