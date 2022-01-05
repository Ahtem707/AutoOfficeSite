import Home from '@/components/Home'
import Ad from '@/components/Books/Ad'
import MyBooks from '@/components/Books/MyBooks'
import NewBook from '@/components/Books/NewBook'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

export default [{
        path: "/",
        component: Home
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