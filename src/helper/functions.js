const shorten = (title) => {
    const splitedTitle = title.split(" " );
    const newTitlte = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]} ${splitedTitle[4]} ${splitedTitle[5]} ${splitedTitle[6]} ${splitedTitle[7]}... `;

    return newTitlte
} 


export {shorten};
