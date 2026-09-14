import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type AppState = {
  ready:boolean; loggedIn:boolean; saved:boolean; followed:boolean; reminded:boolean;
  login:(email:string,password:string)=>Promise<boolean>; logout:()=>void;
  toggleSaved:()=>void; toggleFollowed:()=>void; toggleReminder:()=>void;
};
const Context = createContext<AppState | null>(null);

export function AppStateProvider({children}:{children:ReactNode}) {
  const [ready,setReady]=useState(false); const [loggedIn,setLoggedIn]=useState(false);
  const [saved,setSaved]=useState(false); const [followed,setFollowed]=useState(false); const [reminded,setReminded]=useState(false);
  useEffect(()=>{ setLoggedIn(localStorage.getItem("quicket-demo-auth")==="1"); setSaved(localStorage.getItem("quicket-demo-saved")==="1"); setReady(true); },[]);
  const value=useMemo<AppState>(()=>({ready,loggedIn,saved,followed,reminded,
    login:async(email,password)=>{await new Promise(r=>setTimeout(r,550));if(!email.includes("@")||password.length<4)return false;localStorage.setItem("quicket-demo-auth","1");setLoggedIn(true);return true},
    logout:()=>{localStorage.removeItem("quicket-demo-auth");setLoggedIn(false)},
    toggleSaved:()=>setSaved(v=>{localStorage.setItem("quicket-demo-saved",String(!v?1:0));return !v}),
    toggleFollowed:()=>setFollowed(v=>!v),toggleReminder:()=>setReminded(v=>!v)
  }),[ready,loggedIn,saved,followed,reminded]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useAppState(){const value=useContext(Context);if(!value)throw new Error("App state unavailable");return value}