import type { AstroIntegration } from "astro";

export default (): AstroIntegration => ({
	"name": "astro-networks",
	"hooks": {
		"astro:config:setup": () => {},
	},
});
