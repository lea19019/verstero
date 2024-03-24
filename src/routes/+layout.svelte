<script>
    import '../app.pcss';
    import Header from '$lib/components/Header.svelte';
    import { ModeWatcher } from "mode-watcher";
    import { user, userData } from "$lib/firebase";
   $user;
   $userData; 
</script>

<div class="h-screen grid grid-rows-[auto,1fr]">
    <div>
        <Header/>
        <ModeWatcher/>
    </div>

    <div class="overflow-auto">
        <slot />
    </div>
</div>