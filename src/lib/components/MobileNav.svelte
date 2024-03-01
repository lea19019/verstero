<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet";
    import { Button } from "$lib/components/ui/button";
	import MobileLink from "./MobileLink.svelte";
    import {MenuIcon} from 'lucide-svelte'

	let open = false;
    let mainNav = [{"title":"Overview","href":"/examples/dashboard"},{"title":"Customers","href":"/examples/dashboard"},{"title":"Products","href":"/examples/dashboard"},{"title":"Settings","href":"/examples/dashboard"}]
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="ghost"
			class="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
		>
			<MenuIcon class="h-5 w-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="pr-0">
		<MobileLink href="/" class="flex items-center" bind:open>
			<span class="font-bold">Verstero</span>
		</MobileLink>
		<div class="my-4 h-[calc(100vh-8rem)] overflow-auto pb-10 pl-6">
			<div class="flex flex-col space-y-3">
				{#each mainNav as navItem, index (navItem + index.toString())}
					{#if navItem.href}
						<MobileLink href={navItem.href} bind:open class="text-foreground">
							{navItem.title}
						</MobileLink>
					{/if}
				{/each}
			</div>
			
		</div>
	</Sheet.Content>
</Sheet.Root>
