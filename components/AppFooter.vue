<template>
    <footer>
        <div class="content has-text-centered">
            <div>
                <b-button v-for="(social, i) in socialLinks" :key="i" 
                    :type="`is-${social.style}`" size="is-medium" inverted outlined tag="a"
                    :href="social.url">
                    <i :class="`fab fa-${social.name} is-size-4`"></i>
                </b-button>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            socialLinks: [
                {
                    style: "info",
                    name: "twitter",
                    url: "https://www.twitter.com/amadoruavs"
                },
                {
                    style: "danger",
                    name: "instagram",
                    url: "https://www.instagram.com/amadoruavs/"
                },
                {
                    style: "info",
                    name: "facebook",
                    url: "https://www.facebook.com/amadoruavsclub"
                },
                {
                    style: "dark",
                    name: "medium",
                    url: "https://www.medium.com/@AmadorUAVs"
                },
            ]
        };
    }
});
</script>

<style>
footer {
    background: var(--banner-gradient);
    padding: 1.5rem;
}

footer .button {
    border: none;
}

footer i {
    font-size: 1.125rem;
}

footer hr {
    margin-left: 10rem;
    margin-right: 10rem;
}
</style>