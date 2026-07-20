import { ref, watch } from "vue"

type Consent = "pending" | "accepted" | "declined"

const STORAGE_KEY = "lemansbox-cookie-consent"

function readStoredConsent(): Consent {
  if (typeof window === "undefined") return "pending"
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "accepted" || stored === "declined" ? stored : "pending"
}

const consent = ref<Consent>(readStoredConsent())

watch(consent, (value) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, value)
  }
})

export function useCookieConsent() {
  function accept() {
    consent.value = "accepted"
  }
  function decline() {
    consent.value = "declined"
  }
  return { consent, accept, decline }
}
