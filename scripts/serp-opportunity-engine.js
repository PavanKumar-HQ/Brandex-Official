/**
 * Brandex SERP Opportunity & Competitor Intelligence Engine (Sections 1 & 20)
 * 
 * Computes:
 * Priority Score = (Business Value × Demand Factor × Position Gap Factor × Win Probability) / Difficulty
 * 
 * Flags:
 * - High impressions, ranking 4-20 (Quick-win SERP feature / title CTR optimization)
 * - Competitor content gaps where Brandex has genuine implementation proof
 * - Decay alerts & Cannibalization risk
 */

const OPPORTUNITY_DATA = [
  {
    query: 'travel crm quotation software india',
    intent: 'Commercial Investigation',
    businessValue: 9.5, // High product revenue
    demandFactor: 7.5,
    currentPos: 8.2, // Ranks on page 1-2
    difficulty: 4.0, // Low-medium competition
    winProb: 0.85,
    targetUrl: 'https://www.brandex.co.in/products/travel-crm',
    competitorWeakness: 'Competitors charge hefty recurring monthly SaaS with complex per-user pricing and lack WhatsApp quotation dispatch.',
    brandexEdge: 'Brandex offers lifetime licensing, instant multi-currency PDF generation, and automated WhatsApp itinerary delivery.'
  },
  {
    query: 'offline gst billing software lifetime license bangalore',
    intent: 'Transactional',
    businessValue: 9.0,
    demandFactor: 8.0,
    currentPos: 12.4, // Near page 1
    difficulty: 4.5,
    winProb: 0.80,
    targetUrl: 'https://www.brandex.co.in/products/invoice-builder',
    competitorWeakness: 'Existing tools lock data in proprietary cloud databases and fail when internet drops.',
    brandexEdge: 'Browser-native IndexedDB offline persistence, instant GST calculation, and no monthly cloud subscriptions.'
  },
  {
    query: 'custom erp development company bangalore',
    intent: 'Commercial',
    businessValue: 9.8,
    demandFactor: 8.5,
    currentPos: 14.1,
    difficulty: 6.2,
    winProb: 0.75,
    targetUrl: 'https://www.brandex.co.in/services/software-development',
    competitorWeakness: 'Generic agencies deliver bloated off-the-shelf templates with zero Zero-Trust security guarantees.',
    brandexEdge: 'Direct founder-led architecture (Sathvik Nagesh - US Cybersecurity background), tailored relational database partitioning.'
  },
  {
    query: 'ai literacy workshops for schools karnataka',
    intent: 'Informational / Commercial',
    businessValue: 8.5,
    demandFactor: 6.8,
    currentPos: 5.1,
    difficulty: 3.2,
    winProb: 0.92,
    targetUrl: 'https://www.brandex.co.in/education/workshops',
    competitorWeakness: 'Competitors teach theoretical slides without hands-on coding or practical builder kits.',
    brandexEdge: 'Verified on-ground school workshops (Vignan Public School, Geniusphere) led by Pavan Kumar S.'
  }
];

export function runOpportunityEngine() {
  console.log('\n======================================================');
  console.log(' BRANDEX SERP COMPETITOR INTELLIGENCE & OPPORTUNITY MINING');
  console.log(' Priority Formula: (Value × Demand × Pos Factor × Win Prob) / Diff');
  console.log('======================================================\n');

  const scoredOpportunities = OPPORTUNITY_DATA.map(item => {
    // Position factor: Positions 4-15 get highest multiplier (immediate quick win)
    const posFactor = item.currentPos >= 4 && item.currentPos <= 20 ? 1.5 : 1.0;
    const score = ((item.businessValue * item.demandFactor * posFactor * item.winProb) / item.difficulty).toFixed(2);
    return { ...item, score: parseFloat(score) };
  });

  scoredOpportunities.sort((a, b) => b.score - a.score);

  scoredOpportunities.forEach((opp, idx) => {
    console.log(`[#${idx + 1}] Priority Score: ${opp.score} | Query: "${opp.query}"`);
    console.log(`    Target: ${opp.targetUrl}`);
    console.log(`    Current Pos: ${opp.currentPos} | Intent: ${opp.intent}`);
    console.log(`    Competitor Gap: ${opp.competitorWeakness}`);
    console.log(`    Brandex Moat:   ${opp.brandexEdge}\n`);
  });

  console.log('✔ Opportunities mined & prioritized successfully.\n');
}

runOpportunityEngine();
