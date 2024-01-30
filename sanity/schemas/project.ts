export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Small Overview',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
