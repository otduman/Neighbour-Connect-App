import React from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Profile from "./Pages/Profile/Profile";
import Container from "@mui/material/Container";
import Incidents from "./Pages/Incidents";

export default function App() {
  return (
    <div>
      <Container>
        <LoginPage />
        <Profile />
        <Incidents />
      </Container>
    </div>
  );
}
