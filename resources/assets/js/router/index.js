import Vue from 'vue';
import vueRouter from 'vue-router';
import menu from '../components/menu.vue';
import television from '../components/television.vue';
import tv_item from '../components/tv_item.vue';
import outdoor  from '../components/outdoor.vue';
import outdoor_tiem  from '../components/outdoor_item.vue';
import transform from '../components/transform.vue';
import transform_item from '../components/transform_item.vue';
import newspaper from '../components/newspaper.vue';
import newspaper_item from '../components/newspaper_item.vue';
import online from '../components/online.vue';
import online_item from '../components/online_item.vue';
import internet from '../components/internet.vue'
import internet_item from '../components/internet_item.vue'

Vue.use(vueRouter);

const routes = [
    {
        path: '/',
        name: 'menu',
        component: menu,
        children: [
            {
                path: 'television',
                name: 'television',
                meta: {title: '电视资源列表'},
                component: television,
            },
            {
                path: 'tv_item/:id?',
                name: 'tv_item',
                meta: {title: '电视资源详情'},
                component: tv_item,
            },
            {
                path: 'outdoor',
                name: 'outdoor',
                meta: {title: '户外资源列表'},
                component: outdoor,
            },
            {
                path: 'outdoor_item/:id?',
                name: 'outdoor_item',
                meta: {title: '户外资源详情'},
                component: outdoor_tiem,
            },
            {
                path: 'transform',
                name: 'transform',
                meta: {title: '交通资源列表'},
                component: transform,
            },
            {
                path: 'transform_item/:id?',
                name: 'transform_item',
                meta: {title: '交通资源详情'},
                component: transform_item,
            },
            {
                path: 'newspaper',
                name: 'newspaper',
                meta: {title: '纸媒资源列表'},
                component: newspaper,
            },
            {
                path: 'newspaper_item/:id?',
                name: 'newspaper_item',
                meta: {title: '纸媒资源详情'},
                component: newspaper_item,
            },
            {
                path: 'online',
                name: 'online',
                meta: {title: '线上资源列表'},
                component: online,
            },
            {
                path: 'online_item/:id?',
                name: 'online_item',
                meta: {title: '线上资源详情'},
                component: online_item,
            },
            {
                path: 'internet',
                name: 'internet',
                meta: {title: '网红资源列表'},
                component: internet,
            },
            {
                path: 'internet_item/:id?',
                name: 'internet_item',
                meta: {title: '网红资源详情'},
                component: internet_item,
            },
        ]
    },
]

const router = new vueRouter({
    // mode:'history',
    routes:routes
    })

export default router