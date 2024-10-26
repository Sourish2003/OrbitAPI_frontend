import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home, Book, BarChart, Users, Code, Menu, LayoutDashboard } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar, { SidebarItem } from './Sidebar';

export default function Dashboard(){
  <Sidebar>
    <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        alert
    />
    <SidebarItem icon={<BarChart size={20}/>} text="Statistics" active />
    <SidebarItem icon={<BarChart size={20}/>} text="Statistics" active />
    <SidebarItem icon={<BarChart size={20}/>} text="Statistics" active />
    <SidebarItem icon={<BarChart size={20}/>} text="Statistics" active />
    <SidebarItem icon={<BarChart size={20}/>} text="Statistics" active />
    <SidebarItem icon={<BarChart size={20}/>} text="Statistics" active />
  </Sidebar>
}
