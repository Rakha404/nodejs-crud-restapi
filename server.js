import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di http://localhost:${process.env.PORT}`);
});