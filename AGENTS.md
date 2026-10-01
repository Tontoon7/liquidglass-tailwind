# AGENTS.md — liquidglass-tailwind

## Produit

Plugin Tailwind CSS (v3.4+ et v4) « Liquid Glass », publié sur npm sous `liquidglass-tailwind` : composants et
utilitaires de surfaces vitrées, thème exporté (`liquidglass-tailwind/theme`), filtres SVG
(`liquidglass-tailwind/filters.css`), skill Claude Code copiée à l'installation, et une démo Vite.

## Carte du code

- `src/index.ts` : le plugin (`tailwindcss/plugin`), export par défaut ; réexporte le thème.
- `src/theme.ts` : `liquidGlassTheme`, jetons de thème (`theme.extend`).
- `src/filters.css` : filtres SVG, copiés tels quels dans `dist/` par `tsup.config.ts` (`onSuccess`).
- `tsup.config.ts` : build ESM + CJS + `.d.ts`/`.d.cts` vers `dist/` (ignoré par git).
- `skill/liquidglass-design.md` : skill Claude Code, copiée dans `~/.claude/skills` par `scripts/postinstall.mjs`.
- `demo/` : page Vite + `@tailwindcss/vite` ; dépend du paquet racine par `file:..` (`@plugin "liquidglass-tailwind"`
  dans `demo/styles.css`), donc du `dist/` de la racine.
- `eslint.config.js` : ESLint flat config, règles recommandées de `@eslint/js` et `typescript-eslint`.

## Commandes

- Installation : `npm ci && npm ci --prefix demo`
- Validation complète : `npm run typecheck && npm run lint && npm run build && npm run build --prefix demo`
- Développement : `npm run dev` (tsup en watch), `npm run dev --prefix demo` (serveur Vite).

## Conventions

- ESM (`"type": "module"`), TypeScript `strict`, résolution `bundler`.
- Types publics nommés uniquement via les exports publics de Tailwind (voir Pièges connus).
- Lint : configuration recommandée, sans règle désactivée. Pas de framework de test : `typecheck`, `lint` et les
  deux builds font office de non-régression.

## Livraison

- `prepublishOnly` lance `npm run build`. La publication npm, les tags et releases sont manuels, faits par le
  mainteneur.

## Travail dans l'usine

- Ne pas commiter, pousser ni publier : l'usine s'en charge.
- `dist/`, `demo/dist/` et les `node_modules/` sont ignorés par `.gitignore` ; `git status --short` après la
  validation ne doit montrer que les fichiers modifiés volontairement.

## Pièges connus

- N'importe jamais un type depuis `tailwindcss/dist/*` et ne laisse pas TypeScript inférer le type du plugin :
  annote avec le contrat public (`ReturnType<typeof plugin>`, `plugin` venant de `tailwindcss/plugin`), sinon
  `tsc` échoue en TS2742 et `dist/index.d.ts` importe un chunk interne absent (`./resolve-config-*.mjs`).
- `npm run build --prefix demo` consomme le `dist/` de la racine (lien `file:..`) : lance `npm run build` à la
  racine avant, sinon la démo compile un ancien plugin ou échoue.
- `npm install` à la racine lance `scripts/postinstall.mjs`, qui écrit dans `~/.claude/skills` (sauté si `CI` est
  défini, échec silencieux sinon, par exemple dans un bac à sable).
