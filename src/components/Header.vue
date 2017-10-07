<template>
    <header>
        <img src="../assets/habitat76.png" alt="Habitat 76" width="100" height="58">
    </header>
</template>

<style lang="scss" scoped>
    @import '../assets/sass/variables.scss';
    @import "~bootstrap-sass/assets/stylesheets/bootstrap/mixins/gradients";
    header {
        position: relative;
        display: flex;
        height: 80px;
        img {
            margin: auto;
        }
        &:after {
            content: " ";
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -7px;
            height: 6px;
            background: $primary-color;
            @include gradient-horizontal($primary-color, $secondary-color, 20%);

        }
    }
</style>