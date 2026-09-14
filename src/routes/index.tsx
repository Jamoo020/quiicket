import { createFileRoute } from "@tanstack/react-router";
import { EventPage } from "../components/event/EventPage";
export const Route = createFileRoute("/")({
 head:()=>({meta:[
  {title:"Book tickets for KOMPLEX NYE 2027"},
  {name:"description",content:"Book tickets for KOMPLEX NYE 2027 at Sun Palm Beach Hotel & Resort Watamu."},
  {property:"og:title",content:"KOMPLEX NYE 2027"},{property:"og:description",content:"A two day electronic music celebration by the Indian Ocean in Watamu."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}
 ]}), component: EventPage,
});
