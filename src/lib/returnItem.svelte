<script lang="ts">
    export let item;
    export let type;
    import Icon from '@iconify/svelte';
    import Sugar from 'sugar';
    import SvelteMarkdown from 'svelte-markdown'
    console.log(item)
    console.log(type)
    console.log(item.thumbnail)
    console.log(item.title)
    console.log(item.permalink)
</script>

{#if type==="submission"}
    <a href={`https://reddit.com${item.permalink}`} target="_blank" rel="noreferrer">
        <div class="bg-surface-100-800-token rounded-3xl max-w-5xl w-full p-4 variant-ghost-surface my-3">
            <h1 class="text-xl font-bold mr-2 flex items-center break-all">
                {#if item.thumbnail !== "self" && item.thumbnail !== "default" && item.thumbnail !== "image" && item.thumbnail !== "spoiler" && item.thumbnail !== "nsfw"}
                    <img src={item.thumbnail} alt="thumbnail" class="rounded-3xl mr-3"/>
                {/if}
                {item.title}
            </h1>
            <div>
                {#if item.selftext}
                    <div class="mt-2">
                        <SvelteMarkdown source={item.selftext} />
                    </div>
                {/if}
            </div>
            <div class="mt-3 flex justify-between">
                <p class="text-xs font-semibold">/u/{item.author}</p>
                <p class="text-xs font-semibold">{Sugar.Number.abbr(item.num_comments)} comments</p>
                <p class="text-xs font-semibold">r/{item.subreddit}</p>
                <p class="text-xs font-semibold">{Sugar.Number.abbr(item.score)} points</p>
                <p class="text-xs font-semibold">{Sugar.Date.relative(new Date(item.created_utc * 1000))}</p>
            </div>
        </div>
    </a>
{:else if type==="comment"}
    <a href={`https://reddit.com${item.permalink}`} target="_blank" rel="noreferrer">
        <div class="bg-surface-100-800-token rounded-3xl max-w-5xl w-full p-4 variant-ghost-surface my-3">
            <h1 class="sm:text-xl font-bold break-all">
                {item.body}
            </h1>
            <div class="mt-3 flex justify-between flex-wrap">
                <p class="text-xs font-semibold">/u/{item.author}</p>
                <p class="text-xs font-semibold">r/{item.subreddit}</p>
                <p class="text-xs font-semibold">{Sugar.Number.abbr(item.score)} points</p>
                <p class="text-xs font-semibold">{Sugar.Date.relative(new Date(item.created_utc * 1000))}</p>
            </div>
        </div>
    </a>
{/if}

<style>
    :global(p) {
        word-break: break-all;
    }
</style>

