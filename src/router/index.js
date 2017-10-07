import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import MyAccount from '@/views/MyAccount'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/mon-compte',
            name: 'my-account',
            component: MyAccount
        }
    ]
});
