const myMenus = [
  {
    label: "STOCKS",
    url: "/",
    submenus: [
      {
        title: "Manage GRNS ",
        url: "/home",
      },
      {
        title: "Manage Warrants",
        url: "/home",
      },
      {
        title: "Manage Outturns",
        url: "/home",
      },
      {
        title: "Manage Quality",
        submenu: [
          {
            title: "Quality Operations",
            url: "/home",
          },
          {
            title: "Quality Reports",
            url: "/home",
          },
        ],
      },
      {
        title: "Manage Bulks",
        submenu: [
          {
            title: "Internal Bulks",
            url: "node",
          },
          {
            title: "External Bulks",
            url: "php",
          },
        ],
      },
    ],
  },

  {
    label: "SALES",
    submenus: [
      {
        title: "Auction Sales",
        submenu: [
          {
            title: "Catalogue",
            url: "",
          },
          {
            title: "Auction",
            url: "",
          },
          {
            title: "Manage Grower Sales",
            submenu: [
              {
                title: "Offer Notification",
                url: "/",
              },
              {
                title: "Sale Notification",
                url: "/",
              },
            ],
          },
        ],
      },
      {
        title: "Direct Sales",
        submenus: [{ title: "Manage Direct Sale", url: "/" }],
      },
    ],
  },

  {
    label: "ACCOUNTS",
    submenus: [
      {
        title: "Manage Buyer Sales",
        submenus: [
          {
            title: "Auction Invoices",
            url: "/",
          },
          {
            title: "Stock Positions",
            url: "/",
          },
        ],
      },
      {
        title: "Payments",
        submenus: [
          {
            title: "Process Sale",
            url: "/",
          },
          {
            title: "Payment Reports",
            url: "/",
          },
        ],
      },
    ],
  },
  {
    label: "SETTINGS",
    submenus: [
      {
        title: "Grower Manager",
        url: "/",
      },

      {
        title: "Contact Manager",
        url: "/",
      },

      {
        title: "Certification Manager",
        url: "/",
      },

      {
        title: "Location Manager",
        url: "/",
      },

      {
        title: "Agents Manager",
        url: "/",
      },
      {
        title: "More Settings",
        url: "/",
      },
    ],
  },

  {
    label: "ADMINISTRATION",
    submenus: [
      {
        title: "Manage Users",
        url: "/",
      },

      {
        title: "Manager Permissions",
        url: "/",
      },

      {
        title: "Manager Data",
        url: "/",
      },
    ],
  },
  {
    label: "PROFILE",
    submenus: [
      {
        title: "Admin",
        url: "/",
      },

      {
        title: "Change Password",
        url: "/",
      },

      {
        title: "Logout",
        url: "/",
      },
      {
        title: "Exit",
        url: "/",
      },
    ],
  },

  {
    label: "HELP",
    submenus: [
      {
        title: "About System",
        url: "/",
      },

      {
        title: "User Guide",
        url: "/",
      },

      {
        title: "Request Support",
        url: "/",
      },
    ],
  },
];

export default myMenus;
