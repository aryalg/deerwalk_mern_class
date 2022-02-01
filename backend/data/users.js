import bscrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    isAdmin: true,
    password: bscrypt.hashSync("123456", 12),
  },

  {
    name: "Normal User",
    email: "normal@example.com",
    password: bscrypt.hashSync("123456", 12),
  },

  {
    name: "Deerwalk User",
    email: "deerwalk@example.com",
    password: bscrypt.hashSync("123456", 12),
  },
];

export default users;
