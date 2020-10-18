import { ModuleWithProviders, Type } from '@angular/core';
import { EffectsFeatureModule } from './effects_feature_module';
import { EffectsRootModule } from './effects_root_module';
import * as ɵngcc0 from '@angular/core';
export declare class EffectsModule {
    static forFeature(featureEffects: Type<any>[]): ModuleWithProviders<EffectsFeatureModule>;
    static forRoot(rootEffects: Type<any>[]): ModuleWithProviders<EffectsRootModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<EffectsModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<EffectsModule>;
}
export declare function createSourceInstances(...instances: any[]): any[];

//# sourceMappingURL=effects_module.d.ts.map