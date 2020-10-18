import { MetaReducer } from '@ngrx/store';
import { EntityAction } from '../actions/entity-action';
import { EntityCollection } from './entity-collection';
import { EntityCollectionReducer, EntityCollectionReducerFactory } from './entity-collection-reducer';
/** A hash of EntityCollectionReducers */
import * as ɵngcc0 from '@angular/core';
export interface EntityCollectionReducers {
    [entity: string]: EntityCollectionReducer<any>;
}
/**
 * Registry of entity types and their previously-constructed reducers.
 * Can create a new CollectionReducer, which it registers for subsequent use.
 */
export declare class EntityCollectionReducerRegistry {
    private entityCollectionReducerFactory;
    protected entityCollectionReducers: EntityCollectionReducers;
    private entityCollectionMetaReducer;
    constructor(entityCollectionReducerFactory: EntityCollectionReducerFactory, entityCollectionMetaReducers?: MetaReducer<EntityCollection, EntityAction>[]);
    /**
     * Get the registered EntityCollectionReducer<T> for this entity type or create one and register it.
     * @param entityName Name of the entity type for this reducer
     */
    getOrCreateReducer<T>(entityName: string): EntityCollectionReducer<T>;
    /**
     * Register an EntityCollectionReducer for an entity type
     * @param entityName - the name of the entity type
     * @param reducer - reducer for that entity type
     *
     * Examples:
     *   registerReducer('Hero', myHeroReducer);
     *   registerReducer('Villain', myVillainReducer);
     */
    registerReducer<T>(entityName: string, reducer: EntityCollectionReducer<T>): EntityCollectionReducer<T>;
    /**
     * Register a batch of EntityCollectionReducers.
     * @param reducers - reducers to merge into existing reducers
     *
     * Examples:
     *   registerReducers({
     *     Hero: myHeroReducer,
     *     Villain: myVillainReducer
     *   });
     */
    registerReducers(reducers: EntityCollectionReducers): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EntityCollectionReducerRegistry, [null, { optional: true; }]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<EntityCollectionReducerRegistry>;
}

//# sourceMappingURL=entity-collection-reducer-registry.d.ts.map