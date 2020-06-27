<template>
    <div :class="`jumbotron${freeform ? ' freeform': ''}`" :style="`background-image: ${background};`">
            <div class="jumbotron-content">
                <slot></slot>
            </div>
        </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: { image: String, noFade: Boolean, freeform: Boolean },
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
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: var(--jumbotron-height);
}

.jumbotron:not(.freeform) {
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.jumbotron:not(.freeform) > div {
    max-width: 60vw; 
}

@media only screen and (max-width: 800px) {
    .jumbotron:not(.freeform) > div {
        max-width: 100vw; 
    } 
}
</style>