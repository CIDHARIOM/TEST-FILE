import {
  BadgeIndianRupee,
  BookOpen,
  CircleHelp,
  Gamepad2,
  Gift,
  Headphones,
  Home,
  Instagram,
  LayoutGrid,
  MessageCircleMore,
  Radio,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRound,
  Video,
  WalletCards,
  Wifi,
  Youtube,
} from 'lucide-react'

export const mainNavigation = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'services', label: 'Services', icon: LayoutGrid },
  { id: 'orders', label: 'Orders', icon: ReceiptText },
  { id: 'wallet', label: 'Wallet', icon: WalletCards },
  { id: 'rewards', label: 'Rewards', icon: Gift },
  { id: 'profile', label: 'My ANDOS', icon: UserRound },
]

export const discoverNavigation = [
  { id: 'events', label: 'Events', icon: Sparkles },
  { id: 'community', label: 'Community', icon: MessageCircleMore },
  { id: 'academy', label: 'Academy', icon: BookOpen },
]

export const trustNavigation = [
  { id: 'trust', label: 'Trust Center', icon: ShieldCheck },
  { id: 'support', label: 'Support', icon: Headphones },
]

export const services = [
  {
    id: 'mobile-recharge',
    title: 'Mobile recharge',
    short: 'Prepaid plans and top-ups',
    description: 'Find the right prepaid recharge with requirements, final cost, and processing expectations shown before payment.',
    icon: Smartphone,
    tone: 'blue',
    category: 'Recharge',
    timing: 'Shown with each live plan',
    requirement: 'Mobile number and operator',
    accent: '#3159d9',
  },
  {
    id: 'social-growth',
    title: 'Instagram',
    short: 'Social media services',
    description: 'Compare available Instagram services, understand what is required, and review fulfilment and refund terms before purchase.',
    icon: Instagram,
    tone: 'pink',
    category: 'Social',
    timing: 'Shown with each live plan',
    requirement: 'Public profile or post link',
    accent: '#c13584',
  },
  {
    id: 'youtube',
    title: 'YouTube',
    short: 'Channel and video services',
    description: 'Choose from supported YouTube services with clear requirements and transparent order tracking.',
    icon: Youtube,
    tone: 'red',
    category: 'Social',
    timing: 'Shown with each live plan',
    requirement: 'Channel or video link',
    accent: '#e52727',
  },
  {
    id: 'free-fire',
    title: 'Free Fire',
    short: 'Gaming top-ups',
    description: 'Review supported top-ups and event offers with eligibility, account requirements, and delivery status.',
    icon: Gamepad2,
    tone: 'orange',
    category: 'Gaming',
    timing: 'Shown with each live plan',
    requirement: 'Player ID',
    accent: '#e56b18',
  },
  {
    id: 'data',
    title: 'Data packs',
    short: 'Stay connected',
    description: 'Compare supported data packs and review the final payable amount before continuing.',
    icon: Wifi,
    tone: 'cyan',
    category: 'Recharge',
    timing: 'Shown with each live plan',
    requirement: 'Mobile number and operator',
    accent: '#118fa1',
  },
  {
    id: 'ott',
    title: 'OTT & streaming',
    short: 'Entertainment plans',
    description: 'Explore supported entertainment subscriptions with clear duration, eligibility, and activation instructions.',
    icon: Video,
    tone: 'violet',
    category: 'Entertainment',
    timing: 'Shown with each live plan',
    requirement: 'Varies by provider',
    accent: '#7139c7',
  },
]

export const quickActions = [
  { label: 'Recharge', icon: Smartphone, page: 'service', serviceId: 'mobile-recharge', tone: 'blue' },
  { label: 'Track order', icon: Radio, page: 'orders', tone: 'violet' },
  { label: 'Add money', icon: BadgeIndianRupee, page: 'wallet', tone: 'green' },
  { label: 'Get help', icon: Headphones, page: 'support', tone: 'orange' },
]

export const academyArticles = [
  {
    id: 'verification',
    icon: ShieldCheck,
    category: 'Safety basics',
    title: 'Why verification protects your order',
    text: 'Learn what ANDOS may ask for, what it never asks for, and how your information is handled.',
    read: '4 min read',
  },
  {
    id: 'payments',
    icon: WalletCards,
    category: 'Payments',
    title: 'Understand payment and refunds',
    text: 'A plain-language guide to final amounts, payment confirmation, cancellations, and refund timelines.',
    read: '5 min read',
  },
  {
    id: 'safe-services',
    icon: Smartphone,
    category: 'Account safety',
    title: 'Use digital services safely',
    text: 'Practical steps for protecting your accounts and identifying suspicious requests.',
    read: '6 min read',
  },
]

export const trustPrinciples = [
  {
    icon: ReceiptText,
    title: 'Price clarity',
    text: 'The final payable amount, discounts, and any applicable charges are shown before confirmation.',
  },
  {
    icon: Radio,
    title: 'Visible progress',
    text: 'Each connected order can show its current stage and available timestamps in one place.',
  },
  {
    icon: ShieldCheck,
    title: 'Purposeful verification',
    text: 'Requirements are explained in context. ANDOS should never ask for your account password.',
  },
  {
    icon: RefreshCw,
    title: 'Understandable refunds',
    text: 'Eligibility and expected timelines are presented before payment and remain available after purchase.',
  },
  {
    icon: Headphones,
    title: 'Support in reach',
    text: 'Help stays available throughout discovery, checkout, and order tracking.',
  },
  {
    icon: CircleHelp,
    title: 'No hidden decisions',
    text: 'Important labels, recommendations, and statuses must be supported by real product data.',
  },
]

export const serviceFaqs = [
  {
    q: 'When will my order start?',
    a: 'The current processing estimate appears on each live plan before payment. It can vary by service and is not shown here until the catalogue is connected.',
  },
  {
    q: 'What information will I need?',
    a: 'Only the requirement listed for your selected service. ANDOS should never ask for your social media password or payment PIN.',
  },
  {
    q: 'Can I request a refund?',
    a: 'Refund eligibility depends on the service and order stage. The exact policy must be shown during review before you confirm payment.',
  },
]
