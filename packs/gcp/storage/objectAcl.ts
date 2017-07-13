// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class ObjectAcl extends lumi.NamedResource implements ObjectAclArgs {
    public readonly bucket: string;
    public readonly object: string;
    public readonly predefinedAcl?: string;
    public readonly roleEntity?: string[];

    constructor(name: string, args: ObjectAclArgs) {
        super(name);
        this.bucket = args.bucket;
        this.object = args.object;
        this.predefinedAcl = args.predefinedAcl;
        this.roleEntity = args.roleEntity;
    }
}

export interface ObjectAclArgs {
    readonly bucket: string;
    readonly object: string;
    readonly predefinedAcl?: string;
    readonly roleEntity?: string[];
}
