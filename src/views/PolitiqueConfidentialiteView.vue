<script setup lang="ts">
import { company } from "@/data/content"
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:pt-40">
    <h1 class="text-3xl font-semibold text-primary">Politique de confidentialité</h1>

    <div class="mt-10 space-y-8 text-sm leading-relaxed text-text/70">
      <div>
        <h2 class="text-base font-semibold text-primary">Données collectées</h2>
        <p class="mt-2">
          Lorsque vous utilisez le formulaire de contact, nous collectons votre nom, votre email, votre téléphone (si renseigné) et le
          contenu de votre message afin de répondre à votre demande. Aucune autre donnée personnelle n'est collectée sur ce site en dehors
          des cookies de mesure d'audience décrits ci-dessous.
        </p>
      </div>

      <div>
        <h2 class="text-base font-semibold text-primary">Cookies et mesure d'audience</h2>
        <p class="mt-2">
          Un bandeau de consentement vous permet d'accepter ou de refuser les cookies de mesure d'audience (Vercel Analytics). Ces cookies
          ne sont déposés qu'après votre acceptation explicite, jamais au chargement de la page. Vous pouvez modifier votre choix à tout
          moment en effaçant les données de navigation de votre navigateur pour ce site.
        </p>
      </div>

      <div>
        <h2 class="text-base font-semibold text-primary">Formulaire de contact</h2>
        <p class="mt-2">
          Les demandes envoyées via le formulaire de contact sont transmises via le service tiers Web3Forms, utilisé uniquement pour
          l'acheminement de l'email, sans conservation de vos données par ce service au-delà de l'envoi.
        </p>
      </div>

      <div>
        <h2 class="text-base font-semibold text-primary">Vos droits</h2>
        <p class="mt-2">
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour
          exercer ce droit, contactez-nous à
          <a :href="company.emailHref" class="underline">{{ company.email }}</a
          >.
        </p>
      </div>
    </div>
  </section>
</template>
