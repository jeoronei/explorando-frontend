import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/sobre',
            name: 'sobre',
            component: () => (
                import('../components/Sobre.vue')
            ),
        },
        {
            path: '/',
            name: 'home',
            component: () => (
                import('../components/HelloWorld.vue')
            ),
        },
        {
            path: '/contato',
            name: 'contato',
            component: () => (
                import('../components/Contato.vue')
            ),
        },
        {
            path: '/apresentacao',
            name: 'apresentacao',
            component: () => (
                import('../components/Apresentacao.vue')
            ),
        }
    ]
})

export default router