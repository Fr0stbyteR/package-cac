import { DefaultImporter } from "./sdk";
import * as Sol from "@shren/sol";
import ToGuido from "./objects/to-guido";
import GuidoView from "./objects/guido-view";
import type Env from "@jspatcher/jspatcher/src/core/Env";
import dts from "../dist/sol.d.ts.txt";

export default async (env: Env) => {
    env.tsEnv.addPersistentModule("cac", dts);
    return {
        cac2guido: ToGuido,
        "guido-view": GuidoView,
        ...DefaultImporter.import("cac", Sol)
    }
};