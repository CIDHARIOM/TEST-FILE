import { useCallback, useEffect, useState } from 'react'
import {
  CheckoutSheet,
  CommunityPage,
  EventsPage,
  HomePage,
  InboxPage,
  OrdersPage,
  ProfilePage,
  RewardsPage,
  SecurityPage,
  ServiceDetailPage,
  ServicesPage,
  StatusPage,
  SupportPage,
  TrustPage,
  WalletPage,
  AcademyPage,
} from './pages'
import { MobileMenu, MobileNav, SearchOverlay, Sidebar, Toast, Topbar } from './components'

const pageTitles = {
  home: 'Home', services: 'Services', service: 'Service details', orders: 'Orders', wallet: 'Wallet',
  rewards: 'Rewards', profile: 'My ANDOS', events: 'Events', community: 'Community', academy: 'Academy',
  trust: 'Trust Center', security: 'Security', inbox: 'Inbox', support: 'Support', status: 'System Status',
}

export default function App() {
  const [page, setPage] = useState('home')
  const [serviceId, setServiceId] = useState('mobile-recharge')
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [checkoutService, setCheckoutService] = useState(null)
  const [toast, setToast] = useState('')

  const navigate = useCallback(nextPage => {
    setPage(nextPage)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const navigateService = useCallback(id => {
    setServiceId(id)
    setPage('service')
    setSearchOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    document.title = `${pageTitles[page] || 'ANDOS'} — ANDOS`
  }, [page])

  useEffect(() => {
    const handler = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const shared = { navigate, navigateService }
  let content
  switch (page) {
    case 'services': content = <ServicesPage navigateService={navigateService} openSearch={() => setSearchOpen(true)} />; break
    case 'service': content = <ServiceDetailPage serviceId={serviceId} navigate={navigate} openCheckout={setCheckoutService} />; break
    case 'orders': content = <OrdersPage navigate={navigate} />; break
    case 'wallet': content = <WalletPage navigate={navigate} />; break
    case 'rewards': content = <RewardsPage navigate={navigate} />; break
    case 'profile': content = <ProfilePage navigate={navigate} />; break
    case 'trust': content = <TrustPage navigate={navigate} />; break
    case 'security': content = <SecurityPage />; break
    case 'events': content = <EventsPage />; break
    case 'academy': content = <AcademyPage />; break
    case 'community': content = <CommunityPage />; break
    case 'inbox': content = <InboxPage />; break
    case 'support': content = <SupportPage />; break
    case 'status': content = <StatusPage />; break
    default: content = <HomePage {...shared} openSearch={() => setSearchOpen(true)} />
  }

  return (
    <div className="app-shell">
      <Sidebar page={page} navigate={navigate} />
      <div className="app-main">
        <Topbar navigate={navigate} openSearch={() => setSearchOpen(true)} openMenu={() => setMenuOpen(true)} />
        <main>{content}</main>
      </div>
      <MobileNav page={page} navigate={navigate} openMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} page={page} navigate={navigate} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} navigateService={navigateService} navigate={navigate} />
      {checkoutService && <CheckoutSheet service={checkoutService} onClose={() => { setCheckoutService(null); setToast('Checkout preview closed — no order was placed.') }} />}
      {toast && <Toast message={toast} onDismiss={() => setToast('')} />}
    </div>
  )
}
