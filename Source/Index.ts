import type { AstroIntegration } from "astro";

export default (): AstroIntegration => ({
	name: "astro-network",
	hooks: {
		"astro:config:setup": () => {},
	},
});
