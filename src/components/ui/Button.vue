<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white shadow-[0_10px_24px_-10px_rgba(232,98,44,0.6)] hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_16px_32px_-12px_rgba(232,98,44,0.7)]",
        secondary:
          "bg-primary text-white shadow-[0_10px_24px_-10px_rgba(18,35,63,0.5)] hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_16px_32px_-12px_rgba(18,35,63,0.6)]",
        outline: "border border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-primary/10",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

interface Props {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  as?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
})
</script>

<template>
  <component :is="props.as" :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </component>
</template>
