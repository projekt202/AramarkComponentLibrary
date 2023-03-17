import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class Array2StringPipe {
    transform(value) {
        if (!value)
            return "";
        return value.join(" ");
    }
}
Array2StringPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: Array2StringPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
Array2StringPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: Array2StringPipe, name: "array2string" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: Array2StringPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "array2string",
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkyc3RyaW5nLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtYXVzLWRlc2lnbi1zeXN0ZW0vc3JjL2xpYi9zaGFyZWQvcGlwZXMvYXJyYXkyc3RyaW5nL2FycmF5MnN0cmluZy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFNBQVMsQ0FBQyxLQUFnQjtRQUN4QixJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs4R0FKVSxnQkFBZ0I7NEdBQWhCLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUg1QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxjQUFjO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7XG4gIG5hbWU6IFwiYXJyYXkyc3RyaW5nXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFycmF5MlN0cmluZ1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlPzogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGlmICghdmFsdWUpIHJldHVybiBcIlwiO1xuICAgIHJldHVybiB2YWx1ZS5qb2luKFwiIFwiKTtcbiAgfVxufVxuIl19