import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				calibri: ["var(--font-calibri)"],
				stalker: ["var(--font-stalker)"],
				roboto_condensed: ["var(--font-roboto_condensed)"],
				roboto: ["var(--font-roboto)"],
				rethink: ["var(--font-rethink)"],
			},
			colors: {
				primary: {
					main: "#A8A3A0",
					mainBlack: "#1E1A17",
					black: "#0A0A09",
					white: "#FFFFFF",
					gray: "#9E9D98",
					dark_gray: "#7B7B7A"
				},
				regular: {
					black: "#160F10",
					white: "#EBEAE8",
					white_opacity: "#ebeae83d",
				},
				main: {
					black: "#11100E"
				},
				pda: {
					white: "#A8A3A0",
					black: "#1D1C1A",
					border: "#403E3C",
					destructive: "#CABFB0",
					links: "#7B7A78",
					linksActive: "#BFBCB7",
					display: "#14110F",
					light_yellow: "#C2BDB7",
					footer: "#1E1C1A",
					ico: "#1E1C19",
				},
				gradient: {
					colorOne: "#898883",
					colorTwo: "#BFBEBA",
					colorThree: "#C9C2B2"
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
