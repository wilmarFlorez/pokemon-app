import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        pokeballBounce: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-6px) rotate(-10deg)' },
          '50%': { transform: 'translateY(5px) rotate(10deg)' },
          '75%': { transform: 'translateY(-5px) rotate(-10deg)' },
        },
      },
      animation: {
        pokeballBounce: 'pokeballBounce 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
