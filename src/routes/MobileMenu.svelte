<script lang="ts">
    import { fly } from "svelte/transition";

    let visible: Boolean;

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
        <div class="ml-4">
            <ul>
                <li>Наши специалисты</li>
                <li>Наши цены</li>
                <li>Наши работы</li>
                <li>Наши контакты</li>
            </ul>
        </div>
    </div>
{/if}

<style>
    li {
        @apply my-4 font-semibold uppercase;
    }
</style>
