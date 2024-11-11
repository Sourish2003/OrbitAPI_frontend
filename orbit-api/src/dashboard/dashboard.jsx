import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Home,
  Book,
  BarChart,
  Users,
  Code,
  Menu,
  LayoutDashboard,
} from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar, { SidebarItem } from "./Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" />
        <SidebarItem icon={<BarChart size={20} />} text="Statistics" active />
        <SidebarItem icon={<Users size={20} />} text="Users" />
        <SidebarItem icon={<Book size={20} />} text="Documentation" />
        <SidebarItem icon={<Code size={20} />} text="API" />
      </Sidebar>
      <div className="p-4 flex-1">
        <h1 className="text-2xl font-bold">Dashboard Content</h1>
      </div>
    </div>
  );
}

export default Dashboard;
