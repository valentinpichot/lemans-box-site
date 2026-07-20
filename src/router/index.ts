import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: "/", name: "home", component: () => import("@/views/HomeView.vue") },
    { path: "/particuliers", name: "particuliers", component: () => import("@/views/ParticuliersView.vue") },
    { path: "/professionnels", name: "professionnels", component: () => import("@/views/ProfessionnelsView.vue") },
    { path: "/comment-ca-marche", name: "comment-ca-marche", component: () => import("@/views/CommentCaMarcheView.vue") },
    { path: "/ou-sommes-nous", name: "ou-sommes-nous", component: () => import("@/views/OuSommesNousView.vue") },
    { path: "/contact", name: "contact", component: () => import("@/views/ContactView.vue") },
    { path: "/mentions-legales", name: "mentions-legales", component: () => import("@/views/MentionsLegalesView.vue") },
    {
      path: "/politique-de-confidentialite",
      name: "politique-de-confidentialite",
      component: () => import("@/views/PolitiqueConfidentialiteView.vue"),
    },
  ],
})

export default router
