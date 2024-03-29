// import { MdMoneyOff as icon } from "react-icons/md";

export default {
  name: 'debtCollector',
  title: 'Debt Collector',
  type: 'document',
  // icon,
  fields: [
    {
      name: 'collectionsCompany',
      title: 'Name of Collections Company',
      type: 'string',
    },
    {
      name: 'whereToCall',
      title: 'Where To Call',
      type: 'string',
    },
    {
      name: 'whereToPay',
      title: 'Where To Pay',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'collectionsCompany',
      // media: "movie.poster",
    },
  },
}
