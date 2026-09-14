import { createFileRoute } from "@tanstack/react-router";
import { AccountOverview } from "../components/pages/AppPages";

export const Route = createFileRoute("/account/")({
  head: () => ({
    meta: [
      { title: "My Account — Quicket" },
      { name: "description", content: "Manage your Quicket demo account." },
      { property: "og:title", content: "My Account — Quicket" },
      { property: "og:description", content: "Manage tickets, saved events, and event tools." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AccountOverview,
});