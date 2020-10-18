import { ModuleWithProviders, OnDestroy, InjectionToken, Injector } from '@angular/core';
import { Action, ActionReducer, ActionReducerMap, ActionReducerFactory, StoreFeature, InitialState, MetaReducer, RuntimeChecks } from './models';
import { ActionsSubject } from './actions_subject';
import { ReducerManager, ReducerObservable } from './reducer_manager';
import { ScannedActionsSubject } from './scanned_actions_subject';
import { Store } from './store';
import * as ɵngcc0 from '@angular/core';
export declare class StoreRootModule {
    constructor(actions$: ActionsSubject, reducer$: ReducerObservable, scannedActions$: ScannedActionsSubject, store: Store<any>, guard: any);
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<StoreRootModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<StoreRootModule>;
}
export declare class StoreFeatureModule implements OnDestroy {
    private features;
    private featureReducers;
    private reducerManager;
    constructor(features: StoreFeature<any, any>[], featureReducers: ActionReducerMap<any>[], reducerManager: ReducerManager, root: StoreRootModule);
    ngOnDestroy(): void;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<StoreFeatureModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<StoreFeatureModule>;
}
export interface StoreConfig<T, V extends Action = Action> {
    initialState?: InitialState<T>;
    reducerFactory?: ActionReducerFactory<T, V>;
    metaReducers?: MetaReducer<T, V>[];
}
export interface RootStoreConfig<T, V extends Action = Action> extends StoreConfig<T, V> {
    runtimeChecks?: Partial<RuntimeChecks>;
}
export declare class StoreModule {
    static forRoot<T, V extends Action = Action>(reducers: ActionReducerMap<T, V> | InjectionToken<ActionReducerMap<T, V>>, config?: RootStoreConfig<T, V>): ModuleWithProviders<StoreRootModule>;
    static forFeature<T, V extends Action = Action>(featureName: string, reducers: ActionReducerMap<T, V> | InjectionToken<ActionReducerMap<T, V>>, config?: StoreConfig<T, V> | InjectionToken<StoreConfig<T, V>>): ModuleWithProviders<StoreFeatureModule>;
    static forFeature<T, V extends Action = Action>(featureName: string, reducer: ActionReducer<T, V> | InjectionToken<ActionReducer<T, V>>, config?: StoreConfig<T, V> | InjectionToken<StoreConfig<T, V>>): ModuleWithProviders<StoreFeatureModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<StoreModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<StoreModule>;
}
export declare function _createStoreReducers(injector: Injector, reducers: ActionReducerMap<any, any>): {};
export declare function _createFeatureStore(injector: Injector, configs: StoreConfig<any, any>[] | InjectionToken<StoreConfig<any, any>>[], featureStores: StoreFeature<any, any>[]): (StoreFeature<any, any> | {
    key: string;
    reducerFactory: any;
    metaReducers: any;
    initialState: any;
})[];
export declare function _createFeatureReducers(injector: Injector, reducerCollection: ActionReducerMap<any, any>[]): {}[];
export declare function _initialStateFactory(initialState: any): any;
export declare function _concatMetaReducers(metaReducers: MetaReducer[], userProvidedMetaReducers: MetaReducer[]): MetaReducer[];
export declare function _provideForRootGuard(store: Store<any>): any;

//# sourceMappingURL=store_module.d.ts.map