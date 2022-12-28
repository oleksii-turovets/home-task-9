// counter
let productsCountEl = document.querySelector(".cart-counter");
let addToCartBtns = document.querySelectorAll(".add-to-cart");
if (+productsCountEl.textContent === 0) {
  productsCountEl.classList.add("hide");
}
  for (let button of addToCartBtns) {
    button.addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
        if (+productsCountEl.textContent !== 0) {
          productsCountEl.classList.remove("hide");
        }
    });

  }

// addToCartBtns.forEach((item) =>
//     item.addEventListener("click", function () {
//         productsCountEl.textContent = +productsCountEl.textContent + 1;
// }));


// modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".item-details");
let btnClose = document.querySelector(".btn-close");

// console.log(moreDetailsBtns);
// console.log(modal);

// moreDetailsBtns.forEach((item) =>
//     item.addEventListener("click", function () {
//         modal.classList.add("show");
//         modal.classList.remove("hide");
//         // modal.style.display = "block";
//     })
// )

// btnClose.addEventListener("click", function () {
//     modal.classList.add("hide");
//     modal.classList.remove("show");
//     // modal.style.display = "none";
// });

// document.querySelector(".please-call").addEventListener("click", function () {
//   modal.classList.remove("show");
// });

moreDetailsBtns.forEach((item) => item.addEventListener("click", function () {
    openModal()
}));

btnClose.addEventListener("click", function () {
    closeModal()
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
})

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

// like

let likeBtns = document.querySelectorAll(".btn-like");

likeBtns.forEach((item) =>
    item.addEventListener("click", function () {
        if (item.classList.contains("btn-like-active")) {
            item.classList.remove("btn-like-active");
        } else {
            item.classList.add("btn-like-active");
        }
}))


// scroll modal

let scrollToModal = function () {
  if (window.scrollY >= document.body.clientHeight / 2) {
    openModal();
      window.removeEventListener("scroll", scrollToModal);
  }
};

window.addEventListener("scroll",scrollToModal);



