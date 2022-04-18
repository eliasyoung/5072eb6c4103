const Discover = () => import("@/views/Discover");
const PersonalRecom = () => import("@/views/PersonalRecom");
const Playlist = () => import("@/views/Playlist");

export default [
  {
    path: "/",
    redirect: "discover",
  },
  {
    path: "/discover",
    component: Discover,
    children: [
      { path: "", name: "discover", component: PersonalRecom },
      { path: "playlist", name: "playlist", component: Playlist },
    ],
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
