import Image from "next/image";

/* ─── colour tokens ─────────────────────────────────────────────────────── */
const C = {
  primary:   "#146658",   // headings
  secondary: "#9a6e21",   // sub-headings
  theme:     "#fde7c8",   // page bg
  dark:      "#0d3d33",   // hero bg
  body:      "#111111",
  muted:     "#555555",
  white:     "#ffffff",
  gold:      "#9a6e21",
};

/* ─── data ───────────────────────────────────────────────────────────────── */
const goals = [
  "Generate more qualified leads",
  "Improve brand visibility",
  "Increase project awareness",
  "Build trust through content",
  "Improve organic rankings",
  "Increase site visits",
  "Improve conversion rates",
  "Create a structured marketing process across all projects",
];

const ownership = [
  "Performance Marketing","SEO","Website Development",
  "Landing Pages","Social Media Management","Content Strategy",
  "Creative Direction","Reporting","Marketing Planning",
  "Campaign Reviews","Growth Recommendations","Team Management",
];

const designerResp = [
  "Social media creatives","Ad creatives","Campaign creatives",
  "Festival creatives","Offer creatives","Project launch creatives",
  "Branding materials","Brochures","Marketing collateral",
  "Presentation designs","Website graphics","Landing page graphics",
];

const creatorResp = [
  "Monthly content planning","Weekly content calendars",
  "Social media management","Content writing","Caption writing",
  "Educational content creation","Investment-focused content",
  "Community engagement","Content publishing",
];

const contentTopics = [
  "Why invest in North Bangalore","Market trends","Investment opportunities",
  "Project highlights","Construction updates","Customer stories",
  "Company introduction","Team introduction","Industry insights",
  "FAQs","Promotional campaigns","Event coverage",
];

const videoContent = [
  "Investment videos","Educational videos","Project reels",
  "Customer testimonials","Brand videos","Promotional reels","Event videos",
];

const weeklyReportItems = [
  "Total ad spend","Leads generated","Cost per lead","Cost per site visit",
  "Verification ratio","Site visits generated","Lead quality observations",
  "Creative performance","Weekly learnings",
];

const monthlyReportItems = [
  "Total marketing spend","Total leads generated","Project-wise performance",
  "Cost per lead","Cost per click","Cost per site visit","Conversion ratio",
  "Best-performing campaigns","Campaign insights","Monthly recommendations",
];

const weeklySales = [
  "Total leads generated","Total calls made","Leads contacted",
  "Leads not connected","Average follow-up attempts","Verified leads",
  "Verification percentage","Site visits scheduled","Site visits completed",
  "Cost per verified lead","Cost per site visit",
];

const monthlySales = [
  "Total leads generated","Total calls made","Total verified leads",
  "Total site visits","Total bookings","Total closures",
  "Lead to verification ratio","Verification to site visit ratio",
  "Site visit to closure ratio","Overall lead to closure ratio",
  "Best-performing lead sources","Sales funnel observations",
];

const crmItems = [
  "Lead source tracking","Campaign attribution","Verification tracking",
  "Follow-up tracking","Site visit tracking","Closure tracking","Sales funnel visibility",
];

const perfScope = [
  "Google Ads Management","Meta Ads Management","Campaign Planning",
  "Audience Research","Audience Targeting","Retargeting Campaigns",
  "Lead Generation Campaigns","Conversion Tracking","Landing Page Recommendations",
  "Budget Optimization","Campaign Scaling","Creative Testing",
  "Lead Quality Reviews","Weekly Performance Reviews","Monthly Strategy Reviews",
];

const perfDeliverables = [
  "Campaign setup and management","Lead generation campaigns",
  "Retargeting campaigns","Audience testing","New ad creatives",
  "Landing page recommendations","Weekly performance reports","Monthly performance reports",
];

const webScope = [
  "Website Development","Landing Page Development","Website Updates",
  "Website Improvements","Mobile Optimization","Speed Optimization",
  "Technical SEO Setup","Lead Form Integrations","CRM Integrations",
];

const seoScope = [
  "On-Page SEO","Off-Page SEO","Local SEO","Technical SEO",
  "Keyword Research","Competitor Analysis","Google Business Profile Optimization",
  "Internal Linking","Content Optimization","Technical Audits",
];

const seoBlogsDeliverables = [
  "10 SEO blogs per month","Keyword-focused landing page content",
  "Location-based content","Service page optimization",
  "Meta title optimization","Meta description optimization",
];

const seoMonthly = [
  "10 SEO blogs","SEO performance report","Keyword ranking report",
  "Technical recommendations","Competitor review","Growth recommendations",
];

const seoRoadmap = [
  { months: "Month 1–2", items: ["Website audit","Technical fixes","On-page optimization","Local SEO setup","Low competition keywords"] },
  { months: "Month 3–4", items: ["Medium competition keywords","Content expansion","Authority building","Link building"] },
  { months: "Month 5–6", items: ["Competitive keywords","Organic traffic growth","Organic lead generation","Ranking improvement"] },
];

const pricing = [
  { service: "Bargarh Project – Performance Marketing & Events", fee: "₹30,000" },
  { service: "Ganpati Air – Performance Marketing",              fee: "₹35,000" },
  { service: "Rejoice – Performance Marketing",                  fee: "₹35,000" },
  { service: "Ganpati Builders SEO",                            fee: "₹45,000" },
];

const whyUs = [
  "Performance Marketing","SEO","Website Development","Social Media Management",
  "Content Creation","Graphic Design","Reporting","Sales Funnel Tracking",
  "Strategy","Execution",
];

/* ─── small components ───────────────────────────────────────────────────── */
function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full border"
      style={{ color: C.secondary, borderColor: C.secondary, fontFamily: "Rubik, sans-serif" }}>
      {text}
    </span>
  );
}

function SectionHeading({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <Tag text={tag} />
      <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight"
        style={{ color: C.primary, fontFamily: "Nunito, sans-serif" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base max-w-2xl" style={{ color: C.muted, fontFamily: "Rubik, sans-serif" }}>
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-[3px] w-16 rounded-full" style={{ background: C.secondary }} />
    </div>
  );
}

function BulletList({ items, cols = 1 }: { items: string[]; cols?: number }) {
  return (
    <ul className={`grid gap-2 ${cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: C.body, fontFamily: "Rubik, sans-serif" }}>
          <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] font-bold"
            style={{ background: C.primary }}>✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}
      style={{ background: C.white }}>
      {children}
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold mb-4" style={{ color: C.secondary, fontFamily: "Nunito, sans-serif" }}>
      {children}
    </h3>
  );
}

/* ─── page ────────────────────────────────────────────────────────────────── */
export default function ProposalPage() {
  return (
    <main style={{ background: C.theme, fontFamily: "Rubik, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: C.dark }}>
        {/* decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-10"
            style={{ background: C.primary, filter: "blur(80px)" }} />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10"
            style={{ background: C.secondary, filter: "blur(80px)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* logos row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-14">
            <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-center shadow-lg"
              style={{ minWidth: 160, minHeight: 80 }}>
              <Image src="/sm-logo-white.png" alt="Social Musketeers" width={140} height={60} className="object-contain" />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[2px]" style={{ background: C.secondary }} />
              <span className="text-2xl font-black" style={{ color: C.secondary, fontFamily: "Nunito, sans-serif" }}>×</span>
              <div className="w-10 h-[2px]" style={{ background: C.secondary }} />
            </div>
            <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-center shadow-lg"
              style={{ minWidth: 160, minHeight: 80 }}>
              <Image src="/ganapati-logo-proper.jpg" alt="Ganapati Builders" width={140} height={60} className="object-contain" />
            </div>
          </div>

          {/* headline */}
          <div className="text-center">
            <Tag text="Marketing Partnership Proposal" />
            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight text-white"
              style={{ fontFamily: "Nunito, sans-serif" }}>
              One Team.<br />
              <span style={{ color: C.secondary }}>One Strategy.</span><br />
              Total Growth.
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Rubik, sans-serif" }}>
              Social Musketeers proposes a complete marketing system for Ganapati Builders —
              strategy, execution, reporting, leads, content, SEO, and web development,
              all under one roof.
            </p>
          </div>

          {/* stat pills */}
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {[
              { n: "4", label: "Active Projects" },
              { n: "₹1.45L", label: "Monthly Investment" },
              { n: "1", label: "Point of Contact" },
              { n: "360°", label: "Marketing Coverage" },
            ].map((s) => (
              <div key={s.n} className="rounded-xl px-6 py-4 text-center"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="text-3xl font-black" style={{ color: C.secondary, fontFamily: "Nunito, sans-serif" }}>{s.n}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Rubik, sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTIVE ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <SectionHeading
          tag="The Mission"
          title="What We're Here to Achieve"
          subtitle="Instead of working with multiple vendors or building a larger in-house team, Ganapati Builders will have a single marketing partner responsible for everything."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {goals.map((g, i) => (
            <div key={i} className="rounded-2xl p-5 flex gap-3 items-start hover:shadow-md transition-shadow"
              style={{ background: C.white }}>
              <span className="w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                style={{ background: C.primary }}>
                {i + 1}
              </span>
              <p className="text-sm leading-snug" style={{ color: C.body }}>{g}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARKETING OWNERSHIP ──────────────────────────────────────────── */}
      <section style={{ background: C.primary }} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <Tag text="Ownership" />
            <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight text-white"
              style={{ fontFamily: "Nunito, sans-serif" }}>
              Marketing Ownership &amp; Point of Contact
            </h2>
            <div className="mt-4 h-[3px] w-16 rounded-full" style={{ background: C.secondary }} />
          </div>
          <p className="text-white/70 text-base mb-10 max-w-2xl" style={{ fontFamily: "Rubik, sans-serif" }}>
            Social Musketeers will act as the central point of contact for all marketing
            activities — one workflow, clear accountability, faster execution.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ownership.map((o, i) => (
              <div key={i} className="rounded-xl px-4 py-3 text-sm font-medium text-center"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", fontFamily: "Rubik, sans-serif", border: "1px solid rgba(255,255,255,0.15)" }}>
                {o}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM STRUCTURE ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <SectionHeading
          tag="Team Structure"
          title="Dedicated Resources, Exclusive Focus"
          subtitle="To ensure smooth execution, dedicated resources will work exclusively on the Ganapati ecosystem."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Graphic Designer */}
          <Card>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${C.primary}18` }}>🎨</div>
              <div>
                <h3 className="text-xl font-black" style={{ color: C.primary, fontFamily: "Nunito, sans-serif" }}>Graphic Designer</h3>
                <p className="text-xs" style={{ color: C.muted }}>Dedicated creative resource</p>
              </div>
            </div>
            <SubHeading>Responsibilities</SubHeading>
            <BulletList items={designerResp} cols={2} />
            <div className="mt-5 pt-5 border-t" style={{ borderColor: `${C.secondary}30` }}>
              <SubHeading>Weekly Deliverables</SubHeading>
              <BulletList items={["Social media creatives","Campaign creatives","New creative concepts","Festival creatives","Ad creatives","Branding creatives"]} cols={2} />
            </div>
          </Card>

          {/* Content Creator */}
          <Card>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${C.secondary}18` }}>✍️</div>
              <div>
                <h3 className="text-xl font-black" style={{ color: C.primary, fontFamily: "Nunito, sans-serif" }}>Social Media / Content Creator</h3>
                <p className="text-xs" style={{ color: C.muted }}>Content planning & production</p>
              </div>
            </div>
            <SubHeading>Responsibilities</SubHeading>
            <BulletList items={creatorResp} cols={2} />
            <div className="mt-5 pt-5 border-t" style={{ borderColor: `${C.secondary}30` }}>
              <SubHeading>Content Topics</SubHeading>
              <BulletList items={contentTopics} cols={2} />
            </div>
            <div className="mt-5 pt-5 border-t" style={{ borderColor: `${C.secondary}30` }}>
              <SubHeading>Video Content</SubHeading>
              <BulletList items={videoContent} cols={2} />
            </div>
          </Card>
        </div>
      </section>

      {/* ── REPORTING ────────────────────────────────────────────────────── */}
      <section style={{ background: "#f5f0e8" }} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            tag="Reporting"
            title="Full Transparency, Every Week"
            subtitle="A structured reporting process maintained across all projects — marketing performance plus sales funnel visibility."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { icon: "📊", title: "Weekly Marketing", items: weeklyReportItems },
              { icon: "📈", title: "Monthly Marketing", items: monthlyReportItems },
              { icon: "📞", title: "Weekly Sales", items: weeklySales },
              { icon: "🏆", title: "Monthly Sales", items: monthlySales },
            ].map((r) => (
              <Card key={r.title}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{r.icon}</span>
                  <h3 className="font-black text-base" style={{ color: C.primary, fontFamily: "Nunito, sans-serif" }}>{r.title} Report</h3>
                </div>
                <BulletList items={r.items} />
              </Card>
            ))}
          </div>

          {/* CRM */}
          <div className="mt-10 rounded-2xl p-8" style={{ background: C.white }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-xl font-black" style={{ color: C.primary, fontFamily: "Nunito, sans-serif" }}>CRM &amp; Automation</h3>
            </div>
            <p className="text-sm mb-5" style={{ color: C.muted }}>
              If Zoho CRM is available, reporting can be automated. Once Zoho CRM and
              Telegram integrations are configured, reports can be shared automatically with management.
            </p>
            <BulletList items={crmItems} cols={2} />
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE MARKETING ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <SectionHeading
          tag="Performance Marketing"
          title="Data-Driven Campaigns That Convert"
          subtitle="Complete performance marketing operations across all assigned projects — Google Ads, Meta Ads, and beyond."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-2">
            <SubHeading>Scope of Work</SubHeading>
            <BulletList items={perfScope} cols={2} />
          </Card>
          <div className="flex flex-col gap-6">
            <Card>
              <SubHeading>Deliverables</SubHeading>
              <BulletList items={perfDeliverables} />
            </Card>
            <div className="rounded-2xl p-6" style={{ background: C.primary }}>
              <h3 className="font-black text-base text-white mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>Objectives</h3>
              <ul className="space-y-2">
                {["Generate qualified leads","Reduce cost per lead","Increase site visits","Improve lead quality","Improve conversion opportunities"].map((o,i) => (
                  <li key={i} className="text-sm flex gap-2 items-center" style={{ color: "rgba(255,255,255,0.85)" }}>
                    <span className="text-xs" style={{ color: C.secondary }}>→</span>{o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEBSITE DEV ──────────────────────────────────────────────────── */}
      <section style={{ background: "#f5f0e8" }} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            tag="Website Development"
            title="Fast, Beautiful, Built to Convert"
            subtitle="All websites and landing pages built using modern technologies — React.js frontend, Node.js backend."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-2">
              <SubHeading>Scope of Work</SubHeading>
              <BulletList items={webScope} cols={2} />
              <div className="mt-5 pt-5 border-t" style={{ borderColor: `${C.secondary}30` }}>
                <SubHeading>Deliverables</SubHeading>
                <BulletList items={["High-performance websites","SEO-ready architecture","Conversion-focused landing pages","Mobile-friendly pages","Ongoing improvements"]} cols={2} />
              </div>
            </Card>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl p-6" style={{ background: C.secondary }}>
                <h3 className="font-black text-white text-base mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>Tech Stack</h3>
                {["React.js Frontend","Node.js Backend"].map((t,i) => (
                  <div key={i} className="text-sm py-2 flex gap-2 items-center" style={{ color: "rgba(255,255,255,0.9)" }}>
                    <span>⚡</span>{t}
                  </div>
                ))}
              </div>
              <Card>
                <h3 className="font-black text-base mb-3" style={{ color: C.primary, fontFamily: "Nunito, sans-serif" }}>Objectives</h3>
                <BulletList items={["Better user experience","Faster websites","Improved conversions","Strong SEO foundation"]} />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO ──────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <SectionHeading
          tag="SEO"
          title="Dominate Bangalore Search"
          subtitle="SEO activities focused on increasing visibility across Bangalore searches and building long-term organic traffic."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <Card>
              <SubHeading>Scope of Work</SubHeading>
              <BulletList items={seoScope} cols={2} />
            </Card>
            <Card>
              <SubHeading>Content Deliverables</SubHeading>
              <BulletList items={seoBlogsDeliverables} />
            </Card>
            <Card>
              <SubHeading>Monthly Deliverables</SubHeading>
              <BulletList items={seoMonthly} />
            </Card>
          </div>

          {/* Roadmap */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl p-7" style={{ background: C.dark }}>
              <h3 className="text-xl font-black text-white mb-6" style={{ fontFamily: "Nunito, sans-serif" }}>
                SEO Roadmap
              </h3>
              <div className="space-y-5">
                {seoRoadmap.map((r, i) => (
                  <div key={i} className="relative pl-5 border-l-2" style={{ borderColor: i === 0 ? C.secondary : i === 1 ? C.primary : "#ffffff40" }}>
                    <p className="text-xs font-bold mb-2" style={{ color: C.secondary, fontFamily: "Nunito, sans-serif" }}>{r.months}</p>
                    <ul className="space-y-1">
                      {r.items.map((item, j) => (
                        <li key={j} className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6" style={{ background: C.primary }}>
              <h3 className="font-black text-base text-white mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>SEO Objectives</h3>
              <BulletList items={["Improve search visibility","Increase organic traffic","Rank for Bangalore-focused searches","Generate long-term organic leads"]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMERCIALS ──────────────────────────────────────────────────── */}
      <section style={{ background: C.dark }} className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <Tag text="Commercials" />
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-white" style={{ fontFamily: "Nunito, sans-serif" }}>
              Investment &amp; Pricing
            </h2>
            <div className="mt-4 h-[3px] w-16 mx-auto rounded-full" style={{ background: C.secondary }} />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full">
              <thead>
                <tr style={{ background: C.primary }}>
                  <th className="text-left px-6 py-4 text-sm font-bold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>Service</th>
                  <th className="text-right px-6 py-4 text-sm font-bold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>Monthly Fee</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((p, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.97)" : "rgba(253,231,200,0.6)" }}>
                    <td className="px-6 py-4 text-sm" style={{ color: C.body, fontFamily: "Rubik, sans-serif" }}>{p.service}</td>
                    <td className="px-6 py-4 text-right font-bold text-base" style={{ color: C.primary, fontFamily: "Nunito, sans-serif" }}>{p.fee}</td>
                  </tr>
                ))}
                <tr style={{ background: C.secondary }}>
                  <td className="px-6 py-5 font-black text-white text-base" style={{ fontFamily: "Nunito, sans-serif" }}>
                    Total Monthly Investment
                  </td>
                  <td className="px-6 py-5 text-right font-black text-white text-xl" style={{ fontFamily: "Nunito, sans-serif" }}>
                    ₹1,45,000
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="px-6 py-3 text-xs text-center" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)" }}>
              + Applicable Taxes
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MODEL ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <SectionHeading
          tag="Why This Works"
          title="A Complete Marketing Department"
          subtitle="Ganapati Builders receives a complete marketing department under one structure — built to support long-term growth across every project within the Ganapati ecosystem."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-14">
          {whyUs.map((w, i) => (
            <div key={i} className="rounded-xl px-4 py-4 text-center hover:shadow-md transition-shadow"
              style={{ background: C.white }}>
              <p className="text-sm font-semibold" style={{ color: C.primary, fontFamily: "Nunito, sans-serif" }}>{w}</p>
            </div>
          ))}
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "👥", label: "One Team" },
            { icon: "🎯", label: "One Strategy" },
            { icon: "📋", label: "One Reporting Structure" },
            { icon: "🔑", label: "One Point of Accountability" },
          ].map((p) => (
            <div key={p.label} className="rounded-2xl py-10 px-6 text-center"
              style={{ background: C.primary }}>
              <div className="text-4xl mb-3">{p.icon}</div>
              <p className="text-xl font-black text-white" style={{ fontFamily: "Nunito, sans-serif" }}>{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ background: C.dark }} className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap items-center gap-8 justify-center">
              <div className="bg-white rounded-xl px-5 py-3">
                <Image src="/sm-logo-white.png" alt="Social Musketeers" width={110} height={48} className="object-contain" />
              </div>
              <span className="text-2xl font-black" style={{ color: C.secondary, fontFamily: "Nunito, sans-serif" }}>×</span>
              <div className="bg-white rounded-xl px-5 py-3">
                <Image src="/ganapati-logo-proper.jpg" alt="Ganapati Builders" width={110} height={48} className="object-contain" />
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="font-black text-lg text-white" style={{ fontFamily: "Nunito, sans-serif" }}>
                Built to Grow Together
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Rubik, sans-serif" }}>
                © 2025 Social Musketeers. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-xs" style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.25)" }}>
            This proposal is confidential and prepared exclusively for Ganapati Builders.
          </div>
        </div>
      </footer>

    </main>
  );
}
