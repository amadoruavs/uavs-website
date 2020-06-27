<template>
    <div class="card member-card">
        <div 
            class="card-image" 
            :style="`background-image: url(${picture}), url('/images/team/member.webp')`"
            >
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ name }}</p>
                    <p class="subtitle is-6">{{ role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props: {
        name: String,
        role: String,
        picture: String
    },
    data() {
        return {
            memberPicture: this.picture
        };
    },
    methods: {
        useDefaultPicture() {
            this.memberPicture = "/images/team/member.webp";
        }
    }
});
</script>

<style>
.member-card {
    width: 20rem;
    display: inline-block;
    margin: 1rem;
}

.member-card .card-image {
    width: 100%;
    height: 20rem;
    background-size: 100%;
    background-position: center;
}
</style>