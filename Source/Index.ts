import type { AstroIntegration } from "astro";

export default (): AstroIntegration => ({
	name: "@playform/network",
	hooks: {
		"astro:config:setup": () => {},
	},
});
