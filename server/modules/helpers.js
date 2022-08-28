"use strict";
export function getFullName(name, surname){
    return name + " " + surname;
}

export default function teste(){
    console.log("teste");
}

//CommonJs Module export
//module.exports = getFullName;

// module.exports = {
//     logInfo: info,
//     logError: error,
//     defaultMessage,
// };