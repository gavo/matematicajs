const btn = document.querySelector("#calculate");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const pResult = document.querySelector("#result");

const couponList = [
  { code: "gavo", discount: 25 },
  { code: "free", discount: 99 },
  { code: "cool", discount: 45 },
  { code: "ok", discount: 5 },
];

btn.addEventListener("click", calcularPreciosConDescuento);

function calcularPreciosConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;
  let discount = 0;

  if (!price) {
    pResult.innerText = "Rellena los campos";
    return;
  }
  const couponSelected = couponList.find((c) => c.code === coupon);
  if (couponSelected) {
    discount = couponSelected.discount;
  } else {
    pResult.innerText = "No se ha encontrado el Cupon";
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}
