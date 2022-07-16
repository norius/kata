'use strict';
const { InputStep1, InputStep2, InputStep3, InputStep4, InputStep5, InputStep6, InputStep7 } = require("./tests/testInputs")
/*
example 
14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.

=>

[{
  date: '14:24:32',
  mention: '14:24:32 Customer : ',
  sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  type: 'customer'
}]

*/

const GetMessages = (string) => {
    const splittedMessage = string.split(" ");
    const date = splittedMessage[0];
    const type = splittedMessage[1].toLowerCase();
    const mention = `${splittedMessage.splice(0, 3).join(" ")} `;
    const sentence = splittedMessage.join(" ");
    return [{
        date,
        mention,
        sentence,
        type,
    }]
}

console.log(GetMessages(InputStep1))

module.exports = GetMessages;    