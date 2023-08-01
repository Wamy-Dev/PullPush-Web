<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
</script>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="rounded-b-3xl">
			<svelte:fragment slot="lead" >
				<a href="/" class="text-xl font-bold">PullPush.io Search</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface rounded-2xl"
					href="https://pullpush.io/"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="carbon:shape-exclude" width=24 />
				</a>
				<a
					class="btn btn-sm variant-ghost-surface rounded-2xl"
					href="https://discord.gg/jsn3TSS8bs"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="carbon:logo-discord" width=24 />
				</a>
				<a
					class="btn btn-sm variant-ghost-surface rounded-2xl"
					href="https://github.com/Wamy-Dev/PullPush-Web"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="carbon:logo-github" width=24/>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<div class="flex justify-between p-3">
			<strong class="text-xl">PullPush.io Search</strong>
			<p>By using <a href="https://pullpush.io" 
				target="_blank" 
				referrerpolicy="no-referrer" 
				class="underline cursor-pointer font-bold">PullPush.io</a> you agree to the <a href="https://pullpush.io/tos.html" 
				target="_blank" 
				referrerpolicy="no-referrer" 
				class="underline cursor-pointer font-bold">TOS</a></p>
			<p>WebUI made by <a href="https://github.com/Wamy-Dev" 
				target="_blank" 
				referrerpolicy="no-referrer" 
				class="underline cursor-pointer font-bold">Wamy</a></p>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
