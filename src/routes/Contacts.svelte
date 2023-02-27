<script lang="ts">
    import { phone } from "$lib/contacts";
</script>

<div id="contacts" class="ml-4 mb-4 text-3xl font-semibold scroll-mt-72">
    Контакты
</div>

<div id="contactsTable" class="my-1 mx-5">
    <i class="fa-solid fa-phone" />
    <a href="tel:{phone}" class="text-accent_dark">
        {phone}
    </a>

    <i class="fa-solid fa-location-dot" />
    <a href="#map" class="text-accent_dark"> Невский проспект, 154 </a>

    <i class="fa-solid fa-clock" />
    <p>
        Вт-пт 11:00–20:00;
        <br />
        Чт: Операционный день;
        <br />
        Сб 11:00–16:00;
    </p>
</div>

<style lang="scss">
    #contacts {
        scroll-margin-block-start: 40px;
    }

    #contactsTable {
        display: grid;
        grid-template-columns: auto 1fr;

        place-content: center;
    }

    p {
        margin-top: 0.25rem;

        i {
            text-align: center;
            width: 1.25rem;
            margin-right: 0.25rem;
        }
    }
</style>
