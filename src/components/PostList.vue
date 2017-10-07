<template>
    <ul>
        <li v-for="p in posts">
            <h2><strong>{{ p.userId }}</strong> - {{ p.title }}</h2>
            <div>{{ p.body }}</div>
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: mapGetters({
            posts: 'allPosts'
        }),
        created () {
            this.$store.dispatch('getAllPosts')
        }
    }
</script>