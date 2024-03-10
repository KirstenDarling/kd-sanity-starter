export default {
  name: 'blogPost',
  title: 'Blog Posts',

  type: 'document',
  // icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'hexcode',
      media: 'hexcode',
    },
  },
}
