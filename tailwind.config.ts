import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#F8FAFC',
        primary: '#F97316',
        'primary-light': '#FDBA74',
        'background-selected': '#FFEDD5',
        'background-container': '#FFF',
        'primary-text': '#1E293B',
        'secondary-text': '#94A3B8',
        'user-text': '#10B981',
        'ai-text': '#F97316',
      },
    },
  },
  plugins: [],
}
export default config
