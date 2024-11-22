/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Glacial Indifference"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'section-blog': '#E5F4F7',
        'section-talks': '#F0F7E6',
        'accent-yellow': '#FFE600',
        'menu-1': '#28BCCB',
        'menu-2': '#87CB28',
        'menu-3': '#FBAAFF',
        'dark': {
          // Define dark mode colors
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};