# cv-gen

Générateur de CV à partir d'un fichier MDX. Stack : React + TypeScript + Vite + PandaCSS.

## Stack

- **Vite** — bundler, dev server sur le port 5001
- **React 19 + TypeScript**
- **MDX** (`@mdx-js/rollup`) — source du CV en JSX/Markdown
- **PandaCSS** — CSS utility-first avec tokens personnalisés

## Structure

```
src/
├── markdown/
│   ├── cv.mdx          # CV français
│   ├── cv-en.mdx       # CV anglais
│   └── cv-detailed.mdx # CV détaillé
├── components/cv/
│   ├── templates/CVTemplate.tsx   # grille 816×1056px
│   ├── organisms/
│   │   ├── Header.tsx
│   │   ├── SidePanel.tsx
│   │   └── MainPanel.tsx
│   └── atoms/
│       ├── Title.tsx
│       ├── DatedItem.tsx
│       ├── IconItem.tsx
│       ├── Icon.tsx
│       └── ProfilePicture.tsx
├── assets/cv/     # icônes SVG
├── assets/fonts/  # Roboto, Playfair Display, Dancing Script
└── theme/theme.ts # tokens couleurs cv.*
```

## Démarrage

```bash
npm install
npm run dev
# → http://localhost:5001
```

## Export PDF

Ctrl+P dans le navigateur → **Save as PDF**.

Paramètres recommandés :
- Marges : **Aucune**
- Décocher **En-têtes et pieds de page**
- Cocher **Graphiques d'arrière-plan** (pour les couleurs)

## Modifier le CV

Éditer `src/markdown/cv.mdx`. Les composants disponibles dans le MDX :

| Composant | Props |
|-----------|-------|
| `<CVTemplate>` | wrapper racine |
| `<Header>` | bandeau titre |
| `<SidePanel>` | colonne gauche |
| `<MainPanel>` | colonne droite |
| `<Title icon?>` | titre de section |
| `<DatedItem startDate endDate? title subtitle? side?>` | expérience / formation |
| `<IconItem icon title>` | info contact avec icône |
| `<ProfilePicture>` | photo de profil |

Icônes disponibles : `valise`, `diplome`, `pin`, `mail`, `telephone`, `cake`, `globe`, `calendrier`, `livre`.

## Scripts

```bash
npm run dev      # dev server
npm run build    # build production
npm run prepare  # regénère styled-system (PandaCSS codegen)
```
