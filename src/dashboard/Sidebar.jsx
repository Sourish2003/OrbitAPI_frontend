import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Home, Book, BarChart, Users, Code } from "lucide-react";
// import { useAuth0 } from "@auth0/auth0-react";

// const SidebarMenuItem = ({ title, icon: Icon, onClick }) => (
//   <button
//     onClick={onClick}
//     className="flex items-center gap-3 px-3 py-2 w-full text-left rounded-lg hover:bg-gray-100"
//   >
//     <Icon className="w-5 h-5" />
//     <span>{title}</span>
//   </button>
// );

// function AppSidebar() {
//   const navigate = useNavigate();
//   const { user } = useAuth0();

//   const items = [
//     { title: "Overview", path: "/dashboard", icon: Home },
//     { title: "Reports", path: "/dashboard/reports", icon: Book },
//     { title: "Projects", path: "/dashboard/projects", icon: Code },
//   ];

//   return (
//     <div className="w-64 h-screen bg-white border-r border-gray-200 flex-shrink-0">
//       <div className="p-4">
//         <div className="flex items-center gap-3 mb-4">
//           <img src={user?.picture} alt={user?.name} className="w-10 h-10 rounded-full" />
//           <div>
//             <h3 className="font-medium">{user?.name}</h3>
//             <p className="text-sm text-gray-500">{user?.email}</p>
//           </div>
//         </div>
//       </div>
//       <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase">Menu</div>
//       <div className="px-2">
//         {items.map((item) => (
//           <SidebarMenuItem
//             key={item.title}
//             title={item.title}
//             icon={item.icon}
//             onClick={() => navigate(item.path)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AppSidebar;
