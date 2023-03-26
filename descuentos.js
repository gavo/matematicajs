const btn = document.querySelector("#calculate");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const pResult = document.querySelector("#result");

const couponList = {
  gavo: 15,
  free: 20,
  another: 25,
  cool: 50,
};

btn.addEventListener("click", calcularPreciosConDescuento);

function calcularPreciosConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;
  let discount = 0;

  if (!price) {
    pResult.innerText = "Rellena los campos";
    return;
  }

  if (Object.getOwnPropertyNames(couponList).find((a) => a === coupon)) {
    discount = couponList[coupon];
  } else {
    pResult.innerText = "No se ha encontrado el Cupon";
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}
