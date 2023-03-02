<script lang="ts">
    import Contacts from "./Contacts.svelte";

    let pos: Number;
</script>

<div id="showcase" class="ml-4 mb-4 text-3xl font-semibold scroll-mt-72">
    Работы
</div>

<div class="container">
    <div
        style:width="{pos}%"
        class="image before"
        style="background-image:url('data:image/jpeg;base64,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');"
    />
    <div
        class="image after"
        style="background-image:url('https://cdn.britannica.com/58/129958-050-C3FE2DD2/Adolf-Hitler-1933.jpg');"
    />

    <input
        on:change={(e) => (pos = e.target.value)}
        on:input={(e) => (pos = e.target.value)}
        type="range"
        class="slider"
        min="1"
        max="100"
        value="50"
    />
    <div style:left="calc({pos}% - 18px)" class="slider-button" />
</div>

<style lang="scss">
    div.container {
        width: 800px;
        height: 530px;
        position: relative;
        margin: 20px;
    }

    div.image {
        height: 100%;
        background-repeat: no-repeat;
        background-position: top left;
        background-size: cover;
        position: absolute;
        top: 0px;
        left: 0px;
    }

    div.before {
        width: 50%;
        z-index: 2;
    }

    div.after {
        width: 100%;
        z-index: 1;
    }
    input.slider {
        width: 100%;
        height: 100%;
        outline: none;
        background-color: transparent;
        position: absolute;
        margin: 0px;
        z-index: 3;
        cursor: pointer;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        transition: 0.25s all ease-in-out;
        -moz-transition: 0.25s all ease-in-out;
        -webkit-transition: 0.25s all ease-in-out;
        z-index: 4;
    }

    input.slider::-moz-range-thumb {
        width: 6px;
        height: 600px;
        background-color: white;
        cursor: pointer;
    }

    input.slider::-webkit-slider-thumb {
        width: 6px;
        height: 530px;
        background-color: white;
        cursor: pointer;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    div.slider-button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        -moz-broder-radius: 50%;
        -webkit-border-radius: 50%;
        background-color: white;
        position: absolute;
        top: calc(50% - 18px);
        left: calc(50% - 18px);
        cursor: pointer;
        z-index: 3;
    }

    div.slider-button:before {
        color: #555;
        position: absolute;
        top: 3px;
        left: 0px;
        content: "\2B9C";
    }

    div.slider-button:after {
        color: #555;
        position: absolute;
        top: 3px;
        right: 0px;
        content: "\2B9E";
    }
</style>
