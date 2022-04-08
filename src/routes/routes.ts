import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to:string,
    path: string;
    Component:  LazyExoticComponent<() => JSX.Element> |JSXComponent,
    //Component:  () => JSX.Element;
    name: string
   
}

//  const Lazy1 = lazy(()=>import(/*webpackChunkName:"LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
//  const Lazy2 = lazy(()=>import(/*webpackChunkName:"LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
//  const Lazy3 = lazy(()=>import(/*webpackChunkName:"LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));





 export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

];