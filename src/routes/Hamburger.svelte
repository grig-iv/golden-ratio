<script lang="ts">
    let open: Boolean;
</script>

    <div id="hamburger" class:open on:click on:click={() => (open = !open)}>
        <div class="top-0" />
        <div class="top-1/2" />
        <div class="top-1/2" />
        <div class="top-full" />
    </div>

<style>
    #hamburger {
        position: relative;
        cursor: pointer;
        height: 1rem;
    }

    #hamburger div {
        @apply w-6 bg-black h-1 rounded cursor-pointer;
        position: absolute;
        transition: 0.25s ease-in-out;
    }

    #hamburger.open div:nth-child(1) {
        top: 50%;
        opacity: 0;
    }

    #hamburger.open div:nth-child(2) {
        transform: rotate(45deg);
    }

    #hamburger.open div:nth-child(3) {
        transform: rotate(-45deg);
    }

    #hamburger.open div:nth-child(4) {
        top: 50%;
        opacity: 0;
    }
</style>
