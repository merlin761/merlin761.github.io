export const bio = [
  "IT Specialist & Jr. Security Operations Analyst six years of experience across IT, customer service, and security operations, with a Computer Science background focused on secure, scalable automation.",
  "Specialized in building automated Python-based workflows that eliminate repetitive manual tasks and improve system efficiency, using tools like SentinelOne, Splunk, Wireshark, and Nmap to support active defense and continuous monitoring.",
  "Bilingual (English & Spanish), CompTIA Security+/Network+/CySA+/A+ certified, and always looking to harden systems and streamline security operations through code.",
  "When I'm not automating defenses or locking down systems, you'll find me gaming or putting in work at the gym.",
];

export const skills = [
  "Python",
  "Windows",
  "Linux",
  "macOS",
  "Active Directory",
  "API Integrations",
  "CI/CD",
  "SentinelOne",
  "Splunk",
  "Wireshark",
  "Nmap",
  "MITRE ATT&CK",
  "OWASP Top 10",
  "Automated Workflows",
  "Defense in Depth",
  "DHCP",
  "VirtualBox",
];

export const projects = [
  {
    title: "C/C++ Secure Development Policy",
    description:
      "A detailed breakdown of C/C++ secure coding standards covering authentication, encryption, and auditing principles, clarifying the hierarchy of policies and guidelines for secure software development.",
    tags: [
      "Secure Coding", 
      "C/C++", 
      "DevSecOps", 
      "Policy", 
      "Threat Modeling", 
      "Secure SDLC", 
      "Memory Safety", 
      "Authentication Protocols"
    ],
    repo: "https://github.com/merlin761/Secure_Coding",
    demo: "",
    icon: "fa-solid fa-shield-halved",
  },
  {
    title: "Trip Planner — Full-Stack Web App",
    description:
      "Built a full-stack Trip Planner application with secure coding practices at every layer LS/HTTPS encryption in transit, input validation, sanitized error handling, and environment-variable-protected database credentials across an Angular SPA, Node.js/Express API, and MongoDB.",
    tags: [
      "Secure Coding", 
      "TLS/HTTPS", 
      "Angular", 
      "Node.js", 
      "MongoDB", 
      "Secrets Management", 
      "SAST / DAST", 
      "Data in Transit Encryption", 
      "API Security", 
      "TLS / SSL"
    ],
    repo: "https://github.com/merlin761/Full_Stack_Development",
    demo: "",
    icon: "fa-solid fa-route",
  },
  {
    title: "AI Maze Solver — Q-Learning Agent",
    description:
      "Implemented a Q-learning algorithm to train an AI agent through repeated exploration and exploitation cycles, applying the same responsible design mindset used in security work safe, predictable behavior over unchecked trial and error.",
    tags: ["Python", "AI", "Reinforcement Learning", "Responsible Design"],
    repo: "https://github.com/merlin761/Current-Emerging-Trends-in-CS",
    demo: "",
    icon: "fa-solid fa-brain",
  },
  {
    title: "Data Structures & Algorithm Design",
    description:
      "Analyzed and designed core data structures and algorithms using pseudocode first planning the same efficiency and performance mindset that keeps systems fast, stable, and resistant to resource-exhaustion attacks.",
    tags: ["Data Structures", "Algorithms", "Performance", "Analysis"],
    repo: "https://github.com/merlin761/DSA-Analysis-Design",
    demo: "",
    icon: "fa-solid fa-diagram-project",
  },
  {
    title: "Software QA & Test Automation",
    description:
      "Designed and executed unit and requirements-based tests with 90%+ coverage, specifically validating against incorrect and unexpected inputs treating every test as a chance to catch a vulnerability before it shipped.",
    tags: [
      "Unit Testing", 
      "Input Validation", 
      "Test Coverage", 
      "Secure Coding", 
      "Dynamic Application Security Testing (DAST)", 
      "Vulnerability Assessment", 
      "Fuzz Testing"
    ],
    repo: "https://github.com/merlin761/Software-Testing-Quality-Assurance",
    demo: "",
    icon: "fa-solid fa-vial",
  },
  {
    title: "Zero Trust & DevSecOps Security Policy",
    description:
      "Wrote a cybersecurity policy applying DevSecOps and Zero Trust principles covering risk and cost analysis, AAA authentication, and encryption at rest, in transit, and in use aligned with NIST, ISO 27001, and CIS frameworks.",
    tags: [
      "DevSecOps", 
      "Zero Trust", 
      "Risk Analysis", 
      "NIST/ISO 27001", 
      "IAM", 
      "Network Segmentation", 
      "Cryptography", 
      "Data at Rest Encryption", 
      "Micro-segmentation"
    ],
    repo: "https://github.com/merlin761/Software_Security",
    demo: "",
    icon: "fa-solid fa-lock",
  },
];

export const experience = [
  {
    title: "CyberTrust",
    duration: "March 2026 – Present",
    subtitle: "SOC Analyst Intern",
    details: [
      "Triage and escalate IT security issues via detailed support tickets troubleshooting endpoint capacity warnings, resolving user password lockouts, and investigating suspicious login attempts to ensure continuous system availability and prevent unauthorized access.",
      "Manage and monitor 1,000+ endpoints, escalating verified threats through client ticketing systems and email to enforce security standards and prevent data breaches for Massachusetts municipalities and non-profit organizations.",
      "Develop Python scripts using SentinelOne's Management API to automate collection and aggregation of threat detection and vulnerability data, cutting Quarterly Business Review prep time by over 80% (from 2 hours to 20 minutes per client).",
      "Hardened internal tools by replacing plaintext API key storage with an encrypted, OS-native credential vault, and integrated Microsoft Azure 2FA via custom Python code to enforce NIST, CIS, and FISMA standards.",
    ],
    tags: ["Python", "SentinelOne", "Azure 2FA", "NIST", "CIS", "FISMA"],
    icon: "shield-halved",
  },
  {
    title: "Per Scholas",
    duration: "July 2025 – September 2025",
    subtitle: "Cybersecurity Training Program",
    details: [
      "Configured and secured LAN infrastructure including switch configuration, VLAN segmentation, DHCP/DNS setup, and basic routing to isolate sensitive traffic and reduce the attack surface gaining hands-on experience with enterprise-grade network segmentation and defense.",
    ],
    tags: ["LAN Security", "VLAN", "DHCP/DNS", "Network Defense"],
    icon: "network-wired",
  },
  {
    title: "SITEL (Express Scripts)",
    duration: "October 2021 – April 2023",
    subtitle: "CPA 2",
    details: [
      "Resolved 90+ daily inbound customer support level-2 cases in a high-volume call center regarding pharmacy benefits and user access, achieving a 99% first call resolution rate and significantly reducing repeat contact.",
      "Diagnosed technical issues such as account setups and password resets, minimizing tier two escalations and streamlining the support workflow.",
      "Documented all interactions within internal ticketing systems, accelerating issue turnaround times and ensuring strict adherence to HIPAA compliance standards.",
    ],
    tags: ["Customer Support", "HIPAA", "Ticketing Systems"],
    icon: "headset",
  },
];

export const education = [
  {
    title: "B.S. in Computer Science, Software Engineering Concentration",
    duration: "2025",
    subtitle: "Southern New Hampshire University",
    details: [
      "Dean's List, President's List",
      "Coursework: Development Lifecycle Automation QA, Secure Coding, Software Security, DevSecOps",
    ],
    tags: [],
    icon: "graduation-cap",
  },
];

export const certifications = [
  "CompTIA Security+",
  "CompTIA Network+",
  "CompTIA CySA+",
  "CompTIA A+",
  "Splunk",
];

export const contact = [
  {
    label: "merlina000@outlook.com",
    link: "mailto:merlina000@outlook.com",
    icon: "fa-solid fa-envelope",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/merlinmtech/",
    icon: "fa-brands fa-linkedin",
  },
  {
    label: "GitHub",
    link: "https://github.com/merlin761",
    icon: "fa-brands fa-github",
  },
];

export const footer = [
  {
    label: "copyright-text",
    data: ["Merlin Martinez · IT Specialist & Jr. Security Operations Engineer"],
  },
];
