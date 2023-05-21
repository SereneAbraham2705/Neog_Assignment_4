import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Wedding Cakes",
    description:
    "The wedding cake symbolizes good fortune and fertility. The wedding cake should be made with an abundance of good quality ingredients to symbolize a long-lasting, rich, and happy marriage",
  },
  {
    _id: uuid(),
    categoryName: "Celebration Cakes",
    description:
      "No matter what you are celebrating, a festive and professionally decorated cake , festive cake layers may be exactly what you need.",
  },
  {
    _id: uuid(),
    categoryName: "Graduation Cakes",
    description:
      "These cake symbolizes a persons hard work and accomplishments. A special and meaningful way to show your pride and congratulations to the graduate.",
  },
];
