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

// let likeBtns = document.querySelectorAll(".btn-like");

// likeBtns.forEach((item) =>
//     item.addEventListener("click", function () {
//         if (item.classList.contains("btn-like-active")) {
//             item.classList.remove("btn-like-active");
//         } else {
//             item.classList.add("btn-like-active");
//         }
//     }))

let likeBtns = document.querySelectorAll(".btn-like");

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    // if (item.classList.contains("btn-like-active")) {
    //         item.classList.remove("btn-like-active");
    //     } else {
    //         item.classList.add("btn-like-active");
    //     }
    item.classList.toggle("btn-like-active");
  })
);

// scroll modal

/* my version */
// let scrollToModal = function () {
//   if (window.scrollY >= document.body.clientHeight / 2) {
//     openModal();
//       window.removeEventListener("scroll", scrollToModal);
//   }
// };

// window.addEventListener("scroll",scrollToModal);

/* lessons version */
// function showModalByScroll() {
//   if (window.scrollY >= document.body.scrollHeight / 2) {
//     openModal();
//     window.removeEventListener("scroll", showModalByScroll);
//   }
// }

// window.addEventListener("scroll", showModalByScroll);

// slider

$(".slider-content").slick({
  autoplay: true,
  dots: true,
  draggable: true,
});

/* product quantity*/

// function Car(model,year,color) {
//   this.model = model;
//   this.year = year;
//   this.color = color;

//   this.hi = function () {
//     console.log("Hi " + this.model);
//   };

//   this.hello = function () {
//     console.log("Hello " + this.model);
//   };
// }

// class Car{
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }

//   this.hi = function () {
//     console.log("Hi " + this.model);
//   };

//   this.hello = function () {
//     console.log("Hello " + this.model);
//   };
// }

// let audi = new Car("A6", 2020, "black");
// let bmw = new Car("328", 2010, "gray");
// let mercedes = new Car("c300", 2000, "white");

// console.log(audi);
// console.log(bmw);
// console.log(mercedes);

// audi.hi();
// mercedes.hello();

let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementBtns = document.querySelectorAll(".increment-btn");
let productsCount = document.querySelectorAll(".product-quantity input");

// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(productsCount);


function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  }

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

// const counter1 = new Counter(incrementBtns, decrementBtns, productsCount);
// console.log(counter1);

// for (let counter of productsCount) {
//   console.log(counter);
// }

productsCount.forEach((item, i) => {
  const counter = new Counter(
    incrementBtns[i],
    decrementBtns[i],
    productsCount[i]
  );
});


// counter
let productsCountEl = document.querySelector(".cart-counter");
let addToCartBtns = document.querySelectorAll(".add-to-cart");
if (+productsCountEl.textContent === 0) {
  productsCountEl.classList.add("hide");
}
  // for (let button of addToCartBtns) {
  //   button.addEventListener("click", function () {
  //       productsCountEl.textContent = +productsCountEl.textContent + 1;
  //       if (+productsCountEl.textContent !== 0) {
  //         productsCountEl.classList.remove("hide");
  //       }
  //   });

  // }

addToCartBtns.forEach((item, i) =>
    item.addEventListener("click", function () {
      productsCountEl.textContent = +productsCountEl.textContent + +productsCount[i].value;
      if (+productsCountEl.textContent !== 0) {
        productsCountEl.classList.remove("hide");
      }
}));

