<template>
    <div class="jumbotron" :style="`background-image: ${background};`">
            <div>
                <slot></slot>
            </div>
        </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: { image: String, noFade: Boolean },
    computed: {
        background() { 
            return `
                ${this.noFade ? "" : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.875)), "}
                ${this.image}
            `.trim().replace(/\n/g, " ");
        }
    }
});
</script>

<style>
.jumbotron {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: calc(100vh - 93px);
}

.jumbotron > div {
    max-width: 45vw; 
}
</style>