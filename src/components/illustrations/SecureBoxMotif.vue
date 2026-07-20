<script setup lang="ts">
interface Props {
  color?: string
  opacity?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: "currentColor",
  opacity: 1,
})
</script>

<template>
  <svg viewBox="0 0 200 200" :opacity="props.opacity" xmlns="http://www.w3.org/2000/svg">
    <g :stroke="props.color" stroke-width="2.5" stroke-linejoin="round" fill="none">
      <path d="M40 90 L100 60 L160 90 L100 120 Z" />
      <path d="M40 90 L40 140 L100 170 L100 120 Z" />
      <path d="M160 90 L160 140 L100 170 L100 120 Z" />
      <path d="M70 74 L130 104" />
      <path d="M40 115 L100 145" />
      <path d="M160 115 L100 145" />
      <circle cx="100" cy="105" r="22" :fill="props.color === 'currentColor' ? 'none' : props.color" fill-opacity="0.12" />
      <path d="M91 100 v-8 a9 9 0 0 1 18 0 v8" />
      <rect x="87" y="100" width="26" height="20" rx="3" :fill="props.color === 'currentColor' ? 'none' : props.color" />
    </g>
  </svg>
</template>
