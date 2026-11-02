import AdminDashboard from "@/components/admin-dashboard";
import { cookies } from "next/headers";
import { createHmac } from "crypto";
import { redirect } from "next/navigation";

export default async function AdminPage(){
  const token=(await cookies()).get("montone_admin")?.value;
  const expected=createHmac("sha256",process.env.SESSION_SECRET||"dev").update(`montone-admin:${(process.env.ADMIN_EMAIL||"").toLowerCase()}`).digest("hex");
  if(!token || token!==expected) redirect("/admin/login");
  return <AdminDashboard/>;
}
