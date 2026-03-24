import { Link, useLocation } from 'wouter';
import { ASSETS } from '@/lib/assets';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'CEO', path: '/ceo' },
  { label: 'Quem Somos', path: '/quem-somos' },
  { label: 'Ecossistema', path: '/ecossistema' },
  { label: 'Números', path: '/numeros' },
  { label: 'Presença Territorial', path: '/presenca-territorial' },
  { label: 'Cases', path: '/cases' },
  { label: 'Contato', path: '/contato' },
];

export default function GlobalHeader() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = location === '/';

  return (
    <>
      {/* Desktop Header */}
      <header
        className="hidden lg:block sticky top-0 z-50 border-b"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E5E5',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-80 transition">
              <img
                src={ASSETS.logoGrupoArqueoColorido}
                alt="Grupo Arqueo"
                style={{ height: '32px', width: 'auto' }}
              />
              <span className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>
                Portfólio
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: location === item.path ? '#EE7501' : '#666666',
                    backgroundColor: location === item.path ? '#FFF5E6' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (location !== item.path) {
                      (e.target as HTMLAnchorElement).style.backgroundColor = '#FAFAF9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location !== item.path) {
                      (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className="lg:hidden sticky top-0 z-50 border-b"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E5E5',
        }}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2">
              <img
                src={ASSETS.logoGrupoArqueoColorido}
                alt="Grupo Arqueo"
                style={{ height: '28px', width: 'auto' }}
              />
            </a>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg transition"
            style={{ backgroundColor: '#FAFAF9', color: '#1A1A1A' }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav
            className="border-t px-4 py-4 space-y-2"
            style={{ backgroundColor: '#FAFAF9', borderColor: '#E5E5E5' }}
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className="block px-3 py-2 rounded-lg text-sm font-medium transition"
                  style={{
                    color: location === item.path ? '#FFFFFF' : '#1A1A1A',
                    backgroundColor: location === item.path ? '#EE7501' : 'transparent',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
