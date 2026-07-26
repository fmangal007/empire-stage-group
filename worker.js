const sponsorStyles = `
<style>
  .sponsors-showcase{width:min(1180px,calc(100% - 40px));margin:auto;padding:20px 0 116px}
  .sponsors-showcase h2{font-family:Georgia,serif;font-weight:400;letter-spacing:-.045em;margin:0;font-size:clamp(44px,6vw,76px);line-height:1}
  .confirmed-sponsor{margin-top:38px;display:grid;grid-template-columns:minmax(260px,430px) 1fr;align-items:center;gap:50px;padding:34px;border:1px solid rgba(227,184,95,.35);background:linear-gradient(145deg,#151821,#0c0d12);box-shadow:0 28px 80px rgba(0,0,0,.35)}
  .confirmed-sponsor-logo{min-height:190px;display:grid;place-items:center;padding:22px;background:#000;border:1px solid var(--line);overflow:hidden}
  .confirmed-sponsor-logo img{display:block;width:100%;height:auto}
  .confirmed-sponsor-copy span{color:var(--gold);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
  .confirmed-sponsor-copy h3{font:clamp(34px,5vw,58px) Georgia;margin:13px 0 0;line-height:1.05}
  .lang-ps,.lang-fa{display:none}
  html[lang="ps"] .lang-en,html[lang="fa"] .lang-en{display:none}
  html[lang="ps"] .lang-ps,html[lang="fa"] .lang-fa{display:inline}
  html[dir="rtl"] .confirmed-sponsor-copy span{letter-spacing:0;text-transform:none}
  html[dir="rtl"] .sponsors-showcase h2{letter-spacing:0;line-height:1.15}
  @media(max-width:760px){.confirmed-sponsor{grid-template-columns:1fr;gap:26px;padding:24px}.confirmed-sponsor-logo{min-height:150px}.sponsors-showcase{width:min(100% - 28px,1180px);padding-bottom:88px}}
</style>`;

const sponsorSection = `
<section class="sponsors-showcase" id="sponsors" aria-labelledby="sponsors-title">
  <p class="eyebrow">
    <span class="lang-en">Proud sponsor</span>
    <span class="lang-ps">ویاړلی سپانسر</span>
    <span class="lang-fa">اسپانسر افتخاری</span>
  </p>
  <h2 id="sponsors-title">
    <span class="lang-en">Supporting this celebration.</span>
    <span class="lang-ps">د دې جشن ملاتړ کوي.</span>
    <span class="lang-fa">حامی این جشن.</span>
  </h2>
  <article class="confirmed-sponsor">
    <div class="confirmed-sponsor-logo"><img src="/images/dulles-auto-body-paint-sponsor.svg" alt="Dulles Auto Body &amp; Paint sponsor logo" loading="lazy"></div>
    <div class="confirmed-sponsor-copy">
      <span class="lang-en">Official event sponsor</span>
      <span class="lang-ps">د پروګرام رسمي سپانسر</span>
      <span class="lang-fa">اسپانسر رسمی برنامه</span>
      <h3>Dulles Auto Body &amp; Paint</h3>
    </div>
  </article>
</section>`;

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("text/html")) {
      return response;
    }

    return new HTMLRewriter()
      .on("head", {
        element(element) {
          element.append(sponsorStyles, { html: true });
        },
      })
      .on("section#sponsor", {
        element(element) {
          element.before(sponsorSection, { html: true });
        },
      })
      .transform(response);
  },
};
