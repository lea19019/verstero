<script lang="ts">
	import Search from "./Search.svelte";
    import Nav from "./Nav.svelte";
    import ToggleModeUi from "./ToggleModeUI.svelte";
</script>

<div class="border-b">
    <div class="flex h-12 items-center px-2">
        <h2 class="hidden md:block text-lg font-semibold">Verstero</h2>
        <Nav class="mx-6" /> 
        <div class="ml-auto flex items-center space-x-4">
            <Search />
            <ToggleModeUi />
        </div>
    </div>
</div>