import React, {
    FunctionComponent
} from 'react';

interface ILetter {
    letter: "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | 
    "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | 
    "z" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
    value: any[];
}

interface IRecipeCollectionProps {
    list: any[];
}

const listReducer = (list: ILetter[], data: any) => {
    if (list.length > 0) {
        const temp = list.filter((item: ILetter) => item.letter === data.title?.charAt(0));
        if (temp.length > 0) { temp[0].value.push(data);
        } else {
            list.push({
                letter: data.title?.charAt(0),
                value: [data]
            });
        }
    } else {
        list.push({
            letter: data.title?.charAt(0),
            value: [data]
        });
    }
    return list;
};


export const mapChronologicalList = (list: any[]): ILetter[] => {
    let initialState: ILetter[] = [];
    const result: ILetter[] = list.reduce(listReducer, initialState);
    if (result.length > 0) return result.sort((a: ILetter, b:ILetter) => a.letter.localeCompare(b.letter));
    else return [];
};


export const RecipeCollection: FunctionComponent<IRecipeCollectionProps> = (props): JSX.Element => {
    const { list } = props;
    console.log(`Sorted List is: `, list);
    return <React.Fragment> Recipe Collection comes here </React.Fragment>;
};