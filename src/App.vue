<script setup lang="ts">
import { onMounted, onUnmounted, watch } from "vue"
import { RouterView } from "vue-router"
import { inject as injectVercelAnalytics } from "@vercel/analytics"
import NavGlassPill from "@/components/layout/NavGlassPill.vue"
import FooterMegaHub from "@/components/layout/FooterMegaHub.vue"
import CookieConsent from "@/components/layout/CookieConsent.vue"
import { useCookieConsent } from "@/lib/useCookieConsent"
import { initSmoothScroll, destroySmoothScroll } from "@/lib/smoothScroll"

const { consent } = useCookieConsent()

watch(
  consent,
  (value) => {
    if (value === "accepted" && typeof window !== "undefined") {
      injectVercelAnalytics()
    }
  },
  { immediate: true }
)

onMounted(() => {
  initSmoothScroll()
})

onUnmounted(() => {
  destroySmoothScroll()
})
</script>

<template>
  <div class="app-enter">
    <NavGlassPill />
    <main>
      <RouterView />
    </main>
    <FooterMegaHub />
    <CookieConsent />
  </div>
</template>
