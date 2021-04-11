<template>
    <section id="teamPage">
        <Jumbotron image="url('/images/team/banner.webp')">
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
                    :picture="`/images/team/members/${member[0].replace(/ /g, '_').trim().toLowerCase()}.webp`"
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
                    ["Derick Mathews", "Autonomous Image Detection"],
                    ["Raghav Misra", "Image Processing"],
                    ["Ethan Kuo", "Obstacle Avoidance"],
                    ["Timothy Gao", "Software"],
                    ["Kush Nayak", "Software"],
                    ["Angad Bhargav", "Software"],
                    ["Nikhil Sunkad", "Software"],
                    ["Karan Gupta", "Software"],
                ],
                Electromechanical: [
                    ["Kai Gottschalk", "VP/Electrical Development Lead"],
                    ["Ishan Duriseti", "Mechanical Development Lead"],
                    ["Austin Chen", "Electrical"],
                    ["Justin Park", "Mechanical"],
                    ["Frank Yu", "Design"],
                    ["Andrew Chen", "Mechanical"],
                    ["Siddharth Bhargav", "Mechanical"],
                    ["Jai Puli", "Mechanical"],
		],
                
                Business: [
                    ["Sungje Park", "Administration/Management"],
                    ["Marie Lee", "Business Team Lead"],
                    ["Zephan Thomas", "Business"],
                    ["Christopher Li", "Business"],
                    ["Leo Shao", "Business"],
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
    text-align: center;
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
