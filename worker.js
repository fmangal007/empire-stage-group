const eventDetails = {
  eventbriteUrl: "https://www.eventbrite.com/e/naghma-live-concert-virginia-us-registration-1992980656794?aff=oddtdtcreator",
  guestAddress: "18980 Upper Belmont Place, Leesburg, VA 20176",
  mapQuery: "18980+Upper+Belmont+Place+Leesburg+VA+20176",
  googleCalendarLocation: "18980%20Upper%20Belmont%20Place%2C%20Leesburg%2C%20VA%2020176",
};

const atlantaEvent = {
  title: "Haidar Salim Live Concert Atlanta Georgia USA",
  ticketUrl: "https://www.tickettailor.com/events/empirestagegroupllc/2364052",
  venue: "Vansh Event Center",
  address: "2960 Northeast Expy, Chamblee, GA 30341",
  image: "/images/haidar-salim-atlanta.webp",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Vansh+Event+Center+2960+Northeast+Expy+Chamblee+GA+30341",
  googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haidar%20Salim%20Live%20Concert%20Atlanta%20Georgia%20USA&dates=20261024T230000Z/20261025T034500Z&details=Haidar%20Salim%20live%20concert%20presented%20by%20Empire%20Stage%20Group%20LLC.&location=Vansh%20Event%20Center%2C%202960%20Northeast%20Expy%2C%20Chamblee%2C%20GA%2030341",
};

const organizer = {
  "@type": "Organization",
  name: "Empire Stage Group LLC",
  email: "info@empirestagegroup.com",
  telephone: "+1-202-390-0424",
};

const siteJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicEvent",
      name: "107th Independence Day of Afghanistan",
      description: "A cultural celebration featuring live performances by Naghma Jan and Hasib Sepand.",
      startDate: "2026-09-12T19:00:00-04:00",
      endDate: "2026-09-12T23:00:00-04:00",
      doorTime: "2026-09-12T18:45:00-04:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: "/images/afghanistan-independence-day-2026-official-poster.jpeg",
      location: {
        "@type": "Place",
        name: "National Conference Center",
        address: {
          "@type": "PostalAddress",
          streetAddress: "18980 Upper Belmont Place",
          addressLocality: "Leesburg",
          addressRegion: "VA",
          postalCode: "20176",
          addressCountry: "US",
        },
      },
      performer: [
        { "@type": "Person", name: "Naghma Jan" },
        { "@type": "Person", name: "Hasib Sepand" },
      ],
      organizer,
      offers: {
        "@type": "Offer",
        url: eventDetails.eventbriteUrl,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "MusicEvent",
      name: atlantaEvent.title,
      description: "Haidar Salim live in concert in Atlanta, Georgia, presented by Empire Stage Group LLC.",
      startDate: "2026-10-24T19:00:00-04:00",
      endDate: "2026-10-24T23:45:00-04:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      image: atlantaEvent.image,
      location: {
        "@type": "Place",
        name: atlantaEvent.venue,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2960 Northeast Expy",
          addressLocality: "Chamblee",
          addressRegion: "GA",
          postalCode: "30341",
          addressCountry: "US",
        },
      },
      performer: { "@type": "Person", name: "Haidar Salim" },
      organizer,
      offers: {
        "@type": "Offer",
        url: atlantaEvent.ticketUrl,
        availability: "https://schema.org/InStock",
      },
    },
  ],
}, null, 2);

const sponsorStyles = `
<style>
  .sponsors-showcase,.upcoming-showcase{width:min(1180px,calc(100% - 40px));margin:auto;padding:20px 0 116px}
  .sponsors-showcase h2,.upcoming-showcase h2{font-family:Georgia,serif;font-weight:400;letter-spacing:-.045em;margin:0;font-size:clamp(44px,6vw,76px);line-height:1}
  .sponsor-list{margin-top:38px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}
  .confirmed-sponsor{display:grid;grid-template-rows:330px auto;align-items:stretch;border:1px solid rgba(227,184,95,.35);background:linear-gradient(145deg,#151821,#0c0d12);box-shadow:0 28px 80px rgba(0,0,0,.35);overflow:hidden}
  .confirmed-sponsor-logo{display:grid;place-items:center;padding:24px;background:#000;border-bottom:1px solid var(--line);overflow:hidden}
  .confirmed-sponsor-logo.light{background:#fff}
  .confirmed-sponsor-logo img{display:block;width:100%;height:100%;object-fit:contain;object-position:center}
  .confirmed-sponsor-logo.light img{width:min(100%,320px);height:auto;aspect-ratio:1/1;object-fit:contain}
  .confirmed-sponsor-copy{padding:26px}
  .confirmed-sponsor-copy span{color:var(--gold);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
  .confirmed-sponsor-copy h3{font:clamp(30px,4vw,48px) Georgia;margin:13px 0 0;line-height:1.05}
  .atlanta-event-card{margin-top:38px;display:grid;grid-template-columns:minmax(340px,.72fr) minmax(0,1fr);border:1px solid rgba(227,184,95,.4);background:radial-gradient(circle at 18% 18%,rgba(227,184,95,.16),transparent 34%),linear-gradient(145deg,#151821,#0c0d12);box-shadow:0 32px 90px rgba(0,0,0,.4);overflow:hidden}
  .atlanta-visual{position:relative;min-height:470px;border-right:1px solid var(--line);background:#05060a;overflow:hidden}
  .atlanta-visual img{display:block;width:100%;height:100%;min-height:470px;object-fit:cover;object-position:center}
  .atlanta-visual:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(to top,rgba(5,6,10,.72),transparent 48%)}
  .atlanta-date{position:absolute;z-index:2;left:24px;bottom:24px;padding:17px 20px;border:1px solid rgba(227,184,95,.52);background:rgba(8,9,13,.84);backdrop-filter:blur(12px);box-shadow:0 12px 36px rgba(0,0,0,.35)}
  .atlanta-date span{display:block;color:var(--gold);font-size:11px;font-weight:800;letter-spacing:.24em;text-transform:uppercase}
  .atlanta-date strong{display:block;font:58px Georgia;line-height:.9;margin:10px 0 8px}
  .atlanta-date small{display:block;color:#d7d0c4;font-size:10px;letter-spacing:.14em;text-transform:uppercase}
  .atlanta-copy{padding:48px;display:flex;flex-direction:column;justify-content:center}
  .atlanta-city{color:var(--gold);font-size:12px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;margin:0 0 14px}
  .atlanta-copy h3{font:clamp(42px,5vw,68px) Georgia;margin:0;line-height:1}
  .atlanta-meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:32px 0 0;padding:0;list-style:none}
  .atlanta-meta li{padding-top:14px;border-top:1px solid var(--line);color:#e0dbd2;line-height:1.5}
  .atlanta-meta small{display:block;color:var(--muted);font-size:10px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:5px}
  .atlanta-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
  .lang-ps,.lang-fa{display:none}
  html[lang="ps"] .lang-en,html[lang="fa"] .lang-en{display:none}
  html[lang="ps"] .lang-ps,html[lang="fa"] .lang-fa{display:inline}
  html[dir="rtl"] .confirmed-sponsor-copy span,html[dir="rtl"] .atlanta-city{letter-spacing:0;text-transform:none}
  html[dir="rtl"] .sponsors-showcase h2,html[dir="rtl"] .upcoming-showcase h2{letter-spacing:0;line-height:1.15}
  @media(max-width:820px){.atlanta-event-card{grid-template-columns:1fr}.atlanta-visual{min-height:360px;border-right:0;border-bottom:1px solid var(--line)}.atlanta-visual img{min-height:360px}.atlanta-meta{grid-template-columns:1fr}.atlanta-copy{padding:34px 24px}}
  @media(max-width:760px){.sponsor-list{grid-template-columns:1fr}.confirmed-sponsor{grid-template-rows:300px auto}.confirmed-sponsor-logo.light img{width:min(100%,280px)}.sponsors-showcase,.upcoming-showcase{width:min(100% - 28px,1180px);padding-bottom:88px}}
</style>`;

const atlantaSection = `
<section class="upcoming-showcase" id="atlanta" aria-labelledby="atlanta-title">
  <p class="eyebrow">
    <span class="lang-en">Upcoming Events</span>
    <span class="lang-ps">راتلونکي پروګرامونه</span>
    <span class="lang-fa">برنامه‌های آینده</span>
  </p>
  <h2 id="atlanta-title">
    <span class="lang-en">Haidar Salim. Live in Atlanta.</span>
    <span class="lang-ps">حیدر سلیم · په اتلانتا کې ژوندی کنسرت</span>
    <span class="lang-fa">حیدر سلیم · کنسرت زنده در آتلانتا</span>
  </h2>
  <article class="atlanta-event-card">
    <div class="atlanta-visual">
      <img src="${atlantaEvent.image}" alt="Haidar Salim performing live" loading="lazy" width="720" height="405">
      <div class="atlanta-date"><span>OCT</span><strong>24</strong><small>Saturday · 2026</small></div>
    </div>
    <div class="atlanta-copy">
      <p class="atlanta-city">Chamblee · Georgia · USA</p>
      <h3>Haidar Salim Live Concert</h3>
      <ul class="atlanta-meta">
        <li><small>Event time</small>7:00 PM–11:45 PM</li>
        <li><small>Venue</small>Vansh Event Center</li>
        <li><small>Address</small>2960 Northeast Expy, Chamblee, GA 30341</li>
      </ul>
      <div class="atlanta-actions">
        <a class="btn primary" target="_blank" rel="noreferrer" href="${atlantaEvent.ticketUrl}">Buy Atlanta tickets</a>
        <a class="btn" target="_blank" rel="noreferrer" href="${atlantaEvent.mapUrl}">Get directions</a>
        <a class="btn" target="_blank" rel="noreferrer" href="${atlantaEvent.googleCalendarUrl}">Google Calendar</a>
        <a class="btn" href="/haidar-salim-atlanta-2026.ics" download>Apple / Outlook</a>
      </div>
    </div>
  </article>
</section>`;

const sponsorSection = `
<section class="sponsors-showcase" id="sponsors" aria-labelledby="sponsors-title">
  <p class="eyebrow">
    <span class="lang-en">Proud sponsors</span>
    <span class="lang-ps">ویاړلي سپانسران</span>
    <span class="lang-fa">اسپانسرهای افتخاری</span>
  </p>
  <h2 id="sponsors-title">
    <span class="lang-en">Supporting this celebration.</span>
    <span class="lang-ps">د دې جشن ملاتړ کوي.</span>
    <span class="lang-fa">حامیان این جشن.</span>
  </h2>
  <div class="sponsor-list">
    <article class="confirmed-sponsor">
      <div class="confirmed-sponsor-logo"><img src="/images/dulles-auto-body-paint-sponsor.svg" alt="Dulles Auto Body &amp; Paint sponsor logo" loading="lazy"></div>
      <div class="confirmed-sponsor-copy">
        <span class="lang-en">Official event sponsor</span>
        <span class="lang-ps">د پروګرام رسمي سپانسر</span>
        <span class="lang-fa">اسپانسر رسمی برنامه</span>
        <h3>Dulles Auto Body &amp; Paint</h3>
      </div>
    </article>
    <article class="confirmed-sponsor">
      <div class="confirmed-sponsor-logo light"><img src="/images/hawasana-restaurant-sponsor.svg" alt="Hawasana Restaurant Special Afghan Food sponsor logo" loading="lazy"></div>
      <div class="confirmed-sponsor-copy">
        <span class="lang-en">Official event sponsor</span>
        <span class="lang-ps">د پروګرام رسمي سپانسر</span>
        <span class="lang-fa">اسپانسر رسمی برنامه</span>
        <h3>Hawasana Restaurant</h3>
      </div>
    </article>
  </div>
</section>`;

function normalizeEventHtml(html) {
  return html
    .replaceAll(
      "https://www.eventbrite.com/e/the-107th-independence-day-of-afghanistan-registration-1992980656794?aff=oddtdtcreator",
      eventDetails.eventbriteUrl,
    )
    .replaceAll(
      "National+Conference+Center+18665+NCC+Ring+Drive+Leesburg+VA+20176",
      eventDetails.mapQuery,
    )
    .replaceAll(
      "National%20Conference%20Center%2C%2018665%20NCC%20Ring%20Drive%2C%20Leesburg%2C%20VA%2020176",
      eventDetails.googleCalendarLocation,
    )
    .replaceAll(
      "18665 NCC Ring Drive, Leesburg, VA 20176",
      eventDetails.guestAddress,
    )
    .replaceAll(
      "20260912T230000Z/20260912T230000Z",
      "20260912T230000Z/20260913T030000Z",
    )
    .replaceAll("7:00 PM", "6:45 PM");
}

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("text/html")) {
      return response;
    }

    const html = normalizeEventHtml(await response.text());
    const normalizedResponse = new Response(html, response);

    return new HTMLRewriter()
      .on("head", {
        element(element) {
          element.append(sponsorStyles, { html: true });
        },
      })
      .on('script[type="application/ld+json"]', {
        element(element) {
          element.setInnerContent(siteJsonLd);
        },
      })
      .on("nav a.sponsor-nav", {
        element(element) {
          element.before('<a href="#atlanta">Upcoming Events</a>', { html: true });
        },
      })
      .on("section#sponsor", {
        element(element) {
          element.before(atlantaSection + sponsorSection, { html: true });
        },
      })
      .transform(normalizedResponse);
  },
};