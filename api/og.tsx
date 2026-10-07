import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title")?.slice(0, 110) || "Next-Gen Software & Digital Engineering";
    const category = searchParams.get("category")?.toUpperCase() || "BRANDEX ENGINEERING";
    const description = searchParams.get("description")?.slice(0, 140) || searchParams.get("tagline")?.slice(0, 140) || "High-Performance Software, AI Automation & Digital Systems";
    const author = searchParams.get("author") || null;
    const badge = searchParams.get("badge") || null;

    // Calculate dynamic title font size based on length
    const titleFontSize = title.length > 70 ? "50px" : title.length > 45 ? "58px" : "68px";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#030712",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.04) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.04) 2%, transparent 0%)",
            backgroundSize: "60px 60px",
            padding: "60px 70px",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient Lighting Gradients */}
          <div
            style={{
              position: "absolute",
              top: "-150px",
              right: "-150px",
              width: "550px",
              height: "550px",
              background: "radial-gradient(circle, rgba(59, 130, 246, 0.28) 0%, rgba(99, 102, 241, 0.12) 50%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-200px",
              left: "-150px",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 65%)",
              borderRadius: "50%",
            }}
          />

          {/* Top Bar: Brand Logo & Category Pill */}
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 10,
            }}
          >
            {/* Brand Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "26px",
                  fontWeight: 900,
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
                }}
              >
                B
              </div>
              <div
                style={{
                  display: "flex",
                  color: "#ffffff",
                  fontSize: "32px",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                }}
              >
                BRANDEX<span style={{ color: "#3b82f6" }}>.</span>
              </div>
            </div>

            {/* Category / Badge Chip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                borderRadius: "9999px",
                backgroundColor: "rgba(59, 130, 246, 0.12)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                color: "#60a5fa",
                fontSize: "14px",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#60a5fa",
                }}
              />
              {badge || category}
            </div>
          </div>

          {/* Center Main Content Area */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "1040px",
              zIndex: 10,
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            {/* Main Headline */}
            <div
              style={{
                display: "flex",
                fontSize: titleFontSize,
                fontWeight: 900,
                color: "#f8fafc",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              {title}
            </div>

            {/* Subhead / Excerpt */}
            <div
              style={{
                display: "flex",
                fontSize: "22px",
                color: "#94a3b8",
                lineHeight: 1.45,
                maxWidth: "920px",
              }}
            >
              {description}
            </div>
          </div>

          {/* Bottom Bar: Author/Specs & Verified Organization */}
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {author && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#e2e8f0",
                    fontSize: "17px",
                    fontWeight: 600,
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      border: "1px solid rgba(59, 130, 246, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#93c5fd",
                      fontSize: "14px",
                      fontWeight: 800,
                    }}
                  >
                    {author.slice(0, 1)}
                  </div>
                  <span>{author}</span>
                </div>
              )}
              {!author && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#cbd5e1",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  <span>Software Development</span>
                  <span style={{ color: "#64748b" }}>•</span>
                  <span>AI Automation</span>
                  <span style={{ color: "#64748b" }}>•</span>
                  <span>Cybersecurity</span>
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#94a3b8",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              <span>brandex.co.in</span>
              <span style={{ color: "#475569" }}>|</span>
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(`OG Generation Error: ${e?.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
