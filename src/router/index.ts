import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // 进度条样式

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/editor/index.vue')
        }
    ]
})

router.beforeEach(() => {
    NProgress.start() // start progress bar
    return true
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})

export default router
