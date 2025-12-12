# Doodlemon - Card Collection Game

Un jeu de collection de cartes développé avec **Vue 3** et **TypeScript**. Le but est d'ouvrir des boosters pour compléter sa collection de créatures dessinées à la main ("Doodlemon").

🔗 **DÉMO EN LIGNE :** [**Jouer ici**](https://trappymadz.github.io/Vue-Card-Collection-Game/#/)

---

## Fonctionnalités

* **Ouverture de Boosters :** Simulation d'ouverture de paquets avec génération aléatoire de cartes.
* **Système de Rareté :**
  * Cartes communes.
  * Cartes peu communes (Effet brillant subtil).
  * Cartes légendaires (Effet holographique prismatique et animé).
* **Gestion de Collection :**
  * Détection des nouvelles cartes ("Badge Nouveau").
* **Design "Fait main" :**
  * Bordures irrégulières générées dynamiquement via JS.
  * Police "Permanent Marker".
  * Effets de texture papier et dégradés CSS avancés.
---

## Stack Technique

Le projet utilise une stack moderne et performante :

* **Framework :** [Vue 3](https://vuejs.org/) (Composition API avec `<script setup>`).
* **Langage :** [TypeScript](https://www.typescriptlang.org/) (Typage strict des Cartes, Packs et du Store).
* **Build Tool :** [Vite](https://vitejs.dev/) (Pour un développement rapide et un build optimisé).
* **État (State Management) :** [Pinia](https://pinia.vuejs.org/).
* **CSS Avancé :**
  * Utilisation de `mix-blend-mode` (Overlay, Color-Dodge) pour les effets de brillance.
  * Animations CSS (`keyframes`) pour les apparitions et les reflets.
  * Variables CSS dynamiques pour les couleurs de types.
---

## Architecture du Code

### 1. Gestion de l'État (`stores/gameStore.ts`)
L'application utilise **Pinia** pour gérer la logique centrale :
* **`inventory`** : Un `Set<number>` réactif pour stocker les IDs des cartes possédées.
* **`currentDraft`** : Stocke temporairement les cartes du booster en cours d'ouverture.
* **`lastNewCards`** : Une mémoire tampon qui permet d'identifier quelles cartes sont "Nouvelles" lors du tirage actuel, avant qu'elles ne soient fondues dans l'inventaire global.

### 2. Composants Clés
* **`Boosters.vue`** : L'interface principale. Elle gère l'affichage des paquets disponibles et l'overlay d'ouverture. Elle utilise un système de *wrapper* pour gérer les badges de notification au-dessus des cartes (gestion des conflits `z-index` et `overflow`).
* **`Card.vue`** : Le composant de carte individuel. Il calcule dynamiquement sa couleur de fond selon le type, génère une bordure aléatoire pour l'effet "dessin", et applique les classes CSS d'effets visuels (`legendary-artifice`, `uncommon-artifice`) selon la rareté.

### 3. Effets Visuels (CSS)
Les effets "Holographiques" (cartes rares) sont réalisés sans images lourdes, uniquement via CSS :
* Pseudo-éléments `::after` et `::before`.
* Dégradés linéaires (`linear-gradient`) complexes.
* Modes de fusion (`overlay`, `color-dodge`, `soft-light`) pour simuler la réaction à la lumière.

Les effets "Holographiques" (cartes légendaires) sont réalisés via un gif et un mode de fusion.

---

## Installation locale

Si vous souhaitez cloner et lancer le projet sur votre machine :

```bash
# 1. Cloner le repo
git clone [https://github.com/trappymadz/Vue-Card-Collection-Game.git](https://github.com/trappymadz/Vue-Card-Collection-Game.git)

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
