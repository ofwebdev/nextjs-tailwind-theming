import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme1: {
          primary: '#FF5733',
          secondary: '#007BFF',
          accent: '#FFC107',
          success: '#28A745',
          error: '#DC3545',
          info: '#17A2B8',
          white: '#FFFFFF',
          black: '#000000',
          body: '#000000',
        },
        theme2: {
          primary: '#E83E8C',
          secondary: '#6F42C1',
          accent: '#20C997',
          success: '#4CAF50',
          error: '#F44336',
          info: '#2196F3',
          white: '#FFFFFF',
          black: '#000000',
          body: '#000000',

        },
        theme3: {
          primary: '#C39046',
          secondary: '#607D8B',
          accent: '#9C27B0',
          success: '#8BC34A',
          error: '#FF5722',
          info: '#00BCD4',
          white: '#FFFFFF',
          black: '#000000',
          body: '#000000',

        },
        theme4: {
          primary: '#FF9800',
          secondary: '#9E9E9E',
          accent: '#CDDC39',
          success: '#FFEB3B',
          error: '#FFC107',
          info: '#FF5722',
          white: '#FFFFFF',
          black: '#000000',
          body: '#000000',

        },
        theme5: {
          primary: '#673AB7',
          secondary: '#009688',
          accent: '#FF9800',
          success: '#FFC107',
          error: '#E91E63',
          info: '#03A9F4',
          white: '#FFFFFF',
          black: '#000000',
          body: '#000000',

        },
        theme6: {
          primary: '#3F51B5',
          secondary: '#FF5722',
          accent: '#4CAF50',
          success: '#607D8B',
          error: '#9C27B0',
          info: '#8BC34A',
          white: '#FFFFFF',
          black: '#000000',
          body: '#000000',

        },
        dark: {
          primary: '#121212', // Background color
          secondary: '#1E1E1E', // Accent color
          text: '#FFFFFF', // Text color
          accent: '#FFC107', // Highlight color
          success: '#4CAF50',
          error: '#F44336',
          info: '#2196F3',
          white: '#FFFFFF',
          black: '#000000',
          body: '#000000',

        },
        light: {
          primary: '#FFFFFF', // Background color
          secondary: '#F3F4F6', // Accent color
          text: '#333333', // Text color
          accent: '#FFC107', // Highlight color
          success: '#4CAF50',
          error: '#F44336',
          info: '#2196F3',
          border: '#CCCCCC', // Border color
          white: '#FFFFFF',
          black: '#000000',
          body: '#ffffff',

        },
      },
    },
  },
  plugins: [],
}
export default config



