const db = require('../../models');
const {Router} = require('express');

const router = Router();

router.get('/all', async (req, res) => {
    try {
        let rols = await db.Rol.findAll();
        res.status(200).send(rols);
    } catch (error) {
        res.status(400).send('No se pudieron obtener los Roles');
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let rol = await db.Rol.findByPk(id);
        res.status(200).send(rol);
    } catch (error) {
        res.status(400).send('No se pudo obtener el rol!');
    }
});

router.post("/new", async (req, res)=> {
    let name = req.body.name;
    try {
        await db.Rol.create({
            name,
        });
        res.status(200).send('Rol Creado con exito!');
    } catch (error) {
        res.status(400).send('El Rol no se pudo crear!')
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let {name} = req.body;
        await db.Rol.update(
            {name},
            {
                where: {
                    id,
                }
            }
        );
        res.status(200).send('Rol actualizado correctamente!');
    } catch (error) {
        res.status(400).send('No se pudo actualizar el rol!');
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await db.Rol.destroy({
            where:{
                id,
            }
        });
        res.status(200).send('Rol eliminado correctamente!');
    } catch (error) {
        res.status(400).send('No se pudo eliminar el rol');
    }
});

module.exports = router;