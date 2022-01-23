import News from '@/components/mainScreens/News.vue'
import Events from '@/components/mainScreens/Events.vue'
import Users from '@/components/mainScreens/Users.vue'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'

export default [{
        path: "/login",
        component: Login
    },
    {
        path: "/registration",
        component: Registration
    },
    {
        path: "/news",
        component: News,
    },
    {
        path: "/events",
        component: Events,
    },
    {
        path: "/users",
        component: Users
    }
]