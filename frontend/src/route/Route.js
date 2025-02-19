import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import Contact from "../pages/contact/Contact";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import PageNotFound from "../pageNotFound/PageNotFound";
import Blog from "../pages/blog/Blog";
import DashBoard from "../layOut/DashBoard";
import BlogPostManage from "../dashboard/blogManagement/BlogPostManage";
import Post from "../dashboard/blogPost/Post";
import AboutUs from "../pages/aboutUs/AboutUs";
import Services from "../pages/Services/Services";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import DiscoverProjects from "../pages/discoverprojects/DiscoverProjects";
import ActiveOffers from "../dashboard/offerManagement/ActiveOffers";
import CreateOffer from "../dashboard/offerManagement/CreateOffer";
import OfferDetails from "../dashboard/offerManagement/OfferDetails";
import UsersWithOffers from "../dashboard/UsersWithOffers/UsersWithOffers";
import Pricing from "../pages/pricing/Pricing";
import AllUsers from "../dashboard/allUsers/AllUsers";
// import { GoogleLogin } from "@react-oauth/google";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '*',
        element: <PageNotFound />
      },
      {
        path: '/signup',
        element: <SignUp />

      },
      {
        path: "/login",
        element: <SignIn />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: '/serviceDetails/:id',
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: '/projects',
        element: <DiscoverProjects />
      },
      {
        path:'/price',
        element:<PrivateRoute><Pricing/></PrivateRoute>
      }
      // {
      //   path:"/googleSignin",
      //   element:<GoogleLogin/>
      // }
    ]
  },
  {
    path: 'dashboard',
    element: <DashBoard />,
    children: [
      {
        path: 'postManage',
        element: <BlogPostManage />
      },
      {
        path: 'post',
        element: <Post />
      },
      {

        path: 'offers',
        element: <ActiveOffers />,
      },
      {
        path: 'offers/create',
        element: <CreateOffer />,
     },
     {
      path: 'offers/:id',
      element: <OfferDetails />,
   },
   {
    path:'users-with-offers',
    element:<UsersWithOffers/>
   },
   {
    path:"users",
    element:<AllUsers/>
   }
    ]
  }
]);

export default router;