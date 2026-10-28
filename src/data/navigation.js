// Single source of truth for sidebar menu + routes.
// Icons are lucide-react component references, resolved in Sidebar.jsx.
export const navSections = [
  {
    key: 'home',
    label: 'Home',
    icon: 'Home',
    children: [
      { label: 'Dashboard', path: '/dashboard' },
      { label: 'Analytics', path: '/analytics' },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    icon: 'FileText',
    children: [
      { label: 'Profile Overview', path: '/pages/profile/overview' },
      { label: 'Teams', path: '/pages/teams' },
      { label: 'Pricing', path: '/pages/pricing' },
      { label: 'Coming Soon', path: '/pages/coming-soon' },
      { label: '404', path: '/pages/404' },
    ],
  },
  {
    key: 'applications',
    label: 'Applications',
    icon: 'AppWindow',
    children: [
      { label: 'Chat', path: '/applications/chat' },
      { label: 'Calendar', path: '/applications/calendar' },
      { label: 'Kanban', path: '/applications/kanban' },
    ],
  },
  {
    key: 'ecommerce',
    label: 'E-commerce',
    icon: 'ShoppingBag',
    children: [
      { label: 'Products', path: '/ecommerce/products' },
      { label: 'Orders', path: '/ecommerce/orders' },
      { label: 'Customers', path: '/ecommerce/customers' },
    ],
  },
  {
    key: 'authentication',
    label: 'Authentication',
    icon: 'ShieldCheck',
    children: [
      { label: 'Login', path: '/login' },
      { label: 'Sign up', path: '/signup' },
      { label: 'Forgot Password', path: '/forgot-password' },
    ],
  },
];
