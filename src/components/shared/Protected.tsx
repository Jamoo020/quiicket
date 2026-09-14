import { Navigate, useRouterState } from "@tanstack/react-router";
import { useRef, type ReactNode } from "react";
import { useAppState } from "./AppState";
export function Protected({children}:{children:ReactNode}){const {ready,loggedIn}=useAppState();const path=useRouterState({select:s=>s.location.href});const requestedPath=useRef(path.startsWith("/login")?"/account":path);if(!ready)return <div className="route-loading">Loading…</div>;if(!loggedIn)return <Navigate to="/login" search={{redirect:requestedPath.current}} replace/>;return <>{children}</>}