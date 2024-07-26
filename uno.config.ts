// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: [
    // short
    ['w-site', 'wfull mx-auto max-w-[1150px] lt-lg:px-6 md:px-12 lg:px-12'],
    ['w-content', 'wfull mx-auto max-w-screen-lg lt-2md:px-6 2md:px-20'],
    ['w-content2', 'wfull mx-auto max-w-[1180px] lt-2md:px-6 2md:px-20'],
    ['flex-c', 'flex items-center'],
    ['flex-b', 'flex justify-between'],
    ['flex-cb', 'flex items-center justify-between'],
    ['wh', 'hfull wfull'],
    ['wh-inherit', 'h-inherit w-inherit'],
    ['icon-link', 'h4 mt0.5 transform ease duration-400 group-hover:(translate-x-1.5)'],
    ['btn-link', 'py3 px6 2xl:px8 border border-gray-1 text-gray-1 hover:text-gray-9 duration-300 relative z1 of-hidden [&>span]:(block absolute w0 h0 -z1 rounded-[50%] bg-white -translate-50% -top-5px left-70px btn-transition)'],
    ['apply-link', 'py2 px5 2xl:px6 text-white tracking-tight hover:text-e-primary duration-300 relative z1 of-hidden [&>span]:(block absolute w0 h0 -z1 rounded-[50%] bg-white -translate-50% -top-5px left-70px btn-transition)'],
    ['nav-link', 'py5 text-4 block hover:text-green-7 transition duration-300 relative'],
    ['nav-active', ''],
    ['2-grid', 'grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lt-sm:gap-y-6 gap-2'],
    ['3-grid', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lt-sm:gap-y-6 gap-6'],
    ['4-grid', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'],
    // ['4-grid', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap6'],
  ],

  rules: [
    ['btn-transition', { transition: 'width .2s ease-in, height .4s ease-in' }],
    ['bg-pos-right-top', { 'background-position': 'right top' }],
    ['bg-pos-left-bottom', { 'background-position': 'left bottom' }],
    ['bg-svgs-special', {
      'background-image': `url('/images/Vector1.svg'), url('/images/Vector3.svg'), url('/images/Vector2.svg')`,
      'background-position': 'right top, center, left bottom',
      'background-repeat': 'no-repeat, no-repeat, no-repeat',
      'background-size': '58%, 50%, 50%'  // You can adjust sizes as needed
    }],
    ['bg-size', {'background-size': '750px', 'background-position': 'right 30px'}],
    ['bg-lg-size', {'background-size': '600px', 'background-position': 'left, 10%'}],
    ['bg-sm-size', {'background-size': '400px', 'background-position': '-20px bottom'}]
  ],

  theme: {
    // ...
    breakpoints: {
      'xs': '460px',
      // => @media (min-width: 475px) { ... }
      '2xs': '530px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      '2sm': '690px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      '2md': '840px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      '2lg': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1780px',
      // => @media (min-width: 1780px) { ... }
    },

    screens: {
      'mid-screen': { raw: '(min-width: 530px) and (max-width: 640px)' }
    },

    colors: {
      e: {
        primary: '#4DB6AC',
        primaryHover: '#002057',
      },
    },

    boxShadow: {
      custom: '0 4px 100px 20px rgba(202, 202, 202, 0.3)'
    },

    fontSize: {
      base: '0.5rem'
    }
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetRemToPx({
      baseFontSize:14
    }),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sen: [
          {
            name: 'Poppins',
            weights: ['400', '500', '600', '700', '800'],
          },
          {
            name: 'san-serif',
            provider: 'none',
          },
        ],
        // garamond: [
        //   {
        //     name: 'Cormorant Garamond',
        //     weights: ['300', '400', '500', '600', '700'],
        //   },
        //   {
        //     name: 'serif',
        //     provider: 'none',
        //   },
        // ],
        // playfair: [
        //   {
        //     name: 'Playfair Display',
        //     weights: ['400', '500', '600', '700'],
        //   },
        //   {
        //     name: 'serif',
        //     provider: 'none',
        //   },
        // ],
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})