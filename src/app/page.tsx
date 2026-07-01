// PURPOSE: Application root ("/"). Redirects to the login screen.
// TODO: When Supabase auth is wired up, redirect signed-in users straight to
// their role-appropriate portal (/admin/dashboard or /store/dashboard).

import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/login");
}
