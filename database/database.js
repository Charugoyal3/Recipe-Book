const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/recipe-book",
  // `mongodb+srv://${"RecipeUser"}:${"XwLWfBLq7OCzdz9E"}@project-ppgo7.mongodb.net/${"RecipeBook"}?retryWrites=true`
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) console.log(err);
    else console.log("Database connected...");
  }
);