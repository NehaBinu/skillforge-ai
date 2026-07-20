"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { apiFetch } from "@/lib/api";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Award, Settings, LogOut } from "lucide-react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { label: "Certificates", href: "/dashboard/certificates", icon: Award },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-[#E3DDCC] min-h-screen flex flex-col">
      <div className="px-6 py-6 border-b border-[#E3DDCC]">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={22} />
          <span className="font-display font-bold text-[#18140F]">SkillForge</span>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                active
                  ? "bg-[#2F5DE3]/10 text-[#2F5DE3]"
                  : "text-[#6E6455] hover:bg-[#F7F4EC]"
              }`}
            >
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-5 border-t border-[#E3DDCC]">
        <button
          onClick={async () => {
            await apiFetch("/auth/logout", { method: "POST" });
            localStorage.removeItem("currentOrgId");
            window.location.href = "/login";
          }}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#6E6455] hover:bg-[#F7F4EC] w-full transition"
>
  <LogOut size={17} />
  Log out
</button> 
      </div>
    </aside>
  );
}