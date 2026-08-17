const eventDetails = {
  eventbriteUrl: "https://www.eventbrite.com/e/naghma-live-concert-virginia-us-registration-1992980656794?aff=oddtdtcreator",
  guestAddress: "18980 Upper Belmont Place, Leesburg, VA 20176",
  mapQuery: "18980+Upper+Belmont+Place+Leesburg+VA+20176",
  googleCalendarLocation: "18980%20Upper%20Belmont%20Place%2C%20Leesburg%2C%20VA%2020176",
};

const eventJsonLd = JSON.stringify({
  "@context": "https://schema.org",
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
  organizer: {
    "@type": "Organization",
    name: "Empire Stage Group LLC",
    email: "info@empirestagegroup.com",
    telephone: "+1-202-390-0424",
  },
  offers: {
    "@type": "Offer",
    url: eventDetails.eventbriteUrl,
    availability: "https://schema.org/InStock",
  },
}, null, 2);

const sponsorStyles = `
<style>
  .sponsors-showcase{width:min(1180px,calc(100% - 40px));margin:auto;padding:20px 0 116px}
  .sponsors-showcase h2{font-family:Georgia,serif;font-weight:400;letter-spacing:-.045em;margin:0;font-size:clamp(44px,6vw,76px);line-height:1}
  .sponsor-list{margin-top:38px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}
  .confirmed-sponsor{display:grid;grid-template-rows:330px auto;align-items:stretch;border:1px solid rgba(227,184,95,.35);background:linear-gradient(145deg,#151821,#0c0d12);box-shadow:0 28px 80px rgba(0,0,0,.35);overflow:hidden}
  .confirmed-sponsor-logo{display:grid;place-items:center;padding:24px;background:#000;border-bottom:1px solid var(--line);overflow:hidden}
  .confirmed-sponsor-logo.light{background:#fff}
  .confirmed-sponsor-logo img{display:block;width:100%;height:100%;object-fit:contain;object-position:center}
  .confirmed-sponsor-logo.light img{width:min(100%,320px);height:auto;aspect-ratio:1/1;object-fit:contain}
  .confirmed-sponsor-copy{padding:26px}
  .confirmed-sponsor-copy span{color:var(--gold);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
  .confirmed-sponsor-copy h3{font:clamp(30px,4vw,48px) Georgia;margin:13px 0 0;line-height:1.05}
  .lang-ps,.lang-fa{display:none}
  html[lang="ps"] .lang-en,html[lang="fa"] .lang-en{display:none}
  html[lang="ps"] .lang-ps,html[lang="fa"] .lang-fa{display:inline}
  html[dir="rtl"] .confirmed-sponsor-copy span{letter-spacing:0;text-transform:none}
  html[dir="rtl"] .sponsors-showcase h2{letter-spacing:0;line-height:1.15}
  @media(max-width:760px){.sponsor-list{grid-template-columns:1fr}.confirmed-sponsor{grid-template-rows:300px auto}.confirmed-sponsor-logo.light img{width:min(100%,280px)}.sponsors-showcase{width:min(100% - 28px,1180px);padding-bottom:88px}}
</style>`;

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
          element.setInnerContent(eventJsonLd);
        },
      })
      .on("section#sponsor", {
        element(element) {
          element.before(sponsorSection, { html: true });
        },
      })
      .transform(normalizedResponse);
  },
};
