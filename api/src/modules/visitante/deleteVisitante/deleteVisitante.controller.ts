import { Request, Response } from "express";
import { DeleteVisitanteUseCase } from "./deleteVisitantes.usecase";

export class DeleteVisitanteController {
  constructor() {}
  async handle(request: Request, response: Response) {
    const useCase = new DeleteVisitanteUseCase();
    try {
      const result = await useCase.execute(request.body);
      return response.status(200).json("Visitante deletado com sucesso!");
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}
