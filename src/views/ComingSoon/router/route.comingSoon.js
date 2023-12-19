import ComingSoon from "../ComingSoon.vue";
import Profile from "../../Profile/UserProfileDashboard.vue";


const routes = [
  {
    path: "/organisation",
    name: 'organisationComingSoon',
    component: ComingSoon
  },

  {
    path: "/message",
    name: 'MessageComingSoon',
    component: ComingSoon
  },
  {
    path: "/profile",
    name: 'profile',
    component: Profile
  },
  {
    path: "/analytics",
    name: 'analyticsComingSoon',
    component: ComingSoon
  },
  {
    path: "/fileManager",
    name: 'filemangerComingSoon',
    component: ComingSoon
  },
  {
    path: "/order",
    name: 'orderComingSoon',
    component: ComingSoon
  },
  {
    path: "/saved",
    name: 'savedComingSoon',
    component: ComingSoon
  },
  {
    path: "/setting",
    name: 'settingComingSoon',
    component: ComingSoon
  },
  {
    path: "/subscription",
    name: 'subscriptionComingSoon',
    component: ComingSoon
  },
];

export default routes;
