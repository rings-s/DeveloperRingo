<script>
    import '../app.css';
    import { language } from '$lib/stores/language.svelte.js';
    import { onMount } from 'svelte';
	let { children } = $props();

    onMount(() => {
        // Set initial language direction
        document.documentElement.lang = language.current;
        document.documentElement.dir = language.dir;
    });
</script>

{@render children()}
