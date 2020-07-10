var initalState = [
  {
    id: 1,
    name: "Iphone 6s",
    price: 300,
    status: true,
  },
  {
    id: 2,
    name: "Iphone XS MAX",
    price: 400,
    status: false,
  },
  {
    id: 1,
    name: "Iphone 11 Pro",
    price: 340,
    status: true,
  },
];

const products = (state = initalState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
