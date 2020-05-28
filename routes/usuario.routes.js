import routerx from 'express-promise-router';
import usuarioController from '../controllers/Usuario.controller';

const router=routerx();


router.post('/agregar', usuarioController.AddUsuario);
router.get('/listar',usuarioController.ListUsuario);
router.delete('/eliminar/:id',usuarioController.DelUsuario);
router.put('/actualizar/:id', usuarioController.UpUsuario);
router.get('/listarone/:id',usuarioController.OneUsuario);

export default router;