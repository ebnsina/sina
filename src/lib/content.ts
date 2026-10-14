export const site = 'https://ebnsina.github.io/sina';
export const name = 'Sina';
export const email = 'ebnsina.dev@gmail.com';
export const whatsapp = '+8801841252123';
export const title = 'Sina — Software engineer';
export const description = 'Software engineer in Bangladesh building calm, well-made products. Rust, Go, TypeScript, PostgreSQL, ClickHouse, Svelte.';

export const projects = [
  { title: 'Alchemist', what: 'VOD transcoder. Upload once, get adaptive streams out, built to stay boring under load.', tags: ['Go', 'FFmpeg', 'PostgreSQL'], year: '2026' },
  { title: 'Fajr LMS', what: 'A learning platform for schools and madrasahs in South Asia and the Gulf. Teaches, grades, collects fees, keeps guardians informed.', tags: ['Go', 'SvelteKit'], year: '2026' },
  { title: 'Tavora', what: 'A website, a dashboard and a till for restaurants in Bangladesh, all in one.', tags: ['Go', 'SvelteKit'], year: '2026' },
  { title: 'Safar', what: 'Buses, trains and flights across Bangladesh from one search. Full fare up front, nothing added at the last step.', tags: ['SvelteKit', 'Drizzle'], year: '2026' },
  { title: 'Sina UI', what: 'A small, copy-in Svelte component library. Tokens over themes, props over forks.', tags: ['Svelte', 'TypeScript'], year: '2025' }
];

export const links = [
  ['GitHub', 'https://github.com/ebnsina'],
  ['WhatsApp', `https://wa.me/${whatsapp.replace('+', '')}`],
  ['Email', `mailto:${email}`]
];
