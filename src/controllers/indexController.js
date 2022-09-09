const products = require('../data/products');
const about = require('../data/about');

module.exports = {
    index : (req,res) => {
        return res.render('index',{
            products,
            about
        })
    },
    detail : (req,res) => {
        const {id} = req.params;
        const product = products.find(product => product.id === +id);
        return res.render('detalleMenu', {
            product
        })
    }
}