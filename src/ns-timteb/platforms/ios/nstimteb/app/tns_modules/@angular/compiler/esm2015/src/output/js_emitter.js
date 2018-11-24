/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EmitterVisitorContext } from './abstract_emitter';
import { AbstractJsEmitterVisitor } from './abstract_js_emitter';
import * as o from './output_ast';
export class JavaScriptEmitter {
    emitStatements(genFilePath, stmts, preamble = '') {
        const converter = new JsEmitterVisitor();
        const ctx = EmitterVisitorContext.createRoot();
        converter.visitAllStatements(stmts, ctx);
        const preambleLines = preamble ? preamble.split('\n') : [];
        converter.importsWithPrefixes.forEach((prefix, importedModuleName) => {
            // Note: can't write the real word for import as it screws up system.js auto detection...
            preambleLines.push(`var ${prefix} = req` +
                `uire('${importedModuleName}');`);
        });
        const sm = ctx.toSourceMapGenerator(genFilePath, preambleLines.length).toJsComment();
        const lines = [...preambleLines, ctx.toSource(), sm];
        if (sm) {
            // always add a newline at the end, as some tools have bugs without it.
            lines.push('');
        }
        return lines.join('\n');
    }
}
class JsEmitterVisitor extends AbstractJsEmitterVisitor {
    constructor() {
        super(...arguments);
        this.importsWithPrefixes = new Map();
    }
    visitExternalExpr(ast, ctx) {
        const { name, moduleName } = ast.value;
        if (moduleName) {
            let prefix = this.importsWithPrefixes.get(moduleName);
            if (prefix == null) {
                prefix = `i${this.importsWithPrefixes.size}`;
                this.importsWithPrefixes.set(moduleName, prefix);
            }
            ctx.print(ast, `${prefix}.`);
        }
        ctx.print(ast, name);
        return null;
    }
    visitDeclareVarStmt(stmt, ctx) {
        super.visitDeclareVarStmt(stmt, ctx);
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            ctx.println(stmt, exportVar(stmt.name));
        }
        return null;
    }
    visitDeclareFunctionStmt(stmt, ctx) {
        super.visitDeclareFunctionStmt(stmt, ctx);
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            ctx.println(stmt, exportVar(stmt.name));
        }
        return null;
    }
    visitDeclareClassStmt(stmt, ctx) {
        super.visitDeclareClassStmt(stmt, ctx);
        if (stmt.hasModifier(o.StmtModifier.Exported)) {
            ctx.println(stmt, exportVar(stmt.name));
        }
        return null;
    }
}
function exportVar(varName) {
    return `Object.defineProperty(exports, '${varName}', { get: function() { return ${varName}; }});`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNfZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9vdXRwdXQvanNfZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFNSCxPQUFPLEVBQUMscUJBQXFCLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxLQUFLLENBQUMsTUFBTSxjQUFjLENBQUM7QUFFbEMsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixjQUFjLENBQUMsV0FBbUIsRUFBRSxLQUFvQixFQUFFLFdBQW1CLEVBQUU7UUFDN0UsTUFBTSxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sR0FBRyxHQUFHLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9DLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFekMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0QsU0FBUyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxFQUFFO1lBQ25FLHlGQUF5RjtZQUN6RixhQUFhLENBQUMsSUFBSSxDQUNkLE9BQU8sTUFBTSxRQUFRO2dCQUNyQixTQUFTLGtCQUFrQixLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JGLE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxhQUFhLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELElBQUksRUFBRSxFQUFFO1lBQ04sdUVBQXVFO1lBQ3ZFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGO0FBRUQsTUFBTSxnQkFBaUIsU0FBUSx3QkFBd0I7SUFBdkQ7O1FBQ0Usd0JBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFvQ2xELENBQUM7SUFsQ0MsaUJBQWlCLENBQUMsR0FBbUIsRUFBRSxHQUEwQjtRQUMvRCxNQUFNLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDbEIsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNsRDtZQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUM5QjtRQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQU0sQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELG1CQUFtQixDQUFDLElBQXNCLEVBQUUsR0FBMEI7UUFDcEUsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCx3QkFBd0IsQ0FBQyxJQUEyQixFQUFFLEdBQTBCO1FBQzlFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QscUJBQXFCLENBQUMsSUFBaUIsRUFBRSxHQUEwQjtRQUNqRSxLQUFLLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBRUQsU0FBUyxTQUFTLENBQUMsT0FBZTtJQUNoQyxPQUFPLG1DQUFtQyxPQUFPLGlDQUFpQyxPQUFPLFFBQVEsQ0FBQztBQUNwRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7U3RhdGljU3ltYm9sfSBmcm9tICcuLi9hb3Qvc3RhdGljX3N5bWJvbCc7XG5pbXBvcnQge0NvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGF9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuXG5pbXBvcnQge0VtaXR0ZXJWaXNpdG9yQ29udGV4dCwgT3V0cHV0RW1pdHRlcn0gZnJvbSAnLi9hYnN0cmFjdF9lbWl0dGVyJztcbmltcG9ydCB7QWJzdHJhY3RKc0VtaXR0ZXJWaXNpdG9yfSBmcm9tICcuL2Fic3RyYWN0X2pzX2VtaXR0ZXInO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuL291dHB1dF9hc3QnO1xuXG5leHBvcnQgY2xhc3MgSmF2YVNjcmlwdEVtaXR0ZXIgaW1wbGVtZW50cyBPdXRwdXRFbWl0dGVyIHtcbiAgZW1pdFN0YXRlbWVudHMoZ2VuRmlsZVBhdGg6IHN0cmluZywgc3RtdHM6IG8uU3RhdGVtZW50W10sIHByZWFtYmxlOiBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgY29uc3QgY29udmVydGVyID0gbmV3IEpzRW1pdHRlclZpc2l0b3IoKTtcbiAgICBjb25zdCBjdHggPSBFbWl0dGVyVmlzaXRvckNvbnRleHQuY3JlYXRlUm9vdCgpO1xuICAgIGNvbnZlcnRlci52aXNpdEFsbFN0YXRlbWVudHMoc3RtdHMsIGN0eCk7XG5cbiAgICBjb25zdCBwcmVhbWJsZUxpbmVzID0gcHJlYW1ibGUgPyBwcmVhbWJsZS5zcGxpdCgnXFxuJykgOiBbXTtcbiAgICBjb252ZXJ0ZXIuaW1wb3J0c1dpdGhQcmVmaXhlcy5mb3JFYWNoKChwcmVmaXgsIGltcG9ydGVkTW9kdWxlTmFtZSkgPT4ge1xuICAgICAgLy8gTm90ZTogY2FuJ3Qgd3JpdGUgdGhlIHJlYWwgd29yZCBmb3IgaW1wb3J0IGFzIGl0IHNjcmV3cyB1cCBzeXN0ZW0uanMgYXV0byBkZXRlY3Rpb24uLi5cbiAgICAgIHByZWFtYmxlTGluZXMucHVzaChcbiAgICAgICAgICBgdmFyICR7cHJlZml4fSA9IHJlcWAgK1xuICAgICAgICAgIGB1aXJlKCcke2ltcG9ydGVkTW9kdWxlTmFtZX0nKTtgKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNtID0gY3R4LnRvU291cmNlTWFwR2VuZXJhdG9yKGdlbkZpbGVQYXRoLCBwcmVhbWJsZUxpbmVzLmxlbmd0aCkudG9Kc0NvbW1lbnQoKTtcbiAgICBjb25zdCBsaW5lcyA9IFsuLi5wcmVhbWJsZUxpbmVzLCBjdHgudG9Tb3VyY2UoKSwgc21dO1xuICAgIGlmIChzbSkge1xuICAgICAgLy8gYWx3YXlzIGFkZCBhIG5ld2xpbmUgYXQgdGhlIGVuZCwgYXMgc29tZSB0b29scyBoYXZlIGJ1Z3Mgd2l0aG91dCBpdC5cbiAgICAgIGxpbmVzLnB1c2goJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGluZXMuam9pbignXFxuJyk7XG4gIH1cbn1cblxuY2xhc3MgSnNFbWl0dGVyVmlzaXRvciBleHRlbmRzIEFic3RyYWN0SnNFbWl0dGVyVmlzaXRvciB7XG4gIGltcG9ydHNXaXRoUHJlZml4ZXMgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG4gIHZpc2l0RXh0ZXJuYWxFeHByKGFzdDogby5FeHRlcm5hbEV4cHIsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICBjb25zdCB7bmFtZSwgbW9kdWxlTmFtZX0gPSBhc3QudmFsdWU7XG4gICAgaWYgKG1vZHVsZU5hbWUpIHtcbiAgICAgIGxldCBwcmVmaXggPSB0aGlzLmltcG9ydHNXaXRoUHJlZml4ZXMuZ2V0KG1vZHVsZU5hbWUpO1xuICAgICAgaWYgKHByZWZpeCA9PSBudWxsKSB7XG4gICAgICAgIHByZWZpeCA9IGBpJHt0aGlzLmltcG9ydHNXaXRoUHJlZml4ZXMuc2l6ZX1gO1xuICAgICAgICB0aGlzLmltcG9ydHNXaXRoUHJlZml4ZXMuc2V0KG1vZHVsZU5hbWUsIHByZWZpeCk7XG4gICAgICB9XG4gICAgICBjdHgucHJpbnQoYXN0LCBgJHtwcmVmaXh9LmApO1xuICAgIH1cbiAgICBjdHgucHJpbnQoYXN0LCBuYW1lICEpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZpc2l0RGVjbGFyZVZhclN0bXQoc3RtdDogby5EZWNsYXJlVmFyU3RtdCwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBhbnkge1xuICAgIHN1cGVyLnZpc2l0RGVjbGFyZVZhclN0bXQoc3RtdCwgY3R4KTtcbiAgICBpZiAoc3RtdC5oYXNNb2RpZmllcihvLlN0bXRNb2RpZmllci5FeHBvcnRlZCkpIHtcbiAgICAgIGN0eC5wcmludGxuKHN0bXQsIGV4cG9ydFZhcihzdG10Lm5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXREZWNsYXJlRnVuY3Rpb25TdG10KHN0bXQ6IG8uRGVjbGFyZUZ1bmN0aW9uU3RtdCwgY3R4OiBFbWl0dGVyVmlzaXRvckNvbnRleHQpOiBhbnkge1xuICAgIHN1cGVyLnZpc2l0RGVjbGFyZUZ1bmN0aW9uU3RtdChzdG10LCBjdHgpO1xuICAgIGlmIChzdG10Lmhhc01vZGlmaWVyKG8uU3RtdE1vZGlmaWVyLkV4cG9ydGVkKSkge1xuICAgICAgY3R4LnByaW50bG4oc3RtdCwgZXhwb3J0VmFyKHN0bXQubmFtZSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdERlY2xhcmVDbGFzc1N0bXQoc3RtdDogby5DbGFzc1N0bXQsIGN0eDogRW1pdHRlclZpc2l0b3JDb250ZXh0KTogYW55IHtcbiAgICBzdXBlci52aXNpdERlY2xhcmVDbGFzc1N0bXQoc3RtdCwgY3R4KTtcbiAgICBpZiAoc3RtdC5oYXNNb2RpZmllcihvLlN0bXRNb2RpZmllci5FeHBvcnRlZCkpIHtcbiAgICAgIGN0eC5wcmludGxuKHN0bXQsIGV4cG9ydFZhcihzdG10Lm5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXhwb3J0VmFyKHZhck5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICcke3Zhck5hbWV9JywgeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gJHt2YXJOYW1lfTsgfX0pO2A7XG59XG4iXX0=