<script lang="ts">
    const stuff = ["one one", "two two", "three three"];
</script>

<div id="stuff" class="ml-4 mb-4 text-3xl font-semibold scroll-mt-72">
    Cпециалисты
</div>

<div class="relative w-full flex gap-6 snap-x overflow-x-auto">
    {#each stuff as _}
        <div class="snap-center w-screen  bg-blue-300 shrink-0">
            <div class="rounded overflow-hidden">
                <div class="w-3/4 m-auto h-full">
                    <img
                        class="w-full h-full"
                        src="https://i1.sndcdn.com/artworks-000139125066-amwnja-t500x500.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    {/each}
</div>
