import { Edit, Create } from "../Pages/Edit"
import Settings from "../Pages/Settings"
import Profile from "../Pages/Settings/Profile"

export const privateRoutes = [
  {
    path: "/create",
    name: "Create",
    icon: "info",
    component: Create,
    layout: "/",
  },
  {
    path: "/article/:id/edit",
    name: "Edit",
    icon: "info",
    component: Edit,
    layout: "/",
  },
  {
    path: "/user/settings",
    name: "Settings",
    icon: "info",
    component: Settings,
    layout: "/",
  },
  {
    path: "/user/profile",
    name: "Profile",
    icon: "info",
    component: Profile,
    layout: "/",
  },
]
