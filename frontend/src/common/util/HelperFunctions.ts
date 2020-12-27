/**
 * Helper function to remove HTML tags surrounding text
 * @param string text
 * @returns string
 */
export const removeHtmlTags = (text: string): string => text.replace(/<\/?[^>]+(>|$)/g, "");

/**
 * Helper function to remove new lines
 * @param string text
 * @returns string
 */
export const removeNewLines = (text: string): string => text.replace(/(\r\n|\n|\r)/gm, " ");

/**
 * Helper function to remove special characters
 * @param string text
 * @returns string
 */
export const removeSpecialCharacters = (text: string): string => text.replace(/&(quot;|gt;|lt;)?/g, "");

/**
 * Helper function to remove special characters
 * @param string text
 * @returns string
 */
export const replaceAmpersand = (text: string): string => text.replace(/&(amp;)?/g, "&");

