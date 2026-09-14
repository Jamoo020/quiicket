import eventArt from "../assets/komplex-nye-2027.jpeg";

export type DemoEvent = {
  id: string; title: string; date: string; time: string; venue: string;
  city: string; country: string; category: string; price: number; image: string;
};

export const demoEvents: DemoEvent[] = [
  { id:"395332-komplex-nye-2027", title:"KOMPLEX NYE 2027", date:"Thursday, December 31, 2026", time:"16:00", venue:"Sun Palm Beach Hotel & Resort Watamu", city:"Watamu", country:"Kenya", category:"Music", price:3600, image:eventArt },
  { id:"keinmusik-nairobi", title:"Keinemusik Nairobi", date:"Saturday, November 21, 2026", time:"08:00", venue:"Uhuru Gardens Memorial Park", city:"Nairobi", country:"Kenya", category:"Music", price:4500, image:eventArt },
  { id:"beneath-the-baobabs", title:"Beneath the Baobabs Festival 2026", date:"Wednesday, December 30, 2026", time:"08:00", venue:"Beneath the Baobabs", city:"Kilifi", country:"Kenya", category:"Music", price:6000, image:eventArt },
  { id:"kisima-festival", title:"Kisima Festival 2026", date:"Friday, October 16, 2026", time:"03:00", venue:"Beneath the Baobabs", city:"Kilifi", country:"Kenya", category:"Music", price:2500, image:eventArt },
  { id:"africa-facts-summit", title:"Africa Facts Summit 2026", date:"Wednesday, October 21, 2026", time:"01:00", venue:"Safari Park Hotel & Casino", city:"Nairobi", country:"Kenya", category:"Business & Industry", price:1800, image:eventArt },
  { id:"mind-the-gap", title:"Mind The Gap Conference", date:"Saturday, September 26, 2026", time:"01:00", venue:"All Saints Cathedral Nairobi", city:"Nairobi", country:"Kenya", category:"Business & Industry", price:1200, image:eventArt },
  { id:"koda-anniversary", title:"Two Years of KODA", date:"Saturday, September 5, 2026", time:"14:00", venue:"KODA Nairobi", city:"Nairobi", country:"Kenya", category:"Music", price:2000, image:eventArt },
  { id:"wellness-day", title:"Coastal Wellness Day", date:"Sunday, January 10, 2027", time:"09:00", venue:"Watamu Beach Grounds", city:"Watamu", country:"Kenya", category:"Health & Wellness", price:900, image:eventArt },
  { id:"creators-forum", title:"Kenya Creators Forum", date:"Friday, February 12, 2027", time:"10:00", venue:"Sarit Expo Centre", city:"Nairobi", country:"Kenya", category:"Business & Industry", price:1500, image:eventArt },
];

export const demoOrders = [{ id:"QT-482971", event:"KOMPLEX NYE 2027", date:"31 Dec 2026", ticket:"General Access", quantity:2, total:7200, status:"Confirmed" }];

export const helpCategories = [
  { slug:"ordering-tickets", title:"Ordering tickets", count:11, articles:["How to buy a ticket", "Payment options", "Finding your order", "Booking for a group"] },
  { slug:"ticket-management", title:"Ticket management", count:8, articles:["Downloading your ticket", "Changing attendee details", "Transferring a ticket", "Ticket delivery questions"] },
  { slug:"event-information", title:"Event information", count:4, articles:["Finding venue details", "Event date changes", "Contacting an organiser", "Age restrictions"] },
];

export const slugify = (value:string) => value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");