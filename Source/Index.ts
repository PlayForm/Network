import type { AstroIntegration } from "astro";

export default (): AstroIntegration => ({
	name: "network-astro",
	hooks: {
		"astro:config:setup": () => {},
	},
});
