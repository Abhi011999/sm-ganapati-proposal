import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function ProposalPage() {
  return (
    <main style={{ fontFamily: "var(--font-rubik), sans-serif", background: "#fde7c8", color: "#111" }}>

      {/* ── NAV ── */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e8d5b7", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Image src="/sm-logo-white.png" alt="Social Musketeers" width={160} height={64} style={{ objectFit: "contain" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ height: 1, width: 32, background: "#9a6e21" }} />
            <span style={{ color: "#9a6e21", fontFamily: "var(--font-nunito)", fontWeight: 900, fontSize: 20 }}>×</span>
            <div style={{ height: 1, width: 32, background: "#9a6e21" }} />
          </div>
          <Image src="/ganapati-logo-proper.jpg" alt="Ganapati Builders" width={160} height={64} style={{ objectFit: "contain" }} />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: "#0a2820", padding: "100px 32px 80px", position: "relative", overflow: "hidden" }}>
        {/* bg blobs */}
        <div style={{ position: "absolute", top: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,102,88,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(154,110,33,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* grid pattern overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* pill badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(154,110,33,0.15)", border: "1px solid rgba(154,110,33,0.35)", borderRadius: 999, padding: "6px 18px", marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#9a6e21", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-rubik)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c49030", fontWeight: 600 }}>Marketing Partnership Proposal</span>
          </div>

          <h1 style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "clamp(40px, 6.5vw, 72px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 28 }}>
            Social Musketeers
            <br />
            <span style={{ color: "#9a6e21" }}>×</span> Ganapati Builders
          </h1>

          {/* gold rule */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ height: 1, width: 80, background: "linear-gradient(90deg, transparent, #9a6e21)" }} />
            <span style={{ color: "#9a6e21", fontSize: 14, letterSpacing: "0.3em" }}>✦ ✦ ✦</span>
            <div style={{ height: 1, width: 80, background: "linear-gradient(90deg, #9a6e21, transparent)" }} />
          </div>

          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.58)", lineHeight: 1.9, maxWidth: 600, margin: "0 auto 52px", fontFamily: "var(--font-rubik)" }}>
            A complete marketing system: strategy, execution, reporting,
            lead generation, content creation, SEO, website development,
            and brand growth. All under one roof.
          </p>

          {/* service pills */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {["Performance Marketing","SEO","Website Development","Social Media","Content Creation","Graphic Design","Reporting","Strategy"].map((s) => (
              <span key={s} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "7px 16px", fontSize: 12, color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-rubik)", letterSpacing: "0.03em" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: OBJECTIVE ── */}
      <Section label="01. Objective" title="What We're Here to Achieve" bg="#fde7c8" reveal>
        <p style={bodyText}>
          The objective of this partnership is to create a complete marketing system for Ganapati Builders
          and associated projects. Instead of working with multiple vendors or building a larger in-house team,
          Ganapati Builders will have a single marketing partner responsible for strategy, execution, reporting,
          lead generation, content creation, SEO, website development, and brand growth.
        </p>
        <p style={{ ...bodyText, fontWeight: 600, marginTop: 20, color: "#146658" }}>The goal is simple:</p>
        <BulletGrid items={[
          "Generate more qualified leads",
          "Improve brand visibility",
          "Increase project awareness",
          "Build trust through content",
          "Improve organic rankings",
          "Increase site visits",
          "Improve conversion rates",
          "Create a structured marketing process across all projects",
        ]} />
      </Section>

      {/* ── SECTION 2: MARKETING OWNERSHIP ── */}
      <Section label="02. Marketing Ownership" title="Point of Contact" bg="#fff" reveal>
        <p style={bodyText}>
          Social Musketeers will act as the central point of contact for all marketing activities.
          All marketing activities will be managed through a single workflow to ensure accountability,
          faster execution, and clear communication.
        </p>
        <p style={{ ...bodyText, fontWeight: 600, marginTop: 20, marginBottom: 12, color: "#146658" }}>The team will be responsible for:</p>
        <BulletGrid items={[
          "Performance Marketing", "SEO", "Website Development", "Landing Pages",
          "Social Media Management", "Content Strategy", "Creative Direction", "Reporting",
          "Marketing Planning", "Campaign Reviews", "Growth Recommendations", "Team Management",
        ]} cols={3} />
      </Section>

      {/* ── SECTION 3: TEAM STRUCTURE ── */}
      <Section label="03. Team Structure" title="Dedicated Resources" bg="#fde7c8" reveal>
        <p style={bodyText}>
          To ensure smooth execution, dedicated resources will work exclusively on the Ganapati ecosystem.
        </p>

        {/* Graphic Designer */}
        <RoleBlock
          title="Graphic Designer"
          desc="A dedicated Graphic Designer will support all projects with creative requirements."
          blocks={[
            {
              heading: "Responsibilities",
              items: ["Social media creatives", "Ad creatives", "Campaign creatives", "Festival creatives",
                "Offer creatives", "Project launch creatives", "Branding materials", "Brochures",
                "Marketing collateral", "Presentation designs", "Website graphics", "Landing page graphics"],
            },
            {
              heading: "Creative Requirements",
              items: ["New ad concepts", "New campaign creatives", "Project launch creatives",
                "Site update creatives", "Construction progress creatives", "Investment campaign creatives",
                "Luxury branding creatives", "Promotional creatives", "Event creatives"],
            },
            {
              heading: "Weekly Deliverables",
              items: ["Social media creatives", "Campaign creatives", "New creative concepts",
                "Festival creatives", "Ad creatives", "Branding creatives"],
            },
          ]}
          objective="To ensure a continuous flow of high-quality creatives across all active projects."
        />

        {/* Social Media / Content Creator */}
        <RoleBlock
          title="Social Media / Content Creator"
          desc="A dedicated Social Media & Content Creator will manage content planning, content production, and social media activities."
          blocks={[
            {
              heading: "Responsibilities",
              items: ["Monthly content planning", "Weekly content calendars", "Social media management",
                "Content writing", "Caption writing", "Educational content creation",
                "Investment-focused content", "Community engagement", "Content publishing"],
            },
            {
              heading: "Content Topics",
              items: ["Why invest in North Bangalore", "Market trends", "Investment opportunities",
                "Project highlights", "Construction updates", "Customer stories",
                "Company introduction", "Team introduction", "Industry insights",
                "FAQs", "Promotional campaigns", "Event coverage"],
            },
            {
              heading: "Video Content",
              items: ["Investment videos", "Educational videos", "Project reels",
                "Customer testimonials", "Brand videos", "Promotional reels", "Event videos"],
            },
            {
              heading: "Weekly Deliverables",
              items: ["New reel ideas", "Educational content", "Social media content",
                "Weekly content plans", "Caption writing", "Content publishing"],
            },
          ]}
          objective="To improve engagement, build trust, strengthen brand visibility, and support lead generation."
        />
      </Section>

      {/* ── SECTION 4: REPORTING STRUCTURE ── */}
      <Section label="04. Reporting Structure" title="Reporting Structure" bg="#fff" reveal>
        <p style={bodyText}>A structured reporting process will be maintained across all projects.</p>

        <TwoCol>
          <ReportCard title="Weekly Marketing Report" subtitle="Project-wise reporting including:" items={[
            "Total ad spend", "Leads generated", "Cost per lead", "Cost per site visit",
            "Verification ratio", "Site visits generated", "Lead quality observations",
            "Creative performance", "Weekly learnings",
          ]} />
          <ReportCard title="Monthly Marketing Report" items={[
            "Total marketing spend", "Total leads generated", "Project-wise performance",
            "Cost per lead", "Cost per click", "Cost per site visit", "Conversion ratio",
            "Best-performing campaigns", "Campaign insights", "Monthly recommendations",
          ]} />
        </TwoCol>

        <SubLabel>Sales Reporting</SubLabel>
        <p style={{ ...bodyText, marginBottom: 24 }}>
          To understand the complete customer journey, sales performance data will also be reviewed
          wherever CRM and sales team data is available.
        </p>
        <TwoCol>
          <ReportCard title="Weekly Sales Report" items={[
            "Total leads generated", "Total calls made", "Leads contacted", "Leads not connected",
            "Average follow-up attempts", "Verified leads", "Verification percentage",
            "Site visits scheduled", "Site visits completed", "Cost per verified lead",
            "Cost per site visit",
          ]} />
          <ReportCard title="Monthly Sales Report" items={[
            "Total leads generated", "Total calls made", "Total verified leads", "Total site visits",
            "Total bookings", "Total closures", "Lead to verification ratio",
            "Verification to site visit ratio", "Site visit to closure ratio",
            "Overall lead to closure ratio", "Best-performing lead sources", "Sales funnel observations",
          ]} />
        </TwoCol>

        <SubLabel>CRM & Automation</SubLabel>
        <p style={bodyText}>
          If Zoho CRM is available, reporting can be automated. Once Zoho CRM and Telegram integrations
          are configured, reports can be shared automatically with management.
        </p>
        <p style={{ ...bodyText, marginTop: 16, marginBottom: 12, fontWeight: 600, color: "#146658" }}>Possible tracking includes:</p>
        <BulletGrid items={[
          "Lead source tracking", "Campaign attribution", "Verification tracking",
          "Follow-up tracking", "Site visit tracking", "Closure tracking", "Sales funnel visibility",
        ]} />
      </Section>

      {/* ── SECTION 5: PERFORMANCE MARKETING ── */}
      <Section label="05. Performance Marketing" title="Performance Marketing" bg="#fde7c8" reveal>
        <p style={bodyText}>
          Social Musketeers will manage complete performance marketing operations across assigned projects.
        </p>
        <TwoCol>
          <div>
            <SubLabel>Scope of Work</SubLabel>
            <BulletList items={[
              "Google Ads Management", "Meta Ads Management", "Campaign Planning",
              "Audience Research", "Audience Targeting", "Retargeting Campaigns",
              "Lead Generation Campaigns", "Conversion Tracking", "Landing Page Recommendations",
              "Budget Optimization", "Campaign Scaling", "Creative Testing",
              "Lead Quality Reviews", "Weekly Performance Reviews", "Monthly Strategy Reviews",
            ]} />
          </div>
          <div>
            <SubLabel>Deliverables</SubLabel>
            <BulletList items={[
              "Campaign setup and management", "Lead generation campaigns",
              "Retargeting campaigns", "Audience testing", "New ad creatives",
              "Landing page recommendations", "Weekly performance reports", "Monthly performance reports",
            ]} />
            <SubLabel style={{ marginTop: 28 }}>Objective</SubLabel>
            <BulletList items={[
              "Generate qualified leads", "Reduce cost per lead", "Increase site visits",
              "Improve lead quality", "Improve conversion opportunities",
            ]} />
          </div>
        </TwoCol>
      </Section>

      {/* ── SECTION 6: WEBSITE DEVELOPMENT ── */}
      <Section label="06. Website Development" title="Website Development" bg="#fff" reveal>
        <p style={bodyText}>
          All websites and landing pages will be developed using modern technologies that support
          performance, speed, scalability, and SEO.
        </p>
        <p style={{ ...bodyText, marginTop: 16 }}><strong style={{ color: "#146658" }}>Technology Stack:</strong> React.js Frontend · Node.js Backend</p>
        <TwoCol style={{ marginTop: 32 }}>
          <div>
            <SubLabel>Scope of Work</SubLabel>
            <BulletList items={[
              "Website Development", "Landing Page Development", "Website Updates",
              "Website Improvements", "Mobile Optimization", "Speed Optimization",
              "Technical SEO Setup", "Lead Form Integrations", "CRM Integrations",
            ]} />
          </div>
          <div>
            <SubLabel>Deliverables</SubLabel>
            <BulletList items={[
              "High-performance websites", "SEO-ready architecture",
              "Conversion-focused landing pages", "Mobile-friendly pages", "Ongoing improvements",
            ]} />
            <SubLabel style={{ marginTop: 28 }}>Objective</SubLabel>
            <BulletList items={[
              "Better user experience", "Faster websites",
              "Improved conversions", "Strong SEO foundation",
            ]} />
          </div>
        </TwoCol>
      </Section>

      {/* ── SECTION 7: SEO ── */}
      <Section label="07. SEO" title="SEO for Ganapati Builders" bg="#fde7c8" reveal>
        <p style={bodyText}>
          SEO activities will focus on increasing visibility across Bangalore searches and building
          long-term organic traffic.
        </p>
        <TwoCol style={{ marginTop: 32 }}>
          <div>
            <SubLabel>Scope of Work</SubLabel>
            <BulletList items={[
              "On-Page SEO", "Off-Page SEO", "Local SEO", "Technical SEO",
              "Keyword Research", "Competitor Analysis", "Google Business Profile Optimization",
              "Internal Linking", "Content Optimization", "Technical Audits",
            ]} />
            <SubLabel style={{ marginTop: 28 }}>Content Deliverables</SubLabel>
            <BulletList items={[
              "10 SEO blogs per month", "Keyword-focused landing page content",
              "Location-based content", "Service page optimization",
              "Meta title optimization", "Meta description optimization",
            ]} />
          </div>
          <div>
            <SubLabel>SEO Roadmap</SubLabel>
            {[
              { phase: "Month 1–2", items: ["Website audit", "Technical fixes", "On-page optimization", "Local SEO setup", "Low competition keywords"] },
              { phase: "Month 3–4", items: ["Medium competition keywords", "Content expansion", "Authority building", "Link building"] },
              { phase: "Month 5–6", items: ["Competitive keywords", "Organic traffic growth", "Organic lead generation", "Ranking improvement"] },
            ].map((r) => (
              <div key={r.phase} style={{ marginBottom: 20 }}>
                <p style={{ fontFamily: "var(--font-nunito)", fontWeight: 800, color: "#9a6e21", fontSize: 13, letterSpacing: "0.05em", marginBottom: 8 }}>{r.phase}</p>
                <BulletList items={r.items} />
              </div>
            ))}
            <SubLabel style={{ marginTop: 28 }}>Monthly Deliverables</SubLabel>
            <BulletList items={[
              "10 SEO blogs", "SEO performance report", "Keyword ranking report",
              "Technical recommendations", "Competitor review", "Growth recommendations",
            ]} />
            <SubLabel style={{ marginTop: 28 }}>Objective</SubLabel>
            <BulletList items={[
              "Improve search visibility", "Increase organic traffic",
              "Rank for Bangalore-focused searches", "Generate long-term organic leads",
            ]} />
          </div>
        </TwoCol>
      </Section>

      {/* ── SECTION 8: COMMERCIALS ── */}
      <section style={{ background: "#0a2820", padding: "80px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-rubik)", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a6e21", fontWeight: 600, marginBottom: 12 }}>
            08. Pricing
          </p>
          <h2 style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#fff", marginBottom: 40, lineHeight: 1.2 }}>
            Pricing
          </h2>
          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.3)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#146658" }}>
                  <th style={{ padding: "16px 24px", textAlign: "left", fontFamily: "var(--font-nunito)", fontWeight: 800, color: "#fff", fontSize: 14 }}>Service</th>
                  <th style={{ padding: "16px 24px", textAlign: "right", fontFamily: "var(--font-nunito)", fontWeight: 800, color: "#fff", fontSize: 14 }}>Monthly Fee</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bargarh Project – Performance Marketing & Events", "₹30,000"],
                  ["Ganpati Air – Performance Marketing", "₹35,000"],
                  ["Rejoice – Performance Marketing", "₹35,000"],
                  ["Ganpati Builders SEO", "₹45,000"],
                ].map(([svc, fee], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fdf5ec" }}>
                    <td style={{ padding: "15px 24px", fontSize: 14, color: "#222" }}>{svc}</td>
                    <td style={{ padding: "15px 24px", textAlign: "right", fontFamily: "var(--font-nunito)", fontWeight: 700, fontSize: 15, color: "#146658" }}>{fee}</td>
                  </tr>
                ))}
                <tr style={{ background: "#9a6e21" }}>
                  <td style={{ padding: "18px 24px", fontFamily: "var(--font-nunito)", fontWeight: 900, color: "#fff", fontSize: 16 }}>Total Monthly Investment</td>
                  <td style={{ padding: "18px 24px", textAlign: "right", fontFamily: "var(--font-nunito)", fontWeight: 900, color: "#fff", fontSize: 22 }}>₹1,45,000</td>
                </tr>
              </tbody>
            </table>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px 24px", textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              + Applicable Taxes
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: WHY THIS MODEL WORKS ── */}
      <Section label="09. Why This Model Works" title="Why This Model Works" bg="#fde7c8" reveal>
        <p style={bodyText}>
          Ganapati Builders receives a complete marketing department under one structure.
        </p>
        <p style={{ ...bodyText, marginTop: 16, marginBottom: 24, fontWeight: 600, color: "#146658" }}>The partnership combines:</p>
        <BulletGrid items={[
          "Performance Marketing", "SEO", "Website Development", "Social Media Management",
          "Content Creation", "Graphic Design", "Reporting", "Sales Funnel Tracking",
          "Strategy", "Execution",
        ]} cols={2} />
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {["One Team", "One Strategy", "One Reporting Structure", "One Point of Accountability"].map((p) => (
            <div key={p} style={{ background: "#146658", borderRadius: 14, padding: "28px 20px", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: 18, color: "#fff", lineHeight: 1.3 }}>{p}</p>
            </div>
          ))}
        </div>
        <p style={{ ...bodyText, marginTop: 32, textAlign: "center", fontStyle: "italic", color: "#146658", fontWeight: 600 }}>
          Built to support long-term growth across every project within the Ganapati ecosystem.
        </p>
      </Section>

      {/* ── CLOSING STRIP ── */}
      <div style={{ background: "#146658", padding: "40px 32px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: "clamp(20px,3vw,32px)", color: "#fff", letterSpacing: "0.01em" }}>
          One Team. <span style={{ color: "#fde7c8" }}>One Strategy.</span> Total Growth.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 16 }}>
          <div style={{ height: 1, width: 60, background: "rgba(253,231,200,0.3)" }} />
          <span style={{ color: "rgba(253,231,200,0.5)", fontSize: 12, letterSpacing: "0.25em" }}>✦ ✦ ✦</span>
          <div style={{ height: 1, width: 60, background: "rgba(253,231,200,0.3)" }} />
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0a2820", padding: "48px 32px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, paddingBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <div style={{ background: "#fff", borderRadius: 12, padding: "10px 18px" }}>
                <Image src="/sm-logo-white.png" alt="Social Musketeers" width={120} height={48} style={{ objectFit: "contain", display: "block" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ height: 1, width: 24, background: "#9a6e21" }} />
                <span style={{ color: "#9a6e21", fontFamily: "var(--font-nunito)", fontWeight: 900, fontSize: 22 }}>×</span>
                <div style={{ height: 1, width: 24, background: "#9a6e21" }} />
              </div>
              <div style={{ background: "#fff", borderRadius: 12, padding: "10px 18px" }}>
                <Image src="/ganapati-logo-proper.jpg" alt="Ganapati Builders" width={120} height={48} style={{ objectFit: "contain", display: "block" }} />
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 700, fontSize: 15, color: "rgba(255,255,255,0.7)" }}>Built to grow together.</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Confidential   Prepared for Ganapati Builders</p>
            </div>
          </div>
          <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 20 }}>
            © 2025 Social Musketeers. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ─── shared styles ─── */
const bodyText: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.85,
  color: "#333",
  maxWidth: 820,
};

/* ─── reusable components ─── */
function SectionDivider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, padding: "0 32px", height: 0, position: "relative", zIndex: 2 }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #c49030, transparent)" }} />
      <span style={{ color: "#9a6e21", fontSize: 12, letterSpacing: "0.25em" }}>✦</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #c49030, transparent)" }} />
    </div>
  );
}

function Section({ label, title, bg, children, reveal }: { label: string; title: string; bg: string; children: React.ReactNode; reveal?: boolean }) {
  const inner = (
    <section style={{ background: bg, padding: "80px 32px", position: "relative", overflow: "hidden" }}>
      {/* corner glow */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 260, height: 260, background: "radial-gradient(circle at top right, rgba(154,110,33,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 180, height: 180, background: "radial-gradient(circle at bottom left, rgba(20,102,88,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 28, height: 2, background: "#9a6e21", borderRadius: 2 }} />
          <p style={{ fontFamily: "var(--font-rubik)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9a6e21", fontWeight: 700 }}>
            {label}
          </p>
        </div>
        <h2 style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#146658", marginBottom: 10, lineHeight: 1.15 }}>
          {title}
        </h2>
        <div style={{ width: 56, height: 3, background: "linear-gradient(90deg, #9a6e21, #c49030)", borderRadius: 2, marginBottom: 36 }} />
        {children}
      </div>
    </section>
  );
  return (
    <>
      <SectionDivider />
      {reveal ? <ScrollReveal>{inner}</ScrollReveal> : inner}
    </>
  );
}

function SubLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 800, fontSize: 15, color: "#9a6e21", marginBottom: 12, marginTop: 4, ...style }}>
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#333", lineHeight: 1.6 }}>
          <span style={{ width: 18, height: 18, minWidth: 18, background: "#146658", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function BulletGrid({ items, cols = 2 }: { items: string[]; cols?: number }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${cols === 3 ? 200 : 240}px, 1fr))`, gap: "10px 24px", marginTop: 8 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#333", lineHeight: 1.6 }}>
          <span style={{ width: 18, height: 18, minWidth: 18, background: "#146658", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}

function TwoCol({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40, ...style }}>
      {children}
    </div>
  );
}

function ReportCard({ title, subtitle, items }: { title: string; subtitle?: string; items: string[] }) {
  return (
    <ScrollReveal>
    <div style={{ background: "#fff", borderRadius: 16, padding: "28px 28px", border: "1px solid #e8d5b7", boxShadow: "0 2px 16px rgba(20,102,88,0.05)", height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: subtitle ? 6 : 18 }}>
        <div style={{ width: 4, height: 20, background: "linear-gradient(180deg,#146658,#9a6e21)", borderRadius: 2 }} />
        <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 800, fontSize: 16, color: "#146658" }}>{title}</p>
      </div>
      {subtitle && <p style={{ fontSize: 13, color: "#777", marginBottom: 14 }}>{subtitle}</p>}
      <BulletList items={items} />
    </div>
    </ScrollReveal>
  );
}

function RoleBlock({ title, desc, blocks, objective }: {
  title: string;
  desc: string;
  blocks: { heading: string; items: string[] }[];
  objective: string;
}) {
  return (
    <ScrollReveal>
    <div style={{ marginTop: 40, background: "#fff", borderRadius: 20, padding: "40px", border: "1px solid #e8d5b7", boxShadow: "0 4px 24px rgba(20,102,88,0.06)" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20 }}>
        <div style={{ width: 5, minWidth: 5, height: 28, background: "linear-gradient(180deg,#146658,#9a6e21)", borderRadius: 3, marginTop: 3 }} />
        <div>
          <h3 style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: 22, color: "#146658", marginBottom: 6 }}>{title}</h3>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{desc}</p>
        </div>
      </div>
      <div style={{ height: 1, background: "linear-gradient(90deg,#e8d5b7,transparent)", marginBottom: 28 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
        {blocks.map((b) => (
          <div key={b.heading}>
            <SubLabel>{b.heading}</SubLabel>
            <BulletList items={b.items} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid #f0e4d0", display: "flex", alignItems: "flex-start", gap: 10 }}>
        <span style={{ fontSize: 15, color: "#9a6e21" }}>✦</span>
        <p style={{ fontSize: 14, color: "#146658", fontStyle: "italic", fontWeight: 500, lineHeight: 1.6 }}>Objective: {objective}</p>
      </div>
    </div>
    </ScrollReveal>
  );
}
