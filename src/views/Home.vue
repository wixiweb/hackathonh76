<template>
    <div class="home">
        <h1>{{ msg }}</h1>

        <h2>Essential Links</h2>

        <p>
            <router-link :to="{name: 'my-account'}">Mon comtpe</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                msg: 'Welcome to Your Vue.js PWA'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #35495E;
    }
</style>
