import type { SvelteComponent } from "svelte";
import Github from "./github.svelte"
export type Icon = SvelteComponent;
import {
    MenuIcon, 
    Loader2
} from 'lucide-svelte'

export const Icons = {
    github: Github,
    menu: MenuIcon,
    spinner: Loader2
}