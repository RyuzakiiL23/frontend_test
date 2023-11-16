import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'catkout': "url('/images.jpeg')",
        '1': "url('/1.png')",
        '2': "url('/2.png')",
        '4': "url('/4.png')",
        '5': "url('/5.webp')",
        '6': "url('/6.png')",
        '7': "url('/7.png')",
        '8': "url('/8.jpeg')",
        '9': "url('/9.png')",
        '10': "url('/10.png')",
        '11': "url('/11.png')",
        '12': "url('/12.png')",
        '13': "url('/13.webp')",
        '14': "url('/33.png')",
        'logo': "url'/graduate.png'",
        'heropattern': "url('/4.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("@catppuccin/tailwindcss")],
}
export default config
