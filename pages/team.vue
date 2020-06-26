<template>
    <section id="teamPage">
        <Jumbotron image="/images/team/banner.webp">
            <h1 class="has-text-white is-size-1 has-text-weight-bold">Our Team</h1>
            <p class="has-text-white is-size-4">
                Our hardworking team is comprised of many brilliant high school engineers.
            </p>
        </Jumbotron>
        <div class="container">

        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import MemberCard from "~/components/MemberCard.vue";

const m = (name: string, role: string) => ({ name, role });

export default Vue.extend({
    data() {
        return {
            members: {
                software: [
                    m("Kalyan Sriram", "President"),
                    m("Vincent Wang", "Software Team Lead"),
                    m("Derick Mathews", "Communications"),
                    m("Raghav Misra", "Image Processing"),
                    m("Ethan Kuo", "Obstacle Avoidance")
                ],
                electrical: [
                    m("Kai Gottschalk", "Electrical Team Lead"),
                    m("Austin", "Micron Development")
                ],
                mechanical: [
                    m("Ishan Duriseti", "Mechanical Team Lead"),
                    m("Frank Yu", "Design"),
                    m("Andrew", "Mechnical"),
                    m("Justin Park", "Mechnical")
                ],
                business: [
                    m("Sungje Park", "Administration/Management"),
                    m("Marie Less", "Business Team Lead"),
                    m("Comrade Josh Wei", "Business"),
                    m("Aryan", "Business???"),
                    m("Justin Z", "Business"),
                ]
            }
        }
    },
    components: { MemberCard }
}); 
</script>

<style>
#teamPage > .jumbotron {
    background-position: center top;
}
</style>