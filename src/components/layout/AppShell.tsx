import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppShell() {
  return (
    <div className="flex h-screen bg-[#222222] text-text-primary font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
