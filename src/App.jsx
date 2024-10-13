import { Container, createTheme, Typography } from "@mui/material";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import { Navigation } from "./assets/data";
import PropTypes from "prop-types";
import Profile from "/rock-lee.jpg";
import Logo from "/pumpkin.png";
import Page from "./components/Page";
import { useMemo, useState } from "react";
import { Badges } from "./components/Badges";

function App(props) {
  const [session, setSession] = useState({
    user: {
      name: "Vighnesh Zagade",
      email: "vighneshzagade4@gmail.com",
      image: Profile,
    },
  });

  const demoTheme = createTheme({
    cssVariables: {
      colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const authentication = useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Vighnesh Zagade",
            email: "vighneshzagade4@gmail.com",
            image: Profile,
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const { window } = props;

  const [pathname, setPathname] = useState("/dashboard");

  const router = useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    <AppProvider
      session={session}
      theme={demoTheme}
      authentication={authentication}
      navigation={Navigation}
      router={router}
      branding={{
        logo: <img src={Logo} alt="Logo" />,
        title: "Powerhouse",
      }}
    >
      <DashboardLayout
        slots={{ toolbarActions: Badges }}
        slotProps={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Page pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
