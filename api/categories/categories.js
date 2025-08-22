const db = require('../../models');
const {Router} = require('express');

const router = Router();

router.get("/", (req, res) => {
    res.send({Title:'Hello ADSO!'});
});

router.get('/all', async (req, res) => {
    try {
        let categories = await db.Category.findAll();
        res.status(200).send(categories);
    } catch (error) {
        res.status(400).send('No se pudieron obtener las Categorias');
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let category = await db.Category.findByPk(id);
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send('No se pudo obtener el categorias!');
    }
});

router.post("/new", async (req, res)=> {
    let name = req.body.name;
    let description = req.body.description;
    let image = req.body.image;
    try {
        await db.Category.create({
            name,
            description,
            image,
        });
        res.status(200).send('Categoria Creada con exito!');
    } catch (error) {
        res.status(400).send('La Categoria no se pudo crear!')
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let {name, description, image} = req.body;
        await db.Category.update(
            {name, description, image},
            {
                where: {
                    id,
                }
            }
        );
        res.status(200).send('Categoria actualizada correctamente!');
    } catch (error) {
        res.status(400).send('No se pudo actualizar la categoria!');
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await db.Category.destroy({
            where:{
                id,
            }
        });
        res.status(200).send('Categoria eliminada correctamente!');
    } catch (error) {
        res.status(400).send('No se pudo eliminar la categoria');
    }
});

module.exports = router;