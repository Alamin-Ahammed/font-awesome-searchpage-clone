import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ComingSoon from "../Components/ComingSoon/ComingSoon";
import Search from "../Pages/Search/Search";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'start',
                element: <ComingSoon pageName={'Start'}/>
            },
            {
                path: '/',
                element: <Search />
            },
            {
                path: 'icons',
                element: <ComingSoon pageName={'Icons'} />
            },
            {
                path: 'docs',
                element: <ComingSoon pageName={'Docs'} />
            },
            {
                path: 'plans',
                element: <ComingSoon pageName={'Plans'} />
            },
            {
                path: 'support',
                element: <ComingSoon pageName={'Support'} />
            },
            {
                path: 'podcast',
                element: <ComingSoon pageName={'Podcast'} />
            },
        ]
    }
])