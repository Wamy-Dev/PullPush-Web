<script lang="ts">
    export let author
    import Sugar from 'sugar';
</script>

<div class="bg-surface-100-800-token rounded-3xl max-w-5xl w-full p-4 variant-ghost-surface my-3">
    <a href={`https://reddit.com/user/${author.data.name}`} target="_blank" rel="noreferrer">
    <div class="flex justify-center">
        <div>
            <center>
                <img src={author.data.snoovatar_img} alt="avatar" class="w-40"/>
            </center>
            <h1 class="text-2xl text-center mb-4">/u/{author.data.name}</h1>
        </div>
    </div>
    <div class="flex justify-between flex-wrap">
        <p class="text-xs font-semibold">{Sugar.Number.abbr(author.data.total_karma)} total karma</p>
        <p class="text-xs font-semibold">{Sugar.Number.abbr(author.data.link_karma)} link karma</p>
        <p class="text-xs font-semibold">{Sugar.Number.abbr(author.data.comment_karma)} comment karma</p>
        <p class="text-xs font-semibold">Created {Sugar.Date.relative(new Date(author.data.created_utc * 1000))}</p>
    </div>
</div>