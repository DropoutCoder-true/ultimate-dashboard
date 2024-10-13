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
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    children: [
      {
        segment: "default",
        title: "Default",
      },
      {
        segment: "analytics",
        title: "Analytics",
      },
      {
        segment: "invoice",
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
    segment: "statistics",
    title: "Statistics",
    icon: <AssessmentIcon />,
  },
  {
    segment: "data",
    title: "Data",
    icon: <DataArrayIcon />,
  },
  {
    segment: "chart",
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
    segment: "chat",
    title: "Chat",
    icon: <ChatIcon />,
  },
  {
    segment: "calendar",
    title: "Calendar",
    icon: <CalendarMonthIcon />,
  },
  {
    segment: "customers",
    title: "Customers",
    icon: <GroupIcon />,
  },
  {
    segment: "invoice",
    title: "Invoice",
    icon: <ReceiptIcon />,
    children: [
      {
        segment: "create",
        title: "Create",
      },
      {
        segment: "details",
        title: "Details",
      },
      {
        segment: "list",
        title: "List",
      },
      {
        segment: "edit",
        title: "Edit",
      },
    ],
  },
  {
    segment: "profile",
    title: "Profile",
    icon: <AccountCircleIcon />,
  },
  {
    segment: "ecommerce",
    title: "E-commerce",
    icon: <ShoppingCartCheckoutIcon />,
    children: [
      {
        segment: "products",
        title: "Products",
      },
      {
        segment: "productDetails",
        title: "Product Details",
      },
      {
        segment: "productList",
        title: "Product List",
      },
      {
        segment: "newProduct",
        title: "Add new Product",
      },
      {
        segment: "checkout",
        title: "Checkout",
      },
    ],
  },
];
