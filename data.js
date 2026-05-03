// ============================================================
//  YOUR PERSONAL DATA — the only file you ever need to edit.
//  Save → git push → Cloudflare Pages redeploys in ~30 sec.
// ============================================================

const DATA = {

  // ── Basic info ──────────────────────────────────────────
  name:       "Waleed Elhadi",
  title:      "Electrical & Control Engineer",
  department: "MSc Engineering & Management (IoT) · PoliTo",
  location:   "Khafji, Saudi Arabia",
  email:      "waleedbakhit@hotmail.com",
  linkedin:   "",   // paste your LinkedIn URL here
  github:     "",   // paste your GitHub URL here

  // ── Hero video ──────────────────────────────────────────
  // Drop your video in assets/ and set the filename below.
  // Leave as "" to hide the video section until you're ready.
  introVideo:  "",
  videoPoster: "",

  // ── Tagline (shows under your name in the hero) ─────────
  tagline: "Building smart electrical systems — from power stations and oil facilities to university campuses and home labs.",

  // ── About ───────────────────────────────────────────────
  // You can use <strong>text</strong> for emphasis.
  about: `<p>I am an Electrical & Control Engineer with over 10 years of field experience across Sudan, Italy, and Saudi Arabia. Most of that time has been at <strong>Khafji Joint Operations</strong> — the ARAMCO and Kuwait Oil Company joint venture — working on the electrical and control infrastructure of a large industrial community: power distribution, LV panels, control circuits, network cabling, and facility systems.</p>

<p>Alongside that, I hold an <strong>MSc in Engineering & Management (IoT) from the Politecnico di Torino</strong>, where I was awarded the EDISU scholarship. For my thesis I built an open-source IoT monitoring system using ESP microcontrollers, MQTT, Raspberry Pi, Node-RED, and MySQL — focused on the sensor and data collection layer for building facility maintenance. The data I collected was subsequently used by another research team for BIM integration studies.</p>

<p>I am drawn to the practical side of engineering: building things that work reliably, diagnosing faults methodically, and finding straightforward solutions to operational problems. Outside of work I continue building — home automation, embedded systems, and infrastructure projects that keep the skills sharp.</p>`,

  // ── Experience ──────────────────────────────────────────
  experience: [
    {
      role:    "Electrical & Control Engineer",
      company: "Al Jalhami Cont. & Trading Co. · KJO, Khafji",
      period:  "January 2022 – Present",
      summary: "Contract HT673CB20 — Community & Business Department, Khafji Joint Operations (ARAMCO / Kuwait Oil JV). Designing and troubleshooting electrical panels, control circuits, and power distribution systems. Load calculations and load balancing across LV systems. Supervising corrective works on automatic, sliding, and rotating door control systems. Managing UTP/FOC network cabling end-to-end: installation, termination, testing, and commissioning.",
    },
    {
      role:    "Lead Design & Planning Engineer",
      company: "LAMDA Sudan Electrical Entity",
      period:  "May 2021 – December 2021",
      summary: "Applied MSc competencies across technical and managerial dimensions of electrical projects. Led planning, cost estimation, and budgeting for medium-to-high voltage overhead transmission lines including transformer and switchgear installation. Involved in renewable energy system design, agricultural irrigation systems, and energy backup solutions.",
    },
    {
      role:    "MSc Researcher & Intern",
      company: "Politecnico di Torino — Turin, Italy",
      period:  "October 2018 – April 2021",
      summary: "Awarded the EDISU scholarship. Thesis: Implementation of an IoT Open-Source Architecture for Building Facility Maintenance. Designed and deployed the sensor and data collection layer at the PoliTO main campus — ESP microcontrollers sending readings via MQTT to a Raspberry Pi broker, processed through Node-RED and stored in MySQL. The collected dataset was subsequently used by another team for BIM integration research.",
    },
    {
      role:    "Maintenance Electrical Engineer",
      company: "SMS — Saad Al-Din Mursi & Sons Co. · KJO, Khafji",
      period:  "September 2016 – September 2018",
      summary: "Contract HT323CB14 — Community & Business Department, Khafji Joint Operations. Maintaining main and sub-power stations, RMUs, and performing preventive maintenance across community villas, hospital, sports stadium, auditorium, street lighting, and fibre optic networks. Supervised technicians, estimated costs, scheduled works, and managed procurement via SAP.",
    },
  ],

  // ── Skills ──────────────────────────────────────────────
  skills: [
    {
      category: "Power & Electrical",
      items: ["LV/MV Power Distribution", "Load Calculations", "Panel Design", "Switchgear", "Preventive Maintenance", "RMU Operations"],
    },
    {
      category: "Control & Networks",
      items: ["Control Circuit Design", "UTP / FOC Cabling", "BMS", "HVAC Control", "Automation Systems", "Node-RED"],
    },
    {
      category: "IoT & Embedded",
      items: ["IoT Architecture", "Raspberry Pi", "Arduino / ESP32", "MQTT", "Home Assistant", "BIM Integration"],
    },
    {
      category: "Software & Tools",
      items: ["AutoCAD", "SAP", "MS Office", "Python", "C++", "SQL", "HTML", "Photoshop"],
    },
    {
      category: "Management",
      items: ["Project Planning", "Cost Estimation", "Budgeting", "Team Supervision", "Procurement", "JSA / JHA"],
    },
  ],

  // ── Education ───────────────────────────────────────────
  education: [
    {
      degree:      "M.Sc. Engineering & Management (IoT)",
      institution: "Politecnico di Torino, Italy",
      year:        "2021",
      note:        "EDISU Scholarship recipient. Thesis: IoT open-source architecture for building facility maintenance — implemented in the PoliTO main campus.",
    },
    {
      degree:      "B.Sc. Electrical Engineering (Power) — Honours",
      institution: "Academy of Engineering Sciences, Khartoum, Sudan",
      year:        "2014",
      note:        "Thesis: Optimal Transmission Line Design.",
    },
  ],

  // ── Certifications ──────────────────────────────────────
  certifications: [
    "Saudi Council of Engineers — Professional Accreditation (No. 284379)",
    "BOSIT — Basic Offshore Safety Training",
    "Google — Foundations of Project Management (Coursera, 2022)",
    "OSHA 30-Hour Safety Certification",
    "Authorized Gas Tester (AGT) — KJO / ISD",
    "Permit to Work (PTW) Issuer/Receiver — KJO / ISD",
    "Hazard Recognition Training — KJO / ISD",
    "H₂S Awareness Training — KJO / ISD",
    "Low Voltage Switchgear — Exemplar Center (24 hrs)",
    "Electrical Installations Design for Buildings & Facilities — Exemplar Center (27 hrs)",
    "Solar Panels Design and Installation",
    "Power Station Training — Sudanese Thermal Generation Co., Khartoum North (2013)",
    "Facility Training — KJO Maintenance & Support Services, Al-Khafji (2014)",
  ],

  // ── Languages ───────────────────────────────────────────
  languages: ["Arabic (native)", "English (advanced)", "Italian (beginner)"],

};
