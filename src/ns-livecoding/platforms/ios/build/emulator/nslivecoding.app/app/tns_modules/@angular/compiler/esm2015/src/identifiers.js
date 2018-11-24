/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const CORE = '@angular/core';
export class Identifiers {
}
Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS = {
    name: 'ANALYZE_FOR_ENTRY_COMPONENTS',
    moduleName: CORE,
};
Identifiers.ElementRef = { name: 'ElementRef', moduleName: CORE };
Identifiers.NgModuleRef = { name: 'NgModuleRef', moduleName: CORE };
Identifiers.ViewContainerRef = { name: 'ViewContainerRef', moduleName: CORE };
Identifiers.ChangeDetectorRef = {
    name: 'ChangeDetectorRef',
    moduleName: CORE,
};
Identifiers.QueryList = { name: 'QueryList', moduleName: CORE };
Identifiers.TemplateRef = { name: 'TemplateRef', moduleName: CORE };
Identifiers.Renderer2 = { name: 'Renderer2', moduleName: CORE };
Identifiers.CodegenComponentFactoryResolver = {
    name: 'ɵCodegenComponentFactoryResolver',
    moduleName: CORE,
};
Identifiers.ComponentFactoryResolver = {
    name: 'ComponentFactoryResolver',
    moduleName: CORE,
};
Identifiers.ComponentFactory = { name: 'ComponentFactory', moduleName: CORE };
Identifiers.ComponentRef = { name: 'ComponentRef', moduleName: CORE };
Identifiers.NgModuleFactory = { name: 'NgModuleFactory', moduleName: CORE };
Identifiers.createModuleFactory = {
    name: 'ɵcmf',
    moduleName: CORE,
};
Identifiers.moduleDef = {
    name: 'ɵmod',
    moduleName: CORE,
};
Identifiers.moduleProviderDef = {
    name: 'ɵmpd',
    moduleName: CORE,
};
Identifiers.RegisterModuleFactoryFn = {
    name: 'ɵregisterModuleFactory',
    moduleName: CORE,
};
Identifiers.inject = { name: 'inject', moduleName: CORE };
Identifiers.INJECTOR = { name: 'INJECTOR', moduleName: CORE };
Identifiers.Injector = { name: 'Injector', moduleName: CORE };
Identifiers.defineInjectable = { name: 'defineInjectable', moduleName: CORE };
Identifiers.InjectableDef = { name: 'ɵInjectableDef', moduleName: CORE };
Identifiers.ViewEncapsulation = {
    name: 'ViewEncapsulation',
    moduleName: CORE,
};
Identifiers.ChangeDetectionStrategy = {
    name: 'ChangeDetectionStrategy',
    moduleName: CORE,
};
Identifiers.SecurityContext = {
    name: 'SecurityContext',
    moduleName: CORE,
};
Identifiers.LOCALE_ID = { name: 'LOCALE_ID', moduleName: CORE };
Identifiers.TRANSLATIONS_FORMAT = {
    name: 'TRANSLATIONS_FORMAT',
    moduleName: CORE,
};
Identifiers.inlineInterpolate = {
    name: 'ɵinlineInterpolate',
    moduleName: CORE,
};
Identifiers.interpolate = { name: 'ɵinterpolate', moduleName: CORE };
Identifiers.EMPTY_ARRAY = { name: 'ɵEMPTY_ARRAY', moduleName: CORE };
Identifiers.EMPTY_MAP = { name: 'ɵEMPTY_MAP', moduleName: CORE };
Identifiers.Renderer = { name: 'Renderer', moduleName: CORE };
Identifiers.viewDef = { name: 'ɵvid', moduleName: CORE };
Identifiers.elementDef = { name: 'ɵeld', moduleName: CORE };
Identifiers.anchorDef = { name: 'ɵand', moduleName: CORE };
Identifiers.textDef = { name: 'ɵted', moduleName: CORE };
Identifiers.directiveDef = { name: 'ɵdid', moduleName: CORE };
Identifiers.providerDef = { name: 'ɵprd', moduleName: CORE };
Identifiers.queryDef = { name: 'ɵqud', moduleName: CORE };
Identifiers.pureArrayDef = { name: 'ɵpad', moduleName: CORE };
Identifiers.pureObjectDef = { name: 'ɵpod', moduleName: CORE };
Identifiers.purePipeDef = { name: 'ɵppd', moduleName: CORE };
Identifiers.pipeDef = { name: 'ɵpid', moduleName: CORE };
Identifiers.nodeValue = { name: 'ɵnov', moduleName: CORE };
Identifiers.ngContentDef = { name: 'ɵncd', moduleName: CORE };
Identifiers.unwrapValue = { name: 'ɵunv', moduleName: CORE };
Identifiers.createRendererType2 = { name: 'ɵcrt', moduleName: CORE };
// type only
Identifiers.RendererType2 = {
    name: 'RendererType2',
    moduleName: CORE,
};
// type only
Identifiers.ViewDefinition = {
    name: 'ɵViewDefinition',
    moduleName: CORE,
};
Identifiers.createComponentFactory = { name: 'ɵccf', moduleName: CORE };
export function createTokenForReference(reference) {
    return { identifier: { reference: reference } };
}
export function createTokenForExternalReference(reflector, reference) {
    return createTokenForReference(reflector.resolveExternalReference(reference));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaWRlbnRpZmllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBTUgsTUFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDO0FBRTdCLE1BQU0sT0FBTyxXQUFXOztBQUNmLHdDQUE0QixHQUF3QjtJQUN6RCxJQUFJLEVBQUUsOEJBQThCO0lBQ3BDLFVBQVUsRUFBRSxJQUFJO0NBRWpCLENBQUM7QUFDSyxzQkFBVSxHQUF3QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQ3pFLHVCQUFXLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDM0UsNEJBQWdCLEdBQXdCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUNyRiw2QkFBaUIsR0FBd0I7SUFDOUMsSUFBSSxFQUFFLG1CQUFtQjtJQUN6QixVQUFVLEVBQUUsSUFBSTtDQUVqQixDQUFDO0FBQ0sscUJBQVMsR0FBd0IsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUN2RSx1QkFBVyxHQUF3QixFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQzNFLHFCQUFTLEdBQXdCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7QUFDdkUsMkNBQStCLEdBQXdCO0lBQzVELElBQUksRUFBRSxrQ0FBa0M7SUFDeEMsVUFBVSxFQUFFLElBQUk7Q0FFakIsQ0FBQztBQUNLLG9DQUF3QixHQUF3QjtJQUNyRCxJQUFJLEVBQUUsMEJBQTBCO0lBQ2hDLFVBQVUsRUFBRSxJ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QkFBaUI7SUFDdkIsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FBQztBQUNLLGtDQUFzQixHQUF3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFDO0FBR3hGLE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxTQUFjO0lBQ3BELE9BQU8sRUFBQyxVQUFVLEVBQUUsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLEVBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQsTUFBTSxVQUFVLCtCQUErQixDQUMzQyxTQUEyQixFQUFFLFNBQThCO0lBQzdELE9BQU8sdUJBQXVCLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDaEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlVG9rZW5NZXRhZGF0YX0gZnJvbSAnLi9jb21waWxlX21ldGFkYXRhJztcbmltcG9ydCB7Q29tcGlsZVJlZmxlY3Rvcn0gZnJvbSAnLi9jb21waWxlX3JlZmxlY3Rvcic7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0L291dHB1dF9hc3QnO1xuXG5jb25zdCBDT1JFID0gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllcnMge1xuICBzdGF0aWMgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUzogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUycsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgRWxlbWVudFJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnRWxlbWVudFJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgTmdNb2R1bGVSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ05nTW9kdWxlUmVmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBWaWV3Q29udGFpbmVyUmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdWaWV3Q29udGFpbmVyUmVmJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBDaGFuZ2VEZXRlY3RvclJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnQ2hhbmdlRGV0ZWN0b3JSZWYnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIFF1ZXJ5TGlzdDogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnUXVlcnlMaXN0JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBUZW1wbGF0ZVJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnVGVtcGxhdGVSZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFJlbmRlcmVyMjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnUmVuZGVyZXIyJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBDb2RlZ2VuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtUNvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXInLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBDb21wb25lbnRGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdDb21wb25lbnRGYWN0b3J5JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBDb21wb25lbnRSZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0NvbXBvbmVudFJlZicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgTmdNb2R1bGVGYWN0b3J5OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdOZ01vZHVsZUZhY3RvcnknLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGNyZWF0ZU1vZHVsZUZhY3Rvcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1Y21mJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBtb2R1bGVEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ8m1bW9kJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBtb2R1bGVQcm92aWRlckRlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVtcGQnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIFJlZ2lzdGVyTW9kdWxlRmFjdG9yeUZuOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtXJlZ2lzdGVyTW9kdWxlRmFjdG9yeScsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgaW5qZWN0OiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdpbmplY3QnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIElOSkVDVE9SOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdJTkpFQ1RPUicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgSW5qZWN0b3I6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ0luamVjdG9yJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBkZWZpbmVJbmplY3RhYmxlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdkZWZpbmVJbmplY3RhYmxlJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBJbmplY3RhYmxlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtUluamVjdGFibGVEZWYnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFZpZXdFbmNhcHN1bGF0aW9uOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICdWaWV3RW5jYXBzdWxhdGlvbicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ0NoYW5nZURldGVjdGlvblN0cmF0ZWd5JyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuXG4gIH07XG4gIHN0YXRpYyBTZWN1cml0eUNvbnRleHQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1NlY3VyaXR5Q29udGV4dCcsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcblxuICB9O1xuICBzdGF0aWMgTE9DQUxFX0lEOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICdMT0NBTEVfSUQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIFRSQU5TTEFUSU9OU19GT1JNQVQ6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1RSQU5TTEFUSU9OU19GT1JNQVQnLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgc3RhdGljIGlubGluZUludGVycG9sYXRlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge1xuICAgIG5hbWU6ICfJtWlubGluZUludGVycG9sYXRlJyxcbiAgICBtb2R1bGVOYW1lOiBDT1JFLFxuICB9O1xuICBzdGF0aWMgaW50ZXJwb2xhdGU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1aW50ZXJwb2xhdGUnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIEVNUFRZX0FSUkFZOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtUVNUFRZX0FSUkFZJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBFTVBUWV9NQVA6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1RU1QVFlfTUFQJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBSZW5kZXJlcjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnUmVuZGVyZXInLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHZpZXdEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dmlkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBlbGVtZW50RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWVsZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgYW5jaG9yRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWFuZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgdGV4dERlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybV0ZWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIGRpcmVjdGl2ZURlZjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtuYW1lOiAnybVkaWQnLCBtb2R1bGVOYW1lOiBDT1JFfTtcbiAgc3RhdGljIHByb3ZpZGVyRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXByZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcXVlcnlEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cXVkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlQXJyYXlEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cGFkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwdXJlT2JqZWN0RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBvZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgcHVyZVBpcGVEZWY6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1cHBkJywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBwaXBlRGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtXBpZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbm9kZVZhbHVlOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5vdicsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgbmdDb250ZW50RGVmOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtW5jZCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICBzdGF0aWMgdW53cmFwVmFsdWU6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1dW52JywgbW9kdWxlTmFtZTogQ09SRX07XG4gIHN0YXRpYyBjcmVhdGVSZW5kZXJlclR5cGUyOiBvLkV4dGVybmFsUmVmZXJlbmNlID0ge25hbWU6ICfJtWNydCcsIG1vZHVsZU5hbWU6IENPUkV9O1xuICAvLyB0eXBlIG9ubHlcbiAgc3RhdGljIFJlbmRlcmVyVHlwZTI6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7XG4gICAgbmFtZTogJ1JlbmRlcmVyVHlwZTInLFxuICAgIG1vZHVsZU5hbWU6IENPUkUsXG5cbiAgfTtcbiAgLy8gdHlwZSBvbmx5XG4gIHN0YXRpYyBWaWV3RGVmaW5pdGlvbjogby5FeHRlcm5hbFJlZmVyZW5jZSA9IHtcbiAgICBuYW1lOiAnybVWaWV3RGVmaW5pdGlvbicsXG4gICAgbW9kdWxlTmFtZTogQ09SRSxcbiAgfTtcbiAgc3RhdGljIGNyZWF0ZUNvbXBvbmVudEZhY3Rvcnk6IG8uRXh0ZXJuYWxSZWZlcmVuY2UgPSB7bmFtZTogJ8m1Y2NmJywgbW9kdWxlTmFtZTogQ09SRX07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2tlbkZvclJlZmVyZW5jZShyZWZlcmVuY2U6IGFueSk6IENvbXBpbGVUb2tlbk1ldGFkYXRhIHtcbiAgcmV0dXJuIHtpZGVudGlmaWVyOiB7cmVmZXJlbmNlOiByZWZlcmVuY2V9fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UoXG4gICAgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yLCByZWZlcmVuY2U6IG8uRXh0ZXJuYWxSZWZlcmVuY2UpOiBDb21waWxlVG9rZW5NZXRhZGF0YSB7XG4gIHJldHVybiBjcmVhdGVUb2tlbkZvclJlZmVyZW5jZShyZWZsZWN0b3IucmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKHJlZmVyZW5jZSkpO1xufVxuIl19