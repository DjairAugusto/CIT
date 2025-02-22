/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
	extend: {
		colors: {
			primary: {
				1: "#AFAFAF",
				50: "#f6f8f7",
				1000: "#42D0B3",
			},
			secondary: "#F6F8F7",
			gray: {
				low: "#F3F3F3",
				mid: "#D9D9D9"
			}
		},
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
		},
		animation: {
			loading: "spin 1s ease-in-out infinite"
		}
	},
};
export const plugins = [];
