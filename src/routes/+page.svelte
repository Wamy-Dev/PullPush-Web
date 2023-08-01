<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import Icon from '@iconify/svelte';
	import formVerification from '$lib/formVerification';

	let retrievalType = "submissions";
	function changeType(e) {
		retrievalType = e.target.value;
	}
	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const value = formVerification(data);
		console.log(value);
	}
</script>

<div class="search flex justify-center my-5 mx-5">
	<div class="bg-surface-100-800-token rounded-3xl max-w-5xl w-full p-4 variant-ghost-surface">
		<form on:submit={handleSubmit}>
			<div class="grid grid-cols-1 sm:grid-cols-3">
				<div class="max-w-xs p-3">
					<label class="label">
						<span>Username</span>
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
							<option value="submissions">Posts</option>
							<option value="comments">Comments</option>
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
				<div class="grid grid-cols-1 sm:grid-cols-3">
					<!-- TODO: Comparators -->
					<div class="max-w-xs p-3">
						<label class="label">
							<span>Score</span>
							<input name="score" class="input rounded-3xl" type="number" placeholder="0">
						</label>
					</div>
					<div class="max-w-xs p-3">
						<label class="label">
							<span>Comments</span>
							<input name="num_comments" class="input rounded-3xl" type="number" placeholder="0">
						</label>
					</div>
					<!-- TODO: Comparators -->
					<div class="p-3 grid grid-cols-1 sm:grid-cols-2">
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
					</div>
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
				<button class="btn variant-filled rounded-3xl m-3" type="submit">
					<Icon icon="carbon:search" width=24 />
					<span>Search</span>
				</button>
				<button class="btn variant-filled rounded-3xl m-3" type="reset">
					<Icon icon="carbon:close" width=24 />
					<span>Reset</span>
				</button>
			</div>
		</form>
	</div>
</div>

