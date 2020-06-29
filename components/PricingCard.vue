<template>
    <div class="pricing-card">
        <header>
            <h1 :class="`title text-${rank.toLowerCase()}`">{{ rank }}</h1>
            <h2 class="subtitle is-4"><b>${{ amount }}+</b></h2>
        </header>
        <div><slot></slot></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        rank: String,
        amount: Number
    }
});
</script>

<style>
.pricing-card {
    margin: 3rem;
    display: inline-block;
    vertical-align: top;
}

.pricing-card > header {
    margin-bottom: 1rem;
}

.text-platinum {
    background: linear-gradient(to right,#434343 0%,#4A4D74 25%,#ccc 50%,#4A4D74 75%,#434343 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-gold {
    background: linear-gradient(to right,#DBAB1F 0%,#EDCE47 25%,#C39C2C 50%,#EDCE47 75%,#DBAB1F 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-silver {
    background: linear-gradient(to right,#B5B4A6 0%,#999 25%,#B7B7B7 50%,#999 75%,#B5B4A6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-bronze {
    background: linear-gradient(to right,#AA6137 0%,#E4A080 25%,#C7815C 50%,#E4a080 75%,#AA6137 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>