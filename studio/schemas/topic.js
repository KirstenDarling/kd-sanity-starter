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
          {title: 'Interest', value: 'interest'},
          {title: 'Study Topic', value: 'studyTopic'},
          {title: 'Hobby', value: 'hobby'},
          {title: 'Skill', value: 'skill'},
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
      title: 'activityName',
      // subtitle: "type.0",
    },
  },
}
