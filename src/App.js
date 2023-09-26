import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Jayesh Choudhary",
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app font-sans bg-gray-150">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [{
            path: "/",
            element: <Body />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />,
        },
        {
            path: "/grocery",
            element: (
                <Suspense fallback={<h1>loading...</h1>}>
                    <Grocery />
                </Suspense>
            ),
        },],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
