import { useEffect, useState } from "react";
import { Bell, Bookmark, CalendarDays, Facebook, LockKeyhole, Mail, MapPin, Phone, Share2, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { aboutBlocks, event } from "../../data/event";
import eventArt from "../../assets/komplex-nye-2027.jpeg";
import mapArt from "../../assets/watamu-map.png";
import { Button } from "../ui/QuicketButton";
import { TicketDialog } from "./TicketDialog";
import { SiteHeader } from "../shared/SiteChrome";
import { useAppState } from "../shared/AppState";

export function EventPage() {
 const [ticketsOpen,setTicketsOpen]=useState(false); const [prefs,setPrefs]=useState(false); const [calendar,setCalendar]=useState(false); const {saved,followed,reminded,toggleSaved,toggleFollowed,toggleReminder}=useAppState();
 useEffect(()=>{ document.body.style.overflow=ticketsOpen?"hidden":""; return()=>{document.body.style.overflow=""}},[ticketsOpen]);
 const scrollTo=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
 return <div className="site-shell">
  <SiteHeader eventPage/>
  <div className="hero"><img src={eventArt} alt={event.title}/></div>
  <nav className="tabs desktop-tabs"><Button variant="ghost" onClick={()=>scrollTo("about")}>ABOUT</Button><Button variant="ghost" onClick={()=>scrollTo("directions")}>DIRECTIONS</Button></nav>
  <main className="event-layout"><article className="event-content">
    <div className="mobile-badge">{event.badge}</div><div className="title-row"><h1>{event.title}</h1><div><button aria-label="Share event" onClick={()=>navigator.share?.({title:event.title,url:location.href})}><Share2/></button><button aria-label={reminded?"Remove reminder":"Set reminder"} className={reminded?"active-icon":""} onClick={toggleReminder}><Bell/></button><button aria-label={saved?"Unsave event":"Save event"} className={saved?"active-icon":""} onClick={toggleSaved}><Bookmark/></button></div></div>
    <div className="organizer">By <a href={event.organizer.url}>{event.organizer.name}</a><Button variant="outline" onClick={toggleFollowed}>{followed?"Following":"Follow"}</Button><a href={event.organizer.website}>{event.organizer.website}</a><a aria-label="KOMPLEX KE on Facebook" href={event.organizer.facebook}><Facebook/></a></div>
   <div className="mobile-facts"><p><CalendarDays/>{event.dates}</p><p><MapPin/>{event.venue.name}</p></div>
   <nav className="tabs mobile-tabs"><Button variant="ghost" onClick={()=>scrollTo("about")}>ABOUT</Button><Button variant="ghost" onClick={()=>scrollTo("directions")}>DIRECTIONS</Button></nav>
   <section id="about" className="page-section"><h2>ABOUT</h2><div className="section-rule"/><div className="about-copy">{aboutBlocks.map((b,i)=>b.type==="h"?<h3 key={i}>{b.text}</h3>:<p key={i}>{b.text}</p>)}</div></section>
  <section id="directions" className="page-section directions"><h2>DIRECTIONS</h2><div className="section-rule"/><a href="http://maps.google.co.za/maps?q=-3.3498817,40.0244732"><img src={mapArt} alt="Map showing Sun Palm Beach Hotel & Resort Watamu"/></a><h3>{event.title}</h3><p>{event.venue.name}</p><p>{event.venue.address}</p><a href={event.venue.directions}>Get Directions</a></section>
    <section className="page-section discover"><h2>DISCOVER</h2><div className="section-rule"/><div>{event.tags.map(tag=><Link key={tag} to="/events/kenya" search={{query:tag}}>{tag}</Link>)}</div></section>
  </article>
    <aside className="event-sidebar"><div className="price-card"><p className="from">From <strong>Ksh{event.startPrice.toLocaleString()}</strong></p><div className="card-rule"/><p><span className="tag-icon">◇</span><b className="age-badge">{event.badge}</b></p><p><CalendarDays/><span>{event.dates}<button className="text-link" onClick={()=>setCalendar(!calendar)}>Add To Calendar</button>{calendar&&<span className="calendar-menu"><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=KOMPLEX+NYE+2027">Google Calendar</a><a download="komplex-nye-2027.ics" href={`data:text/calendar;charset=utf-8,${encodeURIComponent("BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:KOMPLEX NYE 2027\nLOCATION:Sun Palm Beach Hotel & Resort Watamu\nEND:VEVENT\nEND:VCALENDAR")}`}>iCal / Outlook</a></span>}</span></p><p><MapPin/><span>{event.venue.name}<button className="text-link" onClick={()=>scrollTo("directions")}>View Map</button></span></p><div className="card-rule"/><Button className="tickets-cta" onClick={()=>setTicketsOpen(true)}>TICKETS</Button></div><p className="secure"><LockKeyhole/>Payments are secure and encrypted</p></aside>
  </main>
    <footer className="site-footer"><div><a href="tel:+254207903150"><Phone/>+254 20 790 3150</a><a href="mailto:support@quicket.co.ke"><Mail/>support@quicket.co.ke</a><span>© Copyright 2026 Quicket</span></div><div><Link to="/legal/terms">Terms &amp; Conditions</Link><Link to="/legal/privacy">Privacy Policy</Link><Button variant="ghost" onClick={()=>setPrefs(true)}>Cookie Preferences</Button></div></footer>
  <div className="mobile-buy"><div><Share2/><Bell/><span>From <strong>Ksh{event.startPrice.toLocaleString()}</strong></span></div><Button onClick={()=>setTicketsOpen(true)}>TICKETS</Button></div>
   {prefs&&<div className="prefs-overlay"><div className="prefs-dialog"><Button variant="ghost" className="prefs-close" aria-label="Close preference center" onClick={()=>setPrefs(false)}><X/></Button><h2>Privacy Preference Center</h2><h3>Your Privacy</h3><p>Choose which cookies you allow. Strictly necessary cookies remain enabled so the site can work.</p>{["Strictly Necessary Tracking Technologies","Functional Tracking Technologies","Performance Tracking Technologies","Advertising & Targeting Tracking Technologies"].map((x,i)=><label key={x}>{x}<input type="checkbox" defaultChecked={i===0} disabled={i===0}/></label>)}<div><Button onClick={()=>setPrefs(false)}>Confirm My Choices</Button><Button variant="outline" onClick={()=>setPrefs(false)}>Reject All</Button></div></div></div>}
  <TicketDialog open={ticketsOpen} onClose={()=>setTicketsOpen(false)}/>
 </div>
}
