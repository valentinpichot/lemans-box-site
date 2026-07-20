<script setup lang="ts">
import { cn } from "@/lib/utils"

interface Props {
  class?: string
  modelValue?: string
  type?: string
  placeholder?: string
  required?: boolean
  id?: string
  autocomplete?: string
}

const props = defineProps<Props>()
defineEmits<{ "update:modelValue": [value: string] }>()
</script>

<template>
  <input
    :id="props.id"
    :type="props.type ?? 'text'"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :required="props.required"
    :autocomplete="props.autocomplete"
    :class="
      cn(
        'h-11 w-full rounded-lg border border-primary/20 bg-white px-4 text-sm text-text placeholder:text-text/40 outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20',
        props.class
      )
    "
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
