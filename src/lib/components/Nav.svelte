<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>
<!-- 
	- Side Bar Nav example: To place it inside the Sheet component https://github.com/huntabyte/shadcn-svelte/blob/main/apps/www/src/routes/examples/forms/(components)/sidebar-nav.svelte
	This is where it came from https://www.shadcn-svelte.com/examples/forms
	- Menu for Login: Example of how to create a menu that dropsdown https://github.com/huntabyte/shadcn-svelte/blob/main/apps/www/src/lib/components/docs/dashboard/user-nav.svelte
	Here is how its used, named userNav https://github.com/huntabyte/shadcn-svelte/blob/main/apps/www/src/lib/components/docs/dashboard/dashboard-page.svelte
	- Example of how to use a main nav and a mobile nav
	main nav: https://github.com/huntabyte/shadcn-svelte/blob/main/apps/www/src/lib/components/docs/nav/main-nav.svelte
	mobile nav: https://github.com/huntabyte/shadcn-svelte/blob/main/apps/www/src/lib/components/docs/nav/mobile-nav.svelte
	container for navs: https://github.com/huntabyte/shadcn-svelte/blob/main/apps/www/src/lib/components/docs/site-header.svelte
	COntainer of container xd: https://github.com/huntabyte/shadcn-svelte/blob/main/apps/www/src/routes/%2Blayout.svelte
 -->
<nav class={cn("hidden md:flex items-center space-x-4 lg:space-x-6", className)}>
	<a href="/examples/dashboard" class="text-sm font-medium transition-colors hover:text-primary">
		Overview
	</a>

	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Customers
	</a>
	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Products
	</a>
	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
	>
		Settings
	</a>
</nav>