<template>
    <section id="listSponsorPage">
        <Jumbotron image="var(--banner-gradient)">
            <h1 class="has-text-white is-size-1 has-text-weight-bold">Our Current Sponsors</h1>
            <p class="has-text-white is-size-4">
                Many thanks to the organizations who have given 
                monetary, component, or service donations to our club!
                Also, special thanks to any individuals 
                who have donated to our group!
            </p>
        </Jumbotron>

        <div class="section has-text-centered">

            <div class="container">
                <div class="card sponsor-card" style="border-radius: 10px" 
                    v-for="(sponsor, i) in sponsorImages" :key="i">
                    <div class="card-image">
                        <img class="sponsor-image" :src="`/images/sponsor/list/${sponsor}.png`">
                    </div>
                </div>
            </div>

            <div v-if="sponsorImages.length === 0">
                <h1 class="title">
                    No available sponsors right now. 
                </h1>
                <b-button tag="nuxt-link" to="/sponsor/become" type="is-success">
                    Be the first!
                </b-button>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            sponsorImages: [
                "cuav", "computar",
                "digikey", "fastsigns",
                "jlcpcb", "pololu",
                "ptsa", "rfdesign",
                "sensirion", "simscale",
                "skb", "startech",
                "tis", "weller"
            ]
        }
    }
});
</script>

<style>
.card.sponsor-card {
    display: inline-block;
    vertical-align: top;
    padding: 2rem;
    width: 33%;
    margin: 1rem 0; 
    border: none;
    box-shadow: none;
}

@media screen and (max-width: 750px) {
    .card.sponsor-card {
        width: auto;
        padding: 0.5rem;
    }
}

.card.sponsor-card img {
    height: 4rem;
}
</style>