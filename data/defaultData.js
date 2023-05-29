export const CATEGORIES = [
  { id: "c1", title: "Starter", color: "#e813a1" },
  { id: "c2", title: "Main", color: "#c229ff" },
  { id: "c3", title: "Salat", color: "#701fdb" },
  { id: "c4", title: "Sweets", color: "#03529c" },
  { id: "c5", title: "Drinks", color: "#039c82" },
  { id: "c6", title: "Veg", color: "#4de89d" },
  { id: "c7", title: "Non Veg", color: "#1a8a12" },
  { id: "c8", title: "Chines", color: "#abeb34" },
  { id: "c9", title: "French", color: "#ebe834" },
  { id: "c10", title: "Fast Food", color: "#eb8034" },
  { id: "c11", title: "Italian", color: "#eb4034" },
  { id: "c12", title: "Indian", color: "#f2070b" },
];

export const MEALS = [
  {
    id: 1,
    title: "Pizza",
    categoty: ["c10", "c6", "c11", "c7"],
    desciption:
      "Pizza is a popular Italian dish that has gained worldwide recognition and is enjoyed by people of all ages. It typically consists of a round, flat dough topped with various ingredients, including tomato sauce, cheese, and a variety of toppings.",
    price: { regular: 150, small: 100, large: 200 },
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
  },
  {
    id: 2,
    title: "Berger",
    categoty: ["c10", "c6", "c7", "c11"],
    desciption:
      "A traditional hamburger consists of a ground beef patty seasoned with salt and pepper, which is then cooked on a grill or stovetop. The patty is usually served between two halves of a soft bun or roll. It is often accompanied by various toppings and condiments, such as lettuce, tomato, onion, pickles, cheese, ketchup, mustard, and mayonnaise.",
    price: { regular: 10, small: 80, large: 120 },
    img: "https://www.shutterstock.com/image-photo/berger-photo-wallpaper-260nw-2116271666.jpg",
  },
  {
    id: 3,
    title: "French Frise",
    categoty: ["c9", "c6"],
    desciption:
      "A traditional hamburger consists of a ground beef patty seasoned with salt and pepper, which is then cooked on a grill or stovetop. The patty is usually served between two halves of a soft bun or roll. It is often accompanied by various toppings and condiments, such as lettuce, tomato, onion, pickles, cheese, ketchup, mustard, and mayonnaise.",
    price: { half: 60, full: 100 },
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/Fries.png",
  },
  {
    id: 4,
    title: "Chicken Biryani",
    categoty: ["c2", "c7"],
    desciption:
      "Chicken Biryani is a flavorful and aromatic rice dish that originated in the Indian subcontinent. It is a popular and cherished dish in many South Asian countries and is enjoyed by people around the world.",
    price: { half: 110, full: 220 },
    img: "https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg",
  },
  {
    id: 5,
    title: "Veg Thali",
    categoty: ["c2", "c6"],
    desciption:
      "Veg Thali is a flavorful and aromatic rice dish that originated in the Indian subcontinent. It is a popular and cherished dish in many South Asian countries and is enjoyed by people around the world.",
    price: { half: 110, full: 220 },
    img: "https://i.ytimg.com/vi/ntGcLZu2fLM/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "Cool drinks",
    categoty: ["c10", "c6"],
    desciption:
      "Cool drinks refer to refreshing beverages that are enjoyed cold, particularly during hot weather or as a way to quench thirst. There are numerous types of cool drinks available, and they can range from non-alcoholic options to alcoholic beverages. Here are a few examples",
    price: { half: 20, full: 40 },
    img: "https://images.freekaamaal.com/post_images/1600942117.jpg",
  },
];
