import { EditVisitanteController } from "../modules/visitante/editVisitante/editVisitante.controller";
import { CreateVisitanteController } from "../modules/visitante/createVisitante/createVisitante.controller";
import { DeleteVisitanteController } from "../modules/visitante/deleteVisitante/deleteVisitante.controller";
import { GetVisitanteController } from "../modules/visitante/getVisitantes/getVisitante.controller";

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("API on");
});

router.post("/addVisitante", (req, res) => {
  new CreateVisitanteController().handle(req, res);
});

router.post("/deleteVisitante", (req, res) => {
  new DeleteVisitanteController().handle(req, res);
});

router.post("/editVisitante", (req, res) => {
  new EditVisitanteController().handle(req, res);
});

router.post("/getVisitante", (req, res) => {
  new GetVisitanteController().handle(req, res);
});

export default router;
