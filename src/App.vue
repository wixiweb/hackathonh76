<template>
    <div id="app">
        <app-header></app-header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        name: 'app',
        components: {
            'app-header': Header
        }
    }
</script>

<style>
    body {
        display: flex;
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    main {
        text-align: center;
        margin-top: 40px;
    }
</style>
