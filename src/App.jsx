import { Container, Typography } from "@mui/material";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import { Navigation } from "./assets/data";
import PropTypes from "prop-types";
import Page from "./components/Page";
import { useMemo, useState } from "react";

function App(props) {
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
    <AppProvider navigation={Navigation} router={router}>
      <DashboardLayout>
        <Page pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default App;
