import { EntityCollection } from './entity-collection';
import { EntityDefinitionService } from '../entity-metadata/entity-definition.service';
import * as ɵngcc0 from '@angular/core';
export declare class EntityCollectionCreator {
    private entityDefinitionService?;
    constructor(entityDefinitionService?: EntityDefinitionService | undefined);
    /**
     * Create the default collection for an entity type.
     * @param entityName {string} entity type name
     */
    create<T = any, S extends EntityCollection<T> = EntityCollection<T>>(entityName: string): S;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EntityCollectionCreator, [{ optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<EntityCollectionCreator>;
}
export declare function createEmptyEntityCollection<T>(entityName?: string): EntityCollection<T>;

//# sourceMappingURL=entity-collection-creator.d.ts.map