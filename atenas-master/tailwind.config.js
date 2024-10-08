/** @type {import('tailwindcss').Config} */

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: "var(--white)",
				black: "var(--black)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				gray: "var(--gray)",
				darkGray: "var(--darkGray)",
			},
			boxShadow: {
				"custom-shadow":
					"0px 0px 5.3px rgba(0, 0, 0, 0.079), 0px 0px 17.9px rgba(0, 0, 0, 0.111), 0px 0px 80px rgba(0, 0, 0, 0.18)",
			},
			keyframes: {
				slideIn: {
					"100%": {
						transform: "translateX(-425px)",
					},
				},
				slideOut: {
					"0%": {
						transform: "translateX(-425px)",
					},
					"100%": {
						transform: "translateX(0px)",
					},
				},
			},
			animation: {
				slideIn: "slideIn 0.3s ease forwards",
				slideOut: "slideOut 0.3s ease forwards",
			},
		},
	},
	plugins: [],
};

export default config;
