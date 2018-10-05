import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import listagemServiço from'@/components/listagemServiço';
import listCatServ from'@/components/listCatServ';
import listUsers from'@/components/listUsers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/listagemServiço',
      name: 'listagemServiço',
      component: listagemServiço,
    },
    {
      path: '/listCatServ',
      name:'listCatServ',
      component: listCatServ
    },
    {
      path: '/listUsers',
      name:'listUsers',
      component: listUsers
    }
  ],
});
