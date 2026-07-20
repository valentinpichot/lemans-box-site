<script setup lang="ts">
import { useCookieConsent } from "@/lib/useCookieConsent"
import Button from "@/components/ui/Button.vue"

const { consent, accept, decline } = useCookieConsent()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="consent === 'pending'"
      class="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-2xl flex-col gap-4 rounded-2xl border border-primary/10 bg-white p-5 shadow-xl sm:flex-row sm:items-center"
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
    >
      <p class="text-sm text-text/80">
        Nous utilisons des cookies de mesure d'audience pour améliorer le site. Vous pouvez accepter ou refuser.
      </p>
      <div class="flex shrink-0 gap-2">
        <Button variant="outline" size="sm" @click="decline">Refuser</Button>
        <Button variant="primary" size="sm" @click="accept">Accepter</Button>
      </div>
    </div>
  </Transition>
</template>
