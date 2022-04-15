const PersonalRecom = () => import("@/views/PersonalRecom");

export default [
  {
    path: "/",
    name: "personalrecom",
    component: PersonalRecom,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];
