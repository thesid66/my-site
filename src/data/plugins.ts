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
    badge: 'Rupanta Media Converter · 100% free WordPress plugin',
    headline: 'Free WebP & AVIF',
    accentHeadline: 'Converter for WordPress.',
    description:
      'Rupanta Media Converter is a free WordPress image converter that turns JPG, JPEG and PNG uploads into WebP or AVIF. Bulk-convert your existing Media Library, automatically convert new images and serve modern formats with the original files as a fallback — all on your own server.',
    canonical: 'https://gautamsiddhartha.com.np/plugins/rupanta-media-converter/',
    wordpressUrl: 'https://wordpress.org/plugins/lightweight-modern-media/',
    sourceUrl: 'https://plugins.svn.wordpress.org/lightweight-modern-media/',
    sourceLabel: 'Browse source',
    seo: {
      title: 'Rupanta Media Converter – Free WordPress WebP & AVIF Plugin',
      description:
        'Convert JPG and PNG to WebP or AVIF in WordPress for free. Bulk-convert Media Library images, automate new uploads and serve modern formats without an API.'
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
        title: 'Convert JPG and PNG to WebP or AVIF',
        description:
          'Generate WebP or AVIF versions of WordPress JPEG and PNG images. Enable either format or both, with quality settings under your control.'
      },
      {
        icon: '↻',
        title: 'Bulk convert WordPress Media Library images',
        description:
          'Batch-convert existing WordPress image attachments in the background, with progress updates and logs. You do not need to keep the converter screen open.'
      },
      {
        icon: '✓',
        title: 'Serve WebP and AVIF with original image fallbacks',
        description:
          'Deliver generated image sources using compatible picture markup while keeping the original JPG or PNG as a browser fallback.'
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
        title: 'Elementor and Divi image support',
        description:
          'Handle compatible WordPress image markup, including Elementor-rendered content and Divi image output, when modern-format delivery is enabled.'
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
          'Automatically convert new WordPress JPG and PNG uploads; bulk-process existing Media Library attachments in background batches.'
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
      'Elementor and Divi-compatible image handling',
      'Apache and LiteSpeed WebP and AVIF MIME guidance'
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
      },
      {
        question: 'How do I convert JPG or PNG images to WebP in WordPress?',
        answer:
          'Install the free Rupanta Media Converter plugin from WordPress.org, open Media > Rupanta Media Converter, enable WebP and review your server encoder support. New JPG and PNG uploads can convert automatically, and the batch converter processes existing WordPress Media Library images.'
      },
      {
        question: 'Can I bulk convert my existing WordPress Media Library images to AVIF?',
        answer:
          'Yes. Enable AVIF and run the background batch converter to create AVIF versions of existing JPEG and PNG media attachments. Your WordPress hosting server needs GD or Imagick with AVIF encoding support.'
      },
      {
        question: 'Does the plugin automatically convert new WordPress image uploads?',
        answer:
          'Yes. With a supported image encoder and the selected format enabled, new JPEG and PNG uploads are converted automatically to WebP, AVIF or both. Existing uploads can be handled separately using batch conversion.'
      },
      {
        question: 'Is this a completely free WordPress WebP and AVIF converter with no quota?',
        answer:
          'Yes. The WordPress.org plugin includes its conversion features without a premium plan, license key, subscription, plugin-imposed conversion limit or cloud API. Processing capacity still depends on your own hosting resources.'
      },
      {
        question: 'Can Rupanta serve WebP or AVIF images in Elementor and Divi?',
        answer:
          'The plugin supports standard WordPress attachment markup and compatible Elementor and Divi-rendered image content. Enable frontend picture output, then check your pages to confirm that a particular theme or widget uses compatible image markup.'
      },
      {
        question: 'What if WordPress hosting supports WebP but not AVIF?',
        answer:
          'You can enable WebP conversion alone. The plugin detects the WebP and AVIF encoding capabilities of the available GD or Imagick library, so AVIF is optional.'
      },
      {
        question: 'Does converting images to WebP or AVIF improve WordPress page speed?',
        answer:
          'Modern formats can reduce image transfer sizes and support image optimisation, but actual results depend on the source image, quality settings, browser, hosting and page setup. Rupanta focuses on image format conversion and compatible delivery; it is not a full CDN or general-purpose image resizing service.'
      }
    ]
  }
]

export function getPluginBySlug(slug: string): PluginLandingData | undefined {
  return plugins.find((plugin) => plugin.slug === slug)
}
