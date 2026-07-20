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
          gsap.set(items, { autoAlpha: 1, y: 0 })
          return
        }

        gsap.set(items, { autoAlpha: 0, y: 20 })
        ScrollTrigger.create({
          trigger: group,
          start: "top 85%",
          once: true,
          onEnter: () => gsap.to(items, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" }),
        })
      })
    }, rootEl.value)
  })

  onUnmounted(() => ctx?.revert())
}
