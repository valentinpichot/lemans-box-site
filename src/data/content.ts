// Contenu réel du client — voir /01-Clients/FR/LeMansBox-2026-07-20/brief.md pour les sources.

export const company = {
  name: "Le Mans Box",
  phone: "02 43 82 82 82",
  phoneHref: "tel:+33243828282",
  email: "contact@lemans-box.com",
  emailHref: "mailto:contact@lemans-box.com",
}

export const centers = [
  {
    name: "Ruaudin",
    address: "ZA Bel Air – Rue Claude Chappe",
    postalCode: "72230",
    city: "Ruaudin",
  },
  {
    name: "Saint-Mars-la-Brière",
    address: "Le Champ de l'Étang",
    postalCode: "72470",
    city: "Saint-Mars-la-Brière",
  },
  {
    name: "Coulaines",
    address: "Zone de Chapeau – Route de Ballon",
    postalCode: "72190",
    city: "Coulaines",
  },
]

export const particulierRates = [
  { volume: "4 m³", price: 29 },
  { volume: "8 m³", price: 49 },
  { volume: "10 m³", price: 59 },
  { volume: "12 m³", price: 65 },
  { volume: "16 m³", price: 75 },
  { volume: "20 m³", price: 85 },
  { volume: "25 m³", price: 95 },
  { volume: "30 m³", price: 111 },
  { volume: "35 m³", price: 121 },
  { volume: "40 m³", price: 131 },
  { volume: "50 m³", price: 161 },
  { volume: "Garage", price: 99 },
  { volume: "75 m³", price: 201 },
]

export const proRates = [
  { surface: "18 m²", volume: "40 m³", price: 119 },
  { surface: "28 m²", volume: "70 m³", price: 201 },
  { surface: "50 m²", volume: "120 m³", price: 299 },
  { surface: "70 m²", volume: "170 m³", price: 389 },
  { surface: "100 m²", volume: "250 m³", price: 529 },
]

export const proEquipment = [
  "Porte sectionnelle (H 3 m × L 3,5 m)",
  "Portillon largeur 1 m",
  "Compteur énergie individuel",
  "Prise RJ45 internet",
  "Éclairage individuel",
]

export const proServices = [
  "Espace bureau à partir de 12 m²",
  "Local de 54 à 108 m²",
  "Domiciliation d'entreprise",
  "Internet très haut débit",
  "Mini plateforme logistique",
  "Service de collecte cadencé (hebdomadaire, mensuel, annuel ou à la demande)",
  "Réception de marchandises",
  "Quai de déchargement",
  "Accès poids lourds",
]

export const conditions = [
  { title: "Frais d'entrée", value: "68 €, payés une seule fois quelle que soit la durée" },
  { title: "Caution", value: "150 € par chèque non encaissé" },
  { title: "Préavis de départ", value: "1 mois" },
  { title: "Paiement", value: "Prélèvement automatique le 10 de chaque mois" },
  { title: "Premier mois", value: "Facturé au prorata du nombre de jours réellement occupés" },
  { title: "Frais de sortie", value: "Aucun" },
  { title: "Accès", value: "24h/24, 7j/7, via un code confidentiel à 6 chiffres" },
]

export const requiredDocuments = [
  "Une pièce d'identité",
  "Un RIB",
  "Un chèque de caution (non encaissé)",
  "Un chèque du premier loyer (frais d'entrée inclus)",
  "Un code à 6 chiffres de votre choix",
]

export const howItWorksSteps = [
  {
    title: "Choisissez la taille de votre box",
    description:
      "Notre équipe vous aide à estimer l'espace nécessaire en fonction de vos biens, du petit box de 4 m³ au grand espace professionnel.",
  },
  {
    title: "Réservez en ligne ou par téléphone",
    description: "Sélectionnez la taille, la durée souhaitée, et confirmez la disponibilité en quelques minutes.",
  },
  {
    title: "Accédez à votre box en toute simplicité",
    description: "Choisissez votre code d'accès personnel à 6 chiffres et entrez dans nos installations en autonomie totale.",
  },
  {
    title: "Gérez votre espace en toute liberté",
    description: "Déposez, retirez vos affaires quand vous le souhaitez, changez de taille ou prolongez si vos besoins évoluent.",
  },
  {
    title: "Fin de location",
    description: "Prévenez-nous, aucun engagement à long terme, récupérez vos affaires à tout moment.",
  },
]

export const complementaryServices = [
  {
    title: "Véhicule avec conducteur-déménageur",
    description: "Un chauffeur déménageur professionnel vous accompagne pour le chargement et le déchargement de votre mobilier.",
  },
  {
    title: "Réception de marchandises",
    description: "Nous réceptionnons pour vous colis, palettes, matériel et marchandises, avec contrôle qualité et quantité.",
  },
  {
    title: "Aménagement de votre box",
    description: "Équipez votre espace de rayonnages pour le stockage de vos archives et documents juridiques ou comptables.",
  },
]

export const reassurance = [
  { title: "Sécurisé 24h/24", description: "Vidéosurveillance, contrôle d'accès et alarmes sur nos 3 centres." },
  { title: "Accès libre 7j/7", description: "Consultez vos affaires à tout moment, y compris le week-end." },
  { title: "Sans engagement", description: "Aucune durée minimale, un préavis d'1 mois suffit." },
  { title: "Tarifs transparents", description: "Aucun frais caché, un seul frais d'entrée de 68 €." },
]
