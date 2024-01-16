import {Router} from 'express'
import {
    detalleTratamiento,
    registrarTratamiento,
    actualizarTratamiento,
    eliminarTratamiento,
    cambiarEstado
} from "../controllers/tratamiento_controller.js";
import verificarAutenticacion from "../middlewares/autenticacion.js";
const router = Router()
import { validacionTratamiento } from '../middlewares/validacionTratamiento.js';
router.post('/tratamiento/registro',(req,res)=>res.send("Registrar tratamientos"))
router.get('/tratamiento/:id',(req,res)=>res.send("Detalle del tratamiento"))
router.put('/tratamiento/:id',(req,res)=>res.send("Actualizar tratamiento"))
router.delete('/tratamiento/:id',(req,res)=>res.send("Eliminar tratamiento"))
router.post('/tratamiento/estado/:id',(req,res)=>res.send("Listar tratamientos"))

router.post('/tratamiento/registro',registrarTratamiento)
router
    .route('/tratamiento/:id')
    .get(detalleTratamiento)
    .put(actualizarTratamiento)
    .delete(eliminarTratamiento)

router.put('/tratamiento/estado/:id',cambiarEstado)
router.post('/tratamiento/registro',verificarAutenticacion,registrarTratamiento)
router
    .route('/tratamiento/:id')
    .get(verificarAutenticacion,detalleTratamiento)
    .put(verificarAutenticacion,actualizarTratamiento)
    .delete(verificarAutenticacion,eliminarTratamiento)

router.put('/tratamiento/estado/:id',verificarAutenticacion,cambiarEstado)
router.post('/tratamiento/registro',verificarAutenticacion,validacionTratamiento,registrarTratamiento)

export default router