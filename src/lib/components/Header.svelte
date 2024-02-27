<script lang="ts">
	import Search from "./Search.svelte";
    import Nav from "./Nav.svelte";
</script>

<div class="border-b">
    <div class="flex h-16 items-center px-4">
        <h2 class="text-lg font-semibold">Playground</h2>
        <Nav class="mx-6" />
        <div class="ml-auto flex items-center space-x-4">
            <Search />
        </div>
    </div>
</div>