import type { Route } from "./+types/home";
import  Dashboard   from "../participant/studies/Dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DHA2 App Dashboard" },
    { name: "Dashboard", content: "This is the participant dashboard" },
  ];
}

export default function ParticipantDashboard() {
  return <Dashboard children="" />;
}


