<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.postcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData
</script>

<Navbar user={data.user}/>
<slot />
