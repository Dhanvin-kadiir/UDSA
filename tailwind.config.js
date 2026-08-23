/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: 'var(--bg-base)',
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
        hover: 'var(--bg-hover)',
        active: 'var(--bg-active)',
        brand: 'var(--brand)',
        'brand-dim': 'var(--brand-dim)',
        'brand-glow': 'var(--brand-glow)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        steam: 'var(--steam)',
        'steam-text': 'var(--steam-text)',
        epic: 'var(--epic)',
        'epic-text': 'var(--epic-text)',
        xbox: 'var(--xbox)',
        'xbox-text': 'var(--xbox-text)',
        gog: 'var(--gog)',
        'gog-text': 'var(--gog-text)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        info: 'var(--info)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
      },
      spacing: {
        'sidebar': 'var(--sidebar-width)',
        'topbar': 'var(--topbar-height)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      }
    },
  },
  plugins: [],
}
