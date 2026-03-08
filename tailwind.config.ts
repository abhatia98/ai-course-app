import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        panel: '#111827',
        soft: '#f8fafc',
        accent: '#2563eb'
      },
      boxShadow: {
        card: '0 12px 40px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
