import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home');
const List = () => import('@/components/List');
const Single = () => import('@/components/Single');
const Notfound = () => import('@/components/Notfound');
const Course = () => import('@/components/Course');
const Books = () => import('@/components/Books');
const Lecture = () => import('@/components/Lecture');
const Online = () => import('@/components/Online');
const School = () => import('@/components/School');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single,
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },

    {
      path: '/lec',
      name: 'Lecture',
      component: Lecture
    },

    {
      path: '/online',
      name: 'Online',
      component: Online
    },

    {
      path: '/book',
      name: 'Books',
      component: Books
    },

    {
      path: '/school',
      name: 'School',
      component: School
    },


    {
      path: '*',
      name: 'NotFound',
      component: Notfound
    },


  ]
})
