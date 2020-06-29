<template>
    <section id="becomeSponsorPage">
        <Jumbotron image="url('/images/sponsor/become/banner.webp')">
            <h1 class="has-text-white is-size-1 has-text-weight-bold">Support Us!</h1>
            <p class="has-text-white is-size-4">
                Support high school aviation and engineering, 
                and get cool perks such as a logo on our drone and more!
            </p>
            <br>
            <b-button 
                tag="a" href="https://drive.google.com/open?id=1BZ1BHePTxTGrvTFHCgmu2J6DsGFHBZnt" 
                type="is-primary" target="_blank"
            >
                Sponsorship Packet
            </b-button>
        </Jumbotron>

        <div class="section has-text-centered">
            <h1 class="title">Sponsorship Levels & Benefits</h1>
            <p class="subtitle">
                Contact us at 
                <a target="_blank" href="mailto:officers@amadoruavs.com">officers@amadoruavs.com</a> 
                to learn more.
            </p>

            <PricingCard rank="Platinum" :amount="2000">
                <p>Company logo broadcast at SUAS Competition events</p>
                <p>Medium logo on the competition poster and team apparel</p>
                <p>Acknowledgement on our team website and at social events</p>
                <p>Logo on the Sponsorship Packet</p>
                <p>Priority over social media spotlights</p>
            </PricingCard>

            <PricingCard rank="Gold" :amount="1000">
                <p>Company logo broadcast at SUAS Competition events</p>
                <p>Medium logo on the competition poster and team apparel</p>
                <p>Acknowledgement on our team website and at social events</p>
                <p>Logo on the Sponsorship Packet</p>
            </PricingCard>

            <PricingCard rank="Silver" :amount="500">
                <p>Company logo broadcast at SUAS Competition events</p>
                <p>Medium logo on the competition poster and team apparel</p>
                <p>Acknowledgement on our team website</p>
                <p>Logo on the Sponsorship Packet</p>
            </PricingCard>

            <PricingCard rank="Bronze" :amount="250">
                <p>Small logo on the competition poster and team apparel</p>
                <p>Acknowledgement on our team website</p>
                <p>Logo on the Sponsorship Packet</p>
            </PricingCard>
        </div>

    </section>
</template>

<script lang="ts">
import Vue from "vue";
import PricingCard from "~/components/PricingCard.vue";

export default Vue.extend({
    components: { PricingCard }
});
</script>

<style>

</style>