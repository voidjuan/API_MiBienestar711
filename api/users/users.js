const db = require('../../models');
const {Router} = require('express');

const router = Router();

router.get('/all', async (req, res) => {
    try {
        let users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send('No se pudieron obtener los Usuarios');
    }
});

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let user = await db.User.findByPk(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send('No se pudo obtener el usuario!');
    }
});

router.post("/new", async (req, res)=> {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let phone = req.body.phone;
    let birthday = req.body.birthday;
    let document = req.body.document;
    let gender = req.body.gender;
    let state = req.body.state;
    let rolId = req.body.rolId;
    let passwordResetToken = req.body.passwordResetToken;
    let passwordResetExpires = req.body.passwordResetExpires;
    try {
        await db.User.create({
            username,
            email,
            password,
            phone,
            birthday,
            document,
            gender,
            state,
            rolId,
            passwordResetToken,
            passwordResetExpires,
        });
        res.status(200).send('Usuario Creado con exito!');
    } catch (error) {
        console.log(error);
        res.status(400).send('El Usuario no se pudo crear!')
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let {username, email, password, phone, birthday, document, gender, state, rolId, passwordResetToken, passwordResetExpires} = req.body;
        await db.User.update(
            {
                username, 
                email, 
                password, 
                phone, 
                birthday, 
                document, 
                gender, 
                state, 
                rolId, 
                passwordResetToken, 
                passwordResetExpires,
            },
            {
                where: {
                    id,
                }
            }
        );
        res.status(200).send('Usuario actualizado correctamente!');
    } catch (error) {
        res.status(400).send('No se pudo actualizar el Usuario!');
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id;
        await db.User.destroy({
            where:{
                id,
            }
        });
        res.status(200).send('Usuario eliminado correctamente!');
    } catch (error) {
        res.status(400).send('No se pudo eliminar el usuario');
    }
});

module.exports = router;