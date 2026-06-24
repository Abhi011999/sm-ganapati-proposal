import Image from "next/image";

export default function ProposalPage() {
  return (
    <main style={{ fontFamily: "var(--font-rubik), sans-serif", background: "#fde7c8", color: "#111" }}>

      {/* ── NAV ── */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e8d5b7" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Image src="/sm-logo-white.png" alt="Social Musketeers" width={130} height={52} style={{ objectFit: "contain" }} />
          <Image src="/ganapati-logo-proper.jpg" alt="Ganapati Builders" width={130} height={52} style={{ objectFit: "contain" }} />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: "#0a2820", padding: "80px 32px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-rubik)", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a6e21", fontWeight: 600, marginBottom: 20 }}>
            Marketing Partnership Proposal
          </p>
          <h1 style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 24 }}>
            Social Musketeers<br />
            <span style={{ color: "#9a6e21" }}>×</span> Ganapati Builders
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 620, margin: "0 auto 40px" }}>
            A complete marketing system — strategy, execution, reporting, lead generation,
            content creation, SEO, website development, and brand growth. All under one roof.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            {[["4", "Projects"], ["₹1.45L", "Monthly Investment"], ["1", "Point of Contact"], ["360°", "Coverage"]].map(([n, l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 24px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-nunito)", fontSize: 26, fontWeight: 900, color: "#9a6e21" }}>{n}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2, letterSpacing: "0.08em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: OBJECTIVE ── */}
      <Section label="01 — Objective" title="What We're Here to Achieve" bg="#fde7c8">
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
      <Section label="02 — Marketing Ownership" title="Point of Contact" bg="#fff">
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
      <Section label="03 — Team Structure" title="Dedicated Resources" bg="#fde7c8">
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
      <Section label="04 — Reporting Structure" title="Reporting Structure" bg="#fff">
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
      <Section label="05 — Performance Marketing" title="Performance Marketing" bg="#fde7c8">
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
      <Section label="06 — Website Development" title="Website Development" bg="#fff">
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
      <Section label="07 — SEO" title="SEO — Ganapati Builders" bg="#fde7c8">
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
            08 — Commercials
          </p>
          <h2 style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#fff", marginBottom: 40, lineHeight: 1.2 }}>
            Investment & Pricing
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
      <Section label="09 — Why This Model Works" title="Why This Model Works" bg="#fde7c8">
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

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0a2820", padding: "40px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div style={{ background: "#fff", borderRadius: 10, padding: "10px 16px" }}>
              <Image src="/sm-logo-white.png" alt="Social Musketeers" width={100} height={40} style={{ objectFit: "contain" }} />
            </div>
            <span style={{ color: "#9a6e21", fontSize: 22, fontWeight: 900 }}>×</span>
            <div style={{ background: "#fff", borderRadius: 10, padding: "10px 16px" }}>
              <Image src="/ganapati-logo-proper.jpg" alt="Ganapati Builders" width={100} height={40} style={{ objectFit: "contain" }} />
            </div>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
            Confidential. Prepared exclusively for Ganapati Builders. © 2025 Social Musketeers.
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
function Section({ label, title, bg, children }: { label: string; title: string; bg: string; children: React.ReactNode }) {
  return (
    <section style={{ background: bg, padding: "72px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-rubik)", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a6e21", fontWeight: 600, marginBottom: 10 }}>
          {label}
        </p>
        <h2 style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, color: "#146658", marginBottom: 8, lineHeight: 1.2 }}>
          {title}
        </h2>
        <div style={{ width: 48, height: 3, background: "#9a6e21", borderRadius: 2, marginBottom: 32 }} />
        {children}
      </div>
    </section>
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
    <div style={{ background: "#fde7c8", borderRadius: 14, padding: "28px 28px", border: "1px solid #e8d5b7" }}>
      <p style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 800, fontSize: 16, color: "#146658", marginBottom: subtitle ? 6 : 16 }}>{title}</p>
      {subtitle && <p style={{ fontSize: 13, color: "#777", marginBottom: 14 }}>{subtitle}</p>}
      <BulletList items={items} />
    </div>
  );
}

function RoleBlock({ title, desc, blocks, objective }: {
  title: string;
  desc: string;
  blocks: { heading: string; items: string[] }[];
  objective: string;
}) {
  return (
    <div style={{ marginTop: 40, background: "#fff", borderRadius: 16, padding: "36px 36px", border: "1px solid #e8d5b7" }}>
      <h3 style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: 22, color: "#146658", marginBottom: 10 }}>{title}</h3>
      <p style={{ ...bodyText, fontSize: 15, marginBottom: 28, color: "#555" }}>{desc}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
        {blocks.map((b) => (
          <div key={b.heading}>
            <SubLabel>{b.heading}</SubLabel>
            <BulletList items={b.items} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid #e8d5b7" }}>
        <p style={{ fontSize: 14, color: "#146658", fontStyle: "italic", fontWeight: 500 }}>Objective: {objective}</p>
      </div>
    </div>
  );
}
