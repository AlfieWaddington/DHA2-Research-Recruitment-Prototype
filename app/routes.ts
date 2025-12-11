import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/ParticipantDashboard","routes/PartDash.tsx")



] satisfies RouteConfig;
