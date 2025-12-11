import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DHA2 App" },
    { name: "A research recruitment software", content: "This is the home page I think" },
  ];
}

export default function Home() {
  return <Welcome />;
}
