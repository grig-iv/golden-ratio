<script lang="ts">
    import MobileMenu from "./MobileMenu.svelte";
    import Hamburger from "./Hamburger.svelte";
    import logo_text from "$lib/assets/logo-text-25.png";

    let menu: MobileMenu;
</script>

<!-- Header -->
<div
    class="grid grid-cols-3 place-items-center sticky top-0 bg-white w-full py-2 px-4 drop-shadow-sm z-20"
>
    <div class="justify-self-start">
        <Hamburger on:click={menu.toggle} />
    </div>

    <div class="w-48">
        <img src={logo_text} alt="download icon" />
    </div>

    <div class="justify-self-end">
        <i
            class="flex-none mx-1 text-xl fa-solid fa-phone hover:text-accent hover:fa-regular"
        />
    </div>
</div>

<MobileMenu bind:this={menu} />

<div class="flex items-center justify-between font-serif" />

<div class="w-4 h-screen border-purple-500">content</div>
