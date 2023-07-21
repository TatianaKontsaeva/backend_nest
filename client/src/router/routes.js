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
  // { path: '/', component: () => import('pages/MsLoginPage.vue') },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
