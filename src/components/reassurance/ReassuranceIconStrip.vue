<script setup lang="ts">
import { ShieldCheck, Clock, FileX, ReceiptText } from "lucide-vue-next"
import { reassurance } from "@/data/content"

const icons = [ShieldCheck, Clock, FileX, ReceiptText]
</script>

<template>
  <section class="border-y border-primary/10 bg-white/60">
    <div class="mx-auto grid max-w-6xl divide-y divide-primary/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      <div v-for="(item, i) in reassurance" :key="item.title" class="flex items-start gap-3 px-6 py-8">
        <component :is="icons[i]" class="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
        <div>
          <p class="text-sm font-semibold text-primary">{{ item.title }}</p>
          <p class="mt-1 text-sm text-text/60">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
