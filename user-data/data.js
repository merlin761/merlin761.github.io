export const bio = [
  "IT Specialist & Jr. Security Operations Analyst with six years of experience across IT, customer service, and security operations, with a Computer Science background focused on secure, scalable automation.",
  "I specialize in building automated Python based workflows that eliminate repetitive manual tasks and improve system efficiency, using tools like SentinelOne, Splunk, Wireshark, and Nmap to support active defense and continuous monitoring.",
  "Bilingual (English & Spanish), CompTIA A+/Network+/Security+/CySA+ certified, and always looking to harden systems and streamline security operations through code.",
  "When I'm not automating defenses or locking down systems, you'll find me gaming or putting in work at the gym.",
];

export const skills = [
  "Python",
  "DevSecOps ",
  "Windows",
  "Linux",
  "macOS",
  "Active Directory",
  "API Integrations",
  "CI/CD",
  "SentinelOne",
  "Wireshark",
  "MITRE ATT&CK",
  "OWASP Top 10",
  "Automated Workflows",
  "VirtualBox",
];

export const projects = [
  {
    title: "Artemis Financial Secure Application",
    description:
      "Hardened a financial web application by configuring TLS/SSL HTTPS encryption, refactoring insecure key storage, and executing OWASP dependency scans. Resulted in complete remediation of source code vulnerabilities and full alignment with financial data protection standards.",
    tags: ["Application Security", "TLS/SSL", "OWASP", "Vulnerability Remediation"],
    repo: "https://github.com/merlin761/artemis-financial",
    demo: "",
    icon: "fa-solid fa-lock",
  },
  {
    title: "Enterprise Secure Development Framework",
    description:
      "Engineered an enterprise secure software development framework incorporating DevSecOps principles, Zero Trust architecture, and AAA controls. Successfully reduced attack surfaces during the design phase while aligning organizational security policy with NIST and ISO 27001 compliance standards.",
    tags: ["DevSecOps", "Zero Trust", "NIST / ISO 27001", "Risk Mitigation"],
    repo: "https://github.com/merlin761/cs405",
    demo: "",
    icon: "fa-solid fa-file-shield",
  },
  {
    title: "Automated Security Testing & QA",
    description:
      "Developed automated unit testing suites and rigorous input validation protocols to catch edge-case errors and unvalidated inputs early in the SDLC. Achieved over 90% code coverage, eliminating injection threats and logical flaws before production deployment.",
    tags: ["Unit Testing", "QA", "Input Validation", "DevSecOps"],
    repo: "https://github.com/merlin761/cs320",
    demo: "",
    icon: "fa-solid fa-list-check",
  },
  {
    title: "CS 465 Secured MEAN Stack Application",
    description:
      "Built a full-stack Single Page Application (SPA) using MongoDB, Express, Angular, and Node.js, featuring RESTful APIs secured with JSON Web Tokens (JWT). Ensured robust stateless authentication and protected backend endpoints against unauthorized data manipulation.",
    tags: ["MEAN Stack", "REST API", "JWT Security", "NoSQL"],
    repo: "https://github.com/merlin761/cs465",
    demo: "",
    icon: "fa-solid fa-plane-departure",
  }
];

export const experience = [
  {
    title: "CyberTrust",
    duration: "March 2026 – Present",
    subtitle: "SOC Analyst Intern",
    details: [
      "Triage and escalate IT security issues via detailed support tickets  troubleshooting endpoint capacity warnings, resolving user password lockouts, and investigating suspicious login attempts to ensure continuous system availability and prevent unauthorized access.",
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
      "Configured and secured LAN infrastructure including switch configuration, VLAN segmentation, DHCP/DNS setup, and basic routing to isolate sensitive traffic and reduce the attack surface gaining hands-on experience with enterprise grade network segmentation and defense.",
    ],
    tags: ["LAN Security", "VLAN", "DHCP/DNS", "Network Defense"],
    icon: "network-wired",
  },
  {
    title: "SITEL (Express Scripts)",
    duration: "October 2021 – April 2023",
    subtitle: "CPA 2",
    details: [
      "Resolved 90+ daily inbound customer support level-2 cases in a high volume call center regarding pharmacy benefits and user access, achieving a 99% first call resolution rate and significantly reducing repeat contact.",
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
  "CompTIA A+",
  "CompTIA Network+",
  "CompTIA Security+",
  "CompTIA CySA+",
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
    data: ["Merlin Martinez · IT Specialist & Jr. Security Operations Analyst"],
  },
];
