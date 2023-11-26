import { Request, Response } from "express";
import { CreateVisitanteUseCase } from "./createVisitantes.usecase";

export class CreateVisitanteController {
  constructor() {}
  async handle(request: Request, response: Response) {
    const useCase = new CreateVisitanteUseCase();
    try {
      const result = await useCase.execute(request.body);
      return response.status(201).json(result);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}
