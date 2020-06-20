<template>
    <section id="indexPage">
        <div>
            <h1 class="has-text-white is-size-1 has-text-weight-bold">We Are AmadorUAVs</h1>
            <p class="has-text-white is-size-4">The future of autonomous aviation.</p>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style>
#indexPage {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.875)), 
        url("/images/index/banner.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
