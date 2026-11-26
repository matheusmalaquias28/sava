import type { SolutionDetail } from "./types";
import { consorcio } from "./consorcio";
import { doEo } from "./d-o-e-e-o";
import { responsabilidadeCivil } from "./responsabilidade-civil";
import { saudeOdonto } from "./saude-e-odonto";
import { seguroCyber } from "./seguro-cyber";
import { seguroEmpresarial } from "./seguro-empresarial";
import { seguroFrota } from "./seguro-frota";
import { seguroGarantia } from "./seguro-garantia";
import { sociosExecutivos } from "./socios-e-executivos";
import { transporteEquipamentos } from "./transporte-e-equipamentos";
import { vidaEmGrupo } from "./vida-em-grupo";

/** Conteúdo detalhado de cada página de solução, pelo slug. */
export const solutionDetails: Record<string, SolutionDetail> = {
  "seguro-empresarial": seguroEmpresarial,
  "seguro-frota": seguroFrota,
  "transporte-e-equipamentos": transporteEquipamentos,
  "vida-em-grupo": vidaEmGrupo,
  "saude-e-odonto": saudeOdonto,
  "socios-e-executivos": sociosExecutivos,
  "seguro-cyber": seguroCyber,
  "d-o-e-e-o": doEo,
  "responsabilidade-civil": responsabilidadeCivil,
  "seguro-garantia": seguroGarantia,
  consorcio,
};

export function getSolutionDetail(slug: string): SolutionDetail | undefined {
  return solutionDetails[slug];
}
