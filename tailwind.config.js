    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        // This path is CRITICAL. Ensure it matches where your React components are.
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
        
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
    