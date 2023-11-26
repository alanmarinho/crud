import { prismaClient } from "../../../infra/database/prismaClient";

type GetVisitanteRequest = {
  code?: string;
  nome?: string;
};

export class GetVisitanteUseCase {
  constructor() {}

  async execute(data: GetVisitanteRequest) {
    if (data.code) {
      const getVisitante = await prismaClient.visitante.update({
        where: {
          code: data.code,
        },
        data: {
          nome: data.nome,
        },
      });
      return getVisitante;
    } else if (data.nome) {
      const getVisitante = await prismaClient.visitante.findMany({
        where: {
          nome: {
            contains: data.nome,
            mode: "insensitive",
          },
        },
      });
      return getVisitante;
    } else {
      const getVisitante = await prismaClient.visitante.findMany();
      return getVisitante;
    }
  }
}
