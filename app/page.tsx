import Image from "next/image";
import UpdatedProposal from "./UpdatedProposal";

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
      <section style={{ background: "#0a2820", padding: "88px 24px 72px", position: "relative", overflow: "hidden" }}>
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
            Our updated proposal for Ganapati Builders and Massive Reality:
            marketing services, performance marketing and website development,
            with clear scope and simple pricing.
          </p>

          {/* service pills */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {["Performance Marketing","Campaign Strategy","SEO","Website Development","Website Maintenance","Optimisation"].map((s) => (
              <span key={s} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 999, padding: "7px 16px", fontSize: 12, color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-rubik)", letterSpacing: "0.03em" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPDATED PROPOSAL ── */}
      <UpdatedProposal />

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
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>Confidential · Prepared for Ganapati Builders &amp; Massive Reality</p>
            </div>
          </div>
          <p style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 20 }}>
            © 2026 Social Musketeers. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
