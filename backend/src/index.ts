import app from "./app.js";
import { connectToDatabase } from "./db/connections.js";

const PORT = process.env.PORT || 5000;
//connections and listeners
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log("Server Open & Connected to Database"));
  })
  .catch((error) => console.log(error));
