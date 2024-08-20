import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/about";
import Branches from "./pages/userdashboard/Branches";
import ContactAdmin from "./pages/userdashboard/ContactAdmin";
import Dashboard from "./pages/dashboard";
import Homepage from "./pages/Homepage"
import Loan from "./pages/userdashboard/Loan";
import Mydashboard from "./pages/userdashboard/Mydashboard";
import Profile from "./pages/userdashboard/Profile";
import Signup from "./components/Auth/signup";
import Applyloan from "./pages/userdashboard/Applyloan";




const routes = () => {
    const pagePath = [
        {
            path: "/",
            element: <Signup/>
        },
        {
            path: "/signup",
            element: <Signup/>
        },
        // {
        //     path: "/",
        //     element: <Homepage/>
        // },
        {
            path: "*",
            element: <Homepage/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/mydashboard",
            element: <Dashboard />,
            children: [
                {
                    index: true,
                    element: <Mydashboard />
                },
                {
                    path: "loan",
                    element: <Loan />
                },
                {
                    path: "applyloan",
                    element: <Applyloan />
                },
                {
                    path: "branches",
                    element: <Branches />
                },
                {
                    path: "contact-admin",
                    element: <ContactAdmin />
                },
                {
                    path: "myprofile",
                    element: <Profile />
                },
            ]
        }
    ]


    const router = createBrowserRouter(pagePath);

    return <RouterProvider router={router} />;

}
export default routes