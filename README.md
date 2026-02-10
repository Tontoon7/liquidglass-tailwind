# liquidglass-tailwind

Apple's iOS 26 **Liquid Glass** design system for Tailwind CSS.

One install gives you **two things**:

1. **Tailwind CSS plugin** — ready-to-use glass component classes
2. **Claude Code skill** — AI-assisted Liquid Glass design guidance (auto-installed to `~/.claude/skills/`)

## Install

```bash
npm install liquidglass-tailwind
```

That's it. The Tailwind plugin is ready and the Claude Code skill is automatically installed.

## Setup

### Tailwind v4

```css
/* styles.css */
@import "tailwindcss";
@plugin "liquidglass-tailwind";
```

### Tailwind v3

```ts
// tailwind.config.ts
import liquidGlass from "liquidglass-tailwind";

export default {
  plugins: [liquidGlass],
};
```

## Usage

### Components

```html
<!-- Card -->
<div class="glass-card glass-shine">
  <h2>Hello</h2>
  <p>Translucent card with specular highlight</p>
</div>

<!-- Elevated card -->
<div class="glass-card-elevated glass-shine">
  Featured content with deeper blur
</div>

<!-- Buttons -->
<button class="glass-btn text-white">Primary</button>
<button class="glass-btn-secondary text-white/90">Secondary</button>
<button class="glass-btn-pill text-white/90">Pill</button>

<!-- Navbar -->
<nav class="glass-nav h-16 flex items-center px-6">
  Navigation
</nav>

<!-- Modal / Sheet -->
<div class="glass-modal p-6">
  Sheet content
</div>

<!-- Input -->
<input class="glass-input text-white" placeholder="Email" />

<!-- Segmented control -->
<div class="glass-segment">
  <button class="glass-segment-item glass-segment-item-active text-white">Tab 1</button>
  <button class="glass-segment-item text-white/60">Tab 2</button>
</div>
```

### Utilities

```html
<!-- Glass surfaces (backdrop-filter + saturate) -->
<div class="glass-surface">...</div>      <!-- blur 16px -->
<div class="glass-surface-sm">...</div>   <!-- blur 8px  -->
<div class="glass-surface-lg">...</div>   <!-- blur 24px -->
<div class="glass-surface-xl">...</div>   <!-- blur 40px -->

<!-- Specular shine overlay -->
<div class="glass-card glass-shine">...</div>
<div class="glass-card glass-shine-subtle">...</div>
```

### Theme tokens

The plugin extends your Tailwind theme with glass-specific tokens:

| Token | Example classes |
|-------|----------------|
| `colors.glass.*` | `bg-glass-light`, `bg-glass-subtle`, `bg-glass-dark` |
| `colors.glass-border.*` | `border-glass-border`, `border-glass-border-subtle` |
| `borderRadius.glass*` | `rounded-glass`, `rounded-glass-lg`, `rounded-glass-xl` |
| `boxShadow.glass*` | `shadow-glass`, `shadow-glass-lg`, `shadow-glass-elevated` |

### Coloring buttons

Combine glass classes with Tailwind color utilities:

```html
<button class="glass-btn text-white bg-blue-500/25 border-blue-400/20">Accent</button>
<button class="glass-btn text-white bg-emerald-500/25 border-emerald-400/20">Success</button>
<button class="glass-btn text-white bg-red-500/25 border-red-400/20">Danger</button>
```

## Accessibility

The plugin ships with built-in accessibility support:

- **`prefers-reduced-transparency`** — glass surfaces fall back to solid opaque backgrounds
- **`prefers-reduced-motion`** — hover/active animations are disabled

Always ensure sufficient text contrast over translucent backgrounds.

## Claude Code skill

After install, the skill is available at `~/.claude/skills/liquidglass-design.md`.

It provides Claude Code with:

- Liquid Glass design principles and guidelines
- Component patterns and anti-patterns
- Opacity hierarchy tables
- Dark mode adaptation rules
- Accessibility requirements
- Performance best practices

Invoke it by mentioning "liquid glass", "glass design", or "iOS 26 style" in your Claude Code session.

To reinstall the skill manually:

```bash
cp node_modules/liquidglass-tailwind/skill/liquidglass-design.md ~/.claude/skills/
```

## Demo

```bash
cd demo && npm install && npm run dev
```

## License

MIT
