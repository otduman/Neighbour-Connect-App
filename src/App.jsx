import React from "react";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Profile from "./Pages/Profile/Profile";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <div>
      <Container>
        <LoginPage />
        <Profile />
      </Container>
    </div>
  );
}
