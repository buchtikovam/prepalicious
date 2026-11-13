import { resolve } from '$app/paths';

import CalendarDays from '$lucide/calendar-days.svelte';
import ChefHat from '$lucide/chef-hat.svelte';
import CookingPot from '$lucide/cooking-pot.svelte';
import House from '$lucide/house.svelte';
import Refrigerator from '$lucide/refrigerator.svelte';

import type { Dictionary } from '$lib/i18n/types';

export type NavigationItem = {
	title: string;
	url: string;
	icon: typeof House;
};

export function getNavigationItems(t: Dictionary): NavigationItem[] {
	return [
		{ title: t.shell.today, url: resolve('/app/dashboard'), icon: House },
		{ title: t.shell.mealPlan, url: resolve('/app/planner'), icon: CalendarDays },
		{ title: t.shell.recipes, url: resolve('/app/recipes'), icon: CookingPot },
		{ title: t.shell.kitchen, url: resolve('/app/kitchen'), icon: ChefHat },
		{ title: t.shell.pantry, url: resolve('/app/pantry'), icon: Refrigerator }
	];
}

export function isActivePath(pathname: string, url: string): boolean {
	return pathname === url || pathname.startsWith(`${url}/`);
}
