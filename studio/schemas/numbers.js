// import { MdDirectionsBike as icon } from "react-icons/md";

export default {
  name: 'numbers',
  title: 'Numbers',
  type: 'document',
  // icon,
  fields: [
    {
      name: 'instagramFollowing',
      title: 'Number of People I am Following on Instagram',
      type: 'string',
    },
    {
      name: 'numberOfEmails',
      title: 'Number of Emails to go through',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date of this Recording',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'date',
      numberOfEmails: 'numberOfEmails',
      instagramFollowing: 'instagramFollowing',
    },
    prepare(selection) {
      const {title, numberOfEmails, instagramFollowing} = selection
      return {
        title: new Date(title).toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        subtitle: `Emails: ${numberOfEmails ? numberOfEmails : 'unknown'}, Following: ${instagramFollowing ? instagramFollowing : 'unknown'}`,
      }
    },
  },
}
