import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReceiptIcon from "@mui/icons-material/Receipt";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DataArrayIcon from "@mui/icons-material/DataArray";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const Navigation = [
  // Dashboard Data
  {
    kind: "header",
    title: "Dashboard",
  },
  {
    segment: "page",
    title: "Dashboard",
    icon: <DashboardIcon />,
    children: [
      {
        semgent: "page",
        title: "Default",
      },
      {
        semgent: "page",
        title: "Analytics",
      },
      {
        semgent: "page",
        title: "Invoice",
      },
    ],
  },

  // Divider
  {
    kind: "divider",
  },

  // Widgets Data
  {
    kind: "header",
    title: "Widgets",
  },
  {
    segment: "page",
    title: "Statistics",
    icon: <AssessmentIcon />,
  },
  {
    segment: "page",
    title: "Data",
    icon: <DataArrayIcon />,
  },
  {
    segment: "page",
    title: "Chart",
    icon: <BarChartIcon />,
  },

  // Divider
  {
    kind: "divider",
  },

  // Applications
  {
    kind: "header",
    title: "Applications",
  },
  {
    segment: "page",
    title: "Chat",
    icon: <ChatIcon />,
  },
  {
    segment: "page",
    title: "Calendar",
    icon: <CalendarMonthIcon />,
  },
  {
    segment: "page",
    title: "Customers",
    icon: <GroupIcon />,
  },
  {
    segment: "page",
    title: "Invoice",
    icon: <ReceiptIcon />,
    children: [
      {
        segment: "page",
        title: "Create",
      },
      {
        segment: "page",
        title: "Details",
      },
      {
        segment: "page",
        title: "List",
      },
      {
        segment: "page",
        title: "Edit",
      },
    ],
  },
  {
    segment: "page",
    title: "Profile",
    icon: <AccountCircleIcon />,
  },
  {
    segment: "page",
    title: "E-commerce",
    icon: <ShoppingCartCheckoutIcon />,
    children: [
      {
        segment: "page",
        title: "Products",
      },
      {
        segment: "page",
        title: "Product Details",
      },
      {
        segment: "page",
        title: "Product List",
      },
      {
        segment: "page",
        title: "Add new Product",
      },
      {
        segment: "page",
        title: "Checkout",
      },
    ],
  },
];
