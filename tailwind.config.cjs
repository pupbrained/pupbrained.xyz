/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}', '*.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      rosewater: '#f5e0dc',
      flamingo: '#f2cdcd',
      pink: '#f5c2e7',
      mauve: '#cba6f7',
      red: '#f38ba8',
      maroon: '#eba0ac',
      peach: '#fab387',
      yellow: '#f9e2af',
      green: '#a6e3a1',
      teal: '#94e2d5',
      sky: '#89dceb',
      sapphire: '#74c7ec',
      blue: '#89b4fa',
      lavender: '#b4befe',
      purple: '#c9a9f7',
      text: '#cdd6f4',
      subtext1: '#bac2de',
      subtext0: '#a6adc8',
      overlay2: '#9399b2',
      overlay1: '#7f849c',
      overlay0: '#6c7086',
      surface2: '#585b70',
      surface1: '#45475a',
      surface0: '#313244',
      base: '#1e1e2e',
      mantle: '#181825',
      crust: '#11111b',
      basetranslucent: '#1e1e2e88',
    },
    extend: {
      fontFamily: {
        jetbrains: ['JetBrainsMono Nerd Font'],
        hack: ['Hack Nerd Font'],
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities}) {
      addUtilities({
        '.allsides': {
          backgroundSize: 'var(--d, 0) 1px, 1px var(--d, 0) !important',
          backgroundRepeat: 'no-repeat !important',
          transition: '0.5s !important',
        },
        '.allsides-4to5': {
          transition: '0.5s, background-position 0s 0.5s !important',
        },
        '.allsides-1': {
          background: `linear-gradient(currentColor 0 0) 100% 0,
          linear-gradient(currentColor 0 0) 0 0,
          linear-gradient(currentColor 0 0) 0 100%,
          linear-gradient(currentColor 0 0) 100% 100%`,
        },
        '.allsides-2': {
          background: `linear-gradient(currentColor 0 0) 0 0,
          linear-gradient(currentColor 0 0) 0 0,
          linear-gradient(currentColor 0 0) 100% 100%,
          linear-gradient(currentColor 0 0) 100% 100%`,
        },
        '.allsides-3': {
          background: `linear-gradient(currentColor 0 0) top,
          linear-gradient(currentColor 0 0) left,
          linear-gradient(currentColor 0 0) bottom,
          linear-gradient(currentColor 0 0) right`,
        },
        '.allsides-4': {
          background: `linear-gradient(currentColor 0 0) var(--p, 100%) 0,
          linear-gradient(currentColor 0 0) 0 var(--d, 0),
          linear-gradient(currentColor 0 0) var(--d, 0) 100%,
          linear-gradient(currentColor 0 0) 100% var(--p, 100%)`,
        },
        '.allsides-5': {
          background: `linear-gradient(currentColor 0 0) var(--d, 0) 0,
          linear-gradient(currentColor 0 0) 0 var(--d, 0),
          linear-gradient(currentColor 0 0) var(--p, 100%) 100%,
          linear-gradient(currentColor 0 0) 100% var(--p, 100%)`,
        },
        '.allsides-6': {
          background: `linear-gradient(currentColor 0 0) 0 0,
          linear-gradient(currentColor 0 0) 0 0,
          linear-gradient(currentColor 0 0) 0 100%,
          linear-gradient(currentColor 0 0) 0 100%,
          linear-gradient(currentColor 0 0) 100% 0,
          linear-gradient(currentColor 0 0) 100% 0,
          linear-gradient(currentColor 0 0) 100% 100%,
          linear-gradient(currentColor 0 0) 100% 100%`,
        },
        '.allsides-1to3-hover': {'--d': '100% '},
        '.allsides-4to6-hover': {'--d': '100%', '--p': '0%'},
        '.scrollbar-hide': {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',
        },
      })
    }),
  ],
}
