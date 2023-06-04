import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import bcyrpt from "bcryptjs";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Amar",
    lastName: "Sharma",
    email: "amarsharma@gmail.com",
    password: bcyrpt.hashSync("amar123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Oliver",
    lastName: "Twist",
    email: "olivertwist@gmail.com",
    password: bcyrpt.hashSync("olivertwist123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
