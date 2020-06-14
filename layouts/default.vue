<template>
    <div>
        <AppHeader />
        <Nuxt />
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
        AppFooter
    }
});
</script>

<style>
/* CSS Variables */
:root {
    --purple: #7957d5;
}
</style>
