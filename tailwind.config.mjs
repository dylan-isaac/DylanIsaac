import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: {
          DEFAULT: '#FF69B4', // Pink
          light: '#FF8CC6',
          dark: '#D14B91',
        },
        secondary: {
          DEFAULT: '#28BCCB', // Cyan
          light: '#4FD8E6',
          dark: '#1E8F9B',
        },
        accent: {
          DEFAULT: '#87CB28', // Green
          light: '#A1E042',
          dark: '#699C1F',
          yellow: '#FFEA31',
        },
        // Semantic colors
        content: {
          DEFAULT: '#1F2937',
          muted: '#6B7280',
          subtle: '#9CA3AF',
          inverted: '#FEFCFA',
        },
        surface: {
          DEFAULT: '#FEFCFA',
          secondary: '#FDF9F6',
          muted: '#FAF7F3',
        },
        // Dark mode variants
        'dark-content': {
          DEFAULT: '#F9FAFB',
          muted: '#D1D5DB',
          subtle: '#9CA3AF',
          inverted: '#1A1A1A',
        },
        'dark-surface': {
          DEFAULT: '#1A1A1A',
          secondary: '#242424',
          muted: '#2A2A2A',
        },
      },
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.25rem', { lineHeight: '1.3' }],
        'h3': ['1.5rem', { lineHeight: '1.4' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1.125rem', { lineHeight: '1.5' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'content': '75ch',
        'content-wide': '85ch',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.content.DEFAULT'),
            '--tw-prose-headings': theme('colors.content.DEFAULT'),
            '--tw-prose-links': theme('colors.primary.DEFAULT'),
            '--tw-prose-bold': theme('colors.content.DEFAULT'),
            '--tw-prose-code': theme('colors.content.DEFAULT'),
            '--tw-prose-quotes': theme('colors.content.muted'),
            maxWidth: 'none',
            fontSize: theme('fontSize.body[0]'),
            h1: {
              fontSize: theme('fontSize.h1[0]'),
              lineHeight: theme('fontSize.h1[1].lineHeight'),
              fontWeight: theme('fontWeight.bold'),
              letterSpacing: theme('fontSize.h1[1].letterSpacing'),
              marginBottom: theme('spacing.lg'),
            },
            h2: {
              fontSize: theme('fontSize.h2[0]'),
              lineHeight: theme('fontSize.h2[1].lineHeight'),
              fontWeight: theme('fontWeight.bold'),
              marginTop: theme('spacing.xl'),
              marginBottom: theme('spacing.md'),
            },
            h3: {
              fontSize: theme('fontSize.h3[0]'),
              lineHeight: theme('fontSize.h3[1].lineHeight'),
              fontWeight: theme('fontWeight.medium'),
              marginTop: theme('spacing.lg'),
              marginBottom: theme('spacing.sm'),
            },
            p: {
              marginBottom: theme('spacing.md'),
            },
            a: {
              color: theme('colors.primary.DEFAULT'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.dark-content.DEFAULT'),
            '--tw-prose-headings': theme('colors.dark-content.DEFAULT'),
            '--tw-prose-links': theme('colors.primary.light'),
            '--tw-prose-bold': theme('colors.dark-content.DEFAULT'),
            '--tw-prose-code': theme('colors.dark-content.DEFAULT'),
            '--tw-prose-quotes': theme('colors.dark-content.muted'),
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Glacial Indifference', ...defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}