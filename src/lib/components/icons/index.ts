import type { SvelteComponent } from "svelte";
import Github from "./github.svelte"
export type Icon = SvelteComponent;
import {
    MenuIcon, 
    Loader2,
} from 'lucide-svelte'
import Google from "./google.svelte";

export const Icons = {
    google: Google,
    github: Github,
    menu: MenuIcon,
    spinner: Loader2
}