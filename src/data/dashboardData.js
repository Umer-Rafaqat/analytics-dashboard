export const activeUsersBars = [
  { name: '1', value: 300 },
  { name: '2', value: 205 },
  { name: '3', value: 250 },
  { name: '4', value: 225 },
  { name: '5', value: 130 },
  { name: '6', value: 270 },
  { name: '7', value: 210 },
  { name: '8', value: 150 },
  { name: '9', value: 260 },
  { name: '10', value: 120 },
];

export const sparkline = [
  { v: 4 }, { v: 8 }, { v: 3 }, { v: 9 }, { v: 5 }, { v: 10 }, { v: 6 },
];

export const statCards = [
  { key: 'users', label: 'Users', value: '35k', iconBg: '#DECCFE', iconColor: '#6E39CB', barPercent: 70, icon: 'Users' },
  { key: 'clicks', label: 'Clicks', value: '1m', iconBg: '#D7FFC3', iconColor: '#533FE4', barPercent: 65, icon: 'MousePointerClick' },
  { key: 'sales', label: 'Sales', value: '345$', iconBg: '#FFDFDF', iconColor: '#F93131', barPercent: 55, icon: 'Tag' },
  { key: 'items', label: 'Items', value: '68', iconBg: '#E0F8FF', iconColor: '#2DCCFF', barPercent: 40, icon: 'Box' },
];

// x = age-range category label shown on the x-axis (categorical spacing, matches Figma —
// gaps between 100/200/300/400/500 are visually even, not numerically proportional)
export const salesByAge = [
  { x: '10', y: 1 }, { x: '20', y: 1.5 }, { x: '30', y: 2 }, { x: '40', y: 5 }, { x: '50', y: 3.5 },
  { x: '60', y: 5.5 }, { x: '70', y: 4 }, { x: '80', y: 3.6 }, { x: '90', y: 3.8 }, { x: '100', y: 2.5 },
  { x: '200', y: 4.2 }, { x: '300', y: 1.2 }, { x: '400', y: 0.8 }, { x: '500', y: 0.5 },
];

// y-axis band labels, bottom to top (matches domain [0,6] on the chart)
export const ageBands = ['10 to 15', '15 to 20', '20 to 25', '25 to 30', '30 to 35', '35 to 40'];

export const earningsByItem = [
  { title: 'Bento 3D Kit', subtitle: 'Illustration', outerColor: '#DECCFE', iconBg: '#6E39CB' },
  { title: 'Bento 3D Kit', subtitle: 'Coded Template', outerColor: '#D7FFC3', iconBg: '#533FE4' },
  { title: 'Bento 3D Kit', subtitle: 'Illustration', outerColor: '#FFDFDF', iconBg: '#F93131' },
];

export const impression = [
  { day: 'Mon', value: 28 },
  { day: 'Tue', value: 6 },
  { day: 'Wed', value: 22 },
  { day: 'Thu', value: 9 },
];
