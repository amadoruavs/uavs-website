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
                <div class="card sponsor-card beeg" style="border-radius: 10px; cursor: pointer"
                    v-for="(sponsor, i) in bigSponsorImages" :key="i"
                    @click="showModal(sponsor)"
                >
                    <div class="card-image">
                        <img
                            class="sponsor-image"
                            :src="`/images/sponsor/list/${sponsor.toLowerCase().replace(/ /g, `_`)}.png`"
                        />
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="card sponsor-card" style="border-radius: 10px; cursor: pointer"
                    v-for="(sponsor, i) in sponsorImages" :key="i"
                    @click="showModal(sponsor)"
                >
                    <div class="card-image">
                        <img
                            class="sponsor-image"
                            :src="`/images/sponsor/list/${sponsor.toLowerCase().replace(/ /g, `_`)}.png`"
                        />
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

        <b-modal :active.sync="isModalActive">
            <div class="card has-text-centered modal-container">
                <h1 class="title is-2">{{ currentModal.title }}</h1>
                <div class="d-flex align-items-center modal-body">
                    <img
                        class="flex-1"
                        :src="currentModal.image || `https://picsum.photos/500/300`"
                    />
                    <p class="flex-1 subtitle">{{ currentModal.description }}</p>
                </div>
                <br>
                <b-button
                    type="is-info"
                    tag="a" target="_blank"
                    :href="currentModal.website"
                >
                    Check out {{ currentModal.title }}'s website!
                </b-button>
            </div>
        </b-modal>
    </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            isModalActive: false,
            bigSponsorImages: [
            ],
            sponsorImages: [
                "CUAV",
                "Computar",
                "DigiKey", "FastSigns",
                "JLCPCB", "Pololu",
                "PTSA", "RFDesign",
                "Sensirion", "SimScale",
                "SKB", "StarTech",
                "The Imaging Source", "Weller"
            ],
            modalData: {
                "CUAV": {
                    description: "Cool Sponsorable site",
                    website: "https://store.cuav.net"
                },
                "Computar": {
                    website: "https://computar.com"
                },
                "FastSigns": {
                    website: "https://fastsigns.com"
                },
                "JLCPCB": {
                    website: "https://jlcpcb.com"
                },
                "Pololu": {
                    website: "https://pololu.com"
                },
                "PTSA": {
                    website: "https://amadorptsa.com"
                },
                "RFDesign": {
                    website: "https://rfdesign.com.au"
                },
                "Sensirion": {
                    website: "https://sensirion.com"
                },
                "SimScale": {
                    website: "https://simscale.com"
                },
                "SKB": {
                    website: "https://skbcases.com"
                },
                "StarTech": {
                    website: "https://startech.com"
                },
                "The Imaging Source": {
                    website: "https://theimagingsource.com"
                },
                "Weller": {
                    website: "https://weller-tools.com"
                },
            },
            currentModal: {
                title: null,
                image: null,
                description: null,
                website: null
            }
        }
    },
    methods: {
        showModal(sponsorName) {
            window.location.href = this.modalData[sponsorName].website;
            // this.currentModal = {
            //     ...this.modalData[sponsorName],
            //     title: sponsorName
            // }

            // this.isModalActive = true;
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

.card.beeg {
    width: 50%;
    vertical-align: middle !important;
}

.card.beeg img {
    height: auto !important;
    max-height: 8rem;
}

@media screen and (max-width: 750px) {
    .card.sponsor-card {
        width: auto;
        padding: 0.5rem;
    }

    .card.beeg {
        width: auto;
        padding: 0.5rem;
    }
}


.card.sponsor-card img {
    height: 4rem;
    transition: transform 0.25s ease, filter 0.25s ease;
}

.card.sponsor-card:hover img {
    transform: scale(1.125);
}

.modal-container {
    padding: 1rem;
}

.modal-body {
    margin: 1rem;
}
</style>
