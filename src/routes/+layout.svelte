<script>
	import '../app.pcss';
	import Header from '$lib/components/Header.svelte';
	import { ModeWatcher } from "mode-watcher";
</script>

<Header/>
<ModeWatcher/>
<slot />
