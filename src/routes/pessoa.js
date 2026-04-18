const express = require("express");
const ControllerExercicio = require("../controllers/pessoa.js");

const router = express.Router();

const controllers = new ControllerExercicio()

router.get("/api/pessoas/", controllers.PegarTodos);
router.get("/api/pessoas/:id", controllers.PegarUm);
router.post("/api/pessoas", controllers.Adicionar);
router.put("/api/pessoas/:id", controllers.Alterar);
router.delete("/api/pessoas/:id", controllers.Deletar);

module.exports = router;
