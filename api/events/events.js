const db = require('../../models');
const {Router} = require('express');

const router = Router();

router.get('/all', async (req, res) => {
    try {
        let events = await db.Event.findAll();
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send('No se pudieron obtener los Eventos');
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let event = await db.Event.findByPk(id);
        res.status(200).send(event);
    } catch (error) {
        res.status(400).send('No se pudo obtener el evento!');
    }
});

router.post("/new", async (req, res)=> {
    let name = req.body.name;
    let description = req.body.description;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let state = req.body.state;
    let maxCapacity = req.body.maxCapacity;
    let categoryId = req.body.categoryId;
    let userId = req.body.userId;
    try {
        await db.Event.create({
            name,
            description,
            startDate,
            endDate,
            state,
            maxCapacity,
            categoryId,
            userId,
        });
        res.status(200).send('Evento Creado con exito!');
    } catch (error) {
        console.log(error);
        res.status(400).send('El evento no se pudo crear!')
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let {name, description, startDate, endDate, state, maxCapacity, categoryId, userId} = req.body;
        await db.Event.update(
            {
                name,
                description,
                startDate,
                endDate,
                state,
                maxCapacity,
                categoryId,
                userId,
            },
            {
                where: {
                    id,
                }
            }
        );
        res.status(200).send('Evento actualizado correctamente!');
    } catch (error) {
        res.status(400).send('No se pudo actualizar el Evento!');
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await db.Event.destroy({
            where:{
                id,
            }
        });
        res.status(200).send('Evento eliminado correctamente!');
    } catch (error) {
        res.status(400).send('No se pudo eliminar el Evento');
    }
});

module.exports = router;