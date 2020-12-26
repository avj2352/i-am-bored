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