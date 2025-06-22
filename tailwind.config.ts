import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", // Reference CSS variable
        foreground: "hsl(var(--foreground))", // Reference CSS variable
        primary: {
          DEFAULT: "#1A1621", // Dark Purple/Black
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#221D28", // Dark Charcoal
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Vibrant Purple/Pink (t3.chat style)
          foreground: "hsl(var(--accent-foreground))",
        },
        "cta-button": {
          DEFAULT: "hsl(var(--cta-button))", // Vibrant Purple/Pink (t3.chat style)
          foreground: "hsl(var(--cta-button-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "navbar-background": "#150F14", // Deep Brown-Black for Navbar
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Use Inter for sans
        heading: ["var(--font-inter)", "sans-serif"], // Use Inter for heading
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
