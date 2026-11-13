<script lang="ts">
	import { page } from '$app/state';

	import { i18n } from '$lib/i18n/index.svelte';

	import { getNavigationItems, isActivePath } from './navigation';

	const items = $derived(getNavigationItems(i18n.t));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -- urls are resolved in navigation.ts -->

<nav
	aria-label={i18n.t.shell.navigation}
	class="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 border-t bg-card/95 px-2 pt-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))] backdrop-blur lg:hidden"
>
	{#each items as item (item.url)}
		{@const active = isActivePath(page.url.pathname, item.url)}

		<a
			href={item.url}
			aria-current={active ? 'page' : undefined}
			class="flex flex-col items-center gap-0.5 rounded-xl py-1 text-[0.6875rem] font-medium text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring data-[active=true]:text-primary"
			data-active={active}
		>
			<span class="rounded-full px-4 py-1 transition-colors {active ? 'bg-accent' : ''}">
				<item.icon class="size-5" strokeWidth={1.8} />
			</span>
			{item.title}
		</a>
	{/each}
</nav>
