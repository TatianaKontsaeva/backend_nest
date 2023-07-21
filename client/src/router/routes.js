const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") },
      { path: "/catalog/", component: () => import("src/pages/Catalog.vue") },
      { path: "/cart/", component: () => import("src/pages/Cart.vue") },
      {
        path: "/:id/",
        name: "ProductPage",
        props: true,
        component: () => import("src/pages/ProductPage.vue"),
      },
      {
        path: "/help/",
        props: true,
        component: () => import("src/pages/Help.vue"),
      },
      {
        path: "/about/",
        props: true,
        component: () => import("src/pages/About.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthorizationLayout.vue"),
    children: [
      {
        path: "/auth",
        name: "auth",
        component: () => import("components/auth/Auth.vue"),
      },
      {
        path: "/signUp",
        name: "signup",
        component: () => import("components/auth/SignUpPage.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("components/auth/LoginPage.vue"),
      },
      // {
      //   path: "/Profile",
      //   name: "profile",
      //   component: () => import("components/UserProfile.vue"),
      // },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
