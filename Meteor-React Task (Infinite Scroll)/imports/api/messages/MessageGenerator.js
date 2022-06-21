import { generateDate, generateID, generateSource, generateText, generateType } from "../generators/RandomGenerator"

export const generateMessage = () => { 
    return { 
        id: generateID(),
        text: generateText(),
        type: generateType(),
        source: generateSource(),
        date: generateDate(),
    };
}