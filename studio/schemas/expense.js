import {MdContentPaste as icon} from 'react-icons/md'

export default {
  name: 'expense',
  title: 'Expenses',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Bill Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Recurring Subscription', value: 'recurringSubscription'},
          {title: 'Recurring Bill', value: 'recurBill'},
          {title: 'One Time Bill', value: 'oneTimeBill'},
          {title: 'Debt', value: 'debt'},
          {title: 'Finance Charge', value: 'financeCharge'},
        ],
      },
    },
    {
      name: 'regularDueDate',
      title: 'Regular Due Date',
      type: 'number',
      max: 31,
      min: 1,
    },
    {
      name: 'autoPay',
      title: 'Is Autopay setup?',
      type: 'string',
      options: {
        list: [
          {title: 'Yes', value: 'yes'},
          {title: 'No', value: 'no'},
        ],
      },
    },
    {
      name: 'total',
      title: 'Total',
      type: 'string',
    },
    {
      name: 'monthsPaid2024',
      title: 'Months Paid in 2024',
      description: 'Check each month off once this bill has been paid for that month.',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'January', value: 'january'},
          {title: 'February', value: 'february'},
          {title: 'March', value: 'march'},
          {title: 'April', value: 'april'},
          {title: 'May', value: 'may'},
          {title: 'June', value: 'june'},
          {title: 'July', value: 'july'},
          {title: 'August', value: 'august'},
          {title: 'September', value: 'september'},
          {
            title: 'October',
            value: 'october',
          },
          {title: 'November', value: 'november'},
          {title: 'December', value: 'december'},
        ],
      },
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Current', value: 'Current'},
          {title: 'LATE!', value: 'Late'},
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
      subtitle: 'status',
    },
  },
}
