import { createFileRoute } from "@tanstack/react-router";
import { HelpLanding } from "../components/pages/AppPages";

export const Route = createFileRoute("/help/")({
  head: () => ({
    meta: [
      { title: "Quicket Help Center" },
      { name: "description", content: "Find help with Quicket tickets and events." },
      { property: "og:title", content: "Quicket Help Center" },
      { property: "og:description", content: "Guidance for ticket buyers and event organisers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HelpLanding,
});