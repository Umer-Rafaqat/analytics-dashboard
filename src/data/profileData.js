export const statCards = [
  {
    key: 'likes',
    value: '635',
    delta: '+21.01%',
    up: true,
    label: 'Average Likes',
    lineColor: '#6E39CB',
    data: [{ v: 10 }, { v: 25 }, { v: 60 }, { v: 20 }, { v: 45 }, { v: 30 }, { v: 15 }, { v: 35 }],
  },
  {
    key: 'comments',
    value: '123',
    delta: '+4.399%',
    up: true,
    label: 'Comments recived',
    lineColor: '#22C55E',
    data: [{ v: 8 }, { v: 15 }, { v: 12 }, { v: 40 }, { v: 20 }, { v: 30 }, { v: 18 }, { v: 25 }],
  },
  {
    key: 'engagement',
    value: '23%',
    delta: '-7.9%',
    up: false,
    label: 'Av. Engagement rate',
    lineColor: '#38BDF8',
    data: [{ v: 20 }, { v: 35 }, { v: 15 }, { v: 42 }, { v: 18 }, { v: 30 }, { v: 22 }, { v: 33 }],
  },
];

export const followers = [
  { day: '25.02', income: 90000, outcome: 110000 },
  { day: '26.02', income: 130000, outcome: 60000 },
  { day: '27.02', income: 500000, outcome: 55000, peak: true },
  { day: '28.02', income: 260000, outcome: 100000 },
  { day: '29.02', income: 120000, outcome: 40000 },
];

export const actions = [
  { label: 'Profile visits', value: 250 },
  { label: 'Website clicks', value: 115 },
  { label: 'Calls', value: 67 },
  { label: 'Getvdirection', value: 164 },
  { label: 'Emails', value: 170 },
];

export const interaction = [
  { day: '25.02', a: 60, b: 120 },
  { day: '26.02', a: 180, b: 90 },
  { day: '27.02', a: 100, b: 60 },
  { day: '28.02', a: 130, b: 150 },
  { day: '29.02', a: 40, b: 90 },
];

export const bestTimeDays = [
  { label: 'Mon', value: 270 },
  { label: 'Tue', value: 90 },
  { label: 'Wed', value: 140 },
  { label: 'Thu', value: 110 },
  { label: 'Fri', value: 260, highlight: true },
  { label: 'Sat', value: 100 },
  { label: 'Sun', value: 230 },
];

export const gender = { men: 35, women: 45 };

export const ageRange = [
  { label: '13-17', men: 70, women: 15 },
  { label: '18-24', men: 20, women: 55 },
  { label: '25-34', men: 25, women: 65 },
  { label: '35-44', men: 45, women: 55 },
  { label: '45-54', men: 90, women: 75 },
  { label: '55-64', men: 20, women: 60 },
  { label: '65-74+', men: 30, women: 55 },
];

export const myProfile = {
  username: 'Alice_turner',
  avatar: 'https://i.pravatar.cc/128?img=12',
  vipProgress: 10,
  profileVisits: 250,
};

export const hashtagGroups = [
  { title: 'Sport & Health', tags: ['#sport', '#fit', '#health'] },
  { title: 'Animals', tags: ['#animal', '#nature', '#health'] },
  { title: 'Beauty', tags: ['#beauty', '#makeup', '#fashion'] },
  { title: 'Art', tags: ['#art', '#artist', '#love'] },
];
