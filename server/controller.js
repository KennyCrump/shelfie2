module.exports = {

    readAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all().then(items => {
            res.status(200).send(items)
        })
    },
    create: (req, res) => {
        const db = req.app.get('db')
        let {name, price, image} = req.body
        // console.log(req.body)
        // console.log("name", name, "price", price, "image", image)
        db.create({name, price, image} ).then(items => {
            res.status(200).send(items)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        db.delete_product({id}).then(items => {
            res.status(200).send(items)
        })
    },

    update: (req, res) => {
        const db = req.app.get('db')
        let {id} = req.params
        let {image, name, price} = req.body
        db.update_product({id, image, name, price: +price}).then(items => res.status(200).send(items))
    }

}