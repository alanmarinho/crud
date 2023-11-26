import { prismaClient } from "../../../infra/database/prismaClient";

type DeleteVisitanteRequest = {
  code?: number;
  deleteAll?: boolean;
};

export class DeleteVisitanteUseCase {
  constructor() {}
  async execute(data: DeleteVisitanteRequest) {
    if (data.code) {
      const deletedVisitante = await prismaClient.visitante.delete({
        where: {
          code: data.code,
        },
      });
      return deletedVisitante;
    } else {
      if (data.deleteAll) {
        const deletedVisitante = await prismaClient.visitante.deleteMany();
        return deletedVisitante;
      } else {
        throw new Error("Visitante não encontrado");
      }
    }
  }
}
