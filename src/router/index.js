import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Event from '@/components/Event'
import EventTags from '@/components/EventTags'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/:event_name',
      name: 'Event',
      component: Event,
      children: [
        { path: '/:event_name/tags', name: 'EventTags', component: EventTags }
      ]
    }
  ]
})
