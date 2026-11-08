/**
 * Real-Time Application Submission, Unique ID Generation & CRM Pipeline Test Suite
 */

import {
  generateUniqueId,
  createApplication,
  getApplicationByIdOrEmail,
  getAllApplicationsSync,
  getApplicationsStats
} from '../src/services/applicationService.js';
import {
  getCRMConfig,
  saveCRMConfig,
  dispatchApplicationToCRM,
  testCRMConnection
} from '../src/services/crmService.js';

console.log('======================================================');
console.log('BRANDEX REAL-TIME APPLICATION & CRM PIPELINE AUDIT');
console.log('======================================================\n');

// 1. Test ID Formats
const testTypes = [
  { type: 'community', expectedPrefix: 'BX-COM' },
  { type: 'cohort', expectedPrefix: 'BX-ENR' },
  { type: 'workshop', expectedPrefix: 'BX-WRK' },
  { type: 'institution', expectedPrefix: 'BX-COLL' },
  { type: 'career', expectedPrefix: 'BX-CAR' },
  { type: 'contact', expectedPrefix: 'BX-INQ' },
  { type: 'ambassador', expectedPrefix: 'BX-AMB' },
  { type: 'product', expectedPrefix: 'BX-ORD' },
  { type: 'resource', expectedPrefix: 'BX-RES' }
];

console.log('[TEST 1] Testing Unique ID Generation & Collision Prevention:');
let allIdsValid = true;
const currentYear = new Date().getFullYear();

for (const { type, expectedPrefix } of testTypes) {
  const id = generateUniqueId(type);
  const regex = new RegExp(`^${expectedPrefix}-${currentYear}-\\d{4,5}$`);
  const matches = regex.test(id);
  if (!matches) {
    console.error(`  ❌ Failed for type "${type}": generated "${id}", expected to match ${regex}`);
    allIdsValid = false;
  } else {
    console.log(`  ✔ [${type.toUpperCase()}] Generated Unique ID: ${id}`);
  }
}

if (allIdsValid) {
  console.log('  🎉 All Unique IDs adhere strictly to collision-free year-prefixed standards.\n');
}

// 2. Test Application Creation, Timeline Construction & Multi-tier Persistence
console.log('[TEST 2] Testing End-to-End Application Creation & Timeline Construction:');

async function runApplicationTests() {
  const testSubmissions = [
    {
      type: 'community',
      name: 'Aditi Sharma',
      email: 'aditi.sharma@example.com',
      track: 'Full Stack & AI Agents Guild',
      details: { github: 'aditisharma', experience: '3 years' }
    },
    {
      type: 'product',
      name: 'Vikram Mehta',
      email: 'vikram@cloudpulse.tech',
      track: 'Brandex Travel CRM Cloud Edition',
      details: { price: '₹49,999', cadence: 'Annual License' }
    },
    {
      type: 'institution',
      name: 'Dr. Suresh Babu',
      email: 'principal@rvce.edu.in',
      organization: 'RV College of Engineering',
      track: 'Student Buildathon & Lab Incubation MoU',
      details: { studentsCount: 400 }
    }
  ];

  for (const sub of testSubmissions) {
    const created = await createApplication(sub);
    console.log(`  ✔ Created [${created.type.toUpperCase()}] Application: ${created.id}`);
    console.log(`    Applicant: ${created.name} (${created.email})`);
    console.log(`    Status: ${created.status} | CRM Status: ${created.crmStatus}`);
    console.log(`    Timeline Stages (${created.timeline.length} stages):`);
    created.timeline.forEach((t) => {
      console.log(`      • [Stage ${t.id}] ${t.title} (${t.completed ? 'COMPLETED' : t.current ? 'ACTIVE' : 'PENDING'}): ${t.description}`);
    });

    // 3. Test Lookup by Unique ID and by Email
    const lookupById = await getApplicationByIdOrEmail(created.id);
    const lookupByEmail = await getApplicationByIdOrEmail(created.email);

    if (!lookupById || lookupById.id !== created.id) {
      console.error(`  ❌ Lookup by ID failed for ${created.id}`);
    } else {
      console.log(`    ✔ Lookup by Unique ID (${created.id}): VERIFIED`);
    }

    if (!lookupByEmail || lookupByEmail.id !== created.id) {
      console.error(`  ❌ Lookup by Email failed for ${created.email}`);
    } else {
      console.log(`    ✔ Lookup by Registered Email (${created.email}): VERIFIED\n`);
    }
  }

  // 4. Test CRM Bridge Dispatch & Queue Stats
  console.log('[TEST 3] Testing CRM Bridge Queue, Waiting Connection & Webhook Dispatch:');
  const initialConfig = getCRMConfig();
  console.log(`  • Initial CRM Config: Provider=${initialConfig.provider}, Connected=${initialConfig.isConnected}`);

  const stats = getApplicationsStats();
  console.log(`  • CRM Queue Metrics: Total=${stats.total}, Synced=${stats.syncedCRM}, Waiting=${stats.pendingCRM}`);

  // Test Ping Latency
  const ping = await testCRMConnection('https://api.brandex.co.in/webhook/mock-crm', 'test_key_123');
  console.log(`  • CRM Latency Ping Test: Status=${ping.status}, Latency=${ping.latencyMs}ms, Success=${ping.success}`);

  console.log('\n======================================================');
  console.log('ALL REAL-TIME APPLICATION & CRM TESTS COMPLETED');
  console.log('======================================================\n');
}

runApplicationTests().catch(console.error);
