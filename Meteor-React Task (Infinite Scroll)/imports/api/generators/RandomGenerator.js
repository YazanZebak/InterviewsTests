export const generateID = () => {
    let S4 = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export const generateText = () => {
    let words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
    let text = [];
    let x = 10;
    while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
    return text.join(' ');
}

export const generateSource = () => {
    const words = ['Server', 'Clinet', 'Hacker >_<', 'API', 'User'];
    return getElement(words);
}

export const generateType = () => {
    const words = ['Error', 'Warning', 'Info', 'Success', 'Log', 'Verbose'];
    return getElement(words);
}

export const generateDate = () => {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)).toDateString();
}

const getElement = (words) => {
    return words[Math.floor(Math.random() * words.length)];
}

