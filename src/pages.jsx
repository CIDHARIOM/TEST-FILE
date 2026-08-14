import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BadgeIndianRupee,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleAlert,
  CircleCheck,
  CircleDashed,
  Clock3,
  Copy,
  CreditCard,
  Eye,
  EyeOff,
  Fingerprint,
  Gift,
  Headphones,
  HeartHandshake,
  HelpCircle,
  History,
  Inbox,
  KeyRound,
  Laptop,
  Layers3,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  Medal,
  MessageCircleMore,
  PackageCheck,
  Percent,
  Phone,
  Radio,
  ReceiptText,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Target,
  Ticket,
  Trophy,
  UserRound,
  Users,
  WalletCards,
  WifiOff,
  X,
  Zap,
} from 'lucide-react'
import {
  Button,
  DataNotice,
  EmptyState,
  FaqList,
  IconButton,
  PageHeader,
  PreviewPill,
  SectionHeader,
  ServiceCard,
  StatusDot,
  Stepper,
} from './components'
import { academyArticles, quickActions, serviceFaqs, services, trustPrinciples } from './data'

function Hero({ navigate, openSearch }) {
  return (
    <section className="home-hero">
      <div className="home-hero__copy">
        <div className="hero-kicker"><span><Sparkles size={14} /></span> A clearer way to access digital services</div>
        <h1>Everything digital.<br /><em>One clear place.</em></h1>
        <p>Discover services, understand every requirement, and follow each connected order from payment to completion.</p>
        <div className="home-hero__actions">
          <Button trailing={ArrowRight} onClick={() => navigate('services')}>Explore services</Button>
          <Button variant="secondary" icon={Radio} onClick={() => navigate('orders')}>Track an order</Button>
        </div>
        <div className="hero-assurances">
          <span><Check size={14} /> Price before payment</span>
          <span><Check size={14} /> Visible order progress</span>
          <span><Check size={14} /> Help in reach</span>
        </div>
      </div>
      <div className="hero-panel">
        <div className="hero-panel__top">
          <div><span className="hero-panel__icon"><ShieldCheck size={21} /></span><p>Clear at every step</p></div>
          <PreviewPill />
        </div>
        <div className="hero-journey">
          <div className="hero-journey__line" />
          <div><span className="is-done"><Check size={14} /></span><p><strong>Choose with confidence</strong><small>Requirements and timing upfront</small></p></div>
          <div><span className="is-current">2</span><p><strong>Review before paying</strong><small>Final amount, policy, and method</small></p></div>
          <div><span>3</span><p><strong>Know what is happening</strong><small>Track each available milestone</small></p></div>
        </div>
        <button className="hero-search" onClick={openSearch}><Search size={18} /><span>What do you need today?</span><kbd>⌘ K</kbd></button>
      </div>
    </section>
  )
}

function QuickActions({ navigate, navigateService }) {
  return (
    <section className="quick-actions" aria-label="Quick actions">
      {quickActions.map(action => {
        const Icon = action.icon
        return <button key={action.label} onClick={() => action.serviceId ? navigateService(action.serviceId) : navigate(action.page)}><span className={`quick-actions__icon tone-${action.tone}`}><Icon size={20} /></span><span>{action.label}</span><ChevronRight size={15} /></button>
      })}
    </section>
  )
}

export function HomePage({ navigate, navigateService, openSearch }) {
  return (
    <div className="page home-page">
      <div className="home-greeting"><div><p>Good morning</p><h2>What can ANDOS help you do?</h2></div><button onClick={() => navigate('inbox')}><Bell size={18} /><span>No live updates</span></button></div>
      <Hero navigate={navigate} openSearch={openSearch} />
      <button className="system-strip" onClick={() => navigate('status')}>
        <span className="system-strip__icon"><Activity size={18} /></span>
        <span><strong>Live system status</strong><small>Status feed is not connected in this preview</small></span>
        <StatusDot state="unknown">Unavailable</StatusDot>
        <ChevronRight size={17} />
      </button>
      <QuickActions navigate={navigate} navigateService={navigateService} />

      <section className="page-section">
        <SectionHeader eyebrow="Start here" title="Explore digital services" description="Browse by need. Live availability, pricing, and plan details appear only when connected to the service catalogue." action={() => navigate('services')} />
        <div className="service-grid">{services.slice(0, 6).map(service => <ServiceCard key={service.id} service={service} onClick={() => navigateService(service.id)} />)}</div>
      </section>

      <section className="trust-feature page-section">
        <div className="trust-feature__visual">
          <div className="trust-orbit trust-orbit--one" />
          <div className="trust-orbit trust-orbit--two" />
          <span className="trust-shield"><ShieldCheck size={42} /></span>
          <span className="floating-proof floating-proof--top"><ReceiptText size={16} /> Upfront totals</span>
          <span className="floating-proof floating-proof--bottom"><Radio size={16} /> Trackable stages</span>
        </div>
        <div className="trust-feature__copy">
          <p className="eyebrow">Why ANDOS</p>
          <h2>Confidence is part of the service.</h2>
          <p>Important details should never be buried. ANDOS is designed to show what you need, what you will pay, and what happens next.</p>
          <div className="trust-feature__points">
            <div><span><Check size={15} /></span><p><strong>Nothing important is hidden</strong><small>Requirements and policies stay close to the decision.</small></p></div>
            <div><span><Check size={15} /></span><p><strong>Every status has meaning</strong><small>Plain-language progress reduces uncertainty after payment.</small></p></div>
          </div>
          <Button variant="secondary" trailing={ArrowRight} onClick={() => navigate('trust')}>Visit Trust Center</Button>
        </div>
      </section>

      <section className="rewards-preview page-section">
        <div className="rewards-preview__copy">
          <span className="rewards-preview__icon"><Gift size={25} /></span>
          <p className="eyebrow">ANDOS Rewards</p>
          <h2>Useful rewards, without the pressure.</h2>
          <p>Points, levels, badges, and redemptions come together in one transparent progress system.</p>
          <Button variant="inverted" onClick={() => navigate('rewards')} trailing={ArrowRight}>Explore Rewards</Button>
        </div>
        <div className="rewards-preview__card">
          <div><span className="level-medal"><Medal size={23} /></span><span><small>Current level</small><strong>Sign in to view</strong></span></div>
          <div className="reward-progress"><div><span>Progress</span><span>— / — XP</span></div><div className="progress-track"><span style={{ width: '0%' }} /></div><small>Your verified activity will appear here.</small></div>
          <div className="reward-chips"><span><Star size={14} /> Points</span><span><Zap size={14} /> Streak</span><span><Award size={14} /> Badges</span></div>
        </div>
      </section>

      <section className="page-section">
        <SectionHeader eyebrow="Learn before you buy" title="A smarter, safer start" description="Plain-language guides designed to help you make informed decisions." action={() => navigate('academy')} actionLabel="Open Academy" />
        <div className="article-grid">{academyArticles.map(article => <ArticleCard key={article.id} article={article} onClick={() => navigate('academy')} />)}</div>
      </section>

      <section className="voice-support-grid page-section">
        <div className="customer-voice-card">
          <div className="customer-voice-card__top"><span><MessageCircleMore size={21} /></span><StatusDot state="unknown">Awaiting verified data</StatusDot></div>
          <h2>Customer Voice</h2>
          <p>Verified reviews and aggregate themes will appear here only after a real review source is connected.</p>
          <button onClick={() => navigate('trust')}>How reviews are handled <ArrowRight size={16} /></button>
        </div>
        <div className="support-card">
          <span><Headphones size={24} /></span><div><p className="eyebrow">Need a human?</p><h2>Help is never far away.</h2><p>Find answers, understand an order, or choose the right support path.</p><Button variant="secondary" onClick={() => navigate('support')}>Open Support</Button></div>
        </div>
      </section>
    </div>
  )
}

function ArticleCard({ article, onClick }) {
  const Icon = article.icon
  return <button className="article-card" onClick={onClick}><span className="article-card__icon"><Icon size={21} /></span><span className="article-card__category">{article.category}</span><strong>{article.title}</strong><p>{article.text}</p><span className="article-card__footer">{article.read}<ArrowRight size={16} /></span></button>
}

export function ServicesPage({ navigateService, openSearch }) {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Recharge', 'Social', 'Gaming', 'Entertainment']
  const visible = filter === 'All' ? services : services.filter(service => service.category === filter)
  return (
    <div className="page">
      <PageHeader eyebrow="Catalogue" title="Services" description="Start with what you need. Compare available options only after understanding requirements and timing." actions={<Button icon={Search} variant="secondary" onClick={openSearch}>Search</Button>} />
      <div className="catalogue-search" onClick={openSearch} role="button" tabIndex={0}><Search size={20} /><span><strong>Search by service or intent</strong><small>Try “mobile recharge” or “gaming top-up”</small></span><kbd>⌘ K</kbd></div>
      <div className="filter-chips" role="group" aria-label="Service categories">{categories.map(category => <button className={filter === category ? 'is-active' : ''} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div>
      <div className="catalogue-layout">
        <section>
          <div className="catalogue-heading"><h2>{filter === 'All' ? 'All services' : filter}</h2><span>{visible.length} categories</span></div>
          <div className="service-grid service-grid--large">{visible.map(service => <ServiceCard key={service.id} service={service} onClick={() => navigateService(service.id)} />)}</div>
        </section>
        <aside className="choice-guide">
          <span><Target size={22} /></span><p className="eyebrow">Decision guide</p><h3>Not sure where to start?</h3><p>Tell us what you want to do. Search can map a broad need to the relevant service area without forcing a purchase.</p><Button variant="secondary" icon={Search} onClick={openSearch}>Describe your need</Button>
          <div><ShieldCheck size={17} /><span><strong>Plan labels need proof</strong><small>“Best value” and similar labels appear only when live catalogue rules support them.</small></span></div>
        </aside>
      </div>
      <DataNotice />
    </div>
  )
}

export function ServiceDetailPage({ serviceId, navigate, openCheckout }) {
  const service = services.find(item => item.id === serviceId) || services[0]
  const Icon = service.icon
  return (
    <div className="page">
      <PageHeader back={() => navigate('services')} eyebrow={service.category} title={service.title} description={service.description} actions={<span className={`service-detail-icon service-icon--${service.tone}`}><Icon size={30} /></span>} />
      <section className="service-overview">
        <div className="service-overview__main">
          <div className="service-facts">
            <div><span><Clock3 size={18} /></span><p><small>Processing</small><strong>{service.timing}</strong></p></div>
            <div><span><KeyRound size={18} /></span><p><small>You will need</small><strong>{service.requirement}</strong></p></div>
            <div><span><RefreshCw size={18} /></span><p><small>Refund terms</small><strong>Shown before payment</strong></p></div>
          </div>
          <div className="safe-note"><ShieldCheck size={21} /><div><strong>A safe place to begin</strong><p>Review the requirement first. ANDOS should never ask for your password, OTP, or payment PIN to fulfil this service.</p></div></div>
        </div>
        <aside className="best-for"><p className="eyebrow">Good to know</p><h3>Is this right for me?</h3><p>This service area is for customers who understand the listed requirement and can review a supported live plan before paying.</p><a href="#plans">See plan experience <ArrowRight size={15} /></a></aside>
      </section>

      <section id="plans" className="page-section plan-section">
        <SectionHeader eyebrow="Choose a plan" title="Compare without guesswork" description="The live catalogue will place final price, processing estimate, requirements, and valid comparison labels side by side." />
        <DataNotice>Plan names, prices, availability, and ranking rules are not present in the source repository. The cards below demonstrate layout only and cannot be purchased.</DataNotice>
        <div className="plan-grid">
          {[{ name: 'Plan option', icon: Layers3, lines: ['Live price', 'Live processing estimate', 'Eligibility and requirement'] }, { name: 'Recommended option', icon: BadgeCheck, lines: ['Evidence-based label', 'Transparent value comparison', 'Exact fulfilment terms'] }, { name: 'Alternative option', icon: Zap, lines: ['Comparable final amount', 'Different processing profile', 'Clear refund eligibility'] }].map((plan, index) => { const PIcon = plan.icon; return <article className={`plan-card ${index === 1 ? 'plan-card--featured' : ''}`} key={plan.name}>{index === 1 && <span className="plan-card__tag">Layout preview</span>}<span className="plan-card__icon"><PIcon size={20} /></span><h3>{plan.name}</h3><div className="plan-price">₹<strong>—</strong><small>live price unavailable</small></div><ul>{plan.lines.map(line => <li key={line}><Check size={15} />{line}</li>)}</ul><Button variant={index === 1 ? 'primary' : 'secondary'} disabled>Unavailable in preview</Button></article> })}
        </div>
        <div className="checkout-preview"><div><span><ReceiptText size={21} /></span><p><strong>See how checkout protects clarity</strong><small>Preview the four-step review, verification, payment, and confirmation structure using non-transactional placeholders.</small></p></div><Button variant="secondary" trailing={ArrowRight} onClick={() => openCheckout(service)}>Preview checkout</Button></div>
      </section>

      <section className="service-policy-grid page-section">
        <div><span><ShieldCheck size={22} /></span><h3>Verification, explained</h3><p>ANDOS states why information is needed before asking for it and preserves control throughout the flow.</p></div>
        <div><span><RefreshCw size={22} /></span><h3>Refunds, in plain language</h3><p>Service-specific eligibility and timelines stay visible at review and after purchase.</p></div>
        <div><span><Headphones size={22} /></span><h3>Support, close by</h3><p>Help is available from service discovery through order completion.</p></div>
      </section>

      <section className="faq-section page-section"><SectionHeader eyebrow="Before you continue" title={`Questions about ${service.title}`} /><FaqList items={serviceFaqs} /></section>
    </div>
  )
}

export function OrdersPage({ navigate }) {
  const [tab, setTab] = useState('track')
  const [orderId, setOrderId] = useState('')
  const [lookup, setLookup] = useState(false)
  const stages = ['Order received', 'Verification', 'Payment confirmed', 'Processing', 'Fulfilment', 'Completed']
  const submit = event => { event.preventDefault(); if (orderId.trim()) setLookup(true) }
  return (
    <div className="page">
      <PageHeader eyebrow="Order center" title="Orders" description="Find a specific order or review every connected order in one calm, transparent view." />
      <div className="segmented-control"><button className={tab === 'track' ? 'is-active' : ''} onClick={() => setTab('track')}><Radio size={17} />Track an order</button><button className={tab === 'all' ? 'is-active' : ''} onClick={() => setTab('all')}><History size={17} />My orders</button></div>
      {tab === 'track' ? <>
        <section className="order-lookup">
          <div className="order-lookup__copy"><span><Radio size={24} /></span><p className="eyebrow">Track order</p><h2>Know exactly what is happening.</h2><p>Enter the Order ID from your confirmation. Connected stages and available timestamps will appear here.</p></div>
          <form onSubmit={submit}><label htmlFor="order-id">Order ID</label><div><input id="order-id" value={orderId} onChange={event => { setOrderId(event.target.value); setLookup(false) }} placeholder="e.g. AND-••••••" /><Button type="submit">Track order</Button></div><small>Find this in your confirmation or ANDOS Inbox.</small></form>
        </section>
        {lookup && <div className="lookup-result lookup-result--error"><CircleAlert size={21} /><div><strong>Live order lookup is not connected</strong><p>We could not query an order source in this interface preview. No order status has been inferred.</p></div><button onClick={() => navigate('support')}>Get help <ArrowRight size={15} /></button></div>}
        <section className="journey-preview page-section">
          <div className="journey-preview__header"><div><p className="eyebrow">Lifecycle architecture</p><h2>Every milestone, made understandable.</h2><p>This is an illustrative flow, not a real order.</p></div><span className="sample-label">Sample UI</span></div>
          <div className="order-timeline">{stages.map((stage, index) => <div key={stage}><span className={index === 0 ? 'is-current' : ''}>{index === 0 ? <CircleDashed size={18} /> : index + 1}</span><p><strong>{stage}</strong><small>{index === 0 ? 'A connected order timestamp appears here' : 'Waiting for prior stage'}</small></p>{index === 0 && <button>What’s happening?</button>}</div>)}</div>
        </section>
      </> : <section className="orders-list-state"><DataNotice /><EmptyState icon={ShoppingBag} title="No connected orders to show" description="Sign in and connect an order source to see active, completed, cancelled, or refunded orders." action={() => navigate('services')} actionLabel="Explore services" /></section>}
    </div>
  )
}

export function WalletPage({ navigate }) {
  const [hidden, setHidden] = useState(false)
  return (
    <div className="page">
      <PageHeader eyebrow="Payments" title="Wallet" description="A transparent home for balance, payment methods, coupons, and transaction history." actions={<Button variant="secondary" icon={History}>History</Button>} />
      <DataNotice />
      <section className="wallet-grid">
        <div className="balance-card">
          <div className="balance-card__top"><span><WalletCards size={22} /></span><PreviewPill /></div><div className="balance-label"><span>Available balance</span><button onClick={() => setHidden(!hidden)} aria-label={hidden ? 'Show balance' : 'Hide balance'}>{hidden ? <Eye size={18} /> : <EyeOff size={18} />}</button></div><strong>{hidden ? '••••••' : '₹ —'}</strong><small>No live balance connected</small><div className="balance-card__actions"><Button variant="inverted" icon={ArrowDownLeft} disabled>Add money</Button><Button variant="glass" icon={ArrowUpRight} disabled>Withdraw</Button></div>
        </div>
        <div className="wallet-side-card"><span><Ticket size={22} /></span><div><small>Available coupons</small><strong>—</strong><p>Eligible coupons will be checked before payment. No fabricated savings are shown.</p></div><button onClick={() => navigate('rewards')}>View Rewards <ArrowRight size={15} /></button></div>
      </section>
      <section className="page-section"><SectionHeader title="Payment methods" description="Saved methods are encrypted and shown only after secure account access." /><EmptyState icon={CreditCard} title="No payment methods connected" description="Payment methods added through a live checkout would appear here. ANDOS should never store your payment PIN." /></section>
      <section className="page-section"><SectionHeader title="Recent activity" /><div className="surface-panel"><EmptyState icon={History} title="Your wallet activity will appear here" description="Deposits, payments, refunds, and withdrawals will be labeled clearly with their real status." /></div></section>
    </div>
  )
}

export function RewardsPage({ navigate }) {
  return (
    <div className="page">
      <PageHeader eyebrow="Rewards 2.0" title="ANDOS Rewards" description="A transparent place to earn, progress, and redeem—designed to reward genuine activity, not pressure it." />
      <DataNotice>Reward balances, streaks, milestones, and eligibility require verified account activity. No sample points are presented as real.</DataNotice>
      <section className="rewards-dashboard">
        <div className="level-card"><div className="level-card__glow" /><div className="level-card__head"><span><Medal size={25} /></span><PreviewPill /></div><p>Your level</p><h2>Sign in to view</h2><div className="level-line"><span style={{ width: '0%' }} /></div><small>Verified XP progress will appear here</small><div className="level-card__footer"><span>Starter</span><ArrowRight size={16} /><span>Explorer</span><ArrowRight size={16} /><span>Insider</span><ArrowRight size={16} /><span>VIP</span></div></div>
        <div className="rewards-stat-grid">{[{ icon: Star, label: 'Points', value: '—', text: 'Earn' }, { icon: Zap, label: 'Streak', value: '—', text: 'Maintain' }, { icon: Award, label: 'Badges', value: '—', text: 'Collect' }, { icon: Gift, label: 'Rewards', value: '—', text: 'Redeem' }].map(item => { const Icon = item.icon; return <div key={item.label}><span><Icon size={19} /></span><small>{item.label}</small><strong>{item.value}</strong><p>{item.text}</p></div> })}</div>
      </section>
      <section className="page-section"><SectionHeader eyebrow="Progress with purpose" title="How Rewards works" description="Every action, benefit, and eligibility rule should be visible before you participate." /><div className="how-grid">{[{ n: '01', title: 'Earn', text: 'Eligible verified activity awards points using published rules.' }, { n: '02', title: 'Progress', text: 'See how points, streaks, and XP contribute to your next level.' }, { n: '03', title: 'Redeem', text: 'Choose from currently available benefits with clear terms.' }].map(item => <div key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></section>
      <section className="two-column-section page-section"><div><SectionHeader title="Available rewards" /><EmptyState icon={Gift} title="No reward catalogue connected" description="Eligible coupons, bonus points, access benefits, and offers will appear here with real redemption terms." /></div><div><SectionHeader title="Achievements" action={() => navigate('profile')} actionLabel="View all" /><div className="achievement-list">{[{ icon: PackageCheck, title: 'First Order', text: 'Complete an eligible first order' }, { icon: Zap, title: '7-Day Streak', text: 'Maintain a qualifying streak' }, { icon: Users, title: 'Community Builder', text: 'Reach a verified referral milestone' }].map(item => { const Icon = item.icon; return <div key={item.title}><span><Icon size={18} /></span><p><strong>{item.title}</strong><small>{item.text}</small></p><LockKeyhole size={15} /></div> })}</div></div></section>
    </div>
  )
}

export function ProfilePage({ navigate }) {
  return (
    <div className="page">
      <PageHeader eyebrow="Personal dashboard" title="My ANDOS" description="Your orders, savings, rewards, security, and useful next steps—together in one place." actions={<Button variant="secondary" icon={UserRound}>Sign in</Button>} />
      <DataNotice />
      <section className="next-action"><span><Target size={23} /></span><div><p className="eyebrow">Your next best action</p><h3>Sign in securely to personalize this space.</h3><p>ANDOS will only recommend actions supported by your real order and reward activity.</p></div><Button>Sign in</Button></section>
      <div className="profile-stat-grid">{[{ label: 'Total orders', value: '—', icon: ShoppingBag }, { label: 'Total savings', value: '₹ —', icon: BadgeIndianRupee }, { label: 'Reward points', value: '—', icon: Star }, { label: 'Referrals', value: '—', icon: Users }].map(item => { const Icon = item.icon; return <div key={item.label}><span><Icon size={18} /></span><p><small>{item.label}</small><strong>{item.value}</strong></p></div> })}</div>
      <section className="profile-columns page-section">
        <div><SectionHeader title="Active orders" action={() => navigate('orders')} /><EmptyState icon={PackageCheck} title="No active order data" description="Connected orders that need attention or are in progress will appear here." /></div>
        <div><SectionHeader title="Account & preferences" /><div className="settings-list">{[{ icon: UserRound, title: 'Personal details', text: 'Name and account information' }, { icon: ShieldCheck, title: 'Security & privacy', text: 'PIN, biometrics, sessions', page: 'security' }, { icon: Bell, title: 'Notification preferences', text: 'Choose meaningful updates', page: 'inbox' }, { icon: Headphones, title: 'Support', text: 'Get help with ANDOS', page: 'support' }].map(item => { const Icon = item.icon; return <button key={item.title} onClick={() => item.page && navigate(item.page)}><span><Icon size={19} /></span><p><strong>{item.title}</strong><small>{item.text}</small></p><ChevronRight size={17} /></button> })}</div></div>
      </section>
    </div>
  )
}

export function TrustPage({ navigate }) {
  const sections = ['How ANDOS works', 'Payment transparency', 'Verification standards', 'Refund policy', 'Order processing', 'Support standards', 'Data & privacy', 'Service reliability']
  return (
    <div className="page trust-page">
      <section className="trust-hero"><div><span className="trust-hero__mark"><ShieldCheck size={30} /></span><p className="eyebrow">ANDOS Trust Center</p><h1>Trust isn’t a badge.<br />It’s how everything works.</h1><p>Clear standards for pricing, verification, processing, support, privacy, and reviews—written for people, not fine print.</p><div><Button variant="inverted" onClick={() => navigate('services')}>Explore services</Button><Button variant="glass" onClick={() => navigate('support')}>Ask a question</Button></div></div><div className="trust-manifesto"><p>Our product promise</p>{['Show the final amount before payment', 'Explain why information is required', 'Use real data for status and social proof', 'Keep support accessible'].map(item => <span key={item}><Check size={15} />{item}</span>)}</div></section>
      <section className="page-section"><SectionHeader eyebrow="Designed for confidence" title="What trust looks like in practice" /><div className="trust-principles-grid">{trustPrinciples.map(item => { const Icon = item.icon; return <div key={item.title}><span><Icon size={21} /></span><h3>{item.title}</h3><p>{item.text}</p></div> })}</div></section>
      <section className="trust-directory page-section"><div><p className="eyebrow">Trust directory</p><h2>Understand every standard.</h2><p>Each policy area is structured to answer what applies, when it applies, and what you can do next.</p></div><div>{sections.map((item, index) => <button key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}<ArrowRight size={16} /></button>)}</div></section>
      <section className="review-integrity page-section"><span><MessageCircleMore size={24} /></span><div><p className="eyebrow">Review integrity</p><h2>Customer Voice needs customer evidence.</h2><p>Aggregate ratings, themes, and quotes will remain unavailable until a verified review source is connected. ANDOS will not manufacture reviews or activity.</p></div><StatusDot state="unknown">No review source connected</StatusDot></section>
      <section className="trust-cta"><div><ShieldCheck size={24} /><span><h3>Want to protect your account?</h3><p>Review account security, devices, and contextual authentication options.</p></span></div><Button variant="secondary" onClick={() => navigate('security')} trailing={ArrowRight}>Security Center</Button></section>
    </div>
  )
}

export function SecurityPage() {
  const [biometric, setBiometric] = useState(false)
  return (
    <div className="page">
      <PageHeader eyebrow="Account protection" title="Security & privacy" description="Understand and control how your account is protected. Permissions are requested only in context." />
      <DataNotice>Security settings and session activity are interface architecture only until authentication and device services are connected.</DataNotice>
      <section className="security-score"><div><span><ShieldCheck size={25} /></span><div><p className="eyebrow">Security overview</p><h2>Sign in to check your setup</h2><p>Recommendations must be based on your real account configuration.</p></div></div><Button variant="secondary">Sign in securely</Button></section>
      <section className="security-layout page-section">
        <div><SectionHeader title="Account protection" /><div className="security-list">
          <div><span><KeyRound size={20} /></span><p><strong>ANDOS PIN</strong><small>Use a private PIN to protect sensitive actions.</small></p><button>Set up <ChevronRight size={16} /></button></div>
          <div><span><Fingerprint size={20} /></span><p><strong>Biometric unlock</strong><small>Requested only when you enable device-based protection.</small></p><button role="switch" aria-checked={biometric} className={`toggle ${biometric ? 'is-on' : ''}`} onClick={() => setBiometric(!biometric)}><span /></button></div>
          <div><span><Phone size={20} /></span><p><strong>Phone verification</strong><small>Account status unavailable until sign in.</small></p><StatusDot state="unknown">Unknown</StatusDot></div>
        </div></div>
        <aside className="permission-card"><span><HeartHandshake size={23} /></span><p className="eyebrow">Privacy promise</p><h3>Ask only when it makes sense.</h3><p>Camera access belongs in QR scanning. Files access belongs in upload. Biometrics belong in secure app access.</p><ul><li><Check size={14} /> No blanket onboarding requests</li><li><Check size={14} /> A reason before every prompt</li><li><Check size={14} /> A clear way to decline</li></ul></aside>
      </section>
      <section className="page-section"><SectionHeader title="Devices & sessions" description="Review real login activity and remove access you do not recognize." /><div className="session-placeholder"><span><Laptop size={24} /></span><div><h3>No session source connected</h3><p>Device name, location approximation, last active time, and session status would appear here after secure sign-in.</p></div><Button variant="danger" icon={LogOut} disabled>Log out all devices</Button></div></section>
    </div>
  )
}

export function EventsPage() {
  return (
    <div className="page">
      <PageHeader eyebrow="Discover" title="ANDOS Events" description="Real campaigns, transparent rules, visible progress, and rewards you can understand." />
      <DataNotice>There is no live events feed in the source repository. No countdown, eligibility, reward, or leaderboard data has been invented.</DataNotice>
      <div className="filter-chips"><button className="is-active">Live now</button><button>Upcoming</button><button>Past events</button><button>Rewards</button></div>
      <section className="event-empty"><div className="event-empty__art"><span><CalendarDays size={32} /></span><i /><i /></div><p className="eyebrow">Live events</p><h2>No verified live event right now.</h2><p>When an event source is connected, campaigns with real start and end times will appear here. ANDOS will never create false urgency.</p><Button variant="secondary" icon={Bell}>Notification preferences</Button></section>
      <section className="page-section"><SectionHeader eyebrow="Transparent by design" title="Every event answers the important questions" /><div className="event-rules-grid">{[{ icon: CalendarDays, title: 'When?', text: 'Actual start, end, and timezone.' }, { icon: BadgeCheck, title: 'Who?', text: 'Eligibility before you participate.' }, { icon: Gift, title: 'What?', text: 'Reward and fulfilment terms.' }, { icon: ReceiptText, title: 'How?', text: 'Plain-language rules and progress.' }].map(item => { const Icon = item.icon; return <div key={item.title}><span><Icon size={20} /></span><h3>{item.title}</h3><p>{item.text}</p></div> })}</div></section>
    </div>
  )
}

export function AcademyPage() {
  const [query, setQuery] = useState('')
  const filtered = academyArticles.filter(article => `${article.title} ${article.category}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="page">
      <section className="academy-hero"><div><span><BookOpen size={27} /></span><p className="eyebrow">ANDOS Academy</p><h1>Know more.<br />Choose better.</h1><p>Clear, practical guidance before you verify, pay, or use a digital service.</p><label><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search a guide or question" /></label></div><div className="academy-hero__quote"><Sparkles size={20} /><p>“Teach users before asking them to transact.”</p><small>ANDOS product principle</small></div></section>
      <div className="filter-chips"><button className="is-active">All guides</button><button>Payments</button><button>Verification</button><button>Security</button><button>Rewards</button></div>
      <section className="page-section"><SectionHeader title="Start with the essentials" description="Short guides that answer the question behind the feature." /><div className="article-grid">{filtered.map(article => <ArticleCard key={article.id} article={article} onClick={() => {}} />)}</div>{filtered.length === 0 && <EmptyState icon={Search} title="No guide found" description="Try another phrase or ask Support for a direct answer." />}</section>
      <section className="academy-topics page-section">{['How coupons work', 'How rewards work', 'Scam awareness', 'Account security', 'Order processing', 'Safe service use'].map((topic, index) => <button key={topic}><span>{String(index + 1).padStart(2, '0')}</span>{topic}<ArrowRight size={16} /></button>)}</section>
    </div>
  )
}

export function CommunityPage() {
  return (
    <div className="page">
      <PageHeader eyebrow="Connect & grow" title="ANDOS Community" description="Referrals, milestones, events, and achievements—without exposing personal information." />
      <DataNotice />
      <section className="community-hero"><div><span><Users size={27} /></span><p className="eyebrow">Your community</p><h2>Share value. See real progress.</h2><p>Referral activity appears after sign-in and counts only when it meets published eligibility rules.</p><Button variant="inverted" disabled>Sign in to get your link</Button></div><div className="referral-code"><small>Referral code</small><strong>••••••••</strong><button disabled><Copy size={17} /> Copy</button><p>Private until secure sign-in</p></div></section>
      <div className="profile-stat-grid">{[{ label: 'Eligible referrals', value: '—', icon: Users }, { label: 'Milestones', value: '—', icon: Target }, { label: 'Community rewards', value: '—', icon: Gift }, { label: 'Events joined', value: '—', icon: CalendarDays }].map(item => { const Icon = item.icon; return <div key={item.label}><span><Icon size={18} /></span><p><small>{item.label}</small><strong>{item.value}</strong></p></div> })}</div>
      <section className="page-section"><SectionHeader title="Community milestones" description="Progress and rewards remain locked until verified activity supports them." /><div className="milestone-line">{['First share', '3 eligible referrals', 'Community Builder', '10 eligible referrals'].map((item, index) => <div key={item}><span className={index === 0 ? 'is-current' : ''}>{index === 0 ? <Users size={17} /> : <LockKeyhole size={15} />}</span><p><strong>{item}</strong><small>Eligibility rules shown here</small></p></div>)}</div></section>
    </div>
  )
}

export function InboxPage() {
  const [filter, setFilter] = useState('All')
  return (
    <div className="page">
      <PageHeader eyebrow="Notifications" title="ANDOS Inbox" description="Transaction-critical and security updates first. No noise for the sake of engagement." actions={<Button variant="secondary">Preferences</Button>} />
      <DataNotice />
      <div className="filter-chips">{['All', 'Orders', 'Rewards', 'Coupons', 'Events', 'Security'].map(item => <button className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
      <section className="inbox-surface"><EmptyState icon={Inbox} title="Your important updates will appear here" description="Connected order, payment, security, reward, coupon, and event notifications are grouped by priority—not by spam volume." /></section>
      <div className="notification-priority"><span><ShieldCheck size={20} /></span><p><strong>How ANDOS prioritizes your inbox</strong><small>Security and transaction-critical updates come first, followed by useful rewards and events you have chosen to hear about.</small></p></div>
    </div>
  )
}

export function SupportPage() {
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const send = event => { event.preventDefault(); if (message.trim()) setSent(true) }
  return (
    <div className="page">
      <PageHeader eyebrow="Trust & help" title="How can we help?" description="Start with the right path and keep the context of your question close by." />
      <section className="support-paths">{[{ icon: Radio, title: 'Track an order', text: 'Check connected status and milestones.' }, { icon: RefreshCw, title: 'Payment or refund', text: 'Understand confirmation and refund policy.' }, { icon: ShieldCheck, title: 'Security concern', text: 'Protect your account or report activity.' }].map(item => { const Icon = item.icon; return <button key={item.title}><span><Icon size={21} /></span><strong>{item.title}</strong><p>{item.text}</p><ArrowRight size={16} /></button> })}</section>
      <section className="support-layout page-section"><div><SectionHeader eyebrow="Send a message" title="Tell us what happened" description="Do not include passwords, OTPs, payment PINs, or sensitive card details." />{sent ? <div className="support-success"><CircleCheck size={27} /><h3>Message kept in this preview</h3><p>No support backend is connected, so nothing was transmitted. Your draft has not been presented as a real ticket.</p><Button variant="secondary" onClick={() => { setSent(false); setMessage('') }}>Write another</Button></div> : <form className="support-form" onSubmit={send}><label>Topic<select defaultValue=""><option value="" disabled>Choose a topic</option><option>Order question</option><option>Payment or refund</option><option>Account security</option><option>Something else</option></select></label><label>Order ID <span>Optional</span><input placeholder="AND-••••••" /></label><label>How can we help?<textarea value={message} onChange={event => setMessage(event.target.value)} placeholder="Include what you expected, what happened, and any safe details that may help." rows="5" /></label><Button type="submit" icon={Send} disabled={!message.trim()}>Send message</Button></form>}</div><aside className="support-aside"><div><span><Clock3 size={20} /></span><p><strong>Support availability</strong><small>Live hours and response estimates are not connected. We will not invent an expectation.</small></p></div><div><span><Mail size={20} /></span><p><strong>Keep the confirmation</strong><small>A real ticket ID and reply channel should appear after submission.</small></p></div><div><span><HelpCircle size={20} /></span><p><strong>Try the Academy</strong><small>Learn how payments, verification, refunds, and security work.</small></p></div></aside></section>
    </div>
  )
}

export function StatusPage() {
  const systems = ['Orders', 'Payments', 'Support', 'Coupons', 'Major services']
  return (
    <div className="page">
      <PageHeader eyebrow="Service reliability" title="ANDOS System Status" description="Real system health belongs here—never a guessed green light." />
      <DataNotice>No monitoring endpoint is connected. Every service remains “Unknown” rather than displaying fabricated operational data.</DataNotice>
      <section className="status-summary"><span><Activity size={26} /></span><div><p className="eyebrow">Current status</p><h2>Live health is unavailable</h2><p>Last updated: unavailable</p></div><StatusDot state="unknown">Unknown</StatusDot></section>
      <section className="system-list page-section"><div className="system-list__header"><h2>Systems</h2><span>Live monitoring required</span></div>{systems.map(system => <div key={system}><span><CircleDashed size={18} /></span><p><strong>{system}</strong><small>No verified health data</small></p><StatusDot state="unknown">Unknown</StatusDot></div>)}</section>
      <section className="status-legend"><p><strong>Status definitions</strong><small>These labels will be used only when supported by monitoring data.</small></p>{[{ state: 'success', label: 'Operational' }, { state: 'warning', label: 'Degraded' }, { state: 'error', label: 'Partial outage' }, { state: 'unknown', label: 'Maintenance / unknown' }].map(item => <StatusDot key={item.label} state={item.state}>{item.label}</StatusDot>)}</section>
    </div>
  )
}

export function CheckoutSheet({ service, onClose }) {
  const [step, setStep] = useState(0)
  const [requirement, setRequirement] = useState('')
  const steps = ['Review', 'Verify', 'Payment', 'Confirm']
  const content = useMemo(() => [
    <div className="checkout-step" key="review"><div className="checkout-summary"><span className={`service-icon service-icon--${service?.tone}`}><Smartphone size={21} /></span><div><small>Service</small><strong>{service?.title}</strong><p>Illustrative plan only</p></div></div><div className="summary-rows"><div><span>Plan</span><strong>Not connected</strong></div><div><span>Discount</span><strong>—</strong></div><div className="summary-total"><span>Final amount</span><strong>₹ —</strong></div></div><div className="safe-note"><CircleAlert size={20} /><div><strong>Preview only</strong><p>No real plan or price has been selected. Continuing demonstrates UX architecture and cannot place an order.</p></div></div></div>,
    <div className="checkout-step" key="verify"><span className="checkout-step__icon"><ShieldCheck size={25} /></span><h3>Verify the right detail</h3><p>This service may require: <strong>{service?.requirement}</strong>.</p><label>Illustrative information<input value={requirement} onChange={event => setRequirement(event.target.value)} placeholder="Nothing entered here is submitted" /></label><div className="why-needed"><HelpCircle size={18} /><p><strong>Why do we need this?</strong><small>A live order uses this only to identify where the selected service should be applied. Passwords, OTPs, and payment PINs are never required.</small></p></div></div>,
    <div className="checkout-step" key="payment"><span className="checkout-step__icon"><CreditCard size={25} /></span><h3>Choose a payment method</h3><p>Payment options will load after the final live amount is known.</p><div className="payment-placeholder"><CreditCard size={20} /><span><strong>No live payment methods</strong><small>This preview cannot collect or process payment.</small></span></div><div className="secure-row"><LockKeyhole size={15} /> Secured payment hand-off in production</div></div>,
    <div className="checkout-step checkout-step--success" key="confirm"><span className="checkout-step__success"><Check size={28} /></span><h3>That’s the complete flow.</h3><p>No order was placed and no information was sent. In production, a verified Order ID, receipt, next step, and support route would appear here.</p><div className="confirmation-actions"><Button variant="secondary" onClick={onClose}>Close preview</Button></div></div>,
  ], [requirement, service, onClose])
  const next = () => setStep(Math.min(step + 1, 3))
  return (
    <div className="sheet-layer checkout-layer" onMouseDown={onClose}>
      <section className="checkout-sheet sheet" role="dialog" aria-modal="true" aria-label="Checkout preview" onMouseDown={event => event.stopPropagation()}>
        <div className="sheet__handle" /><div className="checkout-sheet__header"><div><PreviewPill /><h2>Checkout preview</h2></div><IconButton label="Close checkout" icon={X} onClick={onClose} /></div><Stepper current={step} steps={steps} /><div className="checkout-sheet__body">{content[step]}</div>{step < 3 && <div className="checkout-sheet__footer"><button onClick={() => step === 0 ? onClose() : setStep(step - 1)}>{step === 0 ? 'Cancel' : 'Back'}</button><Button trailing={ArrowRight} onClick={next}>{step === 2 ? 'Review confirmation' : 'Continue'}</Button></div>}
      </section>
    </div>
  )
}
