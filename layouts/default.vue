<template>
    <div>
        <AppHeader />
        <div id="currentView">
            <Nuxt />
        </div>
        <AppFooter />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

export default Vue.extend({
    components: {
        AppHeader,
        AppFooter,
    }
});
</script>

<style>
/* Flexboxify the body */
html, body, #__nuxt, #__layout, #__layout > div {
    min-height: 100vh;
}

#__layout > div {
    display: flex;
    flex-direction: column;
}

#currentView {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

#currentView > section {
    flex: 1;
}
</style>
