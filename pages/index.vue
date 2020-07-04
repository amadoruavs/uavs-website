<template>
    <section id="indexPage">
        <Jumbotron image="url('/images/index/banner.webp')">
            <h1 class="has-text-white is-size-1 has-text-weight-bold">We Are AmadorUAVs</h1>
            <p class="has-text-white is-size-4">The future of autonomous aviation.</p>
            <br>
            <b-button tag="a" href="#about" type="is-primary">Learn More</b-button>
        </Jumbotron>
        <div id="about">
            <div class="side-by-side">
                <div class="layout-side">
                    <img src="/images/index/who-are-we.webp">
                </div>
                <div class="layout-side">
                    <div>
                        <h1 class="title">Who are we?</h1>
                        <p> 
                            AmadorUAVs is a club at Amador Valley High School in Pleasanton, CA. 
                            This club was formed in 2018 with the intent of developing Unmanned Aerial Vehicles (UAVs). 
                            We plan to compete in the upcoming 2020/2021 AUVSI Student Unmanned Aerial Systems international 
                            competition, and we are working hard to prepare our drone for the specific set of 
                            tasks the competition involves.
                        </p>
                    </div>
                </div>
            </div>
            
            <hr class="layout-split-mobile">

            <div class="side-by-side">
                <div class="layout-side">
                    <div>
                        <h1 class="title">Our UAV Journey</h1>
                        <p> 
                            Starting in 2018, we developed multiple prototype airplanes before 
                            switching to multicopters (drones). Since then, we have designed 
                            and constructed several versions of our Micron quadcopter. 
                            Recently, we have been working on our competition-ready 
                            octocopter, Macron.
                        </p>
                    </div>
                </div>
                <div class="layout-side">
                        <img src="/images/index/our-journey.webp">
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style>
#about .side-by-side {
    margin: 1rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

#about .side-by-side img {
    width: 100%;
    border-radius: 15px;
    transform: scale(0.875);
}

#about .layout-side {
    flex: 1;
    text-align: center;
}

#about .layout-side:first-of-type {
    margin-right: 1rem;
}

#about .layout-split-mobile { display: none; }

@media only screen and (max-width: 810px) {
    #about .side-by-side {
        display: block;
        text-align: center;
    }

    #about .layout-side:first-of-type {
        margin-right: 0px;
    }

    #about .layout-split-mobile { 
        display: block;
        border-top: 1px var(--pink) solid;
    }
}
</style>
