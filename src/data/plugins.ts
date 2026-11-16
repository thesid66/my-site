export type PluginScreenshot = {
  src: string
  width: number
  height: number
  alt: string
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
  screenshots: {
    converter: PluginScreenshot
    settings: PluginScreenshot
  }
  trustStatements: PluginTrustStatement[]
  features: PluginFeature[]
  workflow: PluginWorkflowStep[]
  compatibility: string[]
  requirements: string[]
  faqs: PluginFaq[]
}

export const rupantaSocialImage = 'https://gautamsiddhartha.com.np/images/rupanta/social-preview.jpg'

export const plugins: PluginLandingData[] = [
  {
    slug: 'rupanta-media-converter',
    name: 'Rupanta Media Converter',
    badge: 'Rupanta Media Converter',
    headline: 'Convert WordPress images',
    accentHeadline: 'to WebP & AVIF',
    description:
      'Bulk convert existing JPG and PNG images or convert new uploads automatically. Rupanta runs on your WordPress server, keeps your originals, and is free on WordPress.org.',
    canonical: 'https://gautamsiddhartha.com.np/plugins/rupanta-media-converter/',
    wordpressUrl: 'https://wordpress.org/plugins/lightweight-modern-media/',
    sourceUrl: 'https://plugins.svn.wordpress.org/lightweight-modern-media/',
    sourceLabel: 'Browse source',
    seo: {
      title: 'Rupanta Media Converter – Free WordPress WebP & AVIF Plugin',
      description:
        'Convert JPG and PNG to WebP or AVIF in WordPress for free. Bulk-convert Media Library images, automate new uploads and serve modern formats without an API.'
    },
    screenshots: {
      converter: {
        src: '/images/rupanta/converter.webp',
        width: 1131,
        height: 895,
        alt: 'Rupanta Converter tab showing Media Library counts, progress, detected encoders and the conversion log panel'
      },
      settings: {
        src: '/images/rupanta/settings.webp',
        width: 1162,
        height: 785,
        alt: 'Rupanta Settings tab with WebP and AVIF selected and panels for automation, delivery, image quality, batch processing and MIME compatibility'
      }
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
          'Process existing JPEG and PNG attachments in the background while WordPress cron is running. Reopen the Converter tab to check progress, logs and failed images.'
      },
      {
        icon: '✓',
        title: 'Serve WebP and AVIF with original image fallbacks',
        description:
          'Enable picture output to deliver generated formats for compatible images. The original JPG or PNG stays available as the browser fallback.'
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
        title: 'Install and activate',
        description: 'In WordPress, go to Plugins > Add Plugin. Search for Rupanta Media Converter, then install and activate it.'
      },
      {
        title: 'Choose output formats',
        description: 'Open Media > Rupanta Media Converter. Check which formats your server supports on the Converter tab, then choose WebP, AVIF or both and save your quality settings.'
      },
      {
        title: 'Convert your images',
        description: 'Select Start Conversion on the Converter tab to process existing media. Enable automatic conversion in Settings to process new JPG and PNG uploads.'
      },
      {
        title: 'Check your results',
        description: 'Review progress, logs and failures in the Converter tab. To use the generated files on your site, enable picture output and check a page with a converted image.'
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
          'Yes. The batch continues while WordPress cron is running, even if you close the browser. If progress stalls, check that WP-Cron or a server cron job is running, then use Refresh Status.'
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
          'Yes. In Settings, open Automation and Delivery and enable conversion for new uploads. New JPEG and PNG images use your enabled formats when the server supports them. Use the Converter tab for existing images.'
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
          'WebP and AVIF can reduce the amount of image data visitors download. The savings depend on the source image and quality settings. Compare image transfer sizes on a page after enabling picture output.'
      }
    ]
  }
]

export function getPluginBySlug(slug: string): PluginLandingData | undefined {
  return plugins.find((plugin) => plugin.slug === slug)
}
