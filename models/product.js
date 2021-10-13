const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }

});

module.exports = mongoose.model('Product', productSchema);
/*const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
    constructor(tittle, author, image, price, description, rating, id, userId){
        this.tittle = tittle;
        this.author = author;
        this.image = image;
        this.price = price;
        this.description = description;
        this.rating = rating;
        this._id = id;
        this.userId = userId;
    }

    save(){
        const db = getDb();
        let dbOp;
        if (this._id){
            dbOp = db
                .collection('products')
                .updateOne({_id: new mongodb.ObjectId(this._id)}, {$set: this})
        } else {
            dbOp = db
                .collection('products')
                .insertOne(this)
        }
        
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
            console.log(err)
        });
    }

    static fetchAll(){
        const db = getDb();
        return db
            .collection('products')
            .find()
            .toArray()
            .then(products => {
                console.log(products);
                return products;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findByPk(prodId){
        const db = getDb();
        return db
            .collection('products')
            .find({_id: new mongodb.ObjectId(prodId)})
            .next()
            .then(product => {
                console.log(product);
                return product;
            })
            .catch(err => {
                console.log(err);
            })
    }

    static deleteByPk(prodId){
        const db = getDb();
        return db.collection('products')
            .deleteOne( {_id: new mongodb.ObjectId(prodId)} )
            .then(result => {
                console.log('Deleted');
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = Product;
*/