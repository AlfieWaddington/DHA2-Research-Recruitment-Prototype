import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DHA2 App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
