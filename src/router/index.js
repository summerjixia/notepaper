import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import notePaperMain from '../page/homePage/mainPage'
import addnotepaper from '../page/addNotePaper/addnotepaper'
import search from '../page/homePage/children/search/search'


Vue.use(VueRouter)

let routes = [{
    path: "/",
    component: App,
    children: [{
        path: "/",
        component: notePaperMain
    },
    {
        path: "/addnotepaper",
        name: "addnotepaper",
        component: addnotepaper
    }, {
        path: "/search",
        component: search
    }
    ]
}]


const router = new VueRouter({
    routes,
    mode: "hash",
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    }
})

export default router