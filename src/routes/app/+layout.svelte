<script lang="ts">
	import type { Snippet } from 'svelte';

	import BottomNav from '$lib/shell/BottomNav.svelte';
	import TopNav from '$lib/shell/TopNav.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-svh w-full flex-col">
	<TopNav />

	<main class="flex-1 p-2 pb-20 lg:px-6 lg:pb-6">
		{@render children?.()}
	</main>

	<BottomNav />
</div>
