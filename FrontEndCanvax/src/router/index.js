"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("@ionic/vue-router");
var TabsPage_vue_1 = require("../views/TabsPage.vue");
var routes = [
    {
        path: '/',
        redirect: '/tabs/tab1'
    },
    {
        path: '/tabs/',
        component: TabsPage_vue_1.default,
        children: [
            {
                path: '',
                redirect: '/tabs/tab1'
            },
            {
                path: 'tab1',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Tab1Page.vue'); }); }
            },
            {
                path: 'tab2',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Tab2Page.vue'); }); }
            },
            {
                path: 'tab3',
                component: function () { return Promise.resolve().then(function () { return require('@/views/Tab3Page.vue'); }); }
            }
        ]
    }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(process.env.BASE_URL),
    routes: routes
});
exports.default = router;
