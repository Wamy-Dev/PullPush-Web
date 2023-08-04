<script lang="ts">
	// @ts-nocheck
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import formVerification from '$lib/formVerification';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { ProgressRadial, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import ResultItem from '$lib/returnItem.svelte';
	import UserSection from '$lib/userSection.svelte';
	import { retrievalTypeStore } from '$lib/stores';

	let retrievalType = "submission";
	let loading = false;
	let returnData = [];
	let authorData = {};
	function changeType(e) {
		retrievalTypeStore.set(e.target.value)
		returnData = [];
		authorData = {};
	}
	async function fetchPullPush(retrievalType, value) {
		try {
			const response = await fetch(`${PUBLIC_API_URL}/reddit/search/${retrievalType}/?${value}`)
			const json = await response.json();
			returnData = [];
			returnData = json.data;
			if (returnData.length === 0) {
				const t: ToastSettings = {
					message: "No results found for your search. Please try again with different parameters.",
					background: "variant-filled-error",
					autohide: false
				};
				toastStore.trigger(t);
			}
			return true
		} catch {
			const t: ToastSettings = {
				message: "An error occurred while searching. Please try again later.",
				background: "variant-filled-error",
				hoverable: true
			};
			toastStore.trigger(t);
			loading = false;
		}
	}
	async function fetchReddit(author) {
		try {
			const response = await fetch(`https://www.reddit.com/user/${author.toLowerCase()}/about.json?utm_source=reddit&utm_medium=usertext&utm_name=redditdev&utm_content=t3_1p9s0w`)
			authorData = await response.json();
			return true
		} catch {
			const t: ToastSettings = {
				message: "An error occurred while searching, please try again later.",
				background: "variant-filled-error",
				hoverable: true
			};
			toastStore.trigger(t);
			loading = false;
		}
	}
	async function handleSubmit(e) {
		returnData = [];
		toastStore.clear();
		e.preventDefault();
		loading = true;
		const form = e.target;
		const data = new FormData(form);
		const value = formVerification(data);
		const queryString = new URLSearchParams(value).toString();
		if (value.author) {
			Promise.all([fetchReddit(value.author), fetchPullPush(retrievalType, queryString)]).then(() => {
				loading = false;
			});
		} else {
			await fetchPullPush(retrievalType, queryString);
			loading = false;
		}
	}
	$: retrievalType = $retrievalTypeStore;
</script>

<div class="search flex justify-center my-5 mx-5">
	<div class="bg-surface-100-800-token rounded-3xl max-w-5xl w-full p-4 variant-ghost-surface">
		<form on:submit={handleSubmit}>
			<div class="grid grid-cols-1 sm:grid-cols-3">
				<div class="max-w-xs p-3">
					<label class="label">
						<span>Username<span class="text-[10px] ml-2 text-green-400">yields analytics</span></span>
						<input name="author" class="input rounded-3xl" type="text" placeholder="spez">
					</label>
				</div>
				<div class="max-w-xs p-3">
					<label class="label">
						<span>Subreddit</span>
						<input name="subreddit" class="input rounded-3xl" type="text" placeholder="funny">
					</label>
				</div>
				<div class="max-w-xs p-3">
					<label class="label">
						<span>Search for</span>
						<select name="type" class="select rounded-3xl" bind:value={retrievalType} on:change={changeType}>
							<option value="submission">Posts</option>
							<option value="comment">Comments</option>
						</select>
					</label>
				</div>
			</div>
			<div class="pb-3 px-3">
				<label class="label">
					<span>Query</span>
					<input name="q" class="input rounded-3xl" type="text" placeholder="Search Term">
				</label>
			</div>
			<div class="grid grid-cols-1 sm:grid-cols-2">
				<div class="max-w-lg p-3">
					<label class="label">
						<span>Before Date</span>
						<input type="date" class="input rounded-3xl" name="before">
					</label>
				</div>
				<div class="max-w-lg p-3">
					<label class="label">
						<span>After Date</span>
						<input type="date" class="input rounded-3xl" name="after">
					</label>
				</div>
			</div>
			<div class="h-1 w-full variant-ghost-surface rounded-3xl"/>
			{#if retrievalType === "submissions"}
				<div class="grid grid-cols-1 sm:grid-cols-2">
					<div class="max-w-lg p-3">
						<label class="label">
							<span>Score</span>
							<div class="flex">
								<input name="score" class="input rounded-l-3xl" type="number" placeholder="0" step="50">
								<select name="score_comparator" class="select rounded-r-3xl">
									<option value="=>">Greater Than</option>
									<option value="<=">Less Than</option>
								</select>
							</div>
						</label>
					</div>
					<div class="max-w-lg p-3">
						<label class="label">
							<span>Comments</span>
							<div class="flex">
								<input name="num_comments" class="input rounded-l-3xl" type="number" placeholder="0" step="50">
								<select name="num_comments_comparator" class="select rounded-r-3xl">
									<option value="=>">Greater Than</option>
									<option value="<=">Less Than</option>
								</select>
							</div>
						</label>
					</div>
					<!-- <div class="p-3 grid grid-cols-1 sm:grid-cols-2">
						<label class="label">
							<input name="over_18" class="checkbox rounded-lg" type="checkbox">
							<span>NSFW</span>
						</label>
						<label class="label">
							<input name="is_video" class="checkbox rounded-lg" type="checkbox">
							<span>Is Video</span>
						</label>
						<label class="label">
							<input name="locked" class="checkbox rounded-lg" type="checkbox">
							<span>Locked</span>
						</label>
						<label class="label">
							<input name="stickied" class="checkbox rounded-lg" type="checkbox">
							<span>Stickied</span>
						</label>
						<label class="label">
							<input name="spoiler" class="checkbox rounded-lg" type="checkbox">
							<span>Spoiler</span>
						</label>
						<label class="label">
							<input name="contest_mode" class="checkbox rounded-lg" type="checkbox">
							<span>Contest Mode</span>
						</label>
					</div> -->
				</div>	
			{:else}
				<div class="grid grid-cols-1 sm:grid-cols-2">
					<div class="max-w-lg p-3">
						<label class="label">
							<span>Submission ID</span>
							<input name="link_id" class="input rounded-3xl" type="text" placeholder="15ekc5i">
						</label>
					</div>
					<div class="max-w-lg p-3">
						<label class="label">
							<span>Comment ID's</span>
							<input name="ids" class="input rounded-3xl" placeholder="ju82rny,ju80bov">
						</label>
					</div>
				</div>
			{/if}
			<div>
				{#if loading}
					<button class="btn variant-filled rounded-3xl m-3" type="button" disabled>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"/></svg>
						<span><ProgressRadial width="w-[24px]" meter="stroke-primary-500" track="stroke-primary-500/30" /></span>
					</button>
				{:else}
					<button class="btn variant-filled rounded-3xl m-3" type="submit">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"/></svg>
						<span>Search</span>
					</button>
				{/if}
				<button class="btn variant-filled rounded-3xl m-3" type="reset">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"/></svg>
					<span>Reset</span>
				</button>
			</div>
		</form>
	</div>
</div>
{#if Object.keys(authorData).length > 0}
	<div class="user flex justify-center mt-1 mx-5">
		<UserSection author={authorData}/>
	</div>
{/if}
{#if returnData}
	<div class="results flex justify-center my-1 mx-5">
		<div>
			{#each returnData as item}
				<ResultItem item={item}/>
			{/each}
		</div>
	</div>
{/if}
{#if returnData.length}
	<div class="resultscount flex justify-center my-5 mx-5">
		<p>{returnData.length} Items</p>
	</div>
{/if}

