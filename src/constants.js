/**
 * @description Shared constants used across all likened apps.
 * Prevents circular dependencies and bundling issues by centralizing cross-app values.
 */

/**
 * @description Separator used for compound keys and entity URN parsing.
 * @type {string}
 * @example
 * // Compound key: "sales-api:salesapicompanies:post"
 * // Entity URN: "urn:li:fs_salesCompany:123456"
 */
export const SEPARATOR = ":";
