<script lang="ts">
    import { fly } from "svelte/transition";
    import { controller } from "./menuController";

    let visible: boolean;
    controller.subscribe((x: boolean) => (visible = x));

    let items = [
        {
            text: "Контакты",
            link: "#contacts",
        },
        {
            text: "Услуги",
            link: "#services",
        },
        {
            text: "Работы",
            link: "#showcase",
        },
        {
            text: "Cпециалисты",
            link: "#stuff",
        },
        {
            text: "Как добраться",
            link: "#map",
        },
        {
            text: "Отзовы",
            link: "#review",
        },
    ];
</script>

{#if visible}
    <div
        class="fixed flex flex-col w-full h-full z-10 pb-4"
        transition:fly={{ y: -1000, duration: 300 }}
    >
        <div class="px-4 w-full bg-stone-200">
            <ul class="divide-y divide-slate-400 divide-dashed">
                {#each items as item}
                    <li class="py-3 pl-2 font-semibold uppercase">
                        <a href={item.link} on:click={() => controller.close()}
                            >{item.text}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>

        <div class="h-full w-full" on:click={() => controller.close()} />
    </div>
{/if}
