<script setup lang="ts">
import { Phone, Mail, Clock, ShieldCheck, BadgeEuro } from "lucide-vue-next"
import ContactFormSteps from "@/components/contact/ContactFormSteps.vue"
import { company } from "@/data/content"
import SecureBoxMotif from "@/components/illustrations/SecureBoxMotif.vue"

const points = [
  { icon: Clock, text: "Réponse sous 48h ouvrées" },
  { icon: BadgeEuro, text: "Devis gratuit et sans engagement" },
  { icon: ShieldCheck, text: "3 centres sécurisés en Sarthe" },
]
</script>

<template>
  <section class="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-40">
    <SecureBoxMotif color="#12233f" :opacity="0.04" class="pointer-events-none absolute -right-20 top-0 w-80 rotate-6" aria-hidden="true" />

    <div class="relative mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
      <div class="lg:sticky lg:top-32">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
        <h1 class="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold text-primary">Parlons de votre besoin</h1>
        <p class="mt-4 text-text/60">
          Une question, un devis, une taille de box à valider ? Notre équipe vous répond rapidement, par téléphone ou par écrit.
        </p>

        <div class="mt-8 space-y-3">
          <a
            :href="company.phoneHref"
            class="card-surface card-surface-interactive flex items-center gap-3 rounded-2xl p-4"
          >
            <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Phone class="size-5 text-accent" aria-hidden="true" />
            </div>
            <div>
              <p class="text-xs text-text/50">Téléphone</p>
              <p class="font-semibold text-primary">{{ company.phone }}</p>
            </div>
          </a>
          <a
            :href="company.emailHref"
            class="card-surface card-surface-interactive flex items-center gap-3 rounded-2xl p-4"
          >
            <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <Mail class="size-5 text-accent" aria-hidden="true" />
            </div>
            <div>
              <p class="text-xs text-text/50">Email</p>
              <p class="font-semibold text-primary">{{ company.email }}</p>
            </div>
          </a>
        </div>

        <ul class="mt-8 space-y-3">
          <li v-for="point in points" :key="point.text" class="flex items-center gap-2 text-sm text-text/60">
            <component :is="point.icon" class="size-4 shrink-0 text-accent" aria-hidden="true" />
            {{ point.text }}
          </li>
        </ul>
      </div>

      <ContactFormSteps />
    </div>
  </section>
</template>
