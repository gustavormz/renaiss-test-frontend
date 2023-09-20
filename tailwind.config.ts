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
      height: {
        '45': '2.813rem',
        '93': '5.813rem',
      },
      minWidth: {
        '45': '2.813rem',
      },
      padding: {
        '10': '0.625rem',
        '15': '0.938rem',
        '20': '1.25rem',
        '23': '1.438rem',
        '24': '1.5rem',
        '25': '1.563rem',
        '33': '2.063rem',
        '37': '2.313rem',
        '47': '2.938rem',
        '62': '3.875rem',
      },
      gap: {
        '13': '0.813rem',
      },
      borderRadius: {
        '4': '0.25rem',
        '10': '0.625rem',
      },
      fontWeight: {
        '400': '400',
        '600': '600',
      },
      lineHeight: {
        '25': '1.563rem',
      },
      spacing: {
        '10': '0.625rem',
        '33': '2.063rem',
      },
      fontSize: {
        '14': '0.875rem',
      },
    },
  },
  plugins: [],
}
export default config
