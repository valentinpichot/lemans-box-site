<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { Menu, X, Phone } from "lucide-vue-next"
import { company } from "@/data/content"

const links = [
  { to: "/", label: "Accueil" },
  { to: "/particuliers", label: "Particuliers" },
  { to: "/professionnels", label: "Professionnels" },
  { to: "/comment-ca-marche", label: "Comment ça marche" },
  { to: "/ou-sommes-nous", label: "Où sommes-nous" },
  { to: "/contact", label: "Contact" },
]

const mobileOpen = ref(false)
</script>

<template>
  <header class="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
    <nav
      class="neo-glass-light flex w-full max-w-4xl items-center justify-between gap-4 rounded-full px-4 py-2 shadow-lg shadow-primary/5"
      aria-label="Navigation principale"
    >
      <RouterLink to="/" class="flex items-center gap-2 shrink-0" @click="mobileOpen = false">
        <img src="/images/logo.png" alt="Le Mans Box" class="h-9 w-auto" width="145" height="128" />
      </RouterLink>

      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="rounded-full px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            active-class="bg-primary text-white hover:bg-primary"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <a
        :href="company.phoneHref"
        class="hidden shrink-0 items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light lg:flex"
      >
        <Phone class="size-4" aria-hidden="true" />
        {{ company.phone }}
      </a>

      <button
        type="button"
        class="flex size-9 items-center justify-center rounded-full text-primary lg:hidden"
        :aria-expanded="mobileOpen"
        aria-label="Ouvrir le menu"
        @click="mobileOpen = !mobileOpen"
      >
        <Menu v-if="!mobileOpen" class="size-5" aria-hidden="true" />
        <X v-else class="size-5" aria-hidden="true" />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="neo-glass-light absolute inset-x-4 top-16 rounded-3xl p-4 shadow-lg lg:hidden">
        <ul class="flex flex-col gap-1">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block rounded-xl px-4 py-3 text-sm font-medium text-primary hover:bg-primary/10"
              active-class="bg-primary text-white hover:bg-primary"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <a
          :href="company.phoneHref"
          class="mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone class="size-4" aria-hidden="true" />
          {{ company.phone }}
        </a>
      </div>
    </Transition>
  </header>
</template>
