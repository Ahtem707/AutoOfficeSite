import News from '@/components/mainScreens/News.vue'
import Events from '@/components/mainScreens/Events.vue'

import Ad from '@/components/Books/Ad'
import MyBooks from '@/components/Books/MyBooks'
import NewBook from '@/components/Books/NewBook'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

export default [{
        path: "/news",
        component: News,
    },
    {
        path: "/events",
        component: Events,
    },


    {
        path: "/ad/:id",
        component: Ad
    },
    {
        path: "/myBooks",
        component: MyBooks
    },
    {
        path: "/newbook",
        component: NewBook
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/registration",
        component: Registration
    },
    {
        path: "/orders",
        component: Orders
    },
]