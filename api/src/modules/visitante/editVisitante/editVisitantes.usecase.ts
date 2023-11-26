import { prismaClient } from "../../../infra/database/prismaClient";

type EditVisitanteRequest = {
  code: string;
  nome: string;
};

export class EditVisitanteUseCase {
  constructor() {}
  async execute(data: EditVisitanteRequest) {
    const editedVisitante = await prismaClient.visitante.update({
      where: {
        code: data.code,
      },
      data: {
        nome: data.nome,
      },
    });
    return editedVisitante;
  }
}
