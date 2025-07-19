// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        primary: {
          css: {
            color: 'var(--color-primary)',
            h1: { color: 'var(--color-primary)' },
            h2: { color: 'var(--color-primary)' },
            h3: { color: 'var(--color-primary)' },
            h4: { color: 'var(--color-primary)' },
            h5: { color: 'var(--color-primary)' },
            h6: { color: 'var(--color-primary)' },
            p: { color: 'var(--color-primary)' },
            a: { color: 'var(--color-primary)' },
            strong: { color: 'var(--color-primary)' },
            code: { color: 'var(--color-primary)' },
            pre: { color: 'var(--color-primary)' },
            blockquote: { color: 'var(--color-primary)' },
            li: { color: 'var(--color-primary)' },
            th: { color: 'var(--color-primary)' },
            td: { color: 'var(--color-primary)' },
            figcaption: { color: 'var(--color-primary)' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
