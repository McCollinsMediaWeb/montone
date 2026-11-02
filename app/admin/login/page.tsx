"use client";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { Logo } from "@/components/logo";

export default function LoginPage() {
  const [show,setShow]=useState(false), [error,setError]=useState(""), [busy,setBusy]=useState(false);
  async function submit(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setBusy(true);setError("");const fd=new FormData(e.currentTarget);const res=await fetch("/api/auth/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:fd.get("email"),password:fd.get("password")})});if(res.ok) location.href="/admin";else {setError("Email or password is incorrect.");setBusy(false)}}
  return <main className="login-page"><section className="login-art"><div className="login-art-inner"><span className="eyebrow">MONTONE OPERATIONS</span><h1>Everything in<br/>one <em>good place.</em></h1><p>Manage your products, orders, customers and trade business with clarity.</p></div><div className="login-mark">M</div></section><section className="login-form-wrap"><a href="/"><Logo/></a><form className="login-form" onSubmit={submit}><div className="login-icon"><LockKeyhole/></div><span className="eyebrow">WELCOME BACK</span><h2>Sign in to Montone</h2><p>Enter your admin credentials to continue.</p><label>Email address<input name="email" type="email" autoComplete="username" required placeholder="admin@montone.ae"/></label><label>Password<div className="password-field"><input name="password" type={show?"text":"password"} autoComplete="current-password" required placeholder="Your password"/><button type="button" onClick={()=>setShow(!show)}>{show?<EyeOff/>:<Eye/>}</button></div></label>{error&&<div className="form-error">{error}</div>}<button className="button dark" disabled={busy}>{busy?"Signing in…":"Sign in"}<ArrowRight/></button><small>Protected admin area · Montone Foodstuff Trading LLC</small></form></section></main>;
}
