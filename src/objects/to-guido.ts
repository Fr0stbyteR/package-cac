import type { IInletsMeta, IOutletsMeta } from "@jspatcher/jspatcher/src/core/objects/base/AbstractObject";
import type GuidoWorker from "@jspatcher/jspatcher/src/core/workers/GuidoWorker";
import type { Chord, Note, Pitch, Roll, Sequence } from "@shren/sol";
import { isBang } from "../sdk";
import CacDefaultObject from "./default";

export default class ToGuido extends CacDefaultObject<{}, {}, [Chord | Note | Pitch | Roll | Sequence], [$ARHandler]> {
    static inlets: IInletsMeta = [{
        isHot: true,
        type: "object",
        description: "A musical object: Chord | Note | Pitch | Roll | Sequence"
    }];
    static outlets: IOutletsMeta = [{
        type: "anything",
        description: "A Guido reference for Guido View"
    }];
    _: { guido: GuidoWorker, buffer: $ARHandler } = { guido: undefined, buffer: undefined }
    subscribe() {
        super.subscribe();
        this.on("preInit", () => {
            this.inlets = 1;
            this.outlets = 1;
        });
        this.on("postInit", async () => {
            this._.guido = await this.env.getGuido();
        });
        this.on("inlet", async ({ data, inlet }) => {
            if (inlet === 0) {
                if (isBang(data) && typeof this._.buffer === "number") {
                    this.outlet(0, this._.buffer);
                } else if (typeof data === "object" && data.toGuidoAR) {
                    this.outlet(0, await data.toGuidoAR(this._.guido));
                }
            }
        });
    }
}
