import { prismaClient } from "../../../infra/database/prismaClient";

type CreateVisitanteRequest = {
  nome: string;
};

export class CreateVisitanteUseCase {
  constructor() {}
  async execute(data: CreateVisitanteRequest) {
    const newVisitante = await prismaClient.visitante.create({
      data: {
        ...data,
      },
    });
    return newVisitante;
  }
}
