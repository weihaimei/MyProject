import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home/Home'
import Foods from '../components/foods/Foods'
import Cooking from '../components/cooking/Cooking'
import Shopcart from '../components/shopcart/Shopcart'
import Mine from '../components/mine/Mine'
import Login from '../components/mine/Login'
import FoodsDetails from '../components/foods/FoodsDetails'
import HomeDetails from '../components/home/HomeDetails'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/home', name: 'Home', component: Home},
    {path: '/foods', name: 'Foods', component: Foods},
    {path: '/cooking', name: 'Cooking', component: Cooking},
    {path: '/shopcart', name: 'Shopcart', component: Shopcart},
    {path: '/mine', name: 'Mine', component: Mine},
    {path: '/login', name: 'Login', component: Login},
    {path: '/food/details', name: 'FoodsDetails', component: FoodsDetails},
    {path: '/home/details', name: 'HomeDetails', component: HomeDetails}
  ]
})
