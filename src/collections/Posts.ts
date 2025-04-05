import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    { name: 'title', type: 'text' },
    {
      name: 'description',
      type: 'textarea',
    },
    { name: 'content', type: 'richText' },
  ],
}
