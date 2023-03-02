<script lang="ts">
    import { phone } from "$lib/contacts";
</script>

<div id="map" class="ml-4 mb-4 text-3xl font-semibold scroll-mt-72">
    Контакты
</div>

<div class="my-1 mx-5 flex flex-col">
    <p>
        <i class="fa-solid fa-phone" />
        <a href="tel:{phone}" class="text-accent_dark">
            {phone}
        </a>
    </p>
    <p><i class="fa-solid fa-clock" /> Вт-пт 11:00–20:00; Сб 11:00–16:00</p>
    <p><i class="fa-solid fa-location-dot" /> Невский проспект, 154</p>
</div>

<div class="m-auto mt-8 h-60">
    <iframe
        title="map"
        class="w-full h-full"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3a8c1a4971cf51253ee5785db971a64399f03f75adac4a5b9bb50acc70ebc4bc75&amp;source=constructor"
        frameborder="0"
    />
</div>

<style lang="scss">
    #contacts {
        scroll-margin-block-start: 40px;
    }

    p {
        margin-top: 0.25rem;

        i {
            text-align: center;
            width: 1.25rem;
        }
    }
</style>
