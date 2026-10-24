import ScrollReveal from "./ScrollReveal";

type Row = [string, string];

function Rows({ rows }: { rows: Row[] }) {
  return (
    <div className="up-card">
      {rows.map(([t, d]) => (
        <div className="up-row" key={t}>
          <b>{t}</b>
          <span>{d}</span>
        </div>
      ))}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="up-list">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

function PartHead({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="up-banner">
      <div className="up-badge">{n}</div>
      <div>
        <p className="up-kicker">Part {n}</p>
        <h3 className="up-h3">{title}</h3>
        <p className="up-sub">{sub}</p>
      </div>
    </div>
  );
}

export default function UpdatedProposal() {
  return (
    <section className="up" id="updated-proposal">
      <div className="up-wrap">
        <ScrollReveal>
          <div className="up-eyebrow"><i /><span>Updated Proposal</span></div>
          <h2 className="up-h2">Updated Scope &amp; Commercials</h2>
          <div className="up-rule" />
          <p className="up-lead">
            The latest proposal from Social Musketeers, in three parts: marketing services for
            Ganapati Builders, performance marketing for Massive Reality, and the Massive Reality
            website. Every scope, cost and exclusion is listed below in plain terms.
          </p>

          <nav className="up-chips" aria-label="Jump to part">
            <a className="up-chip" href="#up-a">A · Ganapati Marketing</a>
            <a className="up-chip" href="#up-b">B · Massive Reality Ads</a>
            <a className="up-chip" href="#up-c">C · Massive Reality Website</a>
            <a className="up-chip" href="#up-summary">Cost Summary</a>
          </nav>

          {/* AT A GLANCE */}
          <div className="up-glance">
            <div className="up-gcard">
              <small>Part A · Ganapati Builders</small>
              <h3>Marketing Services</h3>
              <div className="up-price">₹1,40,000<em>/ month</em></div>
              <p className="up-price2">Performance marketing, strategy, SEO, website maintenance and optimisation.</p>
            </div>
            <div className="up-gcard">
              <small>Part B · Massive Reality</small>
              <h3>Performance Marketing</h3>
              <div className="up-price">₹60,000<em>/ month</em></div>
              <p className="up-price2">Indicative, for approx. 5 to 8 projects. Ad spend paid separately.</p>
            </div>
            <div className="up-gcard">
              <small>Part C · Massive Reality</small>
              <h3>Website Development</h3>
              <div className="up-price">₹1,30,000<em>one-time</em></div>
              <p className="up-price2">Then <b>₹20,000</b> / month for maintenance.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* PART A */}
        <div className="up-part" id="up-a">
          <ScrollReveal>
            <PartHead n="A" title="Marketing Services for Ganapati Builders" sub="Prepared by Social Musketeers for Ganapati Builders" />
            <p className="up-p">
              Social Musketeers will manage the overall digital marketing strategy for Ganapati
              Builders, covering approximately five real estate projects across Odisha and Bengaluru.
            </p>

            <h4 className="up-h4">What we will handle</h4>
            <Rows rows={[
              ["Performance Marketing", "Planning and management of paid advertising campaigns for approximately five projects."],
              ["Campaign Strategy", "Campaign planning, audience targeting, budget planning, and lead generation strategy."],
              ["SEO", "Search engine optimisation for Ganapati Builders to improve website visibility on Google."],
              ["Website Maintenance", "Routine maintenance and updates for websites developed by Social Musketeers."],
              ["Performance Optimisation", "Monitoring campaign performance and making improvements to help generate better results."],
            ]} />

            <div className="up-cost">
              <div>
                <p className="lbl">Monthly Cost</p>
                <p className="note">Covers all the marketing services listed above across the agreed projects.</p>
              </div>
              <div className="amt">₹1,40,000<em>/ month</em></div>
            </div>

            <h4 className="up-h4">Website &amp; landing page development</h4>
            <Rows rows={[
              ["Website Development", "Development of the main website or individual project websites. Quoted separately."],
              ["Landing Page Development", "Dedicated landing pages for individual projects and advertising campaigns. Quoted separately."],
              ["Additional Website Features", "Any new functionality or major changes beyond the agreed scope. Quoted separately."],
            ]} />
            <p className="up-note">
              Website and landing page requirements will be discussed and priced separately, based on the scope of each project.
            </p>

            <h4 className="up-h4">Cost summary</h4>
            <Rows rows={[
              ["Monthly marketing, performance marketing and SEO", "₹1,40,000 per month"],
              ["Website maintenance for websites developed by us", "Included"],
              ["Website development", "Charged separately"],
              ["Landing page development", "Charged separately"],
              ["Advertising platform spend", "Paid separately by the client"],
            ]} />
          </ScrollReveal>
        </div>

        {/* PART B */}
        <div className="up-part" id="up-b">
          <ScrollReveal>
            <PartHead n="B" title="Performance Marketing Plan for Massive Reality" sub="By Social Musketeers" />

            <h4 className="up-h4">1. Marketing approach</h4>
            <p className="up-p">
              We will manage performance marketing for Massive Reality&apos;s projects, focusing on
              generating relevant enquiries through paid advertising. Each project gets its own
              campaign strategy based on its location, target audience and requirements. Individual
              project pages on the website will be used as landing pages for campaigns, so potential
              buyers can explore a project and submit an enquiry directly.
            </p>

            <h4 className="up-h4">2. Scope of work</h4>
            <Rows rows={[
              ["Campaign Strategy", "Plan advertising strategies for each project."],
              ["Paid Advertising", "Set up and manage campaigns on Google Ads and Meta Ads, as required."],
              ["Landing Pages", "Use dedicated project pages to direct traffic and capture enquiries."],
              ["Optimisation", "Monitor campaigns and improve targeting and performance."],
              ["Reporting", "Share campaign results and recommendations for improvement."],
            ]} />

            <h4 className="up-h4">3. Monthly cost</h4>
            <div className="up-cost">
              <div>
                <p className="lbl">Performance marketing</p>
                <p className="note">
                  Indicative fee for managing performance marketing across approximately 5 to 8
                  projects. It may vary with the number of active projects and campaign workload,
                  and any change will be discussed beforehand. Advertising spend is separate and
                  paid directly by the client.
                </p>
              </div>
              <div className="amt">₹60,000<em>/ month</em></div>
            </div>

            <div className="up-two" style={{ marginTop: 28 }}>
              <div className="up-box">
                <h5>4. Creative requirements</h5>
                <p className="up-p" style={{ margin: "6px 0 0" }}>
                  We will need ad creatives, images, videos and project information from your team
                  to plan and run the campaigns effectively.
                </p>
              </div>
              <div className="up-box">
                <h5>5. Organic marketing (optional)</h5>
                <p className="up-p" style={{ margin: "6px 0 0" }}>
                  Alongside paid campaigns, we can recommend SEO, content and social media to
                  strengthen Massive Reality&apos;s overall digital presence. These are discussed
                  separately, based on your requirements.
                </p>
              </div>
            </div>
            <p className="up-note">
              Our focus: a structured marketing approach for each project, continuously improving
              campaign performance, and generating relevant property enquiries.
            </p>
          </ScrollReveal>
        </div>

        {/* PART C */}
        <div className="up-part" id="up-c">
          <ScrollReveal>
            <PartHead n="C" title="Website Development for Massive Reality" sub="Website development quotation · Prepared by Social Musketeers" />
            <p className="up-p">
              For Siddhant bhai and Vedant bhai: we will design and develop a modern,
              high-performance website for Massive Reality using Next.js and React. The focus is a
              premium digital experience with smooth navigation, dedicated project pages, and a
              scalable foundation for growing into a full real estate portal.
            </p>

            <h4 className="up-h4">1. What is included</h4>
            <Rows rows={[
              ["UI/UX Design", "Modern design, clean layouts and user-friendly navigation."],
              ["Frontend Development", "Responsive development using Next.js and React."],
              ["Project Pages", "Approximately 15 dedicated project landing pages, each with its own URL."],
              ["Project Details", "Sections for images, amenities, location and project highlights. These can also be used as separate landing pages."],
              ["Enquiry Forms", "Forms to capture enquiries from prospective buyers."],
              ["First-time SEO Setup", "Search-friendly URLs, metadata and sitemap configuration."],
              ["Performance", "Image optimisation, faster loading and responsive layouts."],
              ["Testing and Deployment", "Device testing, production deployment and launch support."],
              ["Scalability", "A technical foundation for future website and portal enhancements."],
            ]} />

            <h4 className="up-h4">2. Project landing pages</h4>
            <p className="up-p">
              About 15 individual project landing pages, each with its own URL, so they are easy to
              share with buyers or use in project-specific campaigns. Pages follow a consistent
              design while each project shows its own details, images, amenities and enquiry options.
            </p>

            <div className="up-two" style={{ marginTop: 24 }}>
              <div className="up-box">
                <h5>3. Website development cost</h5>
                <div className="big">₹1,30,000<em>one-time</em></div>
                <List items={[
                  "Website design and UI/UX",
                  "Next.js and React development",
                  "Approximately 15 project landing pages",
                  "Project information and enquiry forms",
                  "Basic technical SEO and performance optimisation",
                  "Testing and website deployment",
                ]} />
              </div>
              <div className="up-box">
                <h5>4. Monthly website maintenance</h5>
                <div className="big">₹20,000<em>/ month</em></div>
                <List items={[
                  "Routine maintenance and technical support",
                  "Minor fixes and content updates",
                  "Updates to existing project pages",
                  "Up to two new project pages per month, following the existing design and structure",
                ]} />
              </div>
            </div>
            <p className="up-note">
              Project pages beyond two in a month are charged separately. Major redesigns and new
              features are quoted separately before execution.
            </p>

            <h4 className="up-h4">5. Future scalability</h4>
            <p className="up-p" style={{ marginTop: 0 }}>
              The website is built to support future expansion, scoped separately when needed:
            </p>
            <List items={[
              "Advanced project filters",
              "Centralised project management",
              "CRM integration",
              "Additional real estate portal features",
            ]} />

            <h4 className="up-h4">6. Commercial summary</h4>
            <Rows rows={[
              ["Website development", "₹1,30,000 one-time"],
              ["Initial project pages", "Approximately 15 included"],
              ["Testing and deployment", "Included"],
              ["Website maintenance", "₹20,000 per month"],
              ["New project additions", "Up to 2 per month included"],
              ["Additional project pages", "Charged separately"],
            ]} />

            <h4 className="up-h4">7. Important notes</h4>
            <List items={[
              "Please provide the required project content and images so we can build the website effectively.",
              "Any additional changes or requirements can be discussed at any time.",
              "Timelines and payment terms will be finalised together before we start.",
            ]} />
          </ScrollReveal>
        </div>

        {/* SUMMARY */}
        <ScrollReveal>
          <div className="up-sum" id="up-summary">
            <h3>Cost Summary at a Glance</h3>
            <div className="up-srow"><span>A · Ganapati Builders<small>Marketing, performance marketing, SEO, maintenance of sites we build</small></span><b>₹1,40,000 / month</b></div>
            <div className="up-srow"><span>B · Massive Reality<small>Performance marketing, approx. 5 to 8 projects (indicative)</small></span><b>₹60,000 / month</b></div>
            <div className="up-srow"><span>C · Massive Reality website<small>Design and development, approx. 15 project pages</small></span><b>₹1,30,000 one-time</b></div>
            <div className="up-srow"><span>C · Massive Reality maintenance<small>Includes up to 2 new project pages per month</small></span><b>₹20,000 / month</b></div>
            <p className="up-foot">
              Advertising platform spend (Google Ads, Meta Ads) is always paid separately by the
              client. Additional websites, landing pages, extra project pages, major redesigns and
              new features are quoted separately before execution.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
