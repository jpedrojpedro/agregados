import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import Event from '@/components/Event'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: App
    },
    {
      path: '/:event_name',
      name: 'Event',
      component: Event
    },
    {
      path: '/:event_name/tags',
      name: 'EventTags',
      component: Event
    }
  ]
})
