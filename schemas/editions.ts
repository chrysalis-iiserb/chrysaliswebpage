import {DocumentPdfIcon} from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'editions',
  title: 'Editions',
  icon: DocumentPdfIcon,
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule) => rule.required(),
       
    }), 
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
       
    }), 
    defineField({
      name: 'editorsnote',
      title: "Editor's Note",
      type: 'string',
     
  }), 
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      validation: (rule) => rule.required(),
  }),
    defineField({
        name: 'File',
        title: 'File',
        type: 'file',
        validation: (rule) => rule.required(),
    }),
      defineField({
        name: 'flipUrl',
        title: 'FlipHTML5 URL',
        type: 'url',
        description: 'Paste the FlipHTML5 embed URL here',
    }),
  ]
})
