/**
 * SiteSage — Mock Data Store
 * Provides realistic construction-site data for the prototype.
 */

export const SITES = [
  { id: 'north-tower',  name: 'North Tower',  location: 'Zone A', cameras: 8, status: 'operational' },
  { id: 'south-tower',  name: 'South Tower',  location: 'Zone B', cameras: 6, status: 'operational' },
  { id: 'sector-b',     name: 'Sector B',     location: 'Zone B', cameras: 5, status: 'alert' },
  { id: 'crane-zone',   name: 'Crane Zone',   location: 'Zone C', cameras: 3, status: 'restricted' },
  { id: 'material-yard',name: 'Material Yard',location: 'Zone D', cameras: 4, status: 'operational' },
];

export const CAMERAS = [
  { id: 'CAM-01', name: 'North Tower — Level 08', sector: 'A', status: 'online',  res: '1080p', fps: 30, compliance: 97, incidents: 1 },
  { id: 'CAM-02', name: 'North Tower — Level 12', sector: 'A', status: 'online',  res: '4K',    fps: 30, compliance: 94, incidents: 2 },
  { id: 'CAM-03', name: 'Sector B — Main Entry',  sector: 'B', status: 'online',  res: '1080p', fps: 25, compliance: 88, incidents: 4 },
  { id: 'CAM-04', name: 'Sector B — Crane Zone',  sector: 'B', status: 'online',  res: '1080p', fps: 30, compliance: 81, incidents: 7 },
  { id: 'CAM-05', name: 'South Tower — Gate',     sector: 'C', status: 'online',  res: '720p',  fps: 15, compliance: 96, incidents: 1 },
  { id: 'CAM-06', name: 'Loading Bay — East',     sector: 'D', status: 'warning', res: '1080p', fps: 12, compliance: 72, incidents: 3 },
  { id: 'CAM-07', name: 'Material Yard — North',  sector: 'D', status: 'offline', res: '1080p', fps:  0, compliance:  0, incidents: 0 },
  { id: 'CAM-08', name: 'Perimeter — South',      sector: 'E', status: 'online',  res: '4K',    fps: 30, compliance: 99, incidents: 0 },
];

export const INCIDENTS = [
  {
    id: 'INC-0248',
    type: 'No Hard Hat',
    severity: 'critical',
    camera: 'CAM-04',
    cameraName: 'Sector B — Crane Zone',
    sector: 'B',
    location: 'North Tower / Sector B',
    time: '14:43:17',
    timeDisplay: '02:43 PM',
    worker: 'TRACK-024',
    confidence: 98,
    status: 'open',
    assignee: null,
    aiState: 'ai-detected',
    rule: 'PPE_HELMET_REQUIRED',
    description: 'Worker detected without hard hat in mandatory PPE zone near active crane operations.',
    timeline: [
      { event: 'AI Detection', time: '14:43:17', type: 'critical', note: 'No helmet detected — 98% confidence' },
      { event: 'Alert Generated', time: '14:43:18', type: 'critical', note: 'Rule PPE_HELMET_REQUIRED triggered' },
      { event: 'Notification Sent', time: '14:43:19', type: 'primary', note: 'Site Supervisor notified via push' },
    ]
  },
  {
    id: 'INC-0247',
    type: 'Restricted Zone Breach',
    severity: 'critical',
    camera: 'CAM-03',
    cameraName: 'Sector B — Main Entry',
    sector: 'B',
    location: 'Sector B / Crane Swing Area',
    time: '14:38:44',
    timeDisplay: '02:38 PM',
    worker: 'TRACK-019',
    confidence: 94,
    status: 'investigating',
    assignee: 'J. Reyes',
    aiState: 'ai-detected',
    rule: 'GEOFENCE_CRANE_ZONE',
    description: 'Unauthorized personnel entered crane swing radius without clearance.',
    timeline: [
      { event: 'AI Detection', time: '14:38:44', type: 'critical', note: 'Geofence breach — 94% confidence' },
      { event: 'Alert Generated', time: '14:38:45', type: 'critical', note: 'GEOFENCE_CRANE_ZONE triggered' },
      { event: 'Assigned to J. Reyes', time: '14:40:02', type: 'primary', note: 'Investigating' },
    ]
  },
  {
    id: 'INC-0246',
    type: 'No Safety Vest',
    severity: 'high',
    camera: 'CAM-01',
    cameraName: 'North Tower — Level 08',
    sector: 'A',
    location: 'North Tower / Level 08',
    time: '14:31:05',
    timeDisplay: '02:31 PM',
    worker: 'TRACK-011',
    confidence: 91,
    status: 'open',
    assignee: null,
    aiState: 'ai-detected',
    rule: 'PPE_VEST_REQUIRED',
    description: 'Worker on Level 08 scaffolding detected without high-visibility safety vest.',
    timeline: [
      { event: 'AI Detection', time: '14:31:05', type: 'critical', note: 'No vest detected — 91% confidence' },
      { event: 'Alert Generated', time: '14:31:06', type: 'critical', note: 'PPE_VEST_REQUIRED triggered' },
    ]
  },
  {
    id: 'INC-0245',
    type: 'Proximity Alert',
    severity: 'high',
    camera: 'CAM-04',
    cameraName: 'Sector B — Crane Zone',
    sector: 'B',
    location: 'Sector B / Crane Zone',
    time: '14:28:30',
    timeDisplay: '02:28 PM',
    worker: 'TRACK-033',
    confidence: 88,
    status: 'acknowledged',
    assignee: 'R. Santos',
    aiState: 'ai-detected',
    rule: 'PROXIMITY_EQUIPMENT_5M',
    description: 'Worker within 5-metre safety radius of active crane machinery.',
    timeline: [
      { event: 'AI Detection', time: '14:28:30', type: 'critical', note: 'Proximity breach — 88% confidence' },
      { event: 'Alert Generated', time: '14:28:31', type: 'critical', note: 'PROXIMITY_EQUIPMENT_5M triggered' },
      { event: 'Acknowledged', time: '14:30:15', type: 'safe', note: 'Acknowledged by R. Santos' },
    ]
  },
  {
    id: 'INC-0244',
    type: 'No Gloves',
    severity: 'medium',
    camera: 'CAM-04',
    cameraName: 'Sector B — Crane Zone',
    sector: 'B',
    location: 'Sector B',
    time: '14:15:22',
    timeDisplay: '02:15 PM',
    worker: 'TRACK-027',
    confidence: 96,
    status: 'resolved',
    assignee: 'M. Chen',
    aiState: 'confirmed',
    rule: 'PPE_GLOVES_MATERIAL_HANDLING',
    description: 'Worker handling materials without protective gloves.',
    timeline: [
      { event: 'AI Detection', time: '14:15:22', type: 'critical', note: 'No gloves — 96% confidence' },
      { event: 'Confirmed by Supervisor', time: '14:17:00', type: 'primary', note: 'Human confirmed violation' },
      { event: 'Worker Notified', time: '14:17:30', type: 'primary', note: 'Worker TRACK-027 radioed' },
      { event: 'Resolved', time: '14:22:05', type: 'safe', note: 'PPE confirmed on by M. Chen' },
    ]
  },
  {
    id: 'INC-0243',
    type: 'Unauthorized Entry',
    severity: 'critical',
    camera: 'CAM-05',
    cameraName: 'South Tower — Gate',
    sector: 'C',
    location: 'South Tower / Gate C',
    time: '14:07:55',
    timeDisplay: '02:07 PM',
    worker: 'UNIDENTIFIED',
    confidence: 97,
    status: 'resolved',
    assignee: 'J. Reyes',
    aiState: 'confirmed',
    rule: 'ACCESS_CONTROL_GATE_C',
    description: 'Unidentified person entered site through Gate C without visible access credentials.',
    timeline: [
      { event: 'AI Detection', time: '14:07:55', type: 'critical', note: 'Unknown person detected — 97% confidence' },
      { event: 'Alert Generated', time: '14:07:56', type: 'critical', note: 'ACCESS_CONTROL_GATE_C triggered' },
      { event: 'Security Dispatched', time: '14:08:30', type: 'primary', note: 'Security team deployed' },
      { event: 'Person Identified', time: '14:12:00', type: 'primary', note: 'Visiting inspector — valid credentials' },
      { event: 'Resolved', time: '14:12:30', type: 'safe', note: 'False positive — credentials verified' },
    ]
  },
];

export const STATS = {
  camerasOnline: 22,
  camerasTotal: 24,
  activeRisks: 7,
  criticalIncidents: 2,
  compliance: 94.2,
  workersOnSite: 142,
};

export const ZONES = [
  { id: 'z-crane',   name: 'Crane Swing Radius', severity: 'critical', camera: 'CAM-04', active: true,  color: '#EF4444', type: 'Restricted' },
  { id: 'z-hv',      name: 'HV Zone — East Grid', severity: 'critical', camera: 'CAM-03', active: true,  color: '#F59E0B', type: 'Danger' },
  { id: 'z-trench',  name: 'Trench Edge Buffer',  severity: 'high',     camera: 'CAM-02', active: true,  color: '#EF4444', type: 'Restricted' },
  { id: 'z-laydown', name: 'Material Laydown',    severity: 'medium',   camera: 'CAM-01', active: false, color: '#3B82F6', type: 'PPE Required' },
  { id: 'z-gate-c',  name: 'Gate C Access Zone',  severity: 'medium',   camera: 'CAM-05', active: true,  color: '#3B82F6', type: 'Entry/Exit' },
];
