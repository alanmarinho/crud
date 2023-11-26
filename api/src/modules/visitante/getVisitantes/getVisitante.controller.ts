import { Request, Response } from "express";
import { GetVisitanteUseCase } from "./getVisitantes.usecase";

export class GetVisitanteController {
  constructor() {}
  async handle(request: Request, response: Response) {
    const useCase = new GetVisitanteUseCase();
    try {
      const result = await useCase.execute(request.body);
      return response.status(200).json(result);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
  }
}
