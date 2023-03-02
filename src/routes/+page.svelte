<script lang="ts">
    import Contacts from "./dev/Contacts.svelte";
    import { phone } from "$lib/contacts";
    import logo_text from "$lib/assets/logo-text-25.png";
    import logo_icon from "$lib/assets/logo-icon-50.png";
</script>

<div class="flex flex-col h-screen">
    <div class="py-2 bg-gray-400">
        <div class="mx-auto text-2xl font-bold text-center text-gray-800">
            🚧 Сайт в разработке 🚧
        </div>
    </div>

    <div class="self-center mt-5 mx-5">
        <div class="flex justify-center items-center">
            <div class="w-40">
                <img src={logo_icon} alt="" />
            </div>
            <div class="ml-2">
                <img src={logo_text} alt="" />
            </div>
        </div>

        <div class="flex flex-col mt-4">
            <div class="flex flex-col sm:text-xl">
                <p>
                    <i class="fa-solid fa-phone" />
                    <a href="tel:{phone}" class="text-accent_dark">
                        {phone}
                    </a>
                </p>
                <div class="my-1">
                    <i class="fa-solid fa-clock" /> Вт-пт 11:00–20:00; Сб 11:00–16:00
                </div>
                <p>
                    <i class="fa-solid fa-location-dot" /> Невский проспект, 154
                </p>
            </div>
        </div>
    </div>

    <div class="grow mt-10 lg:mx-auto lg:w-2/3 lg:h-96">
        <iframe
            title="map"
            class="w-full h-full lg:h-96"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3a8c1a4971cf51253ee5785db971a64399f03f75adac4a5b9bb50acc70ebc4bc75&amp;source=constructor"
            frameborder="0"
        />
    </div>
</div>

<style lang="scss">
    p {
        margin-top: 0.25rem;
        i {
            text-align: center;
            width: 1.25rem;
        }
    }

    #contacts {
        scroll-margin-block-start: 40px;
    }
</style>
