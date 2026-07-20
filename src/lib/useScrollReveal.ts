import { onMounted, onUnmounted, type Ref } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(rootEl: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | undefined

  onMounted(() => {
    if (!rootEl.value) return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    ctx = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>("[data-reveal-group]", rootEl.value!)

      groups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]")
        if (!items.length) return

        if (prefersReducedMotion) {
          gsap.set(items, { opacity: 1, y: 0 })
          return
        }

        gsap.set(items, { opacity: 0, y: 24 })
        ScrollTrigger.create({
          trigger: group,
          start: "top 82%",
          once: true,
          onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power2.out" }),
        })
      })
    }, rootEl.value)
  })

  onUnmounted(() => ctx?.revert())
}
