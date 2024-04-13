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
              url: '/goals/deductions'
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
              url: '/investments/current'
            },
            {
              id: 'investments-recurring',
              title: 'Recurring',
              type: 'item',
              url: '/investments/recurring'
            }
          ]
        },
        {
          id: 'assets',
          title: 'Assets',
          type: 'item',
          icon: 'feather icon-triangle',
          url: '/assets/all'
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
          url: '/settings/main'
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
