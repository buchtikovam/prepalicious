<script lang="ts">
	import { page } from '$app/state';

	import AppHandle from '$ui/AppHandle.svelte';

	import { i18n } from '$lib/i18n/index.svelte';

	import AvatarMenu from './AvatarMenu.svelte';
	import { getNavigationItems, isActivePath } from './navigation';

	const items = $derived(getNavigationItems(i18n.t));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -- urls are resolved in navigation.ts -->

<header class="sticky top-0 z-40 hidden items-center gap-6 bg-background/90 px-6 py-3 backdrop-blur lg:flex">
	<AppHandle />

	<nav aria-label={i18n.t.shell.navigation} class="mx-auto flex items-center gap-1">
		{#each items as item (item.url)}
			{@const active = isActivePath(page.url.pathname, item.url)}

			<a
				href={item.url}
				aria-current={active ? 'page' : undefined}
				class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring data-[active=true]:bg-card data-[active=true]:text-foreground data-[active=true]:shadow-sm"
				data-active={active}
			>
				<item.icon class="size-4.5" strokeWidth={1.8} />
				{item.title}
			</a>
		{/each}
	</nav>

	<AvatarMenu />
</header>
