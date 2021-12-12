import AdminPanel from '@/components/Administrator/AdminPanel'
import Users from '@/components/Administrator/Users'
import Books from '@/components/Administrator/Books'
import CycleWorks from '@/components/Administrator/CycleWorks'
import Genre from '@/components/Administrator/Genre'
import Achievement from '@/components/Administrator/Achievement'
import Award from '@/components/Administrator/Award'
import StatusReading from '@/components/Administrator/StatusReading'
import StatusWriting from '@/components/Administrator/StatusWriting'
import SignIn from '@/components/Administrator/AdminSignIn'


export default [
    {
        path: "/",
        component: AdminPanel,
        children: [
            {
                path: "/administrator/users",
                component: Users,
                meta: { 
                    requiresAuth: true
                }
            },
            {
                path: "/administrator/books",
                component: Books
            },
            {
                path: "/administrator/cycleworks",
                component: CycleWorks
            },
            {
                path: "/administrator/genre",
                component: Genre
            },
            {
                path: "/administrator/achievement",
                component: Achievement
            },
            {
                path: "/administrator/award",
                component: Award
            },
            {
                path: "/administrator/statusreading",
                component: StatusReading
            },
            {
                path: "/administrator/statuswriting",
                component: StatusWriting
            },
        ]
    },
    {
        path: "/administrator/signIn",
        component: SignIn
    } 
]