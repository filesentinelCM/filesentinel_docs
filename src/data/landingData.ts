import { SyncFileEvent, BackupFolder, FeatureItem, PricingPlan, Testimonial, FAQItem, ComparisonPoint } from '../types';

// export const INITIAL_BACKUP_FOLDERS: BackupFolder[] = [
//   {
//     id: 'folder-1',
//     name: 'Academic Research & Thesis',
//     path: '~/Documents/PhD_Thesis_2026',
//     targetDestination: '/Volumes/External_Backup_Drive/Thesis_Backup',
//     fileCount: 342,
//     totalSize: '1.8 GB',
//     status: 'active',
//     lastSynced: 'Just now'
//   },
//   {
//     id: 'folder-2',
//     name: 'Software Code & Projects',
//     path: '~/Developer/Rust_Projects',
//     targetDestination: '192.168.1.120/nas/code_mirror',
//     fileCount: 1280,
//     totalSize: '4.2 GB',
//     status: 'active',
//     lastSynced: '2 seconds ago'
//   },
//   {
//     id: 'folder-3',
//     name: 'Design Assets & Designs',
//     path: '~/Pictures/Client_Deliverables',
//     targetDestination: 'D:/Local_Backup/Designs',
//     fileCount: 184,
//     totalSize: '12.4 GB',
//     status: 'active',
//     lastSynced: '1 minute ago'
//   }
// ];

export const INITIAL_SYNC_EVENTS: SyncFileEvent[] = [
  {
    id: 'evt-101',
    fileName: 'Chapter_3_Methodology_v4.docx',
    fileSize: '482 KB',
    sourcePath: '~/Documents/PhD_Thesis_2026',
    targetPath: '/Volumes/External_Backup_Drive/Thesis_Backup',
    action: 'MODIFIED',
    timestamp: '0.2s ago',
    syncTimeMs: 0.8,
    hash: '0xa4e2...8f11'
  },
  {
    id: 'evt-102',
    fileName: 'data_analysis_script.py',
    fileSize: '12 KB',
    sourcePath: '~/Developer/Rust_Projects',
    targetPath: '192.168.1.120/nas/code_mirror',
    action: 'CREATED',
    timestamp: '1.4s ago',
    syncTimeMs: 0.3,
    hash: '0x3c91...2a04'
  },
  {
    id: 'evt-103',
    fileName: 'temp_cache_file.tmp',
    fileSize: '2.1 MB',
    sourcePath: '~/Documents/PhD_Thesis_2026',
    targetPath: '/Volumes/External_Backup_Drive/Thesis_Backup',
    action: 'DELETED',
    timestamp: '5.1s ago',
    syncTimeMs: 0.4,
    hash: '0x9d11...7b88'
  },
  {
    id: 'evt-104',
    fileName: 'final_survey_results.csv',
    fileSize: '18.4 MB',
    sourcePath: '~/Documents/PhD_Thesis_2026',
    targetPath: '/Volumes/External_Backup_Drive/Thesis_Backup',
    action: 'SYNCED',
    timestamp: '12.0s ago',
    syncTimeMs: 1.2,
    hash: '0x7e22...4c09'
  }
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'feat-realtime',
    title: 'Instant Real-Time Folder Monitoring',
    description: 'Uses native kernel events (inotify on Linux, FSEvents on macOS, ReadDirectoryChangesW on Windows) to mirror file edits, creations, and deletions in sub-milliseconds.',
    iconName: 'Zap',
    badge: 'Rust Engine',
    highlight: '< 1ms Latency Sync'
  },
  {
    id: 'feat-offline',
    title: '100% Offline & Cloud-Free Security',
    description: 'Your data stays exclusively on your local hardware or local network (LAN / NAS). Zero tracking, zero external server uploads, zero internet dependency.',
    iconName: 'ShieldCheck',
    badge: 'Zero Cloud',
    highlight: 'Data Sovereignty'
  },
  {
    id: 'feat-zeroconfig',
    title: 'Zero Configuration Simplicity',
    description: 'No complex setup scripts or cron jobs required. Simply select a source folder and destination path, and FileSentinel works quietly in the background.',
    iconName: 'Sliders',
    badge: 'Plug & Play',
    highlight: '2-Second Folder Pairing'
  },
  {
    id: 'feat-lightweight',
    title: 'Ultra-Lightweight Rust Runtime',
    description: 'Consumes less than 15MB RAM and 0.1% CPU. Built from scratch in Rust for rock-solid memory safety, minimal battery usage, and lightning speed.',
    iconName: 'Cpu',
    badge: '< 15MB RAM',
    highlight: 'Built in Rust'
  },
  {
    id: 'feat-crossplatform',
    title: 'Native Cross-Platform Support',
    description: 'Runs natively on Windows 10/11, macOS (Intel & Apple Silicon), and Linux (Ubuntu, Fedora, Arch, Debian). Identical smooth experience across all OSs.',
    iconName: 'Monitor',
    badge: 'Win / Mac / Linux',
    highlight: 'Single Rust Binary'
  },
  {
    id: 'feat-network',
    title: 'Local Drive & NAS Network Targets',
    description: 'Sync effortlessly to external SSDs, USB drives, secondary internal hard disks, or local network NAS shares (SMB / NFS / Local IP addresses).',
    iconName: 'HardDrive',
    badge: 'Flexible Targets',
    highlight: 'Local & Network Storage'
  }
];

export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    feature: 'Internet Dependency',
    cloudBackup: 'Mandatory high-speed internet',
    manualBackup: 'None (manual USB copy)',
    fileSentinel: '100% Offline / Works anywhere',
    highlight: true
  },
  {
    feature: 'Data Privacy & Sovereignty',
    cloudBackup: 'Third-party cloud server storage',
    manualBackup: 'Local only',
    fileSentinel: 'Local hardware & local network only',
    highlight: true
  },
  {
    feature: 'Backup Timing',
    cloudBackup: 'Delayed sync or background queue',
    manualBackup: 'Only when you remember to copy',
    fileSentinel: 'Instant sub-millisecond real-time mirroring',
    highlight: true
  },
  // {
  //   feature: 'Pricing Model',
  //   cloudBackup: '$10 - $25 / month endlessly',
  //   manualBackup: 'Cost of USB drives',
  //   fileSentinel: '100% FREE for Education • 500 FCFA/mo Pro',
  //   highlight: true
  // },
  {
    feature: 'Resource Consumption',
    cloudBackup: 'Heavy electron / background daemons',
    manualBackup: 'Manual copy dialogs',
    fileSentinel: 'Rust native (< 15MB RAM, ~0.1% CPU)',
    highlight: false
  },
  {
    feature: 'Open Source Transparency',
    cloudBackup: 'Closed proprietary binaries',
    manualBackup: 'N/A',
    fileSentinel: 'Open Source (BSL 1.1 -> Apache 2.0)',
    highlight: false
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'academic',
    name: 'Academic / Student',
    tagline: '100% free forever for students, educators, and academic researchers.',
    fcfaPriceMonthly: 0,
    usdApproxMonthly: '$0.00 / month',
    isAcademicFree: true,
    targetAudience: 'Students, Teachers & University Researchers',
    features: [
      '100% FREE with .edu or academic email',
      'Unlimited synchronized local directories',
      'Instant real-time automatic background backup',
      'Local hard drives, USBs & external SSD targets',
      'Complete offline capability & privacy',
      'Access to open-source community support',
      'Cross-platform (Windows, macOS, Linux)'
    ],
    ctaText: 'Claim Free Academic Access'
  },
  {
    id: 'pro',
    name: 'Pro Individual',
    tagline: 'Affordable, rock-solid automatic protection for freelancers & professionals.',
    fcfaPriceMonthly: 500,
    usdApproxMonthly: '~$0.80 / month',
    popular: true,
    targetAudience: 'Freelancers, Developers & Independent Professionals',
    features: [
      'Only 500 FCFA / month (~$0.80 USD)',
      'Unlimited folder sync pairs',
      'Local network & NAS storage backup targets',
      'File revision history & single-click rollback',
      'Exclusion patterns (.gitignore / custom regex)',
      'Priority email & GitHub issue support',
      'Commercial usage allowed for single users'
    ],
    ctaText: 'Get Pro Plan (500 FCFA/mo)'
  },
  {
    id: 'team',
    name: 'Team / Lab',
    tagline: 'Shared directory synchronization and local network backup for small teams.',
    fcfaPriceMonthly: 1500,
    usdApproxMonthly: '~$2.30 / month',
    targetAudience: 'Research Labs, Agencies & Small Workgroups',
    features: [
      'Only 1,500 FCFA / month (~$2.30 USD)',
      'Up to 10 seats for team / lab members',
      'Shared local network NAS / Server sync targets',
      'Centralized sync configuration files',
      'Automated conflict resolution policies',
      'Dedicated Slack / Discord onboarding assistance',
      'Commercial BSL 1.1 team usage key'
    ],
    ctaText: 'Get Team Plan (1,500 FCFA/mo)'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'During my Master thesis writing, my laptop crashed suddenly before a presentation. Thanks to FileSentinel mirroring my thesis folder to an external drive in real-time, I lost zero words. It saved my semester.',
    author: 'Koffi Emmanuel',
    role: 'Computer Science Master Student',
    institution: 'Université Félix Houphouët-Boigny',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    highlight: 'Zero Data Lost in Laptop Crash'
  },
  {
    id: 't2',
    quote: 'As a research group leader, we work with large datasets that cannot be uploaded to public cloud servers due to NDA rules. FileSentinel keeps our research files backed up on local NAS instantly.',
    author: 'Dr. Sarah Lin',
    role: 'Senior Biotech Researcher',
    institution: 'BioTech Innovation Lab',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    highlight: '100% Offline Data Sovereignty'
  },
  {
    id: 't3',
    quote: 'The 500 FCFA/month (~$0.80) price is unbelievably fair for freelancers. It runs quietly in the system tray using barely 12MB RAM on Linux. Zero hassle, total peace of mind.',
    author: 'Jean-Marc Yao',
    role: 'Full-Stack Developer & Freelancer',
    institution: 'Independent Tech Consultant',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    highlight: '< 15MB RAM Usage on Linux'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does FileSentinel work without cloud servers?',
    answer: 'FileSentinel monitors your specified source folders using native operating system file-system events. Whenever you create, modify, or delete a file, FileSentinel immediately copies that exact change to your chosen local or network destination (e.g., external hard drive, USB, secondary disk, or local NAS share) in real-time.'
  },
  // {
  //   id: 'faq-2',
  //   category: 'Academic',
  //   question: 'How do I claim the free academic access for students and educators?',
  //   answer: 'Simply enter your academic email ending in .edu (or any recognized university/school email domain like .edu, .ac.uk, .univ-*, etc.) in the Academic Access modal. You will receive instant free download credentials with zero restrictions.'
  // },
  // {
  //   id: 'faq-3',
  //   category: 'Pricing',
  //   question: 'Why is the Pro plan priced in FCFA (500 FCFA/month)?',
  //   answer: 'FileSentinel is committed to offering hyper-accessible pricing globally. 500 FCFA/month corresponds to approximately $0.80 USD or €0.76 EUR, making high-quality automatic backup accessible to students, freelancers, and professionals everywhere.'
  // },
  {
    id: 'faq-4',
    category: 'License',
    question: 'What is Business Source License 1.1 (BSL 1.1) and why is it used?',
    answer: 'BSL 1.1 allows anyone to inspect, modify, and contribute to FileSentinel source code freely. Non-commercial and individual usage is fully allowed. Commercial deployment as a competing managed SaaS service is restricted for 4 years per release. After 4 years, the code automatically transitions to Apache 2.0 open source.'
  },
  {
    id: 'faq-5',
    category: 'Technical',
    question: 'Why is FileSentinel built in Rust?',
    answer: 'Rust provides extreme performance, memory safety, and minimal CPU/RAM footprint without garbage collection pauses. FileSentinel consumes less than 15MB RAM and ~0.1% CPU, ensuring it won\'t slow down your laptop or drain your battery.'
  },
  {
    id: 'faq-6',
    category: 'Privacy',
    question: 'Does FileSentinel collect any analytics or send telemetry?',
    answer: 'No. FileSentinel operates with zero external network connectivity. It does not phone home, does not collect telemetry, and never uploads your files anywhere. Your data remains 100% on your devices.'
  }
];
