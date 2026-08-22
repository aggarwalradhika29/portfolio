export type Project = {
  icon: string
  title: string
  description: string
  chips: string[]
  githubUrl: string
  slug: string
}

export const allProjects: Project[] = [
  {
    icon: '🧾',
    title: 'Full-Stack B2B CRM',
    description: 'Quotation lifecycle management, invoicing, and sales reporting for a multi-firm distributor, with PDF generation and automated email delivery. Migrated 20+ entity types (6K products, 5K images) from legacy MySQL to PostgreSQL — cut migration runtime 15× (45min → 3min).',
    chips: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    githubUrl: '#',
    slug: 'b2b-crm',
  },
  {
    icon: '📈',
    title: 'Multi-Tenant API Analytics Pipeline',
    description: 'dbt-based analytics pipeline modeling synthetic multi-tenant API telemetry across 17 tenants. Staging-layer deduplication catching 2% duplicate events, dimensional modeling, and incremental fact tables for tenant-level reporting.',
    chips: ['dbt', 'SQL', 'DuckDB', 'Data Modeling'],
    githubUrl: '#',
    slug: 'multi-tenant-api-analytics',
  },
  {
    icon: '🛰️',
    title: 'SAR Crop Forecasting',
    description: 'Multi-temporal satellite data pipeline for in-season crop acreage forecasting. Improved accuracy by 15–20%. Published at ISRO, 2025.',
    chips: ['ISRO', 'Geospatial', 'ML', 'SNAP API'],
    githubUrl: 'https://www.corpuspublishers.com/assets/articles/aart-v6-25-1082.pdf',
    slug: 'sar-crop-forecasting',
  },
  {
    icon: '🌾',
    title: 'Millet Farming Platform',
    description: 'Sustainable farming analytics using MERN stack, satellite data pipelines, and ML for yield optimization and recipe recommendations.',
    chips: ['Python', 'MERN', 'ML', 'SQL'],
    githubUrl: '#',
    slug: 'millet-farming-platform',
  },
  {
    icon: '✋',
    title: 'Real-Time Gesture Detection',
    description: 'Computer vision system for live gesture recognition using CNN, OpenCV, and Arduino — real-time under variable lighting.',
    chips: ['Python', 'OpenCV', 'Arduino', 'MediaPipe'],
    githubUrl: '#',
    slug: 'gesture-detection',
  },
  {
    icon: '⚙️',
    title: 'Predictive Maintenance',
    description: 'GUI-based ML model for industrial failure classification. Auto-selects the best-performing algorithm across temperature, pressure, torque.',
    chips: ['Python', 'ML', 'TK Solver'],
    githubUrl: '#',
    slug: 'predictive-maintenance',
  },
  {
    icon: '📊',
    title: 'Netflix Data Visualization',
    description: 'Exploratory data analysis on Netflix titles — trends, genres, content gaps, and release patterns over time.',
    chips: ['Python', 'Pandas'],
    githubUrl: '#',
    slug: 'netflix-viz',
  },
  {
    icon: '📋',
    title: 'Notice Management System',
    description: 'Role-based notice flow system with student and admin authentication. Admins create, update, delete; students read-only.',
    chips: ['Java', 'DSA'],
    githubUrl: '#',
    slug: 'notice-management',
  },
]