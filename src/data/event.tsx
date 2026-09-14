export type Ticket = { id: string; name: string; price: number; soldOut?: boolean; closes?: string };
export type TicketGroup = { id: string; name: string; tickets: Ticket[] };

export const event = {
  id: 395332,
  title: "KOMPLEX NYE 2027",
  badge: "NO UNDER 21S",
  dates: "Thu Dec 31, 16:00 - Sat Jan 2, 02:00",
  startPrice: 3600,
  organizer: { name: "KOMPLEX KE", url: "https://www.quicket.co.ke/organisers/96421-komplex-ke", website: "https://www.komplex.co.ke", facebook: "https://facebook.com/komplexke" },
  venue: { name: "Sun Palm Beach Hotel & Resort Watamu", address: "Off Tourist Cross, Jacaranda Road, Watamu, Kenya", directions: "https://www.google.com/maps/dir/?api=1&destination=-3.3498817,40.0244732" },
  tags: ["BEACH", "KOMPLEX KE", "NYE", "WATAMU", "XX"],
};

export const ticketGroups: TicketGroup[] = [
  { id: "single", name: "31st - 1st (Single Day)", tickets: [
    { id: "single-general", name: "General Access", price: 3600, closes: "Sales Close 2 January 2027" },
    { id: "single-backstage", name: "Backstage", price: 7200, closes: "Sales Close 2 January 2027" },
    { id: "single-vip", name: "VIP Table - 5 Pax", price: 60000, closes: "Sales Close 2 January 2027" },
  ]},
  { id: "two-day", name: "31st - 2nd (Two Days)", tickets: [
    { id: "two-general", name: "General Access", price: 5600, soldOut: true },
    { id: "two-phase-two", name: "General Access Phase 2", price: 7200, closes: "Sales Close 2 January 2027" },
    { id: "two-backstage", name: "Backstage", price: 12200, closes: "Sales Close 2 January 2027" },
    { id: "two-vip", name: "VIP Table - 5 Pax", price: 100000, closes: "Sales Close 2 January 2027" },
  ]},
];

export const aboutBlocks = [
  { type: "p", text: <>Another trip around the sun. This time, the <strong>X</strong> follows it all the way to Watamu,Kenya.</> },
  { type: "p", text: <>Set against one of East Africa’s most breathtaking coastlines, we’re bringing together some of electronic music’s most exciting artists, collectives and brands for a two day celebration by the Indian Ocean.</> },
  { type: "p", text: <>A new destination. A new experience. The same beautiful community!</> },
  { type: "p", text: <>See you by the ocean, <strong>X</strong> Champions.</> },
  { type: "p", text: <>More details landing VERY SOON. <strong>X</strong></> },
  { type: "h", text: <>DISCLAIMER &amp; TICKET POLICY</> },
  { type: "h", text: <>Ticket Policy</> },
  { type: "p", text: <>No refunds under any circumstances. All ticket sales are final.</> },
  { type: "p", text: <>Tickets are strictly non-transferable.</> },
  { type: "p", text: <>The ticket holder’s name must match a valid government-issued ID presented at entry. Copies of valid identification may be accepted at management’s discretion.</> },
  { type: "p", text: <>Strictly 21+. Valid government-issued identification is required for entry.</> },
  { type: "p", text: <>Lost, altered, duplicated, defaced, or damaged tickets and/or wristbands will be considered invalid and may be refused without refund.</> },
  { type: "h", text: <>Admission &amp; Conduct</> },
  { type: "p", text: <>Double X Limited and event management reserve the right to refuse admission or remove any person who is deemed unsafe, unlawful, disruptive, intoxicated, abusive, or otherwise in breach of these terms, without refund.</> },
  { type: "p", text: <>Zero tolerance for harassment, discrimination, abuse, violence, or threats. Any such conduct may result in immediate removal and, where appropriate, referral to the relevant authorities.</> },
  { type: "p", text: <>Entry and continued attendance are subject to venue capacity, safety, security, and operational requirements.</> },
  { type: "p", text: <>Attendees must comply with all reasonable instructions issued by event staff, security personnel, and management.</> },
  { type: "h", text: <>Prohibited Items &amp; Activities</> },
  { type: "h", text: <>The following are strictly prohibited unless expressly authorized by management:</> },
  { type: "list", text: <>Illegal drugs or controlled substances<br/>Weapons or items capable of causing harm<br/>Outside food or beverages<br/>Theft, vandalism, or other criminal activity</> },
  { type: "p", text: <>Any person found engaging in criminal activity may be removed from the event and, where appropriate, detained and handed over to the police or other relevant authorities.</> },
  { type: "h", text: <>Liability</> },
  { type: "p", text: <>Attendance at the event is at your own risk. To the fullest extent permitted by applicable law, Double X Limited, its organizers, employees, agents, contractors, and affiliated parties shall not be liable for any loss, theft, damage to personal property, injury, or indirect or consequential loss arising from attendance at or participation in the event, except where liability cannot lawfully be excluded.</> },
  { type: "h", text: <>Media &amp; Recording Notice</> },
  { type: "p", text: <>This event may be photographed, filmed, and/or otherwise recorded.</> },
  { type: "p", text: <>By purchasing a ticket and/or attending the event, you acknowledge and consent to Double X Limited and its authorized representatives capturing and using your image, voice, likeness, and/or participation in photographs, video, audio, and other recordings for promotional, editorial, marketing, social media, web, print, advertising, and archival purposes, without compensation.</> },
  { type: "p", text: <>Such recordings may constitute personal data and may be processed in accordance with applicable Kenyan law, including the Data Protection Act, 2019.</> },
  { type: "h", text: <>Event Changes</> },
  { type: "p", text: <>Double X Limited reserves the right to modify, postpone, suspend, relocate, or terminate the event, in whole or in part, where reasonably necessary due to safety, security, weather, public health, venue requirements, government directives, force majeure, or other circumstances beyond the organizers’ reasonable control.</> },
  { type: "h", text: <>Governing Law &amp; Jurisdiction</> },
  { type: "p", text: <>These terms and conditions shall be governed by and interpreted in accordance with the laws of Kenya.</> },
  { type: "p", text: <>Any disputes arising in connection with the event or these terms shall be subject to the exclusive jurisdiction of the courts of Nairobi, Kenya, to the extent permitted by law.</> },
  { type: "h", text: <>Queries</> },
  { type: "p", text: <>Email: <a href="mailto:x@komplex.co.ke">x@komplex.co.ke</a></> },
  { type: "h", text: <>By purchasing a ticket and/or entering the event, you confirm that you have read, understood, and agreed to these terms and conditions.</> },
] as const;
