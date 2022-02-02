<template>
    <div id="app">
        <Header name="Jonas Riedel" />
        <Hero />
        <Socials />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Socials from './components/Socials.vue'

export default {
    name: 'App',
    components: {
        Header,
        Hero,
        Socials
    }
}
</script>

<style>
body {
    background-color: #0e0e12;
}
</style>
