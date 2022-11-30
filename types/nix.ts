export type NixType = "attrset" | "list" | "string" | "int" | "bool" | "any";
export const nixTypes: NixType[] = [
    "any",
    "attrset",
    "list",
    "string",
    "bool",
    "int",
  ];
  
export type FuncData = {
    name: string;
    info: NixFunctionMeta;
};

export type NixFunctionMeta = {
    "attr-path": string;
    "doc-url": string;
    source: string;
    from: NixType;
    to: NixType;
}

export type NixFunctionSet = {[name:string]: NixFunctionMeta}