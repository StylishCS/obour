const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {User} = require("./models/User");
require('dotenv').config();
//database setup
mongoose
  .connect(
    process.env.MONGODB_URL,
    {
      family: 4,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB.."))
  .catch((err) => console.error("MongoDB Connection Failed..", err));
mongoose.set("debug", true);
async function seedData(){
    const user1 = new User({
      name: "User 1",
      email: "user1@example.com",
      password: await bcrypt.hash("password1", 10),
      role: "ADMIN",
    });
    const user2 = await new User({
      name: "User 2",
      email: "user2@example.com",
      password: await bcrypt.hash("password2", 10),
      role: "EDITOR",
    });
    const user3 = await new User({
      name: "User 3",
      email: "user3@example.com",
      password: await bcrypt.hash("password3", 10),
      role: "USER",
    });
    const user4 = await new User({
      name: "Not Verified Or Banned User",
      email: "banned@example.com",
      password: await bcrypt.hash("password4", 10),
      role: "USER",
    });
    await user1.save();
    await user2.save();
    await user3.save();
    await user4.save();
}

seedData();
// DATA SEEDED SUCCESSFULLY!