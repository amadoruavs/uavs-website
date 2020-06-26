<template>
    <section id="teamPage">
        <Jumbotron image="/images/team/banner.webp">
            <h1 class="has-text-white is-size-1 has-text-weight-bold">Our Team</h1>
            <p class="has-text-white is-size-4">
                Our hardworking team is comprised of many brilliant high school engineers.
            </p>
        </Jumbotron>
        <div class="section container">
            <details v-for="(team, name, teamIndex) in members" :key="teamIndex" class="team-group" open>
                <summary><h1 class="title is-3">{{ name }}</h1></summary>
                <MemberCard 
                    v-for="(member, i) in team" :key="i"
                    :name="member[0]" :role="member[1]"
                />
            </details>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import MemberCard from "~/components/MemberCard.vue";

export default Vue.extend({
    data() {
        return {
            members: {
                Software: [
                    ["Kalyan Sriram", "President"],
                    ["Vincent Wang", "Software Team Lead"],
                    ["Derick Mathews", "Communications"],
                    ["Raghav Misra", "Image Processing"],
                    ["Ethan Kuo", "Obstacle Avoidance"]
                ],
                Electrical: [
                    ["Kai Gottschalk", "Electrical Team Lead"],
                    ["Austin", "Micron Development"]
                ],
                Mechanical: [
                    ["Ishan Duriseti", "Mechanical Team Lead"],
                    ["Frank Yu", "Design"],
                    ["Andrew", "Mechnical"],
                    ["Justin Park", "Mechnical"]
                ],
                Business: [
                    ["Sungje Park", "Administration/Management"],
                    ["Marie Less", "Business Team Lead"],
                    ["Comrade Josh Wei", "Business"],
                    ["Aryan", "Business???"],
                    ["Justin Z", "Business"],
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

.team-group {
    border: none;
    border-bottom: 2px solid var(--blue);
}

.team-group:not(:last-of-type) {
    margin-bottom: 2rem;
}

.team-group h1:first-of-type {
    display: inline-block;
}

.team-group > summary {
    outline: none;
    padding: 0.5rem 0.25rem;
}

.team-group > summary::-webkit-details-marker {
    display: none;
}

.team-group h1:first-of-type::before {
    content: "⮞";
    color: var(--blue);
    font-size: 1.5rem;
    position: relative;
    bottom: 2.5px;
    width: 2rem;
    display: inline-block;
}

.team-group[open] h1:first-of-type::before {
    content: "⮟";
}
</style>