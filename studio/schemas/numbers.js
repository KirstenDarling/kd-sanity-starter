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
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'activityName',
      // subtitle: "type.0",
    },
  },
}
