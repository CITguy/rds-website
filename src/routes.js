import Home from './views/Home.vue';
import About from './views/About.vue';
import Test from './views/Test.vue';
import Components from './views/Components.vue';
import ComponentsHome from './views/components/Home.vue';
import AlertComponent from './views/components/Alerts.vue';

// NOTE: this file is currently broken as it's transitioning to a refactored state

/*
 * FYI: Exclude the "name" property for parent routes.
 *      Vue throws a warning if you do.
 *
 * The following properties are used to build the application navigation.
 *
 * * title - defines what is shown on screen for the navigation item
 * * href - defines the href (if not defined, default to 'path')
 * * hidden - if true, item isn't shown in navigation, but is still used for VueRouter
 */

// need -- title:String, href:String
// optional --  hidden:Boolean,
function parentRoute (config) {
    return config;
}

// - name (optional), path (required), component (required)
function childRoute (path, component, routeConfig, navConfig) {
    return {
        path,
        component,
    };
}

// meta: metadata for rendering navigation programmatically
// props: metadata needed by the view

/**
 * Q1: How to separate "private" views needed for QE testing?
 *   - State Tables
 *   - Framework-specific (React, Angular, Vue, etc.)
 *
 * Q2: How to reduce duplication when defining routes?
 *   - private function to automatically create the proper route def?
 */
export default [
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: {
            nav: {
                title: 'Home',
                href: '/',
            },
        },
        props: {
            title: 'Home',
        },
    },
    {
        name: 'about',
        path: '/about',
        component: About,
        props: {
            viewTitle: 'About',
            viewHref: '/about',
        },
    },
    {
        name: 'test',
        path: '/test',
        component: Test,
        props: {
            viewTitle: 'Test',
            viewHref: '/test',
        },
    },
    {
        path: '/components',
        component: Components,
        props: {
            view: {
                title: 'Components',
                href: '/components',
            },
        },
        children: [
            {
                // NOTE: nav for this route is handled by parent
                name: 'components-home',
                path: '',
                component: ComponentsHome,
                meta: {
                    hidden: true,
                },
            },
            {
                name: 'alerts',
                path: 'alerts',
                components: {
                    default: AlertComponent,
                    aside: About,
                },
                props: {
                    title: 'Alerts',
                },
            },
        ],
    },
];
