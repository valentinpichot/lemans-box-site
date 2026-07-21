<script setup lang="ts">
import { computed, reactive, ref } from "vue"
import { CheckCircle2, User, Building2 } from "lucide-vue-next"
import Button from "@/components/ui/Button.vue"
import Input from "@/components/ui/Input.vue"
import Textarea from "@/components/ui/Textarea.vue"

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type Profile = "Particulier" | "Professionnel"
type Size = "Petit box" | "Box moyen" | "Grand box" | "Je ne sais pas"

const step = ref(1)
const totalSteps = 3
const submitting = ref(false)
const success = ref(false)

const form = reactive({
  name: "",
  email: "",
  phone: "",
  profile: "" as Profile | "",
  size: "" as Size | "",
  message: "",
})

const profiles: { value: Profile; icon: typeof User }[] = [
  { value: "Particulier", icon: User },
  { value: "Professionnel", icon: Building2 },
]
const sizes: Size[] = ["Petit box", "Box moyen", "Grand box", "Je ne sais pas"]

const canGoStep2 = computed(() => form.name.trim() !== "" && form.email.trim() !== "")
const canGoStep3 = computed(() => form.profile !== "" && form.size !== "")
const canSubmit = computed(() => form.message.trim() !== "")

function next() {
  if (step.value < totalSteps) step.value++
}
function back() {
  if (step.value > 1) step.value--
}

async function submit() {
  if (!canSubmit.value) return
  submitting.value = true

  if (!WEB3FORMS_KEY) {
    await new Promise((resolve) => setTimeout(resolve, 1400))
    submitting.value = false
    success.value = true
    return
  }

  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Nouvelle demande — ${form.profile}`,
        name: form.name,
        email: form.email,
        phone: form.phone,
        profil: form.profile,
        taille_souhaitee: form.size,
        message: form.message,
      }),
    })
    success.value = true
  } finally {
    submitting.value = false
  }
}

function resetForm() {
  step.value = 1
  success.value = false
  form.name = ""
  form.email = ""
  form.phone = ""
  form.profile = ""
  form.size = ""
  form.message = ""
}
</script>

<template>
  <div class="card-surface mx-auto w-full max-w-xl rounded-3xl p-6 sm:p-10">
    <div v-if="success" class="flex flex-col items-center gap-4 py-8 text-center">
      <CheckCircle2 class="size-12 text-accent" aria-hidden="true" />
      <h3 class="text-xl font-semibold text-primary">Votre demande a bien été envoyée</h3>
      <p class="text-sm text-text/60">Notre équipe vous recontacte rapidement au {{ form.phone || "numéro fourni" }}.</p>
      <Button variant="outline" @click="resetForm">Envoyer une autre demande</Button>
    </div>

    <template v-else>
      <div class="mb-8 flex items-center gap-2" role="progressbar" :aria-valuenow="step" aria-valuemin="1" :aria-valuemax="totalSteps">
        <div
          v-for="i in totalSteps"
          :key="i"
          class="h-1.5 flex-1 rounded-full transition-colors"
          :class="i <= step ? 'bg-accent' : 'bg-primary/10'"
        ></div>
      </div>

      <form @submit.prevent="step === totalSteps ? submit() : next()">
        <div v-if="step === 1" class="space-y-4">
          <h3 class="text-lg font-semibold text-primary">Vos coordonnées</h3>
          <div>
            <label for="name" class="mb-1.5 block text-sm font-medium text-primary">Nom complet</label>
            <Input id="name" v-model="form.name" required autocomplete="name" placeholder="Jean Dupont" />
          </div>
          <div>
            <label for="email" class="mb-1.5 block text-sm font-medium text-primary">Email</label>
            <Input id="email" v-model="form.email" type="email" required autocomplete="email" placeholder="jean.dupont@email.fr" />
          </div>
          <div>
            <label for="phone" class="mb-1.5 block text-sm font-medium text-primary">Téléphone (optionnel)</label>
            <Input id="phone" v-model="form.phone" type="tel" autocomplete="tel" placeholder="06 12 34 56 78" />
          </div>
        </div>

        <div v-else-if="step === 2" class="space-y-6">
          <h3 class="text-lg font-semibold text-primary">Votre besoin</h3>
          <div>
            <p class="mb-2 text-sm font-medium text-primary">Vous êtes</p>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="p in profiles"
                :key="p.value"
                type="button"
                class="flex flex-col items-center gap-2 rounded-xl border p-4 text-sm font-medium transition-colors"
                :class="
                  form.profile === p.value ? 'border-accent bg-accent/10 text-accent' : 'border-primary/15 text-primary hover:bg-primary/5'
                "
                @click="form.profile = p.value"
              >
                <component :is="p.icon" class="size-5" aria-hidden="true" />
                {{ p.value }}
              </button>
            </div>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-primary">Taille de box souhaitée</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="s in sizes"
                :key="s"
                type="button"
                class="rounded-full border px-4 py-2 text-sm font-medium transition-colors"
                :class="form.size === s ? 'border-accent bg-accent/10 text-accent' : 'border-primary/15 text-primary hover:bg-primary/5'"
                @click="form.size = s"
              >
                {{ s }}
              </button>
            </div>
          </div>
        </div>

        <div v-else class="space-y-4">
          <h3 class="text-lg font-semibold text-primary">Votre message</h3>
          <div>
            <label for="message" class="mb-1.5 block text-sm font-medium text-primary">Décrivez votre besoin</label>
            <Textarea id="message" v-model="form.message" required :maxlength="500" placeholder="J'ai besoin d'un espace pour..." />
            <p class="mt-1 text-right text-xs text-text/40">{{ form.message.length }}/500</p>
          </div>
        </div>

        <div class="mt-8 flex items-center justify-between gap-3">
          <Button v-if="step > 1" type="button" variant="ghost" @click="back">Retour</Button>
          <span v-else></span>

          <Button v-if="step === 1" type="submit" :disabled="!canGoStep2">Continuer</Button>
          <Button v-else-if="step === 2" type="submit" :disabled="!canGoStep3">Continuer</Button>
          <Button v-else type="submit" :disabled="!canSubmit || submitting">
            {{ submitting ? "Envoi…" : "Envoyer ma demande" }}
          </Button>
        </div>
      </form>
    </template>
  </div>
</template>
