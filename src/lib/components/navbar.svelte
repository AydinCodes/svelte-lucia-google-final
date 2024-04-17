<script lang="ts">
	import type { User } from 'lucia';

	export let user: User | null;
</script>

<div class="flex flex-row items-center justify-between p-4">
	<a href="/"> <button class="btn variant-filled-surface rounded">Home</button></a>
	<div class="space-x-2">
		{#if user}
			<a href="/logout"><button class="btn variant-filled-secondary rounded">Log out</button></a>
		{:else}
			<a href="/login"><button class="btn variant-filled-primary rounded">Log in</button></a>
		{/if}
	</div>
</div>
