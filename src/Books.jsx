import img6 from "./image/book-6.jpg";
import img7 from "./image/book-7.jpg";
import img8 from "./image/book-8.jpg";
import img9 from "./image/book-9.jpg";

export const books = [
  {
    author: "Rebecca Yarros",
    title: "Iron Flame",
    img: "./images/book-1.jpg",
    id: 1,
  },

  {
    author: "Summer Bridge",
    title: "Summer Bridge Activities",
    img: "./images/book-2.jpg",
    id: 2,
  },

  {
    author: "James Clear",
    title: "Atomic Habbits",
    img: "./images/book-3.jpg",
    id: 3,
  },

  {
    author: "Bonnie Garmus",
    title: "Fourth Wing",
    img: "./images/book-4.jpg",
    id: 4,
  },

  {
    author: "Abraham Verghesse",
    title: "The Convenant of Water",
    img: "./images/book-5.jpg",
    id: 5,
  },

  {
    author: "Peter Attia",
    title: "Outlive",
    img: img6,
    id: 6,
  },

  {
    author: "Robert Greene",
    title: "Power",
    img: img7,
    id: 7,
  },

  {
    author: "Bassel van der Kolk",
    title: "The body keeps the score",
    img: img8,
    id: 8,
  },

  {
    author: "Robert T. Kiyosaki",
    title: "Rich Dat Poor Dad",
    img: img9,
    id: 9,
  },
];

/// images can be sourced either from the public or src folders
// the public ref the image directly in the data
// the src names the img and imports it, its the best approach
