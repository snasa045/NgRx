/**
 * Generates a string id beginning 'CRID',
 * followed by a monotonically increasing integer for use as a correlation id.
 * As they are produced locally by a singleton service,
 * these ids are guaranteed to be unique only
 * for the duration of a single client browser instance.
 * Ngrx entity dispatcher query and save methods call this service to generate default correlation ids.
 * Do NOT use for entity keys.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CorrelationIdGenerator {
    /** Seed for the ids */
    protected seed: number;
    /** Prefix of the id, 'CRID; */
    protected prefix: string;
    /** Return the next correlation id */
    next(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CorrelationIdGenerator, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CorrelationIdGenerator>;
}

//# sourceMappingURL=correlation-id-generator.d.ts.map