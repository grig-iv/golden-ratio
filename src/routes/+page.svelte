<script lang="ts">
    import MobileMenu from "./MobileMenu.svelte";
    import Hamburger from "./Hamburger.svelte";
    import Contacts from "./Contacts.svelte";
    import Services from "./Services.svelte";
    import Showcase from "./Showcase.svelte";
    import Stuff from "./Stuff.svelte";
    import Map from "./Map.svelte";
    import Review from "./Review.svelte";
    import { phone } from "$lib/contacts";
    import logo_text from "$lib/assets/logo-text-25.png";
    import logo_icon from "$lib/assets/logo-icon-50.png";

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
        <a href="tel:{phone}">
            <i class="text-xl fa-solid fa-phone" />
        </a>
    </div>
</div>

<MobileMenu bind:this={menu} />

<div class="w-64 m-auto">
    <img src={logo_icon} alt="download icon" />
</div>

<div class="mt-4">
    <Contacts />
</div>

<div class="section">
    <Services />
</div>

<div class="section">
    <Showcase />
</div>

<div class="section">
    <Stuff />
</div>

<div class="section">
    <Map />
</div>

<div class="section">
    <Review />
</div>

<style lang="scss">
    .section {
        margin-top: 4rem;

        &:first-child {
            margin-top: -10rem;
        }
    }
</style>
