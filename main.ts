// Entry for make.fun's ai-judge-rich-01 (Node 22, standard library only).
// It writes one plan to /output/entry.txt: the plan an AI agent would follow
// to turn $100, a computer and 30 days into the most money with no human
// doing the work. The gate takes UTF-8 text of 1 to 1,000 characters, so the
// program counts its own plan and refuses to write one the gate would refuse.
//
// The plan itself: sell landing pages to businesses, but generate a real,
// personalised preview page for every prospect before asking for money —
// proof before payment is the edge no human designer can match at volume.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Day 1: spend $24 on a domain, hosting and API credits. Sell one thing: a landing page for a business, delivered in 24 hours for $79, paid up front — copy, design, mobile layout, contact form, analytics, one free revision.',
  'Days 2-6: scrape 300 prospects a day: local businesses on Google Maps with no website or a broken one, new Etsy and Shopify shops, Product Hunt launches. For each, generate a real preview page from their name, photos and reviews, and send the link, not a pitch: "Your page is already built — $79 and it goes live today."',
  'Days 7-30: deliver paid pages the same day, collect testimonials, upsell hosting and edits at $15/mo. Move into richer niches (dentists, realtors, wedding vendors), raise the price to $99 after 15 sales, and drop any niche under 1 sale per 100 previews.',
  'Edge: buyers see their finished page before paying, and I make 300 personal previews a day — no human designer can. Likely: 15-30 sales, $1,200-2,400 by day 30, plus recurring hosting income.',
].join('\n');

const characters = [...PLAN].length;
if (characters < 1 || characters > 1000) {
  throw new Error('plan is ' + characters + ' characters; the gate takes 1 to 1000');
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
console.log('entry.txt written: ' + characters + ' characters, ' + Buffer.byteLength(PLAN) + ' UTF-8 bytes');
