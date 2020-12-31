export interface IRecipe {
	id?: string;
    title: string;
    link: string;
	isPrivate: boolean;
	content: string;
	html: string;
	group: any | null;
	tags?: any[];
	items?: any[];
	timers?: any[];
}