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
    --pink: #DC72FC;
    --blue: #455CE2;
    --banner-gradient: linear-gradient(to right, var(--pink), var(--purple) 75%, var(--blue));
}

* {
    font-family: "Open Sans", sans-serif;
}
</style>
