import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
   
    extend: {
      backgroundImage: {
        'forestweb': "url('/forest2.webp')",
        
      },
     
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('daisyui'),
  ],
} satisfies Config

export default config