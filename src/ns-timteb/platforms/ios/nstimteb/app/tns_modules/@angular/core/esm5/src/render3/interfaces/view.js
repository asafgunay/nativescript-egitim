/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Size of LViewData's header. Necessary to adjust for it when setting slots.  */
export var HEADER_OFFSET = 17;
// Below are constants for LViewData indices to help us look up LViewData members
// without having to remember the specific indices.
// Uglify will inline these when minifying so there shouldn't be a cost.
export var TVIEW = 0;
export var FLAGS = 1;
export var PARENT = 2;
export var NEXT = 3;
export var QUERIES = 4;
export var HOST = 5;
export var HOST_NODE = 6;
export var BINDING_INDEX = 7;
export var CLEANUP = 8;
export var CONTEXT = 9;
export var INJECTOR = 10;
export var RENDERER = 11;
export var SANITIZER = 12;
export var TAIL = 13;
export var CONTAINER_INDEX = 14;
export var CONTENT_QUERIES = 15;
export var DECLARATION_VIEW = 16;
// Note: This hack is necessary so we don't erroneously get a circular dependency
// failure based on types.
export var unusedValueExportToPlacateAjd = 1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW50ZXJmYWNlcy92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQWVILGtGQUFrRjtBQUNsRixNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBRWhDLGlGQUFpRjtBQUNqRixtREFBbUQ7QUFDbkQsd0VBQXdFO0FBQ3hFLE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDdkIsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztBQUN2QixNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE1BQU0sQ0FBQyxJQUFNLElBQUksR0FBRyxDQUFDLENBQUM7QUFDdEIsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUN6QixNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDM0IsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUMvQixNQUFNLENBQUMsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDekIsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUMzQixNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDNUIsTUFBTSxDQUFDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN2QixNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDbEMsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBaWdCbkMsaUZBQWlGO0FBQ2pGLDBCQUEwQjtBQUMxQixNQUFNLENBQUMsSUFBTSw2QkFBNkIsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uLy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7UXVlcnlMaXN0fSBmcm9tICcuLi8uLi9saW5rZXInO1xuaW1wb3J0IHtTYW5pdGl6ZXJ9IGZyb20gJy4uLy4uL3Nhbml0aXphdGlvbi9zZWN1cml0eSc7XG5cbmltcG9ydCB7TENvbnRhaW5lcn0gZnJvbSAnLi9jb250YWluZXInO1xuaW1wb3J0IHtDb21wb25lbnREZWYsIENvbXBvbmVudFF1ZXJ5LCBDb21wb25lbnRUZW1wbGF0ZSwgRGlyZWN0aXZlRGVmLCBEaXJlY3RpdmVEZWZMaXN0LCBIb3N0QmluZGluZ3NGdW5jdGlvbiwgUGlwZURlZiwgUGlwZURlZkxpc3R9IGZyb20gJy4vZGVmaW5pdGlvbic7XG5pbXBvcnQge1RFbGVtZW50Tm9kZSwgVE5vZGUsIFRWaWV3Tm9kZX0gZnJvbSAnLi9ub2RlJztcbmltcG9ydCB7UGxheWVySGFuZGxlcn0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHtMUXVlcmllc30gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQge1JFbGVtZW50LCBSZW5kZXJlcjN9IGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHtTdHlsaW5nQ29udGV4dH0gZnJvbSAnLi9zdHlsaW5nJztcblxuXG4vKiogU2l6ZSBvZiBMVmlld0RhdGEncyBoZWFkZXIuIE5lY2Vzc2FyeSB0byBhZGp1c3QgZm9yIGl0IHdoZW4gc2V0dGluZyBzbG90cy4gICovXG5leHBvcnQgY29uc3QgSEVBREVSX09GRlNFVCA9IDE3O1xuXG4vLyBCZWxvdyBhcmUgY29uc3RhbnRzIGZvciBMVmlld0RhdGEgaW5kaWNlcyB0byBoZWxwIHVzIGxvb2sgdXAgTFZpZXdEYXRhIG1lbWJlcnNcbi8vIHdpdGhvdXQgaGF2aW5nIHRvIHJlbWVtYmVyIHRoZSBzcGVjaWZpYyBpbmRpY2VzLlxuLy8gVWdsaWZ5IHdpbGwgaW5saW5lIHRoZXNlIHdoZW4gbWluaWZ5aW5nIHNvIHRoZXJlIHNob3VsZG4ndCBiZSBhIGNvc3QuXG5leHBvcnQgY29uc3QgVFZJRVcgPSAwO1xuZXhwb3J0IGNvbnN0IEZMQUdTID0gMTtcbmV4cG9ydCBjb25zdCBQQVJFTlQgPSAyO1xuZXhwb3J0IGNvbnN0IE5FWFQgPSAzO1xuZXhwb3J0IGNvbnN0IFFVRVJJRVMgPSA0O1xuZXhwb3J0IGNvbnN0IEhPU1QgPSA1O1xuZXhwb3J0IGNvbnN0IEhPU1RfTk9ERSA9IDY7XG5leHBvcnQgY29uc3QgQklORElOR19JTkRFWCA9IDc7XG5leHBvcnQgY29uc3QgQ0xFQU5VUCA9IDg7XG5leHBvcnQgY29uc3QgQ09OVEVYVCA9IDk7XG5leHBvcnQgY29uc3QgSU5KRUNUT1IgPSAxMDtcbmV4cG9ydCBjb25zdCBSRU5ERVJFUiA9IDExO1xuZXhwb3J0IGNvbnN0IFNBTklUSVpFUiA9IDEyO1xuZXhwb3J0IGNvbnN0IFRBSUwgPSAxMztcbmV4cG9ydCBjb25zdCBDT05UQUlORVJfSU5ERVggPSAxNDtcbmV4cG9ydCBjb25zdCBDT05URU5UX1FVRVJJRVMgPSAxNTtcbmV4cG9ydCBjb25zdCBERUNMQVJBVElPTl9WSUVXID0gMTY7XG5cbi8vIFRoaXMgaW50ZXJmYWNlIHJlcGxhY2VzIHRoZSByZWFsIExWaWV3RGF0YSBpbnRlcmZhY2UgaWYgaXQgaXMgYW4gYXJnIG9yIGFcbi8vIHJldHVybiB2YWx1ZSBvZiBhIHB1YmxpYyBpbnN0cnVjdGlvbi4gVGhpcyBlbnN1cmVzIHdlIGRvbid0IG5lZWQgdG8gZXhwb3NlXG4vLyB0aGUgYWN0dWFsIGludGVyZmFjZSwgd2hpY2ggc2hvdWxkIGJlIGtlcHQgcHJpdmF0ZS5cbmV4cG9ydCBpbnRlcmZhY2UgT3BhcXVlVmlld1N0YXRlIHtcbiAgJ19fYnJhbmRfXyc6ICdCcmFuZCBmb3IgT3BhcXVlVmlld1N0YXRlIHRoYXQgbm90aGluZyB3aWxsIG1hdGNoJztcbn1cblxuXG4vKipcbiAqIGBMVmlld0RhdGFgIHN0b3JlcyBhbGwgb2YgdGhlIGluZm9ybWF0aW9uIG5lZWRlZCB0byBwcm9jZXNzIHRoZSBpbnN0cnVjdGlvbnMgYXNcbiAqIHRoZXkgYXJlIGludm9rZWQgZnJvbSB0aGUgdGVtcGxhdGUuIEVhY2ggZW1iZWRkZWQgdmlldyBhbmQgY29tcG9uZW50IHZpZXcgaGFzIGl0c1xuICogb3duIGBMVmlld0RhdGFgLiBXaGVuIHByb2Nlc3NpbmcgYSBwYXJ0aWN1bGFyIHZpZXcsIHdlIHNldCB0aGUgYHZpZXdEYXRhYCB0byB0aGF0XG4gKiBgTFZpZXdEYXRhYC4gV2hlbiB0aGF0IHZpZXcgaXMgZG9uZSBwcm9jZXNzaW5nLCB0aGUgYHZpZXdEYXRhYCBpcyBzZXQgYmFjayB0b1xuICogd2hhdGV2ZXIgdGhlIG9yaWdpbmFsIGB2aWV3RGF0YWAgd2FzIGJlZm9yZSAodGhlIHBhcmVudCBgTFZpZXdEYXRhYCkuXG4gKlxuICogS2VlcGluZyBzZXBhcmF0ZSBzdGF0ZSBmb3IgZWFjaCB2aWV3IGZhY2lsaXRpZXMgdmlldyBpbnNlcnRpb24gLyBkZWxldGlvbiwgc28gd2VcbiAqIGRvbid0IGhhdmUgdG8gZWRpdCB0aGUgZGF0YSBhcnJheSBiYXNlZCBvbiB3aGljaCB2aWV3cyBhcmUgcHJlc2VudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMVmlld0RhdGEgZXh0ZW5kcyBBcnJheTxhbnk+IHtcbiAgLyoqXG4gICAqIFRoZSBzdGF0aWMgZGF0YSBmb3IgdGhpcyB2aWV3LiBXZSBuZWVkIGEgcmVmZXJlbmNlIHRvIHRoaXMgc28gd2UgY2FuIGVhc2lseSB3YWxrIHVwIHRoZVxuICAgKiBub2RlIHRyZWUgaW4gREkgYW5kIGdldCB0aGUgVFZpZXcuZGF0YSBhcnJheSBhc3NvY2lhdGVkIHdpdGggYSBub2RlICh3aGVyZSB0aGVcbiAgICogZGlyZWN0aXZlIGRlZnMgYXJlIHN0b3JlZCkuXG4gICAqL1xuICBbVFZJRVddOiBUVmlldztcblxuICAvKiogRmxhZ3MgZm9yIHRoaXMgdmlldy4gU2VlIExWaWV3RmxhZ3MgZm9yIG1vcmUgaW5mby4gKi9cbiAgW0ZMQUdTXTogTFZpZXdGbGFncztcblxuICAvKipcbiAgICogVGhlIHBhcmVudCB2aWV3IGlzIG5lZWRlZCB3aGVuIHdlIGV4aXQgdGhlIHZpZXcgYW5kIG11c3QgcmVzdG9yZSB0aGUgcHJldmlvdXNcbiAgICogYExWaWV3RGF0YWAuIFdpdGhvdXQgdGhpcywgdGhlIHJlbmRlciBtZXRob2Qgd291bGQgaGF2ZSB0byBrZWVwIGEgc3RhY2sgb2ZcbiAgICogdmlld3MgYXMgaXQgaXMgcmVjdXJzaXZlbHkgcmVuZGVyaW5nIHRlbXBsYXRlcy5cbiAgICpcbiAgICogVGhpcyBpcyB0aGUgXCJpbnNlcnRpb25cIiB2aWV3IGZvciBlbWJlZGRlZCB2aWV3cy4gVGhpcyBhbGxvd3MgdXMgdG8gcHJvcGVybHlcbiAgICogZGVzdHJveSBlbWJlZGRlZCB2aWV3cy5cbiAgICovXG4gIFtQQVJFTlRdOiBMVmlld0RhdGF8bnVsbDtcblxuICAvKipcbiAgICpcbiAgICogVGhlIG5leHQgc2libGluZyBMVmlld0RhdGEgb3IgTENvbnRhaW5lci5cbiAgICpcbiAgICogQWxsb3dzIHVzIHRvIHByb3BhZ2F0ZSBiZXR3ZWVuIHNpYmxpbmcgdmlldyBzdGF0ZXMgdGhhdCBhcmVuJ3QgaW4gdGhlIHNhbWVcbiAgICogY29udGFpbmVyLiBFbWJlZGRlZCB2aWV3cyBhbHJlYWR5IGhhdmUgYSBub2RlLm5leHQsIGJ1dCBpdCBpcyBvbmx5IHNldCBmb3JcbiAgICogdmlld3MgaW4gdGhlIHNhbWUgY29udGFpbmVyLiBXZSBuZWVkIGEgd2F5IHRvIGxpbmsgY29tcG9uZW50IHZpZXdzIGFuZCB2aWV3c1xuICAgKiBhY3Jvc3MgY29udGFpbmVycyBhcyB3ZWxsLlxuICAgKi9cbiAgW05FWFRdOiBMVmlld0RhdGF8TENvbnRhaW5lcnxudWxsO1xuXG4gIC8qKiBRdWVyaWVzIGFjdGl2ZSBmb3IgdGhpcyB2aWV3IC0gbm9kZXMgZnJvbSBhIHZpZXcgYXJlIHJlcG9ydGVkIHRvIHRob3NlIHF1ZXJpZXMuICovXG4gIFtRVUVSSUVTXTogTFF1ZXJpZXN8bnVsbDtcblxuICAvKipcbiAgICogVGhlIGhvc3Qgbm9kZSBmb3IgdGhpcyBMVmlld0RhdGEgaW5zdGFuY2UsIGlmIHRoaXMgaXMgYSBjb21wb25lbnQgdmlldy5cbiAgICpcbiAgICogSWYgdGhpcyBpcyBhbiBlbWJlZGRlZCB2aWV3LCBIT1NUIHdpbGwgYmUgbnVsbC5cbiAgICovXG4gIFtIT1NUXTogUkVsZW1lbnR8U3R5bGluZ0NvbnRleHR8bnVsbDtcblxuICAvKipcbiAgICogUG9pbnRlciB0byB0aGUgYFRWaWV3Tm9kZWAgb3IgYFRFbGVtZW50Tm9kZWAgd2hpY2ggcmVwcmVzZW50cyB0aGUgcm9vdCBvZiB0aGUgdmlldy5cbiAgICpcbiAgICogSWYgYFRWaWV3Tm9kZWAsIHRoaXMgaXMgYW4gZW1iZWRkZWQgdmlldyBvZiBhIGNvbnRhaW5lci4gV2UgbmVlZCB0aGlzIHRvIGJlIGFibGUgdG9cbiAgICogZWZmaWNpZW50bHkgZmluZCB0aGUgYExWaWV3Tm9kZWAgd2hlbiBpbnNlcnRpbmcgdGhlIHZpZXcgaW50byBhbiBhbmNob3IuXG4gICAqXG4gICAqIElmIGBURWxlbWVudE5vZGVgLCB0aGlzIGlzIHRoZSBMVmlldyBvZiBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogSWYgbnVsbCwgdGhpcyBpcyB0aGUgcm9vdCB2aWV3IG9mIGFuIGFwcGxpY2F0aW9uIChyb290IGNvbXBvbmVudCBpcyBpbiB0aGlzIHZpZXcpLlxuICAgKi9cbiAgW0hPU1RfTk9ERV06IFRWaWV3Tm9kZXxURWxlbWVudE5vZGV8bnVsbDtcblxuICAvKipcbiAgICogVGhlIGJpbmRpbmcgaW5kZXggd2Ugc2hvdWxkIGFjY2VzcyBuZXh0LlxuICAgKlxuICAgKiBUaGlzIGlzIHN0b3JlZCBzbyB0aGF0IGJpbmRpbmdzIGNhbiBjb250aW51ZSB3aGVyZSB0aGV5IGxlZnQgb2ZmXG4gICAqIGlmIGEgdmlldyBpcyBsZWZ0IG1pZHdheSB0aHJvdWdoIHByb2Nlc3NpbmcgYmluZGluZ3MgKGUuZy4gaWYgdGhlcmUgaXNcbiAgICogYSBzZXR0ZXIgdGhhdCBjcmVhdGVzIGFuIGVtYmVkZGVkIHZpZXcsIGxpa2UgaW4gbmdJZikuXG4gICAqL1xuICBbQklORElOR19JTkRFWF06IG51bWJlcjtcblxuICAvKipcbiAgICogV2hlbiBhIHZpZXcgaXMgZGVzdHJveWVkLCBsaXN0ZW5lcnMgbmVlZCB0byBiZSByZWxlYXNlZCBhbmQgb3V0cHV0cyBuZWVkIHRvIGJlXG4gICAqIHVuc3Vic2NyaWJlZC4gVGhpcyBjb250ZXh0IGFycmF5IHN0b3JlcyBib3RoIGxpc3RlbmVyIGZ1bmN0aW9ucyB3cmFwcGVkIHdpdGhcbiAgICogdGhlaXIgY29udGV4dCBhbmQgb3V0cHV0IHN1YnNjcmlwdGlvbiBpbnN0YW5jZXMgZm9yIGEgcGFydGljdWxhciB2aWV3LlxuICAgKlxuICAgKiBUaGVzZSBjaGFuZ2UgcGVyIExWaWV3IGluc3RhbmNlLCBzbyB0aGV5IGNhbm5vdCBiZSBzdG9yZWQgb24gVFZpZXcuIEluc3RlYWQsXG4gICAqIFRWaWV3LmNsZWFudXAgc2F2ZXMgYW4gaW5kZXggdG8gdGhlIG5lY2Vzc2FyeSBjb250ZXh0IGluIHRoaXMgYXJyYXkuXG4gICAqL1xuICAvLyBUT0RPOiBmbGF0dGVuIGludG8gTFZpZXdEYXRhW11cbiAgW0NMRUFOVVBdOiBhbnlbXXxudWxsO1xuXG4gIC8qKlxuICAgKiAtIEZvciBkeW5hbWljIHZpZXdzLCB0aGlzIGlzIHRoZSBjb250ZXh0IHdpdGggd2hpY2ggdG8gcmVuZGVyIHRoZSB0ZW1wbGF0ZSAoZS5nLlxuICAgKiAgIGBOZ0ZvckNvbnRleHRgKSwgb3IgYHt9YCBpZiBub3QgZGVmaW5lZCBleHBsaWNpdGx5LlxuICAgKiAtIEZvciByb290IHZpZXcgb2YgdGhlIHJvb3QgY29tcG9uZW50IHRoZSBjb250ZXh0IGNvbnRhaW5zIGNoYW5nZSBkZXRlY3Rpb24gZGF0YS5cbiAgICogLSBGb3Igbm9uLXJvb3QgY29tcG9uZW50cywgdGhlIGNvbnRleHQgaXMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZSxcbiAgICogLSBGb3IgaW5saW5lIHZpZXdzLCB0aGUgY29udGV4dCBpcyBudWxsLlxuICAgKi9cbiAgW0NPTlRFWFRdOiB7fXxSb290Q29udGV4dHxudWxsO1xuXG4gIC8qKiBBbiBvcHRpb25hbCBNb2R1bGUgSW5qZWN0b3IgdG8gYmUgdXNlZCBhcyBmYWxsIGJhY2sgYWZ0ZXIgRWxlbWVudCBJbmplY3RvcnMgYXJlIGNvbnN1bHRlZC4gKi9cbiAgW0lOSkVDVE9SXTogSW5qZWN0b3J8bnVsbDtcblxuICAvKiogUmVuZGVyZXIgdG8gYmUgdXNlZCBmb3IgdGhpcyB2aWV3LiAqL1xuICBbUkVOREVSRVJdOiBSZW5kZXJlcjM7XG5cbiAgLyoqIEFuIG9wdGlvbmFsIGN1c3RvbSBzYW5pdGl6ZXIuICovXG4gIFtTQU5JVElaRVJdOiBTYW5pdGl6ZXJ8bnVsbDtcblxuICAvKipcbiAgICogVGhlIGxhc3QgTFZpZXdEYXRhIG9yIExDb250YWluZXIgYmVuZWF0aCB0aGlzIExWaWV3RGF0YSBpbiB0aGUgaGllcmFyY2h5LlxuICAgKlxuICAgKiBUaGUgdGFpbCBhbGxvd3MgdXMgdG8gcXVpY2tseSBhZGQgYSBuZXcgc3RhdGUgdG8gdGhlIGVuZCBvZiB0aGUgdmlldyBsaXN0XG4gICAqIHdpdGhvdXQgaGF2aW5nIHRvIHByb3BhZ2F0ZSBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBjaGlsZC5cbiAgICovXG4gIFtUQUlMXTogTFZpZXdEYXRhfExDb250YWluZXJ8bnVsbDtcblxuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyJ3MgaG9zdCBub2RlLiBBcHBsaWNhYmxlIG9ubHkgdG8gZW1iZWRkZWQgdmlld3MgdGhhdFxuICAgKiBoYXZlIGJlZW4gaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFdpbGwgYmUgLTEgZm9yIGNvbXBvbmVudCB2aWV3cyBhbmQgaW5saW5lIHZpZXdzLlxuICAgKlxuICAgKiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBqdW1wIGZyb20gZHluYW1pY2FsbHkgY3JlYXRlZCBlbWJlZGRlZCB2aWV3cyB0byB0aGVpciBwYXJlbnRcbiAgICogY29udGFpbmVycyBiZWNhdXNlIHRoZWlyIHBhcmVudCBjYW5ub3QgYmUgc3RvcmVkIG9uIHRoZSBUVmlld05vZGUgKHZpZXdzIG1heSBiZSBpbnNlcnRlZFxuICAgKiBpbiBtdWx0aXBsZSBjb250YWluZXJzLCBzbyB0aGUgcGFyZW50IGNhbm5vdCBiZSBzaGFyZWQgYmV0d2VlbiB2aWV3IGluc3RhbmNlcykuXG4gICAqL1xuICBbQ09OVEFJTkVSX0lOREVYXTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTdG9yZXMgUXVlcnlMaXN0cyBhc3NvY2lhdGVkIHdpdGggY29udGVudCBxdWVyaWVzIG9mIGEgZGlyZWN0aXZlLiBUaGlzIGRhdGEgc3RydWN0dXJlIGlzXG4gICAqIGZpbGxlZC1pbiBhcyBwYXJ0IG9mIGEgZGlyZWN0aXZlIGNyZWF0aW9uIHByb2Nlc3MgYW5kIGlzIGxhdGVyIHVzZWQgdG8gcmV0cmlldmUgYSBRdWVyeUxpc3QgdG9cbiAgICogYmUgcmVmcmVzaGVkLlxuICAgKi9cbiAgW0NPTlRFTlRfUVVFUklFU106IFF1ZXJ5TGlzdDxhbnk+W118bnVsbDtcblxuICAvKipcbiAgICogVmlldyB3aGVyZSB0aGlzIHZpZXcncyB0ZW1wbGF0ZSB3YXMgZGVjbGFyZWQuXG4gICAqXG4gICAqIE9ubHkgYXBwbGljYWJsZSBmb3IgZHluYW1pY2FsbHkgY3JlYXRlZCB2aWV3cy4gV2lsbCBiZSBudWxsIGZvciBpbmxpbmUvY29tcG9uZW50IHZpZXdzLlxuICAgKlxuICAgKiBUaGUgdGVtcGxhdGUgZm9yIGEgZHluYW1pY2FsbHkgY3JlYXRlZCB2aWV3IG1heSBiZSBkZWNsYXJlZCBpbiBhIGRpZmZlcmVudCB2aWV3IHRoYW5cbiAgICogaXQgaXMgaW5zZXJ0ZWQuIFdlIGFscmVhZHkgdHJhY2sgdGhlIFwiaW5zZXJ0aW9uIHZpZXdcIiAodmlldyB3aGVyZSB0aGUgdGVtcGxhdGUgd2FzXG4gICAqIGluc2VydGVkKSBpbiBMVmlld0RhdGFbUEFSRU5UXSwgYnV0IHdlIGFsc28gbmVlZCBhY2Nlc3MgdG8gdGhlIFwiZGVjbGFyYXRpb24gdmlld1wiXG4gICAqICh2aWV3IHdoZXJlIHRoZSB0ZW1wbGF0ZSB3YXMgZGVjbGFyZWQpLiBPdGhlcndpc2UsIHdlIHdvdWxkbid0IGJlIGFibGUgdG8gY2FsbCB0aGVcbiAgICogdmlldydzIHRlbXBsYXRlIGZ1bmN0aW9uIHdpdGggdGhlIHByb3BlciBjb250ZXh0cy4gQ29udGV4dCBzaG91bGQgYmUgaW5oZXJpdGVkIGZyb21cbiAgICogdGhlIGRlY2xhcmF0aW9uIHZpZXcgdHJlZSwgbm90IHRoZSBpbnNlcnRpb24gdmlldyB0cmVlLlxuICAgKlxuICAgKiBFeGFtcGxlIChBcHBDb21wb25lbnQgdGVtcGxhdGUpOlxuICAgKlxuICAgKiA8bmctdGVtcGxhdGUgI2Zvbz48L25nLXRlbXBsYXRlPiAgICAgICA8LS0gZGVjbGFyZWQgaGVyZSAtLT5cbiAgICogPHNvbWUtY29tcCBbdHBsXT1cImZvb1wiPjwvc29tZS1jb21wPiAgICA8LS0gaW5zZXJ0ZWQgaW5zaWRlIHRoaXMgY29tcG9uZW50IC0tPlxuICAgKlxuICAgKiBUaGUgPG5nLXRlbXBsYXRlPiBhYm92ZSBpcyBkZWNsYXJlZCBpbiB0aGUgQXBwQ29tcG9uZW50IHRlbXBsYXRlLCBidXQgaXQgd2lsbCBiZSBwYXNzZWQgaW50b1xuICAgKiBTb21lQ29tcCBhbmQgaW5zZXJ0ZWQgdGhlcmUuIEluIHRoaXMgY2FzZSwgdGhlIGRlY2xhcmF0aW9uIHZpZXcgd291bGQgYmUgdGhlIEFwcENvbXBvbmVudCxcbiAgICogYnV0IHRoZSBpbnNlcnRpb24gdmlldyB3b3VsZCBiZSBTb21lQ29tcC4gV2hlbiB3ZSBhcmUgcmVtb3Zpbmcgdmlld3MsIHdlIHdvdWxkIHdhbnQgdG9cbiAgICogdHJhdmVyc2UgdGhyb3VnaCB0aGUgaW5zZXJ0aW9uIHZpZXcgdG8gY2xlYW4gdXAgbGlzdGVuZXJzLiBXaGVuIHdlIGFyZSBjYWxsaW5nIHRoZVxuICAgKiB0ZW1wbGF0ZSBmdW5jdGlvbiBkdXJpbmcgY2hhbmdlIGRldGVjdGlvbiwgd2UgbmVlZCB0aGUgZGVjbGFyYXRpb24gdmlldyB0byBnZXQgaW5oZXJpdGVkXG4gICAqIGNvbnRleHQuXG4gICAqL1xuICBbREVDTEFSQVRJT05fVklFV106IExWaWV3RGF0YXxudWxsO1xufVxuXG4vKiogRmxhZ3MgYXNzb2NpYXRlZCB3aXRoIGFuIExWaWV3IChzYXZlZCBpbiBMVmlld0RhdGFbRkxBR1NdKSAqL1xuZXhwb3J0IGNvbnN0IGVudW0gTFZpZXdGbGFncyB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgdmlldyBpcyBpbiBjcmVhdGlvbk1vZGUuXG4gICAqXG4gICAqIFRoaXMgbXVzdCBiZSBzdG9yZWQgaW4gdGhlIHZpZXcgcmF0aGVyIHRoYW4gdXNpbmcgYGRhdGFgIGFzIGEgbWFya2VyIHNvIHRoYXRcbiAgICogd2UgY2FuIHByb3Blcmx5IHN1cHBvcnQgZW1iZWRkZWQgdmlld3MuIE90aGVyd2lzZSwgd2hlbiBleGl0aW5nIGEgY2hpbGQgdmlld1xuICAgKiBiYWNrIGludG8gdGhlIHBhcmVudCB2aWV3LCBgZGF0YWAgd2lsbCBiZSBkZWZpbmVkIGFuZCBgY3JlYXRpb25Nb2RlYCB3aWxsIGJlXG4gICAqIGltcHJvcGVybHkgcmVwb3J0ZWQgYXMgZmFsc2UuXG4gICAqL1xuICBDcmVhdGlvbk1vZGUgPSAwYjAwMDAwMDEsXG5cbiAgLyoqIFdoZXRoZXIgdGhpcyB2aWV3IGhhcyBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kgKGNoZWNrcyBhbHdheXMpIG9yIG9uUHVzaCAqL1xuICBDaGVja0Fsd2F5cyA9IDBiMDAwMDAxMCxcblxuICAvKiogV2hldGhlciBvciBub3QgdGhpcyB2aWV3IGlzIGN1cnJlbnRseSBkaXJ0eSAobmVlZGluZyBjaGVjaykgKi9cbiAgRGlydHkgPSAwYjAwMDAxMDAsXG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgdmlldyBpcyBjdXJyZW50bHkgYXR0YWNoZWQgdG8gY2hhbmdlIGRldGVjdGlvbiB0cmVlLiAqL1xuICBBdHRhY2hlZCA9IDBiMDAwMTAwMCxcblxuICAvKipcbiAgICogIFdoZXRoZXIgb3Igbm90IHRoZSBpbml0IGhvb2tzIGhhdmUgcnVuLlxuICAgKlxuICAgKiBJZiBvbiwgdGhlIGluaXQgaG9va3MgaGF2ZW4ndCB5ZXQgYmVlbiBydW4gYW5kIHNob3VsZCBiZSBleGVjdXRlZCBieSB0aGUgZmlyc3QgY29tcG9uZW50IHRoYXRcbiAgICogcnVucyBPUiB0aGUgZmlyc3QgY1IoKSBpbnN0cnVjdGlvbiB0aGF0IHJ1bnMgKHNvIGluaXRzIGFyZSBydW4gZm9yIHRoZSB0b3AgbGV2ZWwgdmlldyBiZWZvcmVcbiAgICogYW55IGVtYmVkZGVkIHZpZXdzKS5cbiAgICovXG4gIFJ1bkluaXQgPSAwYjAwMTAwMDAsXG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgdmlldyBpcyBkZXN0cm95ZWQuICovXG4gIERlc3Ryb3llZCA9IDBiMDEwMDAwMCxcblxuICAvKiogV2hldGhlciBvciBub3QgdGhpcyB2aWV3IGlzIHRoZSByb290IHZpZXcgKi9cbiAgSXNSb290ID0gMGIxMDAwMDAwLFxufVxuXG4vKipcbiAqIFRoZSBzdGF0aWMgZGF0YSBmb3IgYW4gTFZpZXcgKHNoYXJlZCBiZXR3ZWVuIGFsbCB0ZW1wbGF0ZXMgb2YgYVxuICogZ2l2ZW4gdHlwZSkuXG4gKlxuICogU3RvcmVkIG9uIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBhcyBuZ1ByaXZhdGVEYXRhLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRWaWV3IHtcbiAgLyoqXG4gICAqIElEIGZvciBpbmxpbmUgdmlld3MgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSB2aWV3IGlzIHRoZSBzYW1lIGFzIHRoZSBwcmV2aW91cyB2aWV3XG4gICAqIGluIGEgY2VydGFpbiBwb3NpdGlvbi4gSWYgaXQncyBub3QsIHdlIGtub3cgdGhlIG5ldyB2aWV3IG5lZWRzIHRvIGJlIGluc2VydGVkXG4gICAqIGFuZCB0aGUgb25lIHRoYXQgZXhpc3RzIG5lZWRzIHRvIGJlIHJlbW92ZWQgKGUuZy4gaWYvZWxzZSBzdGF0ZW1lbnRzKVxuICAgKlxuICAgKiBJZiB0aGlzIGlzIC0xLCB0aGVuIHRoaXMgaXMgYSBjb21wb25lbnQgdmlldyBvciBhIGR5bmFtaWNhbGx5IGNyZWF0ZWQgdmlldy5cbiAgICovXG4gIHJlYWRvbmx5IGlkOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBibHVlcHJpbnQgdXNlZCB0byBnZW5lcmF0ZSBMVmlld0RhdGEgaW5zdGFuY2VzIGZvciB0aGlzIFRWaWV3LiBDb3B5aW5nIHRoaXNcbiAgICogYmx1ZXByaW50IGlzIGZhc3RlciB0aGFuIGNyZWF0aW5nIGEgbmV3IExWaWV3RGF0YSBmcm9tIHNjcmF0Y2guXG4gICAqL1xuICBibHVlcHJpbnQ6IExWaWV3RGF0YTtcblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHVzZWQgdG8gcmVmcmVzaCB0aGUgdmlldyBvZiBkeW5hbWljYWxseSBjcmVhdGVkIHZpZXdzXG4gICAqIGFuZCBjb21wb25lbnRzLiBXaWxsIGJlIG51bGwgZm9yIGlubGluZSB2aWV3cy5cbiAgICovXG4gIHRlbXBsYXRlOiBDb21wb25lbnRUZW1wbGF0ZTx7fT58bnVsbDtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiBjb250YWluaW5nIHF1ZXJ5LXJlbGF0ZWQgaW5zdHJ1Y3Rpb25zLlxuICAgKi9cbiAgdmlld1F1ZXJ5OiBDb21wb25lbnRRdWVyeTx7fT58bnVsbDtcblxuICAvKipcbiAgICogUG9pbnRlciB0byB0aGUgYFROb2RlYCB0aGF0IHJlcHJlc2VudHMgdGhlIHJvb3Qgb2YgdGhlIHZpZXcuXG4gICAqXG4gICAqIElmIHRoaXMgaXMgYSBgVE5vZGVgIGZvciBhbiBgTFZpZXdOb2RlYCwgdGhpcyBpcyBhbiBlbWJlZGRlZCB2aWV3IG9mIGEgY29udGFpbmVyLlxuICAgKiBXZSBuZWVkIHRoaXMgcG9pbnRlciB0byBiZSBhYmxlIHRvIGVmZmljaWVudGx5IGZpbmQgdGhpcyBub2RlIHdoZW4gaW5zZXJ0aW5nIHRoZSB2aWV3XG4gICAqIGludG8gYW4gYW5jaG9yLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIGEgYFRFbGVtZW50Tm9kZWAsIHRoaXMgaXMgdGhlIHZpZXcgb2YgYSByb290IGNvbXBvbmVudC4gSXQgaGFzIGV4YWN0bHkgb25lXG4gICAqIHJvb3QgVE5vZGUuXG4gICAqXG4gICAqIElmIHRoaXMgaXMgbnVsbCwgdGhpcyBpcyB0aGUgdmlldyBvZiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCBhdCByb290LiBXZSBkbyBub3Qgc3RvcmVcbiAgICogdGhlIGhvc3QgVE5vZGVzIGZvciBjaGlsZCBjb21wb25lbnQgdmlld3MgYmVjYXVzZSB0aGV5IGNhbiBwb3RlbnRpYWxseSBoYXZlIHNldmVyYWxcbiAgICogZGlmZmVyZW50IGhvc3QgVE5vZGVzLCBkZXBlbmRpbmcgb24gd2hlcmUgdGhlIGNvbXBvbmVudCBpcyBiZWluZyB1c2VkLiBUaGVzZSBob3N0XG4gICAqIFROb2RlcyBjYW5ub3QgYmUgc2hhcmVkIChkdWUgdG8gZGlmZmVyZW50IGluZGljZXMsIGV0YykuXG4gICAqL1xuICBub2RlOiBUVmlld05vZGV8VEVsZW1lbnROb2RlfG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgdGVtcGxhdGUgaGFzIGJlZW4gcHJvY2Vzc2VkLiAqL1xuICBmaXJzdFRlbXBsYXRlUGFzczogYm9vbGVhbjtcblxuICAvKiogU3RhdGljIGRhdGEgZXF1aXZhbGVudCBvZiBMVmlldy5kYXRhW10uIENvbnRhaW5zIFROb2Rlcy4gKi9cbiAgZGF0YTogVERhdGE7XG5cbiAgLyoqXG4gICAqIFRoZSBiaW5kaW5nIHN0YXJ0IGluZGV4IGlzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgZGF0YSBhcnJheVxuICAgKiBzdGFydHMgdG8gc3RvcmUgYmluZGluZ3Mgb25seS4gU2F2aW5nIHRoaXMgdmFsdWUgZW5zdXJlcyB0aGF0IHdlXG4gICAqIHdpbGwgYmVnaW4gcmVhZGluZyBiaW5kaW5ncyBhdCB0aGUgY29ycmVjdCBwb2ludCBpbiB0aGUgYXJyYXkgd2hlblxuICAgKiB3ZSBhcmUgaW4gdXBkYXRlIG1vZGUuXG4gICAqL1xuICBiaW5kaW5nU3RhcnRJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgaW5kZXggd2hlcmUgdGhlIFwiZXhwYW5kb1wiIHNlY3Rpb24gb2YgYExWaWV3RGF0YWAgYmVnaW5zLiBUaGUgZXhwYW5kb1xuICAgKiBzZWN0aW9uIGNvbnRhaW5zIGluamVjdG9ycywgZGlyZWN0aXZlIGluc3RhbmNlcywgYW5kIGhvc3QgYmluZGluZyB2YWx1ZXMuXG4gICAqIFVubGlrZSB0aGUgXCJjb25zdHNcIiBhbmQgXCJ2YXJzXCIgc2VjdGlvbnMgb2YgYExWaWV3RGF0YWAsIHRoZSBsZW5ndGggb2YgdGhpc1xuICAgKiBzZWN0aW9uIGNhbm5vdCBiZSBjYWxjdWxhdGVkIGF0IGNvbXBpbGUtdGltZSBiZWNhdXNlIGRpcmVjdGl2ZXMgYXJlIG1hdGNoZWRcbiAgICogYXQgcnVudGltZSB0byBwcmVzZXJ2ZSBsb2NhbGl0eS5cbiAgICpcbiAgICogV2Ugc3RvcmUgdGhpcyBzdGFydCBpbmRleCBzbyB3ZSBrbm93IHdoZXJlIHRvIHN0YXJ0IGNoZWNraW5nIGhvc3QgYmluZGluZ3NcbiAgICogaW4gYHNldEhvc3RCaW5kaW5nc2AuXG4gICAqL1xuICBleHBhbmRvU3RhcnRJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbmRleCBvZiB0aGUgaG9zdCBub2RlIG9mIHRoZSBmaXJzdCBMVmlldyBvciBMQ29udGFpbmVyIGJlbmVhdGggdGhpcyBMVmlldyBpblxuICAgKiB0aGUgaGllcmFyY2h5LlxuICAgKlxuICAgKiBOZWNlc3NhcnkgdG8gc3RvcmUgdGhpcyBzbyB2aWV3cyBjYW4gdHJhdmVyc2UgdGhyb3VnaCB0aGVpciBuZXN0ZWQgdmlld3NcbiAgICogdG8gcmVtb3ZlIGxpc3RlbmVycyBhbmQgY2FsbCBvbkRlc3Ryb3kgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBGb3IgZW1iZWRkZWQgdmlld3MsIHdlIHN0b3JlIHRoZSBpbmRleCBvZiBhbiBMQ29udGFpbmVyJ3MgaG9zdCByYXRoZXIgdGhhbiB0aGUgZmlyc3RcbiAgICogTFZpZXcgdG8gYXZvaWQgbWFuYWdpbmcgc3BsaWNpbmcgd2hlbiB2aWV3cyBhcmUgYWRkZWQvcmVtb3ZlZC5cbiAgICovXG4gIGNoaWxkSW5kZXg6IG51bWJlcjtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGZpcnN0IGNoaWxkIG5vZGUgbG9jYXRlZCBpbiB0aGUgdmlldy5cbiAgICovXG4gIGZpcnN0Q2hpbGQ6IFROb2RlfG51bGw7XG5cbiAgLyoqXG4gICAqIFNlbGVjdG9yIG1hdGNoZXMgZm9yIGEgbm9kZSBhcmUgdGVtcG9yYXJpbHkgY2FjaGVkIG9uIHRoZSBUVmlldyBzbyB0aGVcbiAgICogREkgc3lzdGVtIGNhbiBlYWdlcmx5IGluc3RhbnRpYXRlIGRpcmVjdGl2ZXMgb24gdGhlIHNhbWUgbm9kZSBpZiB0aGV5IGFyZVxuICAgKiBjcmVhdGVkIG91dCBvZiBvcmRlci4gVGhleSBhcmUgb3ZlcndyaXR0ZW4gYWZ0ZXIgZWFjaCBub2RlLlxuICAgKlxuICAgKiA8ZGl2IGRpckEgZGlyQj48L2Rpdj5cbiAgICpcbiAgICogZS5nLiBEaXJBIGluamVjdHMgRGlyQiwgYnV0IERpckEgaXMgY3JlYXRlZCBmaXJzdC4gREkgc2hvdWxkIGluc3RhbnRpYXRlXG4gICAqIERpckIgd2hlbiBpdCBmaW5kcyB0aGF0IGl0J3Mgb24gdGhlIHNhbWUgbm9kZSwgYnV0IG5vdCB5ZXQgY3JlYXRlZC5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgZGVmc1xuICAgKiBPZGQgaW5kaWNlczpcbiAgICogICAtIE51bGwgaWYgdGhlIGFzc29jaWF0ZWQgZGlyZWN0aXZlIGhhc24ndCBiZWVuIGluc3RhbnRpYXRlZCB5ZXRcbiAgICogICAtIERpcmVjdGl2ZSBpbmRleCwgaWYgYXNzb2NpYXRlZCBkaXJlY3RpdmUgaGFzIGJlZW4gY3JlYXRlZFxuICAgKiAgIC0gU3RyaW5nLCB0ZW1wb3JhcnkgJ0NJUkNVTEFSJyB0b2tlbiBzZXQgd2hpbGUgZGVwZW5kZW5jaWVzIGFyZSBiZWluZyByZXNvbHZlZFxuICAgKi9cbiAgY3VycmVudE1hdGNoZXM6IEN1cnJlbnRNYXRjaGVzTGlzdHxudWxsO1xuXG4gIC8qKlxuICAgKiBTZXQgb2YgaW5zdHJ1Y3Rpb25zIHVzZWQgdG8gcHJvY2VzcyBob3N0IGJpbmRpbmdzIGVmZmljaWVudGx5LlxuICAgKlxuICAgKiBTZWUgVklFV19EQVRBLm1kIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZXhwYW5kb0luc3RydWN0aW9uczogKG51bWJlcnxIb3N0QmluZGluZ3NGdW5jdGlvbilbXXxudWxsO1xuXG4gIC8qKlxuICAgKiBGdWxsIHJlZ2lzdHJ5IG9mIGRpcmVjdGl2ZXMgYW5kIGNvbXBvbmVudHMgdGhhdCBtYXkgYmUgZm91bmQgaW4gdGhpcyB2aWV3LlxuICAgKlxuICAgKiBJdCdzIG5lY2Vzc2FyeSB0byBrZWVwIGEgY29weSBvZiB0aGUgZnVsbCBkZWYgbGlzdCBvbiB0aGUgVFZpZXcgc28gaXQncyBwb3NzaWJsZVxuICAgKiB0byByZW5kZXIgdGVtcGxhdGUgZnVuY3Rpb25zIHdpdGhvdXQgYSBob3N0IGNvbXBvbmVudC5cbiAgICovXG4gIGRpcmVjdGl2ZVJlZ2lzdHJ5OiBEaXJlY3RpdmVEZWZMaXN0fG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bGwgcmVnaXN0cnkgb2YgcGlwZXMgdGhhdCBtYXkgYmUgZm91bmQgaW4gdGhpcyB2aWV3LlxuICAgKlxuICAgKiBUaGUgcHJvcGVydHkgaXMgZWl0aGVyIGFuIGFycmF5IG9mIGBQaXBlRGVmc2BzIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0aGUgYXJyYXkgb2ZcbiAgICogYFBpcGVEZWZzYHMuIFRoZSBmdW5jdGlvbiBpcyBuZWNlc3NhcnkgdG8gYmUgYWJsZSB0byBzdXBwb3J0IGZvcndhcmQgZGVjbGFyYXRpb25zLlxuICAgKlxuICAgKiBJdCdzIG5lY2Vzc2FyeSB0byBrZWVwIGEgY29weSBvZiB0aGUgZnVsbCBkZWYgbGlzdCBvbiB0aGUgVFZpZXcgc28gaXQncyBwb3NzaWJsZVxuICAgKiB0byByZW5kZXIgdGVtcGxhdGUgZnVuY3Rpb25zIHdpdGhvdXQgYSBob3N0IGNvbXBvbmVudC5cbiAgICovXG4gIHBpcGVSZWdpc3RyeTogUGlwZURlZkxpc3R8bnVsbDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgbmdPbkluaXQgYW5kIG5nRG9DaGVjayBob29rcyB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCBmb3IgdGhpcyB2aWV3IGluXG4gICAqIGNyZWF0aW9uIG1vZGUuXG4gICAqXG4gICAqIEV2ZW4gaW5kaWNlczogRGlyZWN0aXZlIGluZGV4XG4gICAqIE9kZCBpbmRpY2VzOiBIb29rIGZ1bmN0aW9uXG4gICAqL1xuICBpbml0SG9va3M6IEhvb2tEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG5nRG9DaGVjayBob29rcyB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCBmb3IgdGhpcyB2aWV3IGluIHVwZGF0ZSBtb2RlLlxuICAgKlxuICAgKiBFdmVuIGluZGljZXM6IERpcmVjdGl2ZSBpbmRleFxuICAgKiBPZGQgaW5kaWNlczogSG9vayBmdW5jdGlvblxuICAgKi9cbiAgY2hlY2tIb29rczogSG9va0RhdGF8bnVsbDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgbmdBZnRlckNvbnRlbnRJbml0IGFuZCBuZ0FmdGVyQ29udGVudENoZWNrZWQgaG9va3MgdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWRcbiAgICogZm9yIHRoaXMgdmlldyBpbiBjcmVhdGlvbiBtb2RlLlxuICAgKlxuICAgKiBFdmVuIGluZGljZXM6IERpcmVjdGl2ZSBpbmRleFxuICAgKiBPZGQgaW5kaWNlczogSG9vayBmdW5jdGlvblxuICAgKi9cbiAgY29udGVudEhvb2tzOiBIb29rRGF0YXxudWxsO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBuZ0FmdGVyQ29udGVudENoZWNrZWQgaG9va3MgdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQgZm9yIHRoaXMgdmlldyBpbiB1cGRhdGVcbiAgICogbW9kZS5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgaW5kZXhcbiAgICogT2RkIGluZGljZXM6IEhvb2sgZnVuY3Rpb25cbiAgICovXG4gIGNvbnRlbnRDaGVja0hvb2tzOiBIb29rRGF0YXxudWxsO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBuZ0FmdGVyVmlld0luaXQgYW5kIG5nQWZ0ZXJWaWV3Q2hlY2tlZCBob29rcyB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCBmb3JcbiAgICogdGhpcyB2aWV3IGluIGNyZWF0aW9uIG1vZGUuXG4gICAqXG4gICAqIEV2ZW4gaW5kaWNlczogRGlyZWN0aXZlIGluZGV4XG4gICAqIE9kZCBpbmRpY2VzOiBIb29rIGZ1bmN0aW9uXG4gICAqL1xuICB2aWV3SG9va3M6IEhvb2tEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG5nQWZ0ZXJWaWV3Q2hlY2tlZCBob29rcyB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCBmb3IgdGhpcyB2aWV3IGluXG4gICAqIHVwZGF0ZSBtb2RlLlxuICAgKlxuICAgKiBFdmVuIGluZGljZXM6IERpcmVjdGl2ZSBpbmRleFxuICAgKiBPZGQgaW5kaWNlczogSG9vayBmdW5jdGlvblxuICAgKi9cbiAgdmlld0NoZWNrSG9va3M6IEhvb2tEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG5nT25EZXN0cm95IGhvb2tzIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkIHdoZW4gdGhpcyB2aWV3IGlzIGRlc3Ryb3llZC5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgaW5kZXhcbiAgICogT2RkIGluZGljZXM6IEhvb2sgZnVuY3Rpb25cbiAgICovXG4gIGRlc3Ryb3lIb29rczogSG9va0RhdGF8bnVsbDtcblxuICAvKipcbiAgICogQXJyYXkgb2YgcGlwZSBuZ09uRGVzdHJveSBob29rcyB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCB3aGVuIHRoaXMgdmlldyBpcyBkZXN0cm95ZWQuXG4gICAqXG4gICAqIEV2ZW4gaW5kaWNlczogSW5kZXggb2YgcGlwZSBpbiBkYXRhXG4gICAqIE9kZCBpbmRpY2VzOiBIb29rIGZ1bmN0aW9uXG4gICAqXG4gICAqIFRoZXNlIG11c3QgYmUgc3RvcmVkIHNlcGFyYXRlbHkgZnJvbSBkaXJlY3RpdmUgZGVzdHJveSBob29rcyBiZWNhdXNlIHRoZWlyIGNvbnRleHRzXG4gICAqIGFyZSBzdG9yZWQgaW4gZGF0YS5cbiAgICovXG4gIHBpcGVEZXN0cm95SG9va3M6IEhvb2tEYXRhfG51bGw7XG5cbiAgLyoqXG4gICAqIFdoZW4gYSB2aWV3IGlzIGRlc3Ryb3llZCwgbGlzdGVuZXJzIG5lZWQgdG8gYmUgcmVsZWFzZWQgYW5kIG91dHB1dHMgbmVlZCB0byBiZVxuICAgKiB1bnN1YnNjcmliZWQuIFRoaXMgY2xlYW51cCBhcnJheSBzdG9yZXMgYm90aCBsaXN0ZW5lciBkYXRhIChpbiBjaHVua3Mgb2YgNClcbiAgICogYW5kIG91dHB1dCBkYXRhIChpbiBjaHVua3Mgb2YgMikgZm9yIGEgcGFydGljdWxhciB2aWV3LiBDb21iaW5pbmcgdGhlIGFycmF5c1xuICAgKiBzYXZlcyBvbiBtZW1vcnkgKDcwIGJ5dGVzIHBlciBhcnJheSkgYW5kIG9uIGEgZmV3IGJ5dGVzIG9mIGNvZGUgc2l6ZSAoZm9yIHR3b1xuICAgKiBzZXBhcmF0ZSBmb3IgbG9vcHMpLlxuICAgKlxuICAgKiBJZiBpdCdzIGEgbmF0aXZlIERPTSBsaXN0ZW5lciBiZWluZyBzdG9yZWQ6XG4gICAqIDFzdCBpbmRleCBpczogZXZlbnQgbmFtZSB0byByZW1vdmVcbiAgICogMm5kIGluZGV4IGlzOiBpbmRleCBvZiBuYXRpdmUgZWxlbWVudCBpbiBMVmlldy5kYXRhW11cbiAgICogM3JkIGluZGV4IGlzOiBpbmRleCBvZiB3cmFwcGVkIGxpc3RlbmVyIGZ1bmN0aW9uIGluIExWaWV3LmNsZWFudXBJbnN0YW5jZXNbXVxuICAgKiA0dGggaW5kZXggaXM6IHVzZUNhcHR1cmUgYm9vbGVhblxuICAgKlxuICAgKiBJZiBpdCdzIGEgcmVuZGVyZXIyIHN0eWxlIGxpc3RlbmVyIG9yIFZpZXdSZWYgZGVzdHJveSBob29rIGJlaW5nIHN0b3JlZDpcbiAgICogMXN0IGluZGV4IGlzOiBpbmRleCBvZiB0aGUgY2xlYW51cCBmdW5jdGlvbiBpbiBMVmlldy5jbGVhbnVwSW5zdGFuY2VzW11cbiAgICogMm5kIGluZGV4IGlzOiBudWxsXG4gICAqXG4gICAqIElmIGl0J3MgYW4gb3V0cHV0IHN1YnNjcmlwdGlvbiBvciBxdWVyeSBsaXN0IGRlc3Ryb3kgaG9vazpcbiAgICogMXN0IGluZGV4IGlzOiBvdXRwdXQgdW5zdWJzY3JpYmUgZnVuY3Rpb24gLyBxdWVyeSBsaXN0IGRlc3Ryb3kgZnVuY3Rpb25cbiAgICogMm5kIGluZGV4IGlzOiBpbmRleCBvZiBmdW5jdGlvbiBjb250ZXh0IGluIExWaWV3LmNsZWFudXBJbnN0YW5jZXNbXVxuICAgKi9cbiAgY2xlYW51cDogYW55W118bnVsbDtcblxuICAvKipcbiAgICogQSBsaXN0IG9mIGVsZW1lbnQgaW5kaWNlcyBmb3IgY2hpbGQgY29tcG9uZW50cyB0aGF0IHdpbGwgbmVlZCB0byBiZVxuICAgKiByZWZyZXNoZWQgd2hlbiB0aGUgY3VycmVudCB2aWV3IGhhcyBmaW5pc2hlZCBpdHMgY2hlY2suIFRoZXNlIGluZGljZXMgaGF2ZVxuICAgKiBhbHJlYWR5IGJlZW4gYWRqdXN0ZWQgZm9yIHRoZSBIRUFERVJfT0ZGU0VULlxuICAgKlxuICAgKi9cbiAgY29tcG9uZW50czogbnVtYmVyW118bnVsbDtcblxuICAvKipcbiAgICogQSBsaXN0IG9mIGluZGljZXMgZm9yIGNoaWxkIGRpcmVjdGl2ZXMgdGhhdCBoYXZlIGNvbnRlbnQgcXVlcmllcy5cbiAgICpcbiAgICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgaW5kaWNlc1xuICAgKiBPZGQgaW5kaWNlczogU3RhcnRpbmcgaW5kZXggb2YgY29udGVudCBxdWVyaWVzIChzdG9yZWQgaW4gQ09OVEVOVF9RVUVSSUVTKSBmb3IgdGhpcyBkaXJlY3RpdmVcbiAgICovXG4gIGNvbnRlbnRRdWVyaWVzOiBudW1iZXJbXXxudWxsO1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBSb290Q29udGV4dEZsYWdzIHtFbXB0eSA9IDBiMDAsIERldGVjdENoYW5nZXMgPSAwYjAxLCBGbHVzaFBsYXllcnMgPSAwYjEwfVxuXG5cbi8qKlxuICogUm9vdENvbnRleHQgY29udGFpbnMgaW5mb3JtYXRpb24gd2hpY2ggaXMgc2hhcmVkIGZvciBhbGwgY29tcG9uZW50cyB3aGljaFxuICogd2VyZSBib290c3RyYXBwZWQgd2l0aCB7QGxpbmsgcmVuZGVyQ29tcG9uZW50fS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb290Q29udGV4dCB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHVzZWQgZm9yIHNjaGVkdWxpbmcgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGUgZnV0dXJlLiBVc3VhbGx5XG4gICAqIHRoaXMgaXMgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAuXG4gICAqL1xuICBzY2hlZHVsZXI6ICh3b3JrRm46ICgpID0+IHZvaWQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEEgcHJvbWlzZSB3aGljaCBpcyByZXNvbHZlZCB3aGVuIGFsbCBjb21wb25lbnRzIGFyZSBjb25zaWRlcmVkIGNsZWFuIChub3QgZGlydHkpLlxuICAgKlxuICAgKiBUaGlzIHByb21pc2UgaXMgb3ZlcndyaXR0ZW4gZXZlcnkgdGltZSBhIGZpcnN0IGNhbGwgdG8ge0BsaW5rIG1hcmtEaXJ0eX0gaXMgaW52b2tlZC5cbiAgICovXG4gIGNsZWFuOiBQcm9taXNlPG51bGw+O1xuXG4gIC8qKlxuICAgKiBSb290Q29tcG9uZW50cyAtIFRoZSBjb21wb25lbnRzIHRoYXQgd2VyZSBpbnN0YW50aWF0ZWQgYnkgdGhlIGNhbGwgdG9cbiAgICoge0BsaW5rIHJlbmRlckNvbXBvbmVudH0uXG4gICAqL1xuICBjb21wb25lbnRzOiB7fVtdO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxheWVyIGZsdXNoaW5nIGhhbmRsZXIgdG8ga2ljayBvZmYgYWxsIGFuaW1hdGlvbnNcbiAgICovXG4gIHBsYXllckhhbmRsZXI6IFBsYXllckhhbmRsZXJ8bnVsbDtcblxuICAvKipcbiAgICogV2hhdCByZW5kZXItcmVsYXRlZCBvcGVyYXRpb25zIHRvIHJ1biBvbmNlIGEgc2NoZWR1bGVyIGhhcyBiZWVuIHNldFxuICAgKi9cbiAgZmxhZ3M6IFJvb3RDb250ZXh0RmxhZ3M7XG59XG5cbi8qKlxuICogQXJyYXkgb2YgaG9va3MgdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQgZm9yIGEgdmlldyBhbmQgdGhlaXIgZGlyZWN0aXZlIGluZGljZXMuXG4gKlxuICogRXZlbiBpbmRpY2VzOiBEaXJlY3RpdmUgaW5kZXhcbiAqIE9kZCBpbmRpY2VzOiBIb29rIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIEhvb2tEYXRhID0gKG51bWJlciB8ICgoKSA9PiB2b2lkKSlbXTtcblxuLyoqXG4gKiBTdGF0aWMgZGF0YSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBpbnN0YW5jZS1zcGVjaWZpYyBkYXRhIGFycmF5IG9uIGFuIExWaWV3LlxuICpcbiAqIEVhY2ggbm9kZSdzIHN0YXRpYyBkYXRhIGlzIHN0b3JlZCBpbiB0RGF0YSBhdCB0aGUgc2FtZSBpbmRleCB0aGF0IGl0J3Mgc3RvcmVkXG4gKiBpbiB0aGUgZGF0YSBhcnJheS4gIEFueSBub2RlcyB0aGF0IGRvIG5vdCBoYXZlIHN0YXRpYyBkYXRhIHN0b3JlIGEgbnVsbCB2YWx1ZSBpblxuICogdERhdGEgdG8gYXZvaWQgYSBzcGFyc2UgYXJyYXkuXG4gKlxuICogRWFjaCBwaXBlJ3MgZGVmaW5pdGlvbiBpcyBzdG9yZWQgaGVyZSBhdCB0aGUgc2FtZSBpbmRleCBhcyBpdHMgcGlwZSBpbnN0YW5jZSBpblxuICogdGhlIGRhdGEgYXJyYXkuXG4gKlxuICogSW5qZWN0b3IgYmxvb20gZmlsdGVycyBhcmUgYWxzbyBzdG9yZWQgaGVyZS5cbiAqL1xuZXhwb3J0IHR5cGUgVERhdGEgPSAoVE5vZGUgfCBQaXBlRGVmPGFueT58IERpcmVjdGl2ZURlZjxhbnk+fCBDb21wb25lbnREZWY8YW55PnwgbnVtYmVyIHwgbnVsbClbXTtcblxuLyoqIFR5cGUgZm9yIFRWaWV3LmN1cnJlbnRNYXRjaGVzICovXG5leHBvcnQgdHlwZSBDdXJyZW50TWF0Y2hlc0xpc3QgPSBbRGlyZWN0aXZlRGVmPGFueT4sIChzdHJpbmcgfCBudW1iZXIgfCBudWxsKV07XG5cbi8vIE5vdGU6IFRoaXMgaGFjayBpcyBuZWNlc3Nhcnkgc28gd2UgZG9uJ3QgZXJyb25lb3VzbHkgZ2V0IGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuLy8gZmFpbHVyZSBiYXNlZCBvbiB0eXBlcy5cbmV4cG9ydCBjb25zdCB1bnVzZWRWYWx1ZUV4cG9ydFRvUGxhY2F0ZUFqZCA9IDE7XG4iXX0=