import { Request, Response } from "express";
import { EditVisitanteUseCase } from "./editVisitantes.usecase";

export class EditVisitanteController {
  constructor() {}
  async handle(request: Request, response: Response) {
    const useCase = new EditVisitanteUseCase();
    try {
      const result = await useCase.execute(request.body);
      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}
