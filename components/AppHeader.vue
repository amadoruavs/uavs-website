<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="nuxt-link" to="/">
                <img id="logo"
                    src="/images/logo.svg"
                    alt="AmadorUAVs Logo"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <!-- Pages -->
            <b-navbar-item tag="nuxt-link" to="/#about">About</b-navbar-item>
            
            <b-navbar-item tag="nuxt-link" to="/team">The Team</b-navbar-item>

            <b-navbar-item tag="nuxt-link" to="/join">Join</b-navbar-item>

            
            <b-navbar-dropdown label="Our UAVs">
                <b-navbar-item tag="nuxt-link" to="/uavs/macron">Macron</b-navbar-item>
                <b-navbar-item tag="nuxt-link" to="/uavs/micron">Micron</b-navbar-item>
            </b-navbar-dropdown>

            <b-navbar-dropdown label="Sponsorship Info">
                <b-navbar-item tag="nuxt-link" to="/sponsor/become">
                    Become a Sponsor
                </b-navbar-item>
                <b-navbar-item tag="nuxt-link" to="/sponsor/list">
                    Our Current Sponsors
                </b-navbar-item>
                <b-navbar-item tag="nuxt-link" to="/sponsor/progress">Progress</b-navbar-item>
            </b-navbar-dropdown>

            <!-- External Links -->
            <b-navbar-item href="http://www.auvsi-suas.org/" target="_blank">
                Competition
            </b-navbar-item>

            <b-navbar-item href="https://medium.com/@AmadorUAVs" target="_blank">
                Blog
            </b-navbar-item>

            <b-navbar-item href="https://gitlab.com/avhs-suas" target="_blank">
                Source
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    
});
</script>

<style>
nav {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: var(--purple) 1px solid;
}

nav .navbar-item {
    font-size: 1.125rem;
}

nav .navbar-dropdown > .navbar-item {
    font-size: 1rem;
}

nav .navbar-dropdown {
    border: var(--purple) 1px solid;
    border-radius: 0;
}

nav #logo {
    max-height: 3.75rem;
}

.navbar-burger {
    position: relative;
    top: 0.75rem;
}

@media screen and (max-width: 1024px) {
    nav .navbar-dropdown {
        border-left: none;
        border-right: none;
        border-bottom: none;
    } 
}
</style>