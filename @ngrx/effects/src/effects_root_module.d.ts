import { Store, StoreRootModule, StoreFeatureModule } from '@ngrx/store';
import { EffectsRunner } from './effects_runner';
import { EffectSources } from './effect_sources';
import * as ɵngcc0 from '@angular/core';
export declare const ROOT_EFFECTS_INIT = "@ngrx/effects/init";
export declare class EffectsRootModule {
    private sources;
    constructor(sources: EffectSources, runner: EffectsRunner, store: Store<any>, rootEffects: any[], storeRootModule: StoreRootModule, storeFeatureModule: StoreFeatureModule);
    addEffects(effectSourceInstance: any): void;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<EffectsRootModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<EffectsRootModule>;
}

//# sourceMappingURL=effects_root_module.d.ts.map