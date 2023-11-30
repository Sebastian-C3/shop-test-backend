const shopIndex = (req, res) => {
    res.render("shop/shop")
}

const itemGet = (req, res) => {
    res.render("shop/item")
}

const itemAdd = (req, res) => {
    res.send("/shop/item/:id/add - se agrega item")
}

const cartGet = (req, res) => {
    res.render("shop/carrito")
}

const cartPost = (req, res) => {
    res.send("/shop/cart - se agrega carrito")
}


module.exports = {
    shopIndex,
    itemGet,
    itemAdd,
    cartGet,
    cartPost
}