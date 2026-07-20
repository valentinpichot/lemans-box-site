<script setup lang="ts">
import { Phone, Mail } from "lucide-vue-next"
import ContactFormSteps from "@/components/contact/ContactFormSteps.vue"
import { company } from "@/data/content"
import SecureBoxMotif from "@/components/illustrations/SecureBoxMotif.vue"
</script>

<template>
  <section class="px-6 pb-16 pt-32 sm:pt-40">
    <div class="mx-auto max-w-3xl text-center">
      <SecureBoxMotif color="#e8622c" class="mx-auto mb-4 w-10" aria-hidden="true" />
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
      <h1 class="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold text-primary">Parlons de votre besoin</h1>
      <div class="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-text/60">
        <a :href="company.phoneHref" class="flex items-center gap-2 hover:text-primary">
          <Phone class="size-4" aria-hidden="true" />
          {{ company.phone }}
        </a>
        <a :href="company.emailHref" class="flex items-center gap-2 hover:text-primary">
          <Mail class="size-4" aria-hidden="true" />
          {{ company.email }}
        </a>
      </div>
    </div>
  </section>

  <section class="px-6 pb-24">
    <ContactFormSteps />
  </section>
</template>
