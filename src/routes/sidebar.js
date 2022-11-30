/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    icon: 'LoanApplication',
    name: 'Loan Application',
    path:'/app/loanApplication',
    routes: [
      {
        path: '/app/loanApplication/eligibility',
        name: 'Loan Eligibility',
      },
      {
        path: '/app/loanApplication/payment-schedule',
        name: 'Payment Schedule',
      },
    ]
  },
  {
    path: '/app/loanDetails',
    icon: 'Analysis',
    name: 'Loan Details',
  },
  {
    path: '/app/insurance',
    icon: 'Insurance',
    name: 'Insurance',
  },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes
