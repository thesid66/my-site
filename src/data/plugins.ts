export type PluginPreviewMetric = {
  value: string
  label: string
}

export type PluginFeature = {
  icon: string
  title: string
  description: string
}

export type PluginWorkflowStep = {
  title: string
  description: string
}

export type PluginFaq = {
  question: string
  answer: string
}

export type PluginTrustStatement = {
  title: string
  description: string
}

export type PluginLandingData = {
  slug: string
  name: string
  badge: string
  headline: string
  accentHeadline: string
  description: string
  canonical: string
  wordpressUrl: string
  sourceUrl?: string
  sourceLabel?: string
  seo: {
    title: string
    description: string
  }
  preview: {
    title: string
    metrics: PluginPreviewMetric[]
    progress: number
    status: string
    formats: string[]
    logs: string[]
  }
  trustStatements: PluginTrustStatement[]
  features: PluginFeature[]
  workflow: PluginWorkflowStep[]
  compatibility: string[]
  requirements: string[]
  faqs: PluginFaq[]
}

export const plugins: PluginLandingData[] = [
  {
    slug: 'rupanta-media-converter',
    name: 'Rupanta Media Converter',
    badge: 'Free WordPress image converter',
    headline: 'Modern images.',
    accentHeadline: 'Without the overhead.',
    description:
      'Rupanta Media Converter creates WebP and AVIF versions of your WordPress images directly on your server, then serves the best supported format with a safe original-image fallback.',
    canonical: 'https://gautamsiddhartha.com.np/plugins/rupanta-media-converter/',
    wordpressUrl: 'https://wordpress.org/plugins/lightweight-modern-media/',
    sourceUrl: 'https://plugins.svn.wordpress.org/lightweight-modern-media/',
    sourceLabel: 'Browse source',
    seo: {
      title: 'Rupanta Media Converter | Free WebP and AVIF WordPress Plugin',
      description:
        'Convert WordPress JPEG and PNG images to WebP and AVIF locally, process media libraries in background batches, and safely serve modern formats with original-image fallbacks.'
    },
    preview: {
      title: 'Media Library Overview',
      metrics: [
        { value: '428', label: 'Eligible' },
        { value: '309', label: 'Converted' },
        { value: '118', label: 'Waiting' },
        { value: '1', label: 'Failed' }
      ],
      progress: 72,
      status: 'Conversion continues in the background.',
      formats: ['WebP', 'AVIF'],
      logs: [
        'image-hero.jpg — 12 generated files created.',
        'team-photo.png — WebP and AVIF complete.',
        'Processing next background batch…'
      ]
    },
    trustStatements: [
      { title: '100% free', description: 'All features included' },
      { title: 'Local processing', description: 'Your images stay on-site' },
      { title: 'Safe fallbacks', description: 'Original files remain intact' },
      { title: 'WordPress.org', description: 'Open source and reviewable' }
    ],
    features: [
      {
        icon: 'W',
        title: 'WebP and AVIF',
        description:
          'Choose either format or enable both. Quality settings remain under the administrator’s control.'
      },
      {
        icon: '↻',
        title: 'Background conversion',
        description:
          'Process large media libraries without keeping the converter screen open for the entire run.'
      },
      {
        icon: '✓',
        title: 'Safe frontend delivery',
        description:
          'Serve modern sources through picture markup while retaining the original JPEG or PNG fallback.'
      },
      {
        icon: '!',
        title: 'Failure reporting',
        description:
          'A failed image does not stop the queue. Administrators can review the failed file and reason later.'
      },
      {
        icon: '⚡',
        title: 'Priority controls',
        description:
          'Opt a selected hero image into eager loading and high fetch priority without changing every image.'
      },
      {
        icon: '⌘',
        title: 'Builder-aware output',
        description:
          'Designed to work with standard WordPress image markup and common builder-rendered content.'
      }
    ],
    workflow: [
      {
        title: 'Choose formats',
        description: 'Enable WebP, AVIF or both and set the preferred quality.'
      },
      {
        title: 'Convert',
        description:
          'New uploads convert automatically; existing media runs in background batches.'
      },
      {
        title: 'Deliver',
        description:
          'Compatible frontend images receive modern sources and an original fallback.'
      },
      {
        title: 'Review',
        description: 'Return anytime to inspect progress, logs and failed-image details.'
      }
    ],
    compatibility: [
      'WordPress Media Library',
      'JPEG and PNG source images',
      'Standard attachment markup',
      'Divi and Elementor-aware handling',
      'Apache and LiteSpeed MIME guidance'
    ],
    requirements: [
      'WordPress 6.0 or newer',
      'PHP 7.4 or newer',
      'GD or Imagick with WebP and/or AVIF support',
      'WP-Cron or a real server cron for background batches'
    ],
    faqs: [
      {
        question: 'Are the original images replaced?',
        answer:
          'No. The plugin keeps the original JPEG and PNG files and creates separate WebP or AVIF versions alongside them.'
      },
      {
        question: 'Will conversion continue after I leave the page?',
        answer:
          'Yes. Existing media is processed in persistent background batches through WordPress cron, so the converter screen does not need to remain open.'
      },
      {
        question: 'Can I disable WebP or AVIF separately?',
        answer:
          'Yes. Each format can be enabled or disabled independently for both generation and frontend delivery.'
      },
      {
        question: 'What happens when one image fails?',
        answer:
          'The queue continues with later images. Failed attachments and their recorded reasons remain visible when an administrator returns.'
      },
      {
        question: 'Does the plugin use an external conversion service?',
        answer:
          'No. Conversion happens on your WordPress server through the available GD or Imagick encoder.'
      }
    ]
  }
]

export function getPluginBySlug(slug: string): PluginLandingData | undefined {
  return plugins.find((plugin) => plugin.slug === slug)
}
