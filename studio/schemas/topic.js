// import { MdDirectionsBike as icon } from "react-icons/md";

export default {
  name: 'topic',
  title: 'topic',
  type: 'document',
  // icon,
  fields: [
    {
      name: 'name',
      title: 'Topic Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type of Topic',
      type: 'string',
      options: {
        list: [
          {title: 'Interests', value: 'Interests'},
          {title: 'Study Topics', value: 'Study Topics'},
          {title: 'Hobbies', value: 'Hobbies'},
          {title: 'Skills', value: 'Skills'},
        ],
      },
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
    },
  },
}
