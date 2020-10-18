import { EntityPluralNames } from './interfaces';
import * as ɵngcc0 from '@angular/core';
export declare class DefaultPluralizer {
    pluralNames: EntityPluralNames;
    constructor(pluralNames: EntityPluralNames[]);
    /**
     * Pluralize a singular name using common English language pluralization rules
     * Examples: "company" -> "companies", "employee" -> "employees", "tax" -> "taxes"
     */
    pluralize(name: string): string;
    /**
     * Register a mapping of entity type name to the entity name's plural
     * @param pluralNames {EntityPluralNames} plural names for entity types
     */
    registerPluralNames(pluralNames: EntityPluralNames): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DefaultPluralizer, [{ optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DefaultPluralizer>;
}

//# sourceMappingURL=default-pluralizer.d.ts.map