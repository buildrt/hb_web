import Vue from "vue";
import Router from 'vue-router'

// 1.通过Vue.use(插件),安装插件
Vue.use(Router)

// 2.创建路由对象
const NGASearchMain = () =>import('../views/nga/NGASearchMain');
const NGACommentsMain = () => import('../views/nga/NGACommentsMain');


// 配置路由和组件之间的映射关系
const routes = [
    {
        path: '',
        redirect: './nga_search'
    },
    {
        path: '/nga_search',
        component: NGASearchMain,
        meta: {
            title: 'HB专楼爬楼器',
        }
    },
    {
        path: '/nga_comments',
        component: NGACommentsMain,
        meta: {
            title: 'HB专楼爬楼器',
        }
    }
];

const router = new Router({
    routes,
    mode: 'hash'
});

router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
})

// 3.将router对象传入到Vue实例
export default router
