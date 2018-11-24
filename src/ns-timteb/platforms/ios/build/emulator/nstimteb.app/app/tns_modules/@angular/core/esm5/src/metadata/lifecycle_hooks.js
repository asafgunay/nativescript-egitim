/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2hvb2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTaW1wbGVDaGFuZ2V9IGZyb20gJy4uL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbl91dGlsJztcblxuXG4vKipcbiAqIERlZmluZXMgYW4gb2JqZWN0IHRoYXQgYXNzb2NpYXRlcyBwcm9wZXJ0aWVzIHdpdGhcbiAqIGluc3RhbmNlcyBvZiBgU2ltcGxlQ2hhbmdlYC5cbiAqXG4gKiBAc2VlIGBPbkNoYW5nZXNgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZUNoYW5nZXMgeyBbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZTsgfVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQSBsaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCB3aGVuIGFueSBkYXRhLWJvdW5kIHByb3BlcnR5IG9mIGEgZGlyZWN0aXZlIGNoYW5nZXMuXG4gKiBEZWZpbmUgYW4gYG5nT25DaGFuZ2VzKClgIG1ldGhvZCB0byBoYW5kbGUgdGhlIGNoYW5nZXMuXG4gKlxuICogQHNlZSBgRG9DaGVja2BcbiAqIEBzZWUgYE9uSW5pdGBcbiAqIEBzZWUgW0xpZmVjeWNsZSBIb29rc10oZ3VpZGUvbGlmZWN5Y2xlLWhvb2tzI29uY2hhbmdlcykgZ3VpZGVcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVGhlIGZvbGxvd2luZyBzbmlwcGV0IHNob3dzIGhvdyBhIGNvbXBvbmVudCBjYW4gaW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvXG4gKiBkZWZpbmUgYW4gb24tY2hhbmdlcyBoYW5kbGVyIGZvciBhbiBpbnB1dCBwcm9wZXJ0eS5cbiAqXG4gKiB7QGV4YW1wbGUgY29yZS90cy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3Nfc3BlYy50cyByZWdpb249J09uQ2hhbmdlcyd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIG1ldGhvZCB0aGF0IGlzIGludm9rZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlXG4gICAqIGRlZmF1bHQgY2hhbmdlIGRldGVjdG9yIGhhcyBjaGVja2VkIGRhdGEtYm91bmQgcHJvcGVydGllc1xuICAgKiBpZiBhdCBsZWFzdCBvbmUgaGFzIGNoYW5nZWQsIGFuZCBiZWZvcmUgdGhlIHZpZXcgYW5kIGNvbnRlbnRcbiAgICogY2hpbGRyZW4gYXJlIGNoZWNrZWQuXG4gICAqIEBwYXJhbSBjaGFuZ2VzIFRoZSBjaGFuZ2VkIHByb3BlcnRpZXMuXG4gICAqL1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgbGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgYWZ0ZXIgQW5ndWxhciBoYXMgaW5pdGlhbGl6ZWRcbiAqIGFsbCBkYXRhLWJvdW5kIHByb3BlcnRpZXMgb2YgYSBkaXJlY3RpdmUuXG4gKiBEZWZpbmUgYW4gYG5nT25Jbml0KClgIG1ldGhvZCB0byBoYW5kbGUgYW55IGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gdGFza3MuXG4gKlxuICogQHNlZSBgQWZ0ZXJDb250ZW50SW5pdGBcbiAqIEBzZWUgW0xpZmVjeWNsZSBIb29rc10oZ3VpZGUvbGlmZWN5Y2xlLWhvb2tzI29uY2hhbmdlcykgZ3VpZGVcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVGhlIGZvbGxvd2luZyBzbmlwcGV0IHNob3dzIGhvdyBhIGNvbXBvbmVudCBjYW4gaW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvXG4gKiBkZWZpbmUgaXRzIG93biBpbml0aWFsaXphdGlvbiBtZXRob2QuXG4gKlxuICoge0BleGFtcGxlIGNvcmUvdHMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzX3NwZWMudHMgcmVnaW9uPSdPbkluaXQnfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPbkluaXQge1xuICAvKipcbiAgICogQSBjYWxsYmFjayBtZXRob2QgdGhhdCBpcyBpbnZva2VkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZVxuICAgKiBkZWZhdWx0IGNoYW5nZSBkZXRlY3RvciBoYXMgY2hlY2tlZCB0aGUgZGlyZWN0aXZlJ3NcbiAgICogZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGZvciB0aGUgZmlyc3QgdGltZSxcbiAgICogYW5kIGJlZm9yZSBhbnkgb2YgdGhlIHZpZXcgb3IgY29udGVudCBjaGlsZHJlbiBoYXZlIGJlZW4gY2hlY2tlZC5cbiAgICogSXQgaXMgaW52b2tlZCBvbmx5IG9uY2Ugd2hlbiB0aGUgZGlyZWN0aXZlIGlzIGluc3RhbnRpYXRlZC5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQSBsaWZlY3ljbGUgaG9vayB0aGF0IGludm9rZXMgYSBjdXN0b20gY2hhbmdlLWRldGVjdGlvbiBmdW5jdGlvbiBmb3IgYSBkaXJlY3RpdmUsXG4gKiBpbiBhZGRpdGlvbiB0byB0aGUgY2hlY2sgcGVyZm9ybWVkIGJ5IHRoZSBkZWZhdWx0IGNoYW5nZS1kZXRlY3Rvci5cbiAqXG4gKiBUaGUgZGVmYXVsdCBjaGFuZ2UtZGV0ZWN0aW9uIGFsZ29yaXRobSBsb29rcyBmb3IgZGlmZmVyZW5jZXMgYnkgY29tcGFyaW5nXG4gKiBib3VuZC1wcm9wZXJ0eSB2YWx1ZXMgYnkgcmVmZXJlbmNlIGFjcm9zcyBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuIFlvdSBjYW4gdXNlIHRoaXNcbiAqIGhvb2sgdG8gY2hlY2sgZm9yIGFuZCByZXNwb25kIHRvIGNoYW5nZXMgYnkgc29tZSBvdGhlciBtZWFucy5cbiAqXG4gKiBXaGVuIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3RvciBkZXRlY3RzIGNoYW5nZXMsIGl0IGludm9rZXMgYG5nT25DaGFuZ2VzKClgIGlmIHN1cHBsaWVkLFxuICogcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHlvdSBwZXJmb3JtIGFkZGl0aW9uYWwgY2hhbmdlIGRldGVjdGlvbi5cbiAqIFR5cGljYWxseSwgeW91IHNob3VsZCBub3QgdXNlIGJvdGggYERvQ2hlY2tgIGFuZCBgT25DaGFuZ2VzYCB0byByZXNwb25kIHRvXG4gKiBjaGFuZ2VzIG9uIHRoZSBzYW1lIGlucHV0LlxuICpcbiAqIEBzZWUgYE9uQ2hhbmdlc2BcbiAqIEBzZWUgW0xpZmVjeWNsZSBIb29rc10oZ3VpZGUvbGlmZWN5Y2xlLWhvb2tzI29uY2hhbmdlcykgZ3VpZGVcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVGhlIGZvbGxvd2luZyBzbmlwcGV0IHNob3dzIGhvdyBhIGNvbXBvbmVudCBjYW4gaW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlXG4gKiB0byBpbnZva2UgaXQgb3duIGNoYW5nZS1kZXRlY3Rpb24gY3ljbGUuXG4gKlxuICoge0BleGFtcGxlIGNvcmUvdHMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzX3NwZWMudHMgcmVnaW9uPSdEb0NoZWNrJ31cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRG9DaGVjayB7XG4gIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgbWV0aG9kIHRoYXQgcGVyZm9ybXMgY2hhbmdlLWRldGVjdGlvbiwgaW52b2tlZFxuICAgICAqIGFmdGVyIHRoZSBkZWZhdWx0IGNoYW5nZS1kZXRlY3RvciBydW5zLlxuICAgICAqIFNlZSBgS2V5VmFsdWVEaWZmZXJzYCBhbmQgYEl0ZXJhYmxlRGlmZmVyc2AgZm9yIGltcGxlbWVudGluZ1xuICAgICAqIGN1c3RvbSBjaGFuZ2UgY2hlY2tpbmcgZm9yIGNvbGxlY3Rpb25zLlxuICAgICAqXG4gICAgICovXG4gIG5nRG9DaGVjaygpOiB2b2lkO1xufVxuXG4vKipcbiAqIEEgbGlmZWN5Y2xlIGhvb2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIGRpcmVjdGl2ZSwgcGlwZSwgb3Igc2VydmljZSBpcyBkZXN0cm95ZWQuXG4gKiBVc2UgZm9yIGFueSBjdXN0b20gY2xlYW51cCB0aGF0IG5lZWRzIHRvIG9jY3VyIHdoZW4gdGhlXG4gKiBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gKiBAc2VlIFtMaWZlY3ljbGUgSG9va3NdKGd1aWRlL2xpZmVjeWNsZS1ob29rcyNvbmNoYW5nZXMpIGd1aWRlXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIFRoZSBmb2xsb3dpbmcgc25pcHBldCBzaG93cyBob3cgYSBjb21wb25lbnQgY2FuIGltcGxlbWVudCB0aGlzIGludGVyZmFjZVxuICogdG8gZGVmaW5lIGl0cyBvd24gY3VzdG9tIGNsZWFuLXVwIG1ldGhvZC5cbiAqXG4gKiB7QGV4YW1wbGUgY29yZS90cy9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3Nfc3BlYy50cyByZWdpb249J09uRGVzdHJveSd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIG1ldGhvZCB0aGF0IHBlcmZvcm1zIGN1c3RvbSBjbGVhbi11cCwgaW52b2tlZCBpbW1lZGlhdGVseVxuICAgKiBhZnRlciBhIGRpcmVjdGl2ZSwgcGlwZSwgb3Igc2VydmljZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQSBsaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCBhZnRlciBBbmd1bGFyIGhhcyBmdWxseSBpbml0aWFsaXplZFxuICogYWxsIGNvbnRlbnQgb2YgYSBkaXJlY3RpdmUuXG4gKiBEZWZpbmUgYW4gYG5nQWZ0ZXJDb250ZW50SW5pdCgpYCBtZXRob2QgdG8gaGFuZGxlIGFueSBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIHRhc2tzLlxuICpcbiAqIEBzZWUgYE9uSW5pdGBcbiAqIEBzZWUgYEFmdGVyVmlld0luaXRgXG4gKiBAc2VlIFtMaWZlY3ljbGUgSG9va3NdKGd1aWRlL2xpZmVjeWNsZS1ob29rcyNvbmNoYW5nZXMpIGd1aWRlXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIFRoZSBmb2xsb3dpbmcgc25pcHBldCBzaG93cyBob3cgYSBjb21wb25lbnQgY2FuIGltcGxlbWVudCB0aGlzIGludGVyZmFjZSB0b1xuICogZGVmaW5lIGl0cyBvd24gY29udGVudCBpbml0aWFsaXphdGlvbiBtZXRob2QuXG4gKlxuICoge0BleGFtcGxlIGNvcmUvdHMvbWV0YWRhdGEvbGlmZWN5Y2xlX2hvb2tzX3NwZWMudHMgcmVnaW9uPSdBZnRlckNvbnRlbnRJbml0J31cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBBIGNhbGxiYWNrIG1ldGhvZCB0aGF0IGlzIGludm9rZWQgaW1tZWRpYXRlbHkgYWZ0ZXJcbiAgICogQW5ndWxhciBoYXMgY29tcGxldGVkIGluaXRpYWxpemF0aW9uIG9mIGFsbCBvZiB0aGUgZGlyZWN0aXZlJ3NcbiAgICogY29udGVudC5cbiAgICogSXQgaXMgaW52b2tlZCBvbmx5IG9uY2Ugd2hlbiB0aGUgZGlyZWN0aXZlIGlzIGluc3RhbnRpYXRlZC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQSBsaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCBhZnRlciB0aGUgZGVmYXVsdCBjaGFuZ2UgZGV0ZWN0b3IgaGFzXG4gKiBjb21wbGV0ZWQgY2hlY2tpbmcgYWxsIGNvbnRlbnQgb2YgYSBkaXJlY3RpdmUuXG4gKlxuICogQHNlZSBgQWZ0ZXJWaWV3Q2hlY2tlZGBcbiAqIEBzZWUgW0xpZmVjeWNsZSBIb29rc10oZ3VpZGUvbGlmZWN5Y2xlLWhvb2tzI29uY2hhbmdlcykgZ3VpZGVcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVGhlIGZvbGxvd2luZyBzbmlwcGV0IHNob3dzIGhvdyBhIGNvbXBvbmVudCBjYW4gaW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvXG4gKiBkZWZpbmUgaXRzIG93biBhZnRlci1jaGVjayBmdW5jdGlvbmFsaXR5LlxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL3RzL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rc19zcGVjLnRzIHJlZ2lvbj0nQWZ0ZXJDb250ZW50Q2hlY2tlZCd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFmdGVyQ29udGVudENoZWNrZWQge1xuICAvKipcbiAgICogQSBjYWxsYmFjayBtZXRob2QgdGhhdCBpcyBpbnZva2VkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZVxuICAgKiBkZWZhdWx0IGNoYW5nZSBkZXRlY3RvciBoYXMgY29tcGxldGVkIGNoZWNraW5nIGFsbCBvZiB0aGUgZGlyZWN0aXZlJ3NcbiAgICogY29udGVudC5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvblxuICogQSBsaWZlY3ljbGUgaG9vayB0aGF0IGlzIGNhbGxlZCBhZnRlciBBbmd1bGFyIGhhcyBmdWxseSBpbml0aWFsaXplZFxuICogYSBjb21wb25lbnQncyB2aWV3LlxuICogRGVmaW5lIGFuIGBuZ0FmdGVyVmlld0luaXQoKWAgbWV0aG9kIHRvIGhhbmRsZSBhbnkgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiB0YXNrcy5cbiAqXG4gKiBAc2VlIGBPbkluaXRgXG4gKiBAc2VlIGBBZnRlckNvbnRlbnRJbml0YFxuICogQHNlZSBbTGlmZWN5Y2xlIEhvb2tzXShndWlkZS9saWZlY3ljbGUtaG9va3Mjb25jaGFuZ2VzKSBndWlkZVxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBUaGUgZm9sbG93aW5nIHNuaXBwZXQgc2hvd3MgaG93IGEgY29tcG9uZW50IGNhbiBpbXBsZW1lbnQgdGhpcyBpbnRlcmZhY2UgdG9cbiAqIGRlZmluZSBpdHMgb3duIHZpZXcgaW5pdGlhbGl6YXRpb24gbWV0aG9kLlxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL3RzL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rc19zcGVjLnRzIHJlZ2lvbj0nQWZ0ZXJWaWV3SW5pdCd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFmdGVyVmlld0luaXQge1xuICAvKipcbiAgICogQSBjYWxsYmFjayBtZXRob2QgdGhhdCBpcyBpbnZva2VkIGltbWVkaWF0ZWx5IGFmdGVyXG4gICAqIEFuZ3VsYXIgaGFzIGNvbXBsZXRlZCBpbml0aWFsaXphdGlvbiBvZiBhIGNvbXBvbmVudCdzIHZpZXcuXG4gICAqIEl0IGlzIGludm9rZWQgb25seSBvbmNlIHdoZW4gdGhlIHZpZXcgaXMgaW5zdGFudGlhdGVkLlxuICAgKlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBIGxpZmVjeWNsZSBob29rIHRoYXQgaXMgY2FsbGVkIGFmdGVyIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3RvciBoYXNcbiAqIGNvbXBsZXRlZCBjaGVja2luZyBhIGNvbXBvbmVudCdzIHZpZXcgZm9yIGNoYW5nZXMuXG4gKlxuICogQHNlZSBgQWZ0ZXJDb250ZW50Q2hlY2tlZGBcbiAqIEBzZWUgW0xpZmVjeWNsZSBIb29rc10oZ3VpZGUvbGlmZWN5Y2xlLWhvb2tzI29uY2hhbmdlcykgZ3VpZGVcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogVGhlIGZvbGxvd2luZyBzbmlwcGV0IHNob3dzIGhvdyBhIGNvbXBvbmVudCBjYW4gaW1wbGVtZW50IHRoaXMgaW50ZXJmYWNlIHRvXG4gKiBkZWZpbmUgaXRzIG93biBhZnRlci1jaGVjayBmdW5jdGlvbmFsaXR5LlxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL3RzL21ldGFkYXRhL2xpZmVjeWNsZV9ob29rc19zcGVjLnRzIHJlZ2lvbj0nQWZ0ZXJWaWV3Q2hlY2tlZCd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFmdGVyVmlld0NoZWNrZWQge1xuICAvKipcbiAgICogQSBjYWxsYmFjayBtZXRob2QgdGhhdCBpcyBpbnZva2VkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZVxuICAgKiBkZWZhdWx0IGNoYW5nZSBkZXRlY3RvciBoYXMgY29tcGxldGVkIG9uZSBjaGFuZ2UtY2hlY2sgY3ljbGVcbiAgICogZm9yIGEgY29tcG9uZW50J3Mgdmlldy5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkO1xufVxuIl19