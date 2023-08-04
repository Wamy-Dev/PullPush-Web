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
				<a href="/" class="text-xl font-bold">Reddit-Search</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface rounded-2xl"
					href="https://pullpush.io/"
					target="_blank"
					rel="noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M12 10h10V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6V12a2 2 0 0 1 2-2Z"/><path fill="currentColor" d="M28 10h-6v10a2 2 0 0 1-2 2H10v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2Z"/></svg>
				</a>
				<a
					class="btn btn-sm variant-ghost-surface rounded-2xl"
					href="https://discord.gg/jsn3TSS8bs"
					target="_blank"
					rel="noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M25.7 7.1C23.9 6.3 22 5.7 20 5.3h-.1c-.2.4-.5 1-.7 1.5c-2.2-.3-4.3-.3-6.4 0c-.2-.5-.5-1-.7-1.5H12c-2 .3-3.9.9-5.7 1.8C2.7 12.5 1.7 17.8 2.2 23v.1c2.4 1.8 4.7 2.8 7 3.5h.1c.5-.7 1-1.5 1.4-2.3v-.1c-.8-.3-1.5-.6-2.2-1c-.1 0-.1-.1 0-.1c.1-.1.3-.2.4-.3H9c4.6 2.1 9.5 2.1 14.1 0h.1c.1.1.3.2.4.3c.1 0 0 .1 0 .1c-.7.4-1.4.8-2.2 1c0 0-.1.1 0 .1c.4.8.9 1.6 1.4 2.3h.1c2.3-.7 4.6-1.8 7-3.5V23c.6-6-1-11.2-4.2-15.9zM11.4 19.9c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8c0 1.5-1.1 2.8-2.5 2.8zm9.3 0c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8c0 1.5-1.1 2.8-2.5 2.8z"/></svg>
				</a>
				<a
					class="btn btn-sm variant-ghost-surface rounded-2xl"
					href="https://github.com/Wamy-Dev/PullPush-Web"
					target="_blank"
					rel="noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"/></svg>
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
