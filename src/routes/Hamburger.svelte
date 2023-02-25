<script lang="ts">
    let open: Boolean;
</script>

<button on:click on:click={() => (open = !open)}>
    <div id="hamburger" class:open>
        <div class="top-0" />
        <div class="top-1/2" />
        <div class="top-1/2" />
        <div class="top-full" />
    </div>
</button>

<style lang="scss">
    #hamburger {
        $hamburger-width: 1.5rem;
        position: relative;
        cursor: pointer;
        height: 1rem;
        width: $hamburger-width;
        display: inline-block;

        div {
            @apply bg-black;
            width: $hamburger-width;
            height: 0.25rem;
            border-radius: 0.25rem;
            position: absolute;
            transition: 0.25s ease-in-out;
        }

        &.open {
            div {
                &:nth-child(1),
                &:nth-child(4) {
                    top: 50%;
                    opacity: 0;
                }

                &:nth-child(2) {
                    transform: rotate(45deg);
                }

                &:nth-child(3) {
                    transform: rotate(-45deg);
                }
            }
        }
    }
</style>
