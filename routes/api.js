const express = require("express");
const router = express.Router();
const {
  vistaGatitos,
  crearGatito,
  vistaUnGatito,
  editarGatito,
  eliminarGatito,
} = require("../controller/controller.js");
const { check, validationResult, body } = require("express-validator");

/* GET users listing. */
router.get("/ver", vistaGatitos);
router.get("/ver/:id", vistaUnGatito);
router.post(
  "/crear",
  [
    check("name")
      .not()
      .isEmpty()
      .isLength({ max: 15, min: 3 })
      .withMessage("El nombre debe tener más de 3 y menos de 15 caracteres..."),
  ],
  crearGatito
);
router.put("/editar/:id", editarGatito);
router.delete("/eliminar/:id", eliminarGatito);

module.exports = router;
