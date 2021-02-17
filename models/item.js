class Item {
  constructor(
    id,
    title,
    description,
    category,
    location,
    images,
    price,
    date,
    deliveryType,
    user
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.location = location;
    this.images = images;
    this.price = price;
    this.date = date;
    this.deliveryType = deliveryType;
    this.user = user;
  }
}

export default Item;
