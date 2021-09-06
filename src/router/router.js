import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from "../components/tile/tileMain/tileCatalog";
import vAuction from "../components/tile/tileMain/tileAuction"



Vue.use(Router);

let router = new Router({
    // mode: 'history',
    //linkActiveClass: "active",
    //linkExactActiveClass: "exact-active",
    routes: [{
            path: '/',
            name: 'main',
            component: vCatalog,
        },
        {
            path: '/auction',
            name: 'auction',
            component: vAuction,
        },
    ]
})

export default router;