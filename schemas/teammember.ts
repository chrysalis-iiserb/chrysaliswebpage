import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string', validation: r => r.required() }),
    defineField({ name: 'team', title: 'Team', type: 'string',
      options: { list: ['Coordinator', 'Chief-Editor', 'Sci-Comm', 'Magazine'] },
      validation: r => r.required()
    }),
    defineField({ name: 'year', title: 'Year', type: 'number', validation: r => r.required() }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
  ]
})
