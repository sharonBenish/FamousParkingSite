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

export default defineConfig({
  // ...UnoCSS options
  shortcuts: [
    // short
    ['w-site', 'wfull mx-auto max-w-screen-2xl lt-lg:px-6 px-10'],
    ['w-content', 'wfull mx-auto max-w-screen-2lg lt-2md:px-6 2md:px-20'],
    ['flex-c', 'flex items-center'],
    ['flex-b', 'flex justify-between'],
    ['flex-cb', 'flex items-center justify-between'],
    ['wh', 'hfull wfull'],
    ['wh-inherit', 'h-inherit w-inherit'],
    ['icon-link', 'h4 mt0.5 transform ease duration-400 group-hover:(translate-x-1.5)'],
    ['btn-link', 'py3 px6 2xl:px8 border border-gray-1 text-gray-1 hover:text-gray-9 duration-300 relative z1 of-hidden [&>span]:(block absolute w0 h0 -z1 rounded-[50%] bg-white -translate-50% -top-5px left-70px btn-transition)'],
    ['apply-link', 'py2 px5 2xl:px6 text-white tracking-tight hover:text-e-primary duration-300 relative z1 of-hidden [&>span]:(block absolute w0 h0 -z1 rounded-[50%] bg-white -translate-50% -top-5px left-70px btn-transition)'],
    ['nav-link', 'py5 block hover:text-green-7 transition duration-300 relative'],
    ['nav-active', ''],
    ['2-grid', 'grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lt-sm:gap-y-6 gap-2'],
    ['3-grid', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lt-sm:gap-y-6 gap-6'],
    ['4-grid', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'],
    // ['4-grid', 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap6'],

    // program
    ['program-card', 'h100 wfull relative bg-white border hover:border-e-primary duration-400'],
    ['program-pop-out-card', 'absolute top-3 -left-2.5 bg-green-6 w1/2 text-center py0.5 text-e-primary text-3.5 before:(content-[\'\'] absolute -z1 -bottom-2.5 left-0 h0 w0 border-b-10 border-b-transparent border-t-10 border-t-transparent border-r-10 border-r-green-8)'],
    ['scholarship-pop-out-card', 'absolute top-10 -left-2.5 bg-yellow-5 w1/2 text-center py0.5 text-e-primary text-3.5 before:(content-[\'\'] absolute -z1 -bottom-2.5 left-0 h0 w0 border-b-10 border-b-transparent border-t-10 border-t-transparent border-r-10 border-r-yellow-5)'],

    // accordion
    ['accordion-item', 'px mt-px wfull border-b border-gray-2 data-[state=open]:border-green-5 shadow-gray overflow-hidden first:mt-0 focus-within:relative data-[state=open]:bg-white focus-within:z-2'],
    ['accordion-trigger', 'wfull flex-cb space-x-4 py5 outline-none border-none data-[state=open]:bg-white'],
    // ['accordion-content', 'data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ']

    // tab
    ['tab-root', 'relative -mt10 w-site bg-white'],
    ['tab-list', 'shrink-0 flex lt-sm:justify-between lg:space-x-4 bg-e-primary/4 px pt3'],
    ['tab-trigger', 'py3.5 px3 sm:px lt-lg:leading-none tracking-tight fw500 lg:text-4.5 data-[state=active]:(bg-e-primary text-white) data-[state=inactive]:bg-white'],
    ['tab-content', 'px py8'],
  ],

  rules: [
    ['btn-transition', { transition: 'width .2s ease-in, height .4s ease-in' }],
    ['bg-pos-right-top', { 'background-position': 'right top' }],
    ['bg-pos-left-bottom', { 'background-position': 'left bottom' }],
    ['bg-svgs-special', {
      'background-image': `url('/images/Vector1.svg'), url('/images/Vector3.svg'), url('/images/Vector2.svg')`,
      'background-position': 'right top, center, left bottom',
      'background-repeat': 'no-repeat, no-repeat, no-repeat',
      //'background-size': 'contain, contain, contain'  // You can adjust sizes as needed
    }],
    ['bg-size', {'background-size': '850px'}],
  ],

  theme: {
    // ...
    breakpoints: {
      'xs': '475px',
      // => @media (min-width: 475px) { ... }
      '2xs': '530px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      '2md': '850px',
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
    }
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
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