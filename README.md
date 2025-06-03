# Kameleoon E-commerce Platform

Plateforme e-commerce modulaire construite avec Next.js, démontrant la scalabilité avec quatre boutiques distinctes : vêtements, voyages, événements et abonnements.

## 🚀 Fonctionnalités

### Boutique Principale (Vêtements)

- Liste de produits avec filtres
- Pages produit détaillées
- Sélection de tailles et couleurs
- Ajout au panier avec gestion des quantités

### Agence de Voyage 🌍

- Catalogue de voyages avec destinations variées
- Informations détaillées (durée, difficulté, inclusions)
- Sélection de dates de départ
- Système de réservation avec nombre de voyageurs
- Catégories : Aventure, Détente, Culture, Nature, Gastronomie

### Événements 🎭

- Catalogue d'événements (concerts, théâtre, sport)
- Sélection de billets avec différentes catégories
- Gestion des dates et horaires
- Système de réservation

### Abonnements 📰

- Différents types d'abonnements (presse, culture, sport)
- Tarification mensuelle et annuelle
- Gestion des durées d'abonnement

### Panier Unifié 🛒

- Support de tous les types de produits (vêtements, voyages, événements, abonnements)
- Gestion des quantités
- Calcul automatique du total
- Persistance en session storage
- Interface adaptée selon le type d'article

## 🛠️ Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Session Storage** - Persistance du panier
- **Kameleoon** - Feature flags et A/B testing

## 📁 Structure du Projet

```
app/
├── components/
│   ├── Product/          # Composants pour les produits
│   ├── Travel/           # Composants pour les voyages
│   ├── Events/           # Composants pour les événements
│   ├── Subscriptions/    # Composants pour les abonnements
│   ├── Cart/             # Composants du panier (partagés)
│   ├── Kameleoon/        # Intégration Kameleoon
│   └── Header.tsx        # Navigation principale
├── shop/                 # Pages boutique vêtements
├── travel/               # Pages agence de voyage
├── events/               # Pages événements
├── subscriptions/        # Pages abonnements
└── cart/                 # Page panier

data/
├── products.ts           # Données des produits
├── travels.ts            # Données des voyages
├── events.ts             # Données des événements
└── subscriptions.ts      # Données des abonnements

types/
├── cart.ts              # Types TypeScript pour le panier
├── product.ts           # Types pour les produits
└── icon.ts              # Types pour les icônes
```

## 🎯 Démarrage Rapide

1. **Installation des dépendances**

```bash
npm install
```

2. **Lancement du serveur de développement**

```bash
npm run dev
```

3. **Accès à l'application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🧭 Navigation

- **Accueil** : `/` - Page d'accueil
- **Boutique** : `/shop` - Catalogue de vêtements
- **Voyages** : `/travel` - Catalogue de voyages
- **Événements** : `/events` - Catalogue d'événements
- **Abonnements** : `/subscriptions` - Catalogue d'abonnements
- **Panier** : `/cart` - Panier unifié

## 🔧 Fonctionnalités Techniques

### Gestion du Panier

Le panier supporte quatre types d'articles :

- **Produits** : avec taille et couleur
- **Voyages** : avec date de départ et nombre de voyageurs
- **Événements** : avec type de billet et quantité
- **Abonnements** : avec durée (mensuel/annuel)

### Types TypeScript

```typescript
interface CartItem {
  type: "product" | "travel" | "event" | "subscription";
  id: string;
  quantity: number;
  price: number;
  size?: string;
  color?: string;
  departureDate?: string;
  destination?: string;
  ticketType?: string;
  duration?: string;
}
```

### Composants Réutilisables

- Architecture modulaire avec composants spécialisés
- Logique partagée pour le panier
- Interface adaptative selon le type d'article
- Intégration Kameleoon pour les feature flags

## 🎨 Design

- Interface cohérente entre les quatre boutiques
- Couleurs distinctives pour différencier les sections
- Design responsive et moderne
- UX optimisée pour chaque type de produit

## 📦 Déploiement

Le projet est configuré pour le déploiement statique :

```bash
npm run build
```

Configuration pour GitHub Pages avec basePath `/feature-flag-demo`.

## 🔮 Évolutions Futures

- Système d'authentification
- Gestion des commandes
- Filtres avancés
- Système de paiement
- Avis et commentaires
- Wishlist/Favoris
- Analytics avancées avec Kameleoon

## 📝 Notes de Développement

- Code source nettoyé de tous les commentaires pour une meilleure lisibilité
- Architecture modulaire facilitant l'ajout de nouvelles boutiques
- Intégration complète avec Kameleoon pour les tests A/B
- Support complet TypeScript pour une meilleure maintenabilité
