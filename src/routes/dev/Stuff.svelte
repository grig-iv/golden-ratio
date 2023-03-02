<script lang="ts">
    type Card = {
        fullname: string;
        title: string;
        experience: string;
        photo: string;
        description: string;
    };

    const stuffCards: Card[] = [
        {
            fullname: "Жовтый Сергей Николаевичь",
            title: "Врачь",
            experience: "22 года",
            photo: "https://i1.sndcdn.com/artworks-000139125066-amwnja-t500x500.jpg",
            description: "... ... ...",
        },
        {
            fullname: "Жовтый Сергей Николаевичь",
            title: "Врачь",
            experience: "Много лет",
            photo: "https://i1.sndcdn.com/artworks-000139125066-amwnja-t500x500.jpg",
            description: "... ... ...",
        },
        {
            fullname: "Жовтый Сергей Николаевичь",
            title: "Врачь",
            experience: "Много лет",
            photo: "https://i1.sndcdn.com/artworks-000139125066-amwnja-t500x500.jpg",
            description: "... ... ...",
        },
    ];
</script>

<div id="stuff" class="ml-4 mb-4 text-3xl font-semibold scroll-mt-72">
    Cпециалисты
</div>

<div class="relative w-full flex gap-6 snap-x overflow-x-auto">
    {#each stuffCards as card}
        <div class="snap-center w-screen  shrink-0 my-5">
            <div class="rounded overflow-hidden">
                <div
                    class="w-4/5 m-auto h-full bg-stone-200 rounded-xl overflow-hidden"
                >
                    <img class="h-full  m-auto" src={card.photo} alt="" />
                    <div class="px-6 pt-2 pb-4">
                        <p class="font-bold text-xl">
                            {card.fullname}
                        </p>
                        <p>
                            {card.title}
                        </p>
                        <p>
                            {card.experience}
                        </p>
                        <p>
                            {card.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>
