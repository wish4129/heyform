import { Connection } from 'mongoose'
import 'tsconfig-paths/register'

import { AppModel, AppSchema } from '@model'

export default {
  async up(mongoose: Connection) {
    const model = mongoose.model<AppModel>(AppModel.name, AppSchema)
    return await model.insertMany([
      {
        uniqueId: 'webhook',
        category: 'Reporting',
        name: 'Webhook',
        description:
          'With our Webhooks integration, you can send every submission straight to any URL as soon as it’s submitted.',
        avatar: '/static/webhook.png',
        homepage: 'https://docs.heyform.net/',
        helpLinkUrl: 'https://docs.heyform.net/',
        status: 1
      },
      {
        uniqueId: 'facebookpixel',
        category: 'Analytics',
        name: 'Facebook Pixel',
        description:
          'Receive useful insights such as demographics, user activity, and impressions of your SiriusForm.',
        avatar: '/static/facebookpixel.png',
        homepage: 'https://www.facebook.com/business/learn/facebook-ads-pixel',
        helpLinkUrl: null,
        status: 1
      },
      {
        uniqueId: 'googleanalytics',
        category: 'Analytics',
        name: 'Google Analytics',
        description:
          'Receive useful insights such as demographics, user activity, and impressions of your SiriusForm.',
        avatar: '/static/googleanalytics.png',
        homepage: 'https://analytics.google.com',
        helpLinkUrl: null,
        status: 1
      },
      {
        uniqueId: 'email',
        category: 'Reporting',
        name: 'Email Notification',
        description: 'Get email notifications for new responses and submission data in word file',
        avatar: '/static/email.png',
        homepage: null,
        helpLinkUrl: null,
        status: 1
      }
    ])
  }
}
