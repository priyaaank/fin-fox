const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/default'
        },
        {
          id: 'goals',
          title: 'Goals',
          type: 'collapse',
          icon: 'feather icon-target',
          children: [
            {
              id: 'goals-master-list',
              title: 'Master list',
              type: 'item',
              url: '/goals/master'
            },
            {
              id: 'goals-deductions',
              title: 'Deductions',
              type: 'item',
              url: '/basic/typography'
            }
          ]
        },
        {
          id: 'investments',
          title: 'Investments',
          type: 'collapse',
          icon: 'feather icon-umbrella',
          children: [
            {
              id: 'investments-current',
              title: 'Current',
              type: 'item',
              url: '/basic/button'
            },
            {
              id: 'investments-recurring',
              title: 'Recurring',
              type: 'item',
              url: '/basic/badges'
            }
          ]
        },
        {
          id: 'assets',
          title: 'Assets',
          type: 'item',
          icon: 'feather icon-triangle',
          url: '/basic/collapse'
        },
        {
          id: 'reports',
          title: 'Reports',
          type: 'item',
          icon: 'feather icon-pie-chart',
          url: '/basic/pagination'
        },
        {
          id: 'settings',
          title: 'Settings',
          type: 'item',
          icon: 'feather icon-settings',
          url: '/basic/breadcrumb'
        },
        {
          id: 'logout',
          title: 'Logout',
          type: 'item',
          icon: 'feather icon-power',
          url: '/basic/breadcrumb'
        }
      ]    
    }
  ]
};

export default menuItems;
