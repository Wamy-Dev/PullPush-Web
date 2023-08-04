<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { LightSwitch, Toast } from '@skeletonlabs/skeleton';
</script>
<Toast rounded="rounded-3xl" shadow="shadow-lg"/>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="rounded-b-3xl variant-ghost-surface">
			<svelte:fragment slot="lead">
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
		<div class="grid grid-cols-3 p-3 gap-6 items-center">
			<div class="flex justify-start">
				<LightSwitch rounded="rounded-3xl" />
			</div>
			<div class="text-center">
				<p class="break-keep">By using <a href="https://pullpush.io" 
					target="_blank" 
					referrerpolicy="no-referrer" 
					class="underline cursor-pointer font-bold break-keep">PullPush.io</a> you agree to the <a href="https://pullpush.io/tos.html" 
					target="_blank" 
					referrerpolicy="no-referrer" 
					class="underline cursor-pointer font-bold break-keep">TOS</a>
				</p>
			</div>
			<div class="flex justify-end break-keep">
				<p class="break-keep">WebUI made by <a href="https://github.com/Wamy-Dev" 
					target="_blank" 
					referrerpolicy="no-referrer" 
					class="underline cursor-pointer font-bold break-keep">Wamy</a>
				</p>
			</div>
		</div>
	</svelte:fragment>
	<slot />
</AppShell>
