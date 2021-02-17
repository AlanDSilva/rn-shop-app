import Item from "../models/item";

const ITEMS = [
  new Item(
    "p1",
    "Red Shirt",
    "New red shirt",
    "Clothes",
    { city: "Helsinki", country: "Finland" },
    [
      "https://wpvip.ted.com/wp-content/uploads/sites/2/2012/08/tiny.jpg",
      "https://api.time.com/wp-content/uploads/2019/03/jacquemus-tiny-purse.jpg?w=1600&quality=70",
    ],
    30,
    "20-01-2021",
    "Pickup",
    { id: "u1", username: "user1" }
  ),
  new Item(
    "p2",
    "Baige Cardigan",
    "Old beige cardigan found under piano",
    "Clothes",
    { city: "Helsinki", country: "Finland" },
    [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCP0RBjGdgxpR145iFBNwPXSWKouiIWW9NsVt9luvMeq3rP7gVvrcsj-hbhco8iTVLdVoGdff&usqp=CAc",
      "https://cdn.aboutstatic.com/file/c1a4c5f18b2e45bbae947678fd04ba77?width=2000&height=2666&quality=75&bg=F4F4F5&trim=1",
    ],
    80,
    "20-01-2021",
    "Pickup",
    { id: "u2", username: "user2" }
  ),
  new Item(
    "p3",
    "Pink hat",
    "Wear it to make a statement!!",
    "Clothes",
    { city: "Oulu", country: "Finland" },
    [
      "https://cdn.aboutstatic.com/file/c1a4c5f18b2e45bbae947678fd04ba77?width=2000&height=2666&quality=75&bg=F4F4F5&trim=1",
      "https://cdn.aboutstatic.com/file/c1a4c5f18b2e45bbae947678fd04ba77?width=2000&height=2666&quality=75&bg=F4F4F5&trim=1",
    ],
    55,
    "20-01-2021",
    "Shipping",
    { id: "u3", username: "user3" }
  ),
];

export default ITEMS;
