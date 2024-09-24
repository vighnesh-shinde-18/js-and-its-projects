let menu = {
    breakfast: {
        item1: {
            img: "./idli.jpg",
            name: "Idli",
            price: 25,
            ingrediant: "Lorem ipsum dolor sit"
        },

        item2: {
            img: "./medu_vada.webp",
            name: "Medu Vada",
            price: 30,
            ingrediant: "adipisicing elit. Corporis praesentium"
        },
        item3: {
            img: "./upma.jpg",
            name: "Upma",
            price: 20,
            ingrediant: "enim rerum, maxime in!"
        },
        item4: {
            img: "./poha.jpg",
            name: "Poha",
            price: 20,
            ingrediant: "adipisicing elit. Corporis praesentium"
        },
        item5: {
            img: "./dosa.jpg",
            name: "Dosa",
            price: 35,
            ingrediant: "enim rerum, maxime in!"
        },
        item6: {
            img: "./chai.jpg",
            name: "Chai",
            price: 10,
            ingrediant: "Lorem ipsum dolor sit"
        }
    },
    lunch: {
        item1: {
            img: "./pulao.jpg",
            name: "Pulao",
            price: 50,
            ingrediant: "adipisicing elit. Corporis praesentium"
        },
        item2: {
            img: "./biryani.jpg",
            name: "Biryani",
            price: 70,
            ingrediant: "enim rerum, maxime in!"
        },
        item3: {
            img: "./khichadi.webp",
            name: "Khichadi",
            price: 40,
            ingrediant: "Lorem ipsum dolor sit"
        }
    },
    shake: {
        item1: {
            img: "./banana_shake.jpg",
            name: "Banana Milk Shake",
            price: 25,
            ingrediant: "enim rerum, maxime in!"
        },
        item2: {
            img: "./strawberry_milkshake.jpg",
            name: "Strawbery Shake",
            price: 30,
            ingrediant: "Lorem ipsum dolor sit"
        },
        item3: {
            img: "./chocolate_milkshake.jpg",
            name: "Chocolate Shake",
            price: 25,
            ingrediant: "adipisicing elit. Corporis praesentium"
        },
        item4: {
            img: "./mango_milkshake.jpg",
            name: "Mango Shake",
            price: 30,
            ingrediant: "Lorem ipsum dolor sit"
        },
        item5: {
            img: "./oreo_milkshake.jpg",
            name: "Oreo Shake",
            price: 35,
            ingrediant: "enim rerum, maxime in!"
        }
    }
}

let all_btn = document.querySelector(".all")
let breakfast_btn = document.querySelector(".breakfast")
let lunch_btn = document.querySelector(".lunch")
let shake_btn = document.querySelector(".shake")


function remove_selected_option() {
    let menu_category = document.getElementsByClassName("menu-category")
    for (let i = 0; i < 4; i++) {

        if (menu_category[i].classList.contains("menu-category-selected")) {
            menu_category[i].classList.remove("menu-category-selected")
        }
    }
}

function show_all_menu() {
    let menu_item_grid = document.querySelector(".menu-items-grid")
    menu_item_grid.innerHTML = "";

    remove_selected_option()
    all_btn.classList.add("menu-category-selected")

    for (let i = 0; i < (Object.keys(menu.shake)).length; i++) {
        let item = menu.shake[((Object.keys(menu.shake))[i])];
        menu_item_grid.insertAdjacentHTML("beforeend", `
            <div class="menu-item">
                <div class="menu-item-img"></div>
                <div class="item-info">
                     <div class="menu-heading">
                          <div class="name"> ${item.name}</div>
                          <div class="item-price">Rs. ${item.price}</div>
                     </div>
                     <div class="item-ingrediant">${item.ingrediant}</div>
                </div>
            </div>`)
        let image = menu_item_grid.lastElementChild.querySelector(".menu-item-img");
        image.style.backgroundImage = `url(${item.img})`;
        image.style.backgroundPosition = "top";

    }

    for (let i = 0; i < (Object.keys(menu.breakfast)).length; i++) {
        let item = menu.breakfast[((Object.keys(menu.breakfast))[i])];
        menu_item_grid.insertAdjacentHTML("beforeend", `
        <div class="menu-item">
            <div class="menu-item-img"></div>
            <div class="item-info">
                 <div class="menu-heading">
                      <div class="name"> ${item.name}</div>
                      <div class="item-price">Rs. ${item.price}</div>
                 </div>
                 <div class="item-ingrediant">${item.ingrediant}</div>
            </div>
        </div>`)
        let image = menu_item_grid.lastElementChild.querySelector(".menu-item-img");
        image.style.backgroundImage = `url(${item.img})`;
        image.style.backgroundPosition = "top";
    }
    for (let i = 0; i < (Object.keys(menu.lunch)).length; i++) {
        let item = menu.lunch[((Object.keys(menu.lunch))[i])];
        menu_item_grid.insertAdjacentHTML("beforeend", `
        <div class="menu-item">
            <div class="menu-item-img"></div>
            <div class="item-info">
                 <div class="menu-heading">
                      <div class="name"> ${item.name}</div>
                      <div class="item-price">Rs. ${item.price}</div>
                 </div>
                 <div class="item-ingrediant">${item.ingrediant}</div>
            </div>
        </div>`)
        let image = menu_item_grid.lastElementChild.querySelector(".menu-item-img");
        image.style.backgroundImage = `url(${item.img})`;
        image.style.backgroundPosition = "top";
    }

}
all_btn.addEventListener("click", show_all_menu)

function show_breakfast_menu() {
    let menu_item_grid = document.querySelector(".menu-items-grid")
    menu_item_grid.innerHTML = "";

    remove_selected_option()
    breakfast_btn.classList.add("menu-category-selected")

    for (let i = 0; i < (Object.keys(menu.breakfast)).length; i++) {
        let item = menu.breakfast[((Object.keys(menu.breakfast))[i])];
        menu_item_grid.insertAdjacentHTML("beforeend", `
        <div class="menu-item">
            <div class="menu-item-img"></div>
            <div class="item-info">
                 <div class="menu-heading">
                      <div class="name"> ${item.name}</div>
                      <div class="item-price">Rs. ${item.price}</div>
                 </div>
                 <div class="item-ingrediant">${item.ingrediant}</div>
            </div>
        </div>`)
        let image = menu_item_grid.lastElementChild.querySelector(".menu-item-img");
        image.style.backgroundImage = `url(${item.img})`;
    }

}
breakfast_btn.addEventListener("click", show_breakfast_menu)

function show_lunch_menu() {
    let menu_item_grid = document.querySelector(".menu-items-grid")
    menu_item_grid.innerHTML = "";

    remove_selected_option()
    lunch_btn.classList.add("menu-category-selected")

    for (let i = 0; i < (Object.keys(menu.lunch)).length; i++) {
        let item = menu.lunch[((Object.keys(menu.lunch))[i])];
        menu_item_grid.insertAdjacentHTML("beforeend", `
        <div class="menu-item">
            <div class="menu-item-img"></div>
            <div class="item-info">
                 <div class="menu-heading">
                      <div class="name"> ${item.name}</div>
                      <div class="item-price">Rs. ${item.price}</div>
                 </div>
                 <div class="item-ingrediant">${item.ingrediant}</div>
            </div>
        </div>`)
        let image = menu_item_grid.lastElementChild.querySelector(".menu-item-img");
        image.style.backgroundImage = `url(${item.img})`;
        image.style.backgroundPosition = "top";
    }
}
lunch_btn.addEventListener("click", show_lunch_menu)

function show_shake_menu() {
    let menu_item_grid = document.querySelector(".menu-items-grid")
    menu_item_grid.innerHTML = "";

    remove_selected_option()
    shake_btn.classList.add("menu-category-selected")
    for (let i = 0; i < (Object.keys(menu.shake)).length; i++) {
        let item = menu.shake[((Object.keys(menu.shake))[i])];
        menu_item_grid.insertAdjacentHTML("beforeend", `
        <div class="menu-item">
            <div class="menu-item-img"></div>
            <div class="item-info">
                 <div class="menu-heading">
                      <div class="name"> ${item.name}</div>
                      <div class="item-price">Rs. ${item.price}</div>
                 </div>
                 <div class="item-ingrediant">${item.ingrediant}</div>
            </div>
        </div>`)
        let image = menu_item_grid.lastElementChild.querySelector(".menu-item-img");
        image.style.backgroundImage = `url(${item.img})`;
        image.style.backgroundPosition = "top";
    }

}
shake_btn.addEventListener("click", show_shake_menu)


show_all_menu()