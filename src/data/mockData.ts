/**
 * SiteSage — Human-Centered Jobsite Data Store
 * Grounded in authentic high-rise construction operations, human personnel,
 * trade subcontractors, safety superintendents, and field communications.
 */

export interface WorkerProfile {
  id: string;
  name: string;
  badge: string;
  trade: string;
  subcontractor: string;
  avatar: string;
  foreman: string;
  certifications: string[];
  shiftsIncidentFree: number;
  safetyRating: number;
  status: 'compliant' | 'warning' | 'breach';
  assignedZone: string;
  lastBriefing: string;
}

export const WORKERS: Record<string, WorkerProfile> = {
  'SC-4891': {
    id: 'SC-4891',
    name: 'Marcus "Mack" Vance',
    badge: '#SC-4891',
    trade: 'Journeyman Ironworker (Local 40)',
    subcontractor: 'SteelCorp Heavy Erectors',
    avatar: 'MV',
    foreman: 'Frank Delgado (Radio Ch 4)',
    certifications: ['OSHA 30', 'Rigging & Signaling Level II', 'Fall Arrest 100% Tie-Off'],
    shiftsIncidentFree: 84,
    safetyRating: 94.2,
    status: 'breach',
    assignedZone: 'Sector B — Crane #2 Staging',
    lastBriefing: 'Today 06:30 AM (Toolbox Talk #142)',
  },
  'AC-0924': {
    id: 'AC-0924',
    name: 'Elena Rostova-Chen',
    badge: '#AC-0924',
    trade: 'Lead Concrete Finisher',
    subcontractor: 'Apex Concrete Ltd.',
    avatar: 'EC',
    foreman: 'Ray Kowalski (Radio Ch 2)',
    certifications: ['OSHA 30', 'Silica Dust Awareness', 'Laser Grade Specialist'],
    shiftsIncidentFree: 192,
    safetyRating: 99.1,
    status: 'compliant',
    assignedZone: 'North Tower — Level 08 Deck',
    lastBriefing: 'Today 06:30 AM (Toolbox Talk #142)',
  },
  'MC-1102': {
    id: 'MC-1102',
    name: 'Jorge "Kiko" Reyes',
    badge: '#MC-1102',
    trade: 'Certified Crane Rigger',
    subcontractor: 'Metro Crane Specialists',
    avatar: 'JR',
    foreman: 'Bill Henderson (Operator)',
    certifications: ['NCCCO Certified Rigger', 'Signalperson', 'Overhead Load Specialist'],
    shiftsIncidentFree: 140,
    safetyRating: 96.5,
    status: 'compliant',
    assignedZone: 'Sector B — Crane Swing Radius',
    lastBriefing: 'Today 06:30 AM (Toolbox Talk #142)',
  },
  'HE-3011': {
    id: 'HE-3011',
    name: 'Darnell Washington',
    badge: '#HE-3011',
    trade: 'High-Voltage Journeyman Electrician',
    subcontractor: 'HighRise Electrical',
    avatar: 'DW',
    foreman: 'Dave Vance, PE (Superintendent)',
    certifications: ['NFPA 70E Arc Flash Certified', 'OSHA 30', 'Lockout/Tagout Lead'],
    shiftsIncidentFree: 210,
    safetyRating: 98.7,
    status: 'compliant',
    assignedZone: 'Sector E — Substation Enclosure',
    lastBriefing: 'Today 06:30 AM (Toolbox Talk #142)',
  }
};

export const RADIO_DISPATCH_LOG = [
  {
    id: 'rad-1',
    timestamp: '14:44:02',
    channel: 'CH 04 (Safety & Rigging)',
    speaker: 'Sarah Chen, CSP',
    role: 'Lead Safety Officer',
    text: 'Confirmed on Cam 04. Vance has his helmet buckled and tied off to static line. Violation cleared.',
    type: 'safe'
  },
  {
    id: 'rad-2',
    timestamp: '14:43:35',
    channel: 'CH 04 (Safety & Rigging)',
    speaker: 'Frank Delgado',
    role: 'SteelCorp Rigging Foreman',
    text: 'Copy that Sarah. He was grabbing the tagline, grabbed a spare lid off the gangbox right now. He is tied off.',
    type: 'action'
  },
  {
    id: 'rad-3',
    timestamp: '14:43:22',
    channel: 'CH 04 (Safety & Rigging)',
    speaker: 'Sarah Chen, CSP',
    role: 'Lead Safety Officer',
    text: 'Delgado, Crane 2 staging zone — your rigger Vance just walked into the swing radius without his lid. Flag him down.',
    type: 'critical'
  },
  {
    id: 'rad-4',
    timestamp: '14:38:50',
    channel: 'CH 02 (Tower Operations)',
    speaker: 'Dan Vance, PE',
    role: 'Site General Superintendent',
    text: 'Attention all crews on Level 12: concrete boom pump arriving at East Bay in 10 minutes. Keep swing corridor clear.',
    type: 'info'
  },
  {
    id: 'rad-5',
    timestamp: '14:30:12',
    channel: 'CH 04 (Safety & Rigging)',
    speaker: 'Bill Henderson',
    role: 'Liebherr 280 Crane Operator',
    text: 'Safety desk, wind gusts hitting 22 knots at 180 feet. Pausing heavy beam picks for 15 minutes to let gust pass.',
    type: 'warning'
  }
];

export const TOOLBOX_BRIEFING = {
  date: 'September 29, 2026',
  shift: 'Shift 01 (Day Crew: 06:00 – 14:30)',
  topic: 'OSHA 1926.1424 — Work Area Control around Crane Swing Radii',
  lead: 'Ray Kowalski (Apex) & Frank Delgado (SteelCorp)',
  supervisorSignOff: 'Sarah Chen, CSP (Lead Safety Officer)',
  signOffTime: '06:45 AM EST',
  attendeesCount: 48,
  absenteesCount: 0,
  keyHazards: [
    'Liebherr Tower Crane #2 picking 3.5-ton precast girders at Sector B.',
    'Wind advisory: gusts expected up to 26 knots after 13:30; jib rotation radius restricted.',
    '100% Tie-Off mandatory on all floor deck perimeters above Level 06.'
  ],
  weather: 'Overcast, 64°F, Barometric Pressure 29.92 inHg, Wind 14kt NW'
};

export const SITES = [
  { id: 'north-tower',  name: 'North Tower High-Rise', location: 'Zone A', cameras: 8, status: 'operational', workers: 42 },
  { id: 'south-tower',  name: 'South Tower Core',      location: 'Zone B', cameras: 6, status: 'operational', workers: 36 },
  { id: 'sector-b',     name: 'Sector B — Crane Yard', location: 'Zone B', cameras: 5, status: 'alert',       workers: 28 },
  { id: 'crane-zone',   name: 'Crane #2 Exclusion',    location: 'Zone C', cameras: 3, status: 'restricted',  workers: 14 },
  { id: 'material-yard',name: 'East Material Laydown', location: 'Zone D', cameras: 4, status: 'operational', workers: 22 },
];

export const CAMERAS = [
  { id: 'CAM-01', name: 'North Tower — Level 08 Deck', sector: 'A', status: 'online',  res: '1080p', fps: 30, compliance: 97, incidents: 1, lead: 'Elena Chen (Apex)' },
  { id: 'CAM-02', name: 'North Tower — Core Shaft 12',  sector: 'A', status: 'online',  res: '4K',    fps: 30, compliance: 94, incidents: 2, lead: 'Tomás Rivera (HighRise)' },
  { id: 'CAM-03', name: 'Sector B — Main Staging Gate', sector: 'B', status: 'online',  res: '1080p', fps: 25, compliance: 88, incidents: 4, lead: 'Jorge Reyes (Metro)' },
  { id: 'CAM-04', name: 'Sector B — Crane #2 Radius',   sector: 'B', status: 'online',  res: '4K',    fps: 30, compliance: 81, incidents: 7, lead: 'Frank Delgado (SteelCorp)' },
  { id: 'CAM-05', name: 'South Tower — Gate C Access',  sector: 'C', status: 'online',  res: '720p',  fps: 15, compliance: 96, incidents: 1, lead: 'Officer Jackson (Security)' },
  { id: 'CAM-06', name: 'Loading Bay — East Scissor',   sector: 'D', status: 'warning', res: '1080p', fps: 12, compliance: 72, incidents: 3, lead: 'Ray Kowalski (Apex)' },
  { id: 'CAM-07', name: 'Material Yard — North Storage',sector: 'D', status: 'offline', res: '1080p', fps:  0, compliance:  0, incidents: 0, lead: 'Unassigned' },
  { id: 'CAM-08', name: 'Perimeter Fence — South Gate', sector: 'E', status: 'online',  res: '4K',    fps: 30, compliance: 99, incidents: 0, lead: 'Darnell Washington (HighRise)' },
];

export const INCIDENTS = [
  {
    id: 'INC-0248',
    type: 'No Hard Hat Detected',
    severity: 'critical',
    camera: 'CAM-04',
    cameraName: 'Sector B — Crane #2 Swing Radius',
    sector: 'Sector B',
    location: 'Sector B / Grid Line 4B',
    time: '14:43:17',
    timeDisplay: '02:43 PM',
    workerId: 'SC-4891',
    workerName: 'Marcus "Mack" Vance',
    workerTrade: 'Journeyman Ironworker (Local 40)',
    workerSubcontractor: 'SteelCorp Heavy Erectors',
    foreman: 'Frank Delgado (Radio Ch 4)',
    confidence: 98,
    status: 'investigating',
    assignee: 'Sarah Chen, CSP',
    aiState: 'ai-detected',
    rule: 'OSHA 1926.100(a) Head Protection',
    description: 'Ironworker Marcus Vance entered active crane pick zone without ANSI Z89.1 hard hat. Head protection was left on adjacent gangbox while securing tagline.',
    supervisorNotes: 'Radioed Foreman Delgado on Ch 4 at 14:43:22. Delgado signaled Vance immediately; replacement helmet donned at 14:43:48. Tool box talk refresher noted.',
    timeline: [
      { event: 'Computer Vision Flag', time: '14:43:17', type: 'critical', note: 'Exposed hair & head geometry detected — 98% confidence' },
      { event: 'OSHA Rule Triggered', time: '14:43:18', type: 'critical', note: 'OSHA 1926.100(a) Head Protection triggered' },
      { event: 'Radio Dispatch Dispatched', time: '14:43:22', type: 'primary', note: 'Safety Officer S. Chen called Foreman Delgado on Ch 4' },
      { event: 'Field Correction Completed', time: '14:43:48', type: 'safe', note: 'Delgado verified Marcus Vance donned hard hat from gangbox' },
    ]
  },
  {
    id: 'INC-0247',
    type: 'Exclusion Geofence Breach',
    severity: 'critical',
    camera: 'CAM-03',
    cameraName: 'Sector B — Main Staging Gate',
    sector: 'Sector B',
    location: 'Sector B / Crane Swing Perimeter',
    time: '14:38:44',
    timeDisplay: '02:38 PM',
    workerId: 'MC-1102',
    workerName: 'Jorge "Kiko" Reyes',
    workerTrade: 'Certified Crane Rigger',
    workerSubcontractor: 'Metro Crane Specialists',
    foreman: 'Bill Henderson (Operator)',
    confidence: 94,
    status: 'investigating',
    assignee: 'J. Reyes',
    aiState: 'ai-detected',
    rule: 'OSHA 1926.1424 Work Area Control',
    description: 'Rigger entered crane barricaded swing radius prior to operator horn acknowledge signal.',
    supervisorNotes: 'Rigger was setting outrigger timber pads. Operator verified visual contact, but perimeter protocol was breached. Briefed on horn protocol.',
    timeline: [
      { event: 'Geofence Incursion Flagged', time: '14:38:44', type: 'critical', note: 'Worker crossed 6.5m exclusion polygon — 94% confidence' },
      { event: 'Horn Warning Dispatched', time: '14:38:46', type: 'primary', note: 'Operator Henderson sounded crane horn' },
      { event: 'Assigned to Superintendent', time: '14:40:02', type: 'primary', note: 'Assigned to Dan Vance for clearance' },
    ]
  },
  {
    id: 'INC-0246',
    type: 'No Safety Vest (Class 2)',
    severity: 'high',
    camera: 'CAM-01',
    cameraName: 'North Tower — Level 08 Deck',
    sector: 'Sector A',
    location: 'North Tower / Deck Perimeter',
    time: '14:31:05',
    timeDisplay: '02:31 PM',
    workerId: 'AC-0924',
    workerName: 'Elena Rostova-Chen',
    workerTrade: 'Lead Concrete Finisher',
    workerSubcontractor: 'Apex Concrete Ltd.',
    foreman: 'Ray Kowalski (Radio Ch 2)',
    confidence: 91,
    status: 'resolved',
    assignee: 'Ray Kowalski',
    aiState: 'confirmed',
    rule: 'ANSI/ISEA 107-2020 High-Vis Standard',
    description: 'Worker removed outer fluorescent vest while setting heavy screed rails due to heat. Put vest back on immediately upon foreman notice.',
    supervisorNotes: 'Kowalski verified Elena donned lightweight mesh Class 2 vest. Resolved at 14:34:10.',
    timeline: [
      { event: 'Vision Ingestion Flag', time: '14:31:05', type: 'critical', note: 'Dark shirt detected without high-vis retroreflective tape — 91%' },
      { event: 'Foreman Handled', time: '14:32:10', type: 'primary', note: 'Foreman Kowalski instructed worker to don vest' },
      { event: 'Resolved & Signed Off', time: '14:34:10', type: 'safe', note: 'Class 2 vest confirmed on camera stream' }
    ]
  },
  {
    id: 'INC-0245',
    type: 'Heavy Equipment Proximity Buffer',
    severity: 'high',
    camera: 'CAM-06',
    cameraName: 'Loading Bay — East Scissor',
    sector: 'Sector D',
    location: 'East Bay / Forklift Corridor',
    time: '14:28:30',
    timeDisplay: '02:28 PM',
    workerId: 'HE-3011',
    workerName: 'Darnell Washington',
    workerTrade: 'High-Voltage Electrician',
    workerSubcontractor: 'HighRise Electrical',
    foreman: 'Dan Vance, PE',
    confidence: 88,
    status: 'acknowledged',
    assignee: 'R. Santos',
    aiState: 'confirmed',
    rule: 'OSHA 1926.602 Material Handling Safety',
    description: 'Electrician was measuring cable tray clearance within 2.8 meters of operating CAT 926M wheel loader.',
    supervisorNotes: 'Loader operator made eye contact and stopped bucket until Darnell cleared the corridor. Buffer restored.',
    timeline: [
      { event: 'Proximity Bubble Breach', time: '14:28:30', type: 'critical', note: 'Pedestrian within 3.0m vehicle boundary — 88%' },
      { event: 'Operator Paused Engine', time: '14:28:45', type: 'primary', note: 'Vehicle telematics confirm speed 0 mph' },
      { event: 'Acknowledged', time: '14:30:15', type: 'safe', note: 'Acknowledged by R. Santos (Safety Tech)' }
    ]
  }
];

export const STATS = {
  camerasOnline: 22,
  camerasTotal: 27,
  activeRisks: 4,
  criticalIncidents: 2,
  compliance: 96.4,
  workersOnSite: 142,
  shiftHandoffTime: '14:30 EST',
  leadSafetyOfficer: 'Sarah Chen, CSP',
  superintendent: 'Dan Vance, PE',
};
