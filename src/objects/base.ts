import { author, name, version, description } from "../index";
import { BaseObject } from "../sdk";

export default class CacBaseObject<
    D = {},
    S = {},
    I extends any[] = any[],
    O extends any[] = any[],
    A extends any[] = any[],
    P = {},
    U = {},
    E = {}
> extends BaseObject<D, S, I, O, A, P, U, E> {
    static package = name;
    static author = author;
    static version = version;
    static description = description;
}
