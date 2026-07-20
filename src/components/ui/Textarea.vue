<script setup lang="ts">
import { cn } from "@/lib/utils"

interface Props {
  class?: string
  modelValue?: string
  placeholder?: string
  required?: boolean
  id?: string
  maxlength?: number
  rows?: number
}

const props = defineProps<Props>()
defineEmits<{ "update:modelValue": [value: string] }>()
</script>

<template>
  <textarea
    :id="props.id"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :required="props.required"
    :maxlength="props.maxlength"
    :rows="props.rows ?? 5"
    :class="
      cn(
        'w-full resize-none rounded-lg border border-primary/20 bg-white px-4 py-3 text-sm text-text placeholder:text-text/40 outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20',
        props.class
      )
    "
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>
