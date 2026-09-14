import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Linkedin, Menu, Music2, X } from "lucide-react";
import logo from "../../assets/quicket-logo.svg";
import { Button } from "../ui/QuicketButton";
import { useAppState } from "./AppState";

const items=[
 {label:"My Tickets",to:"/account/my-tickets",protected:true},
 {label:"Create Event",to:"/account/event/new",protected:true},
 {label:"Saved Events",to:"/account/my-saved-events",protected:true},
 {label:"Help",to:"/help/ticket-buyers",protected:false},
 {label:"Browse Events",to:"/events/kenya",protected:false},
 {label:"Earn Commission",to:"/account/earn-commission/referrals",protected:true},
 {label:"My Account",to:"/account",protected:true},
] as const;

export function SiteHeader({simple=false,eventPage=false}:{simple?:boolean;eventPage?:boolean}){
 const {loggedIn,logout}=useAppState();const [open,setOpen]=useState(false);const [mobile,setMobile]=useState(false);const root=useRef<HTMLDivElement>(null);const navigate=useNavigate();
 useEffect(()=>{const click=(e:MouseEvent)=>{if(root.current&&!root.current.contains(e.target as Node))setOpen(false)};const key=(e:KeyboardEvent)=>{if(e.key==="Escape"){setOpen(false);setMobile(false)}};document.addEventListener("mousedown",click);document.addEventListener("keydown",key);return()=>{document.removeEventListener("mousedown",click);document.removeEventListener("keydown",key)}},[]);
 const go=(to:string,guarded=false)=>{setOpen(false);setMobile(false);navigate({to:guarded&&!loggedIn?"/login":to as "/",search:guarded&&!loggedIn?{redirect:to}:undefined as never})};
  return <header className={`global-header ${simple?"simple-header":""} ${eventPage?"event-header":""}`}>
  <Link to="/"><img src={logo} alt="Quicket"/></Link>
  {!eventPage&&<nav className="global-links"><Link to="/events/kenya">{simple?"BROWSE EVENTS":"FIND EVENTS"}</Link><button onClick={()=>go("/account/event/new",true)}>CREATE EVENTS</button><Link to="/help/ticket-buyers">HELP</Link>{simple&&<Link to="/login">LOGIN</Link>}</nav>}
   {(!simple||eventPage)&&<div className="account-wrap" ref={root}>
   <Button variant="ghost" className="account-trigger" aria-expanded={open} onClick={()=>setOpen(v=>!v)}>MY ACCOUNT <ChevronDown/></Button>
    {open&&<div className="account-dropdown" role="menu">{items.map((item,i)=><button role="menuitem" key={item.label} className={i===0?"highlight":""} onClick={()=>go(item.to,item.protected)}>{item.label}</button>)}{loggedIn?<button role="menuitem" className="account-session-action" onClick={()=>{logout();setOpen(false);navigate({to:"/login"})}}>LOG OUT</button>:<button role="menuitem" className="account-session-action" onClick={()=>go("/login")}>LOG IN</button>}</div>}
  </div>}
  <Button variant="ghost" className="global-menu" aria-label="Open navigation" aria-expanded={mobile} onClick={()=>setMobile(true)}><Menu/></Button>
  {mobile&&<div className="global-drawer"><div className="global-drawer-head"><img src={logo} alt="Quicket"/></div><nav>{items.filter(item=>item.label!=="My Tickets").map(item=><button key={item.label} onClick={()=>go(item.to,item.protected)}>{item.label}</button>)}</nav><div className="drawer-social"><p>Follow Us</p><div><a aria-label="Quicket on LinkedIn" href="https://www.linkedin.com/company/2350818"><Linkedin/></a><a aria-label="Quicket on TikTok" href="https://www.tiktok.com/@quicket_za"><Music2/></a><a aria-label="Quicket on X" href="https://twitter.com/QuicketSA"><X/></a></div></div><button className="drawer-login" onClick={()=>{if(loggedIn)logout();else go("/login");setMobile(false)}}>{loggedIn?"Log Out":"Log In"}</button></div>}
 </header>
}

export function FullFooter(){return <footer className="full-footer"><div className="footer-inner"><div><h3>QUICKET</h3><Link to="/">Home</Link><Link to="/events/kenya">Find Events</Link><Link to="/help/ticket-buyers">Help</Link><Link to="/legal/privacy">Privacy Policy</Link><Link to="/legal/terms">Terms</Link><Link to="/about">Join our team</Link></div><div><h3>SELL TICKETS</h3><Link to="/account/event/new">Create Event</Link><Link to="/account/event/new">Sell Tickets</Link><Link to="/help">Contact</Link></div><div className="footer-brand"><img src={logo} alt="Quicket"/><a href="tel:+254207903150">+254 20 790 3150</a><a href="mailto:support@quicket.co.ke">support@quicket.co.ke</a><span>© Copyright 2026 Quicket</span><span>f&nbsp;&nbsp;♥&nbsp;&nbsp;in&nbsp;&nbsp;◎</span></div></div></footer>}

export function PageShell({children,simpleHeader=false,footer=true}:{children:ReactNode;simpleHeader?:boolean;footer?:boolean}){return <div className="app-page"><SiteHeader simple={simpleHeader}/>{children}{footer&&<FullFooter/>}</div>}