import { viewData } from "./view/grafico.js";
import { get, getPercentuale } from "./cache/get.js";

viewData(get, "risultati","Numero seggi ");
viewData(getPercentuale, "percentuali","Percentuale voti ");
