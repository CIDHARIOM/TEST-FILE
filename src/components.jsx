import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  CircleAlert,
  Inbox,
  LoaderCircle,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { discoverNavigation, mainNavigation, services, trustNavigation } from './data'

export function Brand({ compact = false }) {
  return (
    <div className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="ANDOS home">
      <span className="brand__mark" aria-hidden="true"><span>A</span></span>
      {!compact && <span className="brand__word">ANDOS</span>}
    </div>
  )
}

export function Button({ children, variant = 'primary', icon: Icon, trailing: Trailing, loading = false, className = '', ...props }) {
  return (
    <button className={`button button--${variant} ${className}`} {...props}>
      {loading ? <LoaderCircle className="spin" size={18} /> : Icon ? <Icon size={18} /> : null}
      <span>{children}</span>
      {Trailing && <Trailing size={17} />}
    </button>
  )
}

export function IconButton({ label, icon: Icon, badge, className = '', ...props }) {
  return (
    <button className={`icon-button ${className}`} aria-label={label} title={label} {...props}>
      <Icon size={20} />
      {badge ? <span className="icon-button__badge">{badge}</span> : null}
    </button>
  )
}

export function PreviewPill() {
  return <span className="preview-pill"><span /> Preview mode</span>
}

export function PageHeader({ eyebrow, title, description, back, actions }) {
  return (
    <header className="page-header">
      <div className="page-header__heading">
        {back && (
          <button className="back-link" onClick={back} aria-label="Go back">
            <ArrowLeft size={18} /> Back
          </button>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {actions && <div className="page-header__actions">{actions}</div>}
    </header>
  )
}

export function SectionHeader({ eyebrow, title, description, action, actionLabel = 'View all' }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && <button className="text-link" onClick={action}>{actionLabel}<ArrowRight size={16} /></button>}
    </div>
  )
}

export function ServiceCard({ service, onClick }) {
  const Icon = service.icon
  return (
    <button className="service-card" onClick={onClick} aria-label={`Explore ${service.title}`}>
      <span className={`service-icon service-icon--${service.tone}`}><Icon size={22} /></span>
      <span className="service-card__copy">
        <strong>{service.title}</strong>
        <small>{service.short}</small>
      </span>
      <span className="service-card__arrow"><ArrowRight size={17} /></span>
    </button>
  )
}

export function EmptyState({ icon: Icon = Inbox, title, description, action, actionLabel }) {
  return (
    <div className="empty-state">
      <span className="empty-state__icon"><Icon size={25} /></span>
      <h3>{title}</h3>
      <p>{description}</p>
      {action && <Button variant="secondary" onClick={action}>{actionLabel}</Button>}
    </div>
  )
}

export function DataNotice({ children = 'Live account data is not connected in this preview. No values shown here represent real activity.' }) {
  return <div className="data-notice"><CircleAlert size={17} /><span>{children}</span></div>
}

export function StatusDot({ state = 'unknown', children }) {
  return <span className={`status-dot status-dot--${state}`}><i />{children}</span>
}

export function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <div className={`faq-item ${open === index ? 'is-open' : ''}`} key={item.q}>
          <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}>
            <span>{item.q}</span><ChevronDown size={19} />
          </button>
          <div className="faq-item__answer"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  )
}

function NavGroup({ label, items, page, navigate }) {
  return (
    <div className="nav-group">
      {label && <p className="nav-group__label">{label}</p>}
      <div className="nav-group__items">
        {items.map(item => {
          const Icon = item.icon
          const active = page === item.id || (page === 'service' && item.id === 'services')
          return (
            <button key={item.id} className={`nav-item ${active ? 'is-active' : ''}`} onClick={() => navigate(item.id)}>
              <Icon size={19} /><span>{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function Sidebar({ page, navigate }) {
  return (
    <aside className="sidebar">
      <button className="sidebar__brand" onClick={() => navigate('home')}><Brand /></button>
      <nav aria-label="Main navigation">
        <NavGroup items={mainNavigation} page={page} navigate={navigate} />
        <NavGroup label="Discover" items={discoverNavigation} page={page} navigate={navigate} />
        <NavGroup label="Trust & help" items={trustNavigation} page={page} navigate={navigate} />
      </nav>
      <button className="sidebar-trust" onClick={() => navigate('trust')}>
        <span><ShieldCheck size={19} /></span>
        <span><strong>Clear by design</strong><small>How ANDOS protects you</small></span>
        <ArrowRight size={16} />
      </button>
      <div className="sidebar__footer"><PreviewPill /><small>Interface prototype · v1.0</small></div>
    </aside>
  )
}

export function Topbar({ navigate, openSearch, openMenu }) {
  return (
    <header className="topbar">
      <button className="mobile-brand" onClick={() => navigate('home')}><Brand /></button>
      <button className="topbar__search" onClick={openSearch} aria-label="Search ANDOS">
        <Search size={18} /><span>Search services, plans or help…</span><kbd>⌘ K</kbd>
      </button>
      <div className="topbar__actions">
        <button className="status-chip" onClick={() => navigate('status')}><span />Status</button>
        <IconButton label="Open inbox" icon={Bell} onClick={() => navigate('inbox')} />
        <button className="profile-chip" onClick={() => navigate('profile')} aria-label="Open My ANDOS">
          <span className="profile-chip__avatar">A</span>
          <span><small>Welcome</small><strong>Guest</strong></span>
          <ChevronDown size={15} />
        </button>
        <IconButton label="Open menu" icon={Menu} className="menu-button" onClick={openMenu} />
      </div>
    </header>
  )
}

export function MobileNav({ page, navigate, openMenu }) {
  const items = [mainNavigation[0], mainNavigation[1], mainNavigation[2], mainNavigation[4]]
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {items.map(item => {
        const Icon = item.icon
        const active = page === item.id || (page === 'service' && item.id === 'services')
        return <button key={item.id} className={active ? 'is-active' : ''} onClick={() => navigate(item.id)}><Icon size={21} /><span>{item.label}</span></button>
      })}
      <button onClick={openMenu}><Menu size={21} /><span>More</span></button>
    </nav>
  )
}

export function MobileMenu({ open, onClose, page, navigate }) {
  const all = [...mainNavigation.slice(3), ...discoverNavigation, ...trustNavigation, { id: 'security', label: 'Security', icon: ShieldCheck }]
  if (!open) return null
  return (
    <div className="sheet-layer" role="presentation" onMouseDown={onClose}>
      <section className="mobile-menu sheet" role="dialog" aria-modal="true" aria-label="More navigation" onMouseDown={event => event.stopPropagation()}>
        <div className="sheet__handle" />
        <div className="sheet__header"><div><p className="eyebrow">Navigate</p><h2>More from ANDOS</h2></div><IconButton label="Close menu" icon={X} onClick={onClose} /></div>
        <div className="mobile-menu__grid">
          {all.map(item => {
            const Icon = item.icon
            return <button key={item.id} className={page === item.id ? 'is-active' : ''} onClick={() => { navigate(item.id); onClose() }}><span><Icon size={20} /></span>{item.label}</button>
          })}
        </div>
      </section>
    </div>
  )
}

export function SearchOverlay({ open, onClose, navigateService, navigate }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    if (open) {
      setQuery('')
      window.setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])
  useEffect(() => {
    const handler = event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') event.preventDefault()
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])
  if (!open) return null
  const words = query.toLowerCase().split(' ').filter(Boolean)
  const filtered = services.filter(service => words.length === 0 || words.some(word => `${service.title} ${service.short} ${service.category}`.toLowerCase().includes(word)))
  return (
    <div className="search-layer" onMouseDown={onClose}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search ANDOS" onMouseDown={event => event.stopPropagation()}>
        <div className="search-dialog__input"><Search size={21} /><input ref={inputRef} value={query} onChange={event => setQuery(event.target.value)} placeholder="Try “recharge”, “gaming” or “refund”" aria-label="Search" /><button onClick={onClose}><X size={19} /></button></div>
        <div className="search-dialog__body">
          {!query && <div className="search-suggestions"><p className="search-label">Search by intent</p><div>{['Mobile recharge', 'Gaming top-up', 'How refunds work', 'Track my order'].map(item => <button key={item} onClick={() => setQuery(item)}><Sparkles size={15} />{item}</button>)}</div></div>}
          <p className="search-label">{query ? `Results for “${query}”` : 'Services'}</p>
          {filtered.length > 0 ? <div className="search-results">{filtered.slice(0, 5).map(service => { const Icon = service.icon; return <button key={service.id} onClick={() => { navigateService(service.id); onClose() }}><span className={`service-icon service-icon--${service.tone}`}><Icon size={19} /></span><span><strong>{service.title}</strong><small>{service.short}</small></span><ArrowRight size={17} /></button> })}</div> : <EmptyState icon={Search} title="No matching service yet" description="Try a broader phrase, browse all services, or ask Support for help." action={() => { navigate('services'); onClose() }} actionLabel="Browse services" />}
        </div>
        <div className="search-dialog__footer"><span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span><span><kbd>esc</kbd> to close</span></div>
      </section>
    </div>
  )
}

export function Stepper({ current, steps }) {
  return <ol className="stepper">{steps.map((step, index) => <li key={step} className={index < current ? 'is-complete' : index === current ? 'is-current' : ''}><span>{index < current ? <Check size={14} /> : index + 1}</span><small>{step}</small></li>)}</ol>
}

export function Toast({ message, onDismiss }) {
  useEffect(() => { const id = window.setTimeout(onDismiss, 3500); return () => window.clearTimeout(id) }, [onDismiss])
  return <div className="toast" role="status"><span><Check size={16} /></span>{message}<button onClick={onDismiss}><X size={15} /></button></div>
}
