import express from "express";
import { config } from "dotenv";

//Import routes
import movieRoutes from "./routes/movieRoutes.js";
config();
const app = express();

//API routes

app.use("/movies", movieRoutes);
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port with Cili ${PORT}`);
});

//AUTH -signin, signup
//MOVIE -getting all movies
//USER-Profile
//WATCHLIST -Movies
