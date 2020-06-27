<template>
    <section id="pageMicron">
        <Jumbotron image="url('/images/uavs/macron/banner.png')" :freeform="true">
            <div class="text-header"><div>
                <h1 class="has-text-white is-size-1 has-text-weight-bold">Macron</h1>
                <p class="has-text-white is-size-4">Our production-ready UAV for the competition.</p>
            </div></div>

            <div class="drone-stats">
                <div>
                    <i class="fas fa-tachometer-alt is-size-1"></i>
                    <h1 class="has-text-weight-bold is-size-3">
                        27.5 miles/hour
                    </h1>
                    <p>Drone Speed</p>
                </div>
                
                <div>
                    <i class="fas fa-crop-alt is-size-1"></i>
                    <h1 class="has-text-weight-bold is-size-3">
                        Carbon Fiber
                    </h1>
                    <p>Reinforced Frame</p>
                </div>

                <div>
                    <i class="fas fa-stopwatch is-size-1"></i>
                    <h1 class="has-text-weight-bold is-size-3">
                        30 minutes
                    </h1>
                    <p>Flight Time</p>
                </div>
            </div>
        </Jumbotron>
    </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    
});
</script>

<style>
#pageMicron .jumbotron-content {
    max-width: 100vw; 
    height: 100%;
    display: flex;
    flex-direction: column;
}

#pageMicron .jumbotron-content > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

#pageMicron .drone-stats > div {
    color: white;
    flex: 1;
}

@media only screen and (max-width: 815px) {
    #pageMicron .jumbotron-content > .drone-stats {
        display: block;
    }

    #pageMicron .drone-stats > div {
        margin: 1.5rem;
    }
}
</style>