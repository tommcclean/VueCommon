<template>
    <div id="vuecommon">
        <section>
            <h2>Overlay</h2>
            <p>Use an overlay to make text legible over a dark background or background image, or use it to cover the page while a component like a modal is displayed.</p>
            <div class="relative">
                <overlay/>
            </div>
        </section>
    </div>
</template>

<script>
import "@/components/index.js";

export default {
    name: "vuecommon"
};
</script>

<style scoped>
#vuecommon {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

section {
    border-bottom: 1px solid black;
    background-color: whitesmoke;
    padding: 10px;
    padding-bottom: 20px;
}

section::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
}

section .relative {
    position: relative;
    width: 90%;
    height: 200px;
    margin: 0 auto;
    background-color: red;
}
</style>
