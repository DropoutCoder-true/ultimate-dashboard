import { Container } from "@mui/material";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import { Navigation } from "./assets/data";

function App() {
  return (
    <AppProvider navigation={Navigation}>
      <DashboardLayout>
        <Container disableGutters maxWidth sx={{ backgroundColor: "green" }}>
          <h1>Dashboard</h1>
        </Container>
      </DashboardLayout>
    </AppProvider>
  );
}

export default App;
