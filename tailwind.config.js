/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        //custon colors {
        'light-white': "#FFFFFF",  //bg-white
        'light-100': "#F3F4F6",    //bg-gray-100
        'light-black': "#000000",  //bg-black
        'dark-700': '#374151',     //bg-gray-700
        'dark-800': '#1F2937',     //bg-gray-800
        'dark-900': "#111827",     //bg-gray-900
        light: {
          'DEFAULT': "#FFFFFF",    //text-white,
          'star-400': "#fbbf24",   //text-yellow-400,
          'textr-500': "#f43f5e",  //text-rose-500,
          'textr-600': "#e11d48",  //text-rose-600,
          'textr-900': "#881337",  //text-rose-900,
          'white': "#FFFFFF",      //text-white,
          '400': "#818cf8",        //text-indigo-400
          '500': "#6366f1",        //text-indigo-500
          '600': "#4f46e5",        //text-indigo-600
          '800': "#3730a3",        //text-indigo-800
        },
        dark: {
          'DEFAULT': undefined, 
          'white': "#FFFFFF",  //text-white
          '300': "#d1d5db",    //text-gray-300
          'i400': "#818cf8",   //text-indigo-400
        },
        //custon colors }
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
