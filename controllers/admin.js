const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTittle: 'Add Product', 
        path: '/admin/add-product',
        editing: false,
        isAuthenticated: req.isLoggedIn
    })
};
exports.postAddProduct = (req, res, next) => {
    const tittle = req.body.tittle;
    const author = req.body.author;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;
    const rating = req.body.rating;
    const product = new Product({
                                tittle: tittle, 
                                author: author, 
                                image: image, 
                                price: price, 
                                description: description, 
                                rating: rating,
                                userId: req.user});
    product
        .save()
        .then(result => {
        //console.log(result);
        console.log('Created Product');
        res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
};

 exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode){
        return res.redirect('/');
    }

    const prodId = req.params.productId;
    
    Product.findById(prodId)
        .then(product => {
            if (!product){
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTittle: 'Edit Product', 
                path: '/admin/edit-product',
                editing: editMode,
                product: product,
                isAuthenticated: req.isLoggedIn
            });
        })
        .catch(err => console.log(err)); 
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTittle = req.body.tittle;
    const updatedAuthor = req.body.author;
    const updatedImage = req.body.image;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const updatedRating = req.body.rating;
    
        Product.findById(prodId).then(product => {
            product.tittle = updatedTittle;
            product.author = updatedAuthor;
            product.image = updatedImage;
            product.price = updatedPrice;
            product.description = updatedDescription;
            product.rating = updatedRating;
            return product
            .save()
        })
        .then(result => {
            console.log('UPDATED PRODUCT')
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err))
};

exports.getProducts = (req, res, next) => {
    Product.find()
        //.populate('userId') //no funciono esta linea
        .then(products => {
            res.render('admin/products', {
                prods: products, 
                pageTittle: 'Admin Products', 
                path: 'admin/products',
                isAuthenticated: req.isLoggedIn
            }); 
        })
        .catch(err => console.log(err));
};

 exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByIdAndRemove(prodId)
        .then(() => {
            console.log('Destroyed PRODUCT');
            res.redirect('/admin/products');
        })
        .catch(err => console.log(err));
    res.redirect('/admin/products');
}; 