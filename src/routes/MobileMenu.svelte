<script lang="ts">
    import { fly } from "svelte/transition";

    let visible: Boolean;

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
            link: "#map"
        },
        {
            text: "Отзовы",
            link: "#review",
        },
    ];

    export function toggle() {
        visible = !visible;
    }

    export function isViseble(): Boolean {
        return visible;
    }
</script>

{#if visible}
    <div
        class="fixed flex w-full z-10 pb-4 bg-stone-200"
        transition:fly={{ y: -1000, duration: 300 }}
    >
        <div class="mx-4 w-full">
            <ul class="divide-y divide-slate-400 divide-dashed">
                {#each items as item}
                    <li class="py-3 pl-2 font-semibold uppercase">
                        <a href={item.link} on:click={() => visible = false}>{item.text}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/if}
