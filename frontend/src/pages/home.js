import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />
      
      <Box sx={{ flexGrow: 1 }}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Container sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to LMS Dashboard
          </Typography>
          <Typography>
            This is the home page where you can manage users, videos, and more.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
