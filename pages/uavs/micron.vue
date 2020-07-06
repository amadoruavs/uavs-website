<template>
    <section id="pageMicron">
        <Jumbotron image="url('/images/uavs/micron/banner.png')" :freeform="true">
            <div class="text-header"><div>
                <h1 class="has-text-white is-size-1 has-text-weight-bold">Micron</h1>
                <p class="has-text-white is-size-4">Our experimentation and testing platform.</p>
            </div></div>

            <div class="drone-stats">
                <div>
                    <i class="fas fa-tachometer-alt is-size-1"></i>
                    <h1 class="has-text-weight-bold is-size-3">
                        10.4 m/s
                    </h1>
                    <p>Top Speed</p>
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
                        15 minutes
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
</style>
