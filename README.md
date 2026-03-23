# 🌴 Top Services Sénégal

Site vitrine pour **Top Services** - Transport & Tourisme au Sénégal

## 🚀 Tech Stack

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **React Icons** - Icons

## 📁 Structure

```
topservice-nextjs/
├── app/
│   ├── globals.css      # Styles globaux + Tailwind
│   ├── layout.tsx       # Layout avec SEO
│   └── page.tsx         # Page principale
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Section héro
│   ├── Services.tsx     # Nos services
│   ├── Destinations.tsx # Destinations
│   ├── Gallery.tsx      # Galerie photos
│   ├── WhyUs.tsx        # Pourquoi nous choisir
│   ├── Testimonials.tsx # Témoignages
│   ├── CTA.tsx          # Call to action
│   ├── Contact.tsx      # Formulaire contact
│   ├── Footer.tsx       # Pied de page
│   └── FloatButtons.tsx # WhatsApp + Back to top
├── public/
│   └── images/          # Toutes les photos
└── package.json
```

## ⚙️ Configuration

### 1. Numéro WhatsApp
Recherchez `221770000000` dans les fichiers et remplacez par votre vrai numéro.

### 2. Formulaire Formspree
1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un formulaire et copiez l'ID
3. Remplacez `VOTRE_ID` dans `components/Contact.tsx`

### 3. Réseaux sociaux
Mettez à jour les liens dans `components/Footer.tsx` et `components/Contact.tsx`

## 🌐 Déploiement Vercel

Le site se déploie automatiquement sur Vercel à chaque push sur `main`.

## 🎨 Personnalisation des couleurs

Dans `tailwind.config.js` :
```js
colors: {
  orange: '#F97316',    // Boutons secondaires
  teal: '#0D9488',      // Couleur principale
  sand: '#FEF7ED',      // Fond sections
}
```

## 📱 Fonctionnalités

- ✅ Responsive (Mobile, Tablette, Desktop)
- ✅ SEO optimisé
- ✅ Bouton WhatsApp flottant
- ✅ Formulaire de contact Formspree
- ✅ Galerie photos
- ✅ Animations au scroll
- ✅ 6 destinations avec prix
- ✅ Section témoignages

---

**Créé avec ❤️ pour Top Services Sénégal 🇸🇳**
