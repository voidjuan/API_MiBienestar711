const db = require('../../models');
const {Router} = require('express');

const router = Router();

router.get('/all', async (req, res) => {
    try {
        let users = await db.User.findAll();
        res.status(200).send(users);
    } catch (error) {
        console.error('Error específico:', error);
        res.status(400).json({ error: error.message });
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
    let RolId = req.body.RolId;
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
            RolId,
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
        let {username, email, password, phone, birthday, document, gender, state, RolId, passwordResetToken, passwordResetExpires} = req.body;
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
                RolId, 
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
        console.error('Error específico:', error);
        res.status(400).json({ error: error.message });
        res.status(400).send('No se pudo eliminar el usuario');
    }
});

// Agregar este endpoint al archivo api/users/users.js

router.post('/login', async (req, res) => {
    try {
        let { username, password } = req.body;
        
        // Validar que se envíen ambos campos
        if (!username || !password) {
            return res.status(400).json({ 
                error: 'Username y password son requeridos' 
            });
        }

        // Buscar el usuario por username
        let user = await db.User.findOne({
            where: {
                username: username
            },
            include: [{
                model: db.Rol,
                attributes: ['name'] // Incluir el nombre del rol
            }]
        });

        // Verificar si el usuario existe y la contraseña coincide
        if (!user || user.password !== password) {
            return res.status(401).json({ 
                error: 'Credenciales incorrectas' 
            });
        }

        // Verificar que el usuario esté activo
        if (user.state !== 'Activo') {
            return res.status(403).json({ 
                error: 'Usuario inactivo. Contacte al administrador.' 
            });
        }

        // Login exitoso - devolver datos del usuario (sin la contraseña)
        const userData = {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            birthday: user.birthday,
            document: user.document,
            gender: user.gender,
            state: user.state,
            rol: user.Rol ? user.Rol.name : null,
            RolId: user.RolId
        };

        res.status(200).json({
            message: 'Login exitoso',
            user: userData
        });

    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ 
            error: 'Error interno del servidor' 
        });
    }
});

module.exports = router;