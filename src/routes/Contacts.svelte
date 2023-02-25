<script lang="ts">
    import { phone } from "$lib/contacts";
</script>

<div id="contacts" class="ml-4 mb-4 text-3xl font-semibold scroll-mt-72">
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
    <p><i class="fa-solid fa-location-dot" /> 
        <a href="#map" class="text-accent_dark">
        Невский проспект, 154
        </a>
    </p>
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
