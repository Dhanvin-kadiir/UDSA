import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import AppShell from './components/layout/AppShell';
import Home from './pages/Home';
import Store from './pages/Store';
import Login from './pages/Login';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Stats from './pages/Stats';
import Collections from './pages/Collections';
import Platforms from './pages/Platforms';
import Library from './pages/Library';
import Support from './pages/Support';
import Analytics from './pages/Analytics';

const queryClient = new QueryClient();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {!isAuthenticated ? (
          <Routes>
            <Route path="*" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          </Routes>
        ) : (
          <Routes>
            <Route element={<AppShell />}>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/store" element={<Store />} />
              <Route path="/search" element={<Search />} />
              <Route path="/settings" element={<Profile />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/support" element={<Support />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/collections/:id" element={<Collections />} />
              <Route path="/platforms/:id" element={<Platforms />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
