/**
 * Default options for EntityDispatcher behavior
 * such as whether `add()` is optimistic or pessimistic by default.
 * An optimistic save modifies the collection immediately and before saving to the server.
 * A pessimistic save modifies the collection after the server confirms the save was successful.
 * This class initializes the defaults to the safest values.
 * Provide an alternative to change the defaults for all entity collections.
 */
import * as ɵngcc0 from '@angular/core';
export declare class EntityDispatcherDefaultOptions {
    /** True if added entities are saved optimistically; false if saved pessimistically. */
    optimisticAdd: boolean;
    /** True if deleted entities are saved optimistically; false if saved pessimistically. */
    optimisticDelete: boolean;
    /** True if updated entities are saved optimistically; false if saved pessimistically. */
    optimisticUpdate: boolean;
    /** True if upsert entities are saved optimistically; false if saved pessimistically. */
    optimisticUpsert: boolean;
    /** True if entities in a cache saveEntities request are saved optimistically; false if saved pessimistically. */
    optimisticSaveEntities: boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EntityDispatcherDefaultOptions, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<EntityDispatcherDefaultOptions>;
}

//# sourceMappingURL=entity-dispatcher-default-options.d.ts.map