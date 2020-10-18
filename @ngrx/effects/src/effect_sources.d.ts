import { ErrorHandler } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class EffectSources extends Subject<any> {
    private errorHandler;
    private store;
    constructor(errorHandler: ErrorHandler, store: Store<any>);
    addEffects(effectSourceInstance: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EffectSources, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<EffectSources>;
}

//# sourceMappingURL=effect_sources.d.ts.map