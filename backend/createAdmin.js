require('dotenv').config(); // Add this at the top
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // update path if needed

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const createUser = async () => {
  const email = 'Rahul@admin.com';
  const plainPassword = '123456';

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const user = new User({
    email,
    password: hashedPassword,
  });

  await user.save();
  console.log('✅ Admin user created!');
  mongoose.disconnect();
};

createUser();