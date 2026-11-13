<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	import Bell from '$lucide/bell.svelte';
	import Languages from '$lucide/languages.svelte';
	import LogOut from '$lucide/log-out.svelte';
	import Ruler from '$lucide/ruler.svelte';
	import SlidersHorizontal from '$lucide/sliders-horizontal.svelte';
	import User from '$lucide/user.svelte';
	import Users from '$lucide/users.svelte';

	import { authentication } from '$lib/features/identity/client';
	import { i18n } from '$lib/i18n/index.svelte';
	import { SUPPORTED_LOCALES } from '$lib/i18n/types';

	let open = $state(false);

	// Account, preferences, notifications and units share the settings page for now
	const links = $derived([
		{ label: i18n.t.shell.account, url: resolve('/app/settings'), icon: User },
		{ label: i18n.t.shell.household, url: resolve('/app/household'), icon: Users },
		{ label: i18n.t.shell.preferences, url: resolve('/app/settings'), icon: SlidersHorizontal },
		{ label: i18n.t.shell.notifications, url: resolve('/app/settings'), icon: Bell },
		{ label: i18n.t.shell.units, url: resolve('/app/settings'), icon: Ruler }
	]);

	async function signOut() {
		await authentication.signOut();
		open = false;
		await goto(resolve('/auth'));
	}

	function closeOnEscape(event: KeyboardEvent) {
		if (event.key === 'Escape') open = false;
	}
</script>

<svelte:window onkeydown={closeOnEscape} />

<div class="relative">
	<button
		type="button"
		aria-label={i18n.t.shell.accountMenu}
		aria-expanded={open}
		aria-haspopup="menu"
		class="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground focus-visible:outline-2 focus-visible:outline-ring"
		onclick={() => (open = !open)}
	>
		<User class="size-5" />
	</button>

	{#if open}
		<button
			type="button"
			tabindex="-1"
			aria-hidden="true"
			class="fixed inset-0 z-40 cursor-default"
			onclick={() => (open = false)}
		></button>

		<div
			role="menu"
			class="absolute right-0 z-50 mt-2 w-60 rounded-2xl border bg-popover p-1.5 text-popover-foreground shadow-lg"
		>
			{#each links as link (link.label)}
				<a
					href={link.url}
					role="menuitem"
					class="flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-accent"
					onclick={() => (open = false)}
				>
					<link.icon class="size-4 text-muted-foreground" />
					{link.label}
				</a>
			{/each}

			<div class="my-1.5 border-t"></div>

			<div class="flex items-center gap-3 px-3 py-2 text-sm">
				<Languages class="size-4 text-muted-foreground" />
				<span class="flex-1">{i18n.t.language.label}</span>

				{#each SUPPORTED_LOCALES as locale (locale)}
					<button
						type="button"
						aria-pressed={i18n.currentLocale === locale}
						class="rounded-full px-2 py-0.5 text-xs font-medium uppercase hover:bg-accent aria-pressed:bg-primary aria-pressed:text-primary-foreground"
						onclick={() => i18n.setLanguage(locale)}
					>
						{locale}
					</button>
				{/each}
			</div>

			<div class="my-1.5 border-t"></div>

			<button
				type="button"
				role="menuitem"
				class="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-accent"
				onclick={signOut}
			>
				<LogOut class="size-4 text-muted-foreground" />
				{i18n.t.shell.signOut}
			</button>
		</div>
	{/if}
</div>
