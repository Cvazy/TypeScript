interface ITotalPrice {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: ITotalPrice): number => {
  if (!isInstallment) {
    return price;
  }

  return Math.round((price / months / 100) * (100 - discount));
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});

console.log(price); // 6250
