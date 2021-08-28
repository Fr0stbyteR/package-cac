
import { DefaultImporter } from "./sdk";
import * as Sol from "@shren/sol";
import ToGuido from "./objects/to-guido";
import GuidoView from "./objects/guido-view";

export default async () => ({
    cac2guido: ToGuido,
    "guido-view": GuidoView,
    ...DefaultImporter.import("cac", Sol)
});