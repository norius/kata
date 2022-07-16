'use strict';
const { InputStep1, InputStep2, InputStep3, InputStep4, InputStep5, InputStep6, InputStep7 } = require("./tests/testInputs");
const { RisStep1 } = require("./tests/testResults");
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

const regex = /\.\d{2}:\d{2}:\d{2}/g;

const GetMessages = (string) => {
  const splittedMessage = string.split(" ");
  const date = splittedMessage[0];
  const type = splittedMessage[1].toLowerCase();
  const mention = `${splittedMessage.splice(0, 3).join(" ")} `;
  const sentence = splittedMessage.join(" ");
  return {
    date,
    mention,
    sentence,
    type,
  }
}

const SplitMessages = (messages) => {
  if (messages.includes("\n")) {
    let ris = [];
    const arrayMessages = messages.split("\n");
    arrayMessages.map(sms => {
      ris.push(GetMessages(sms))
    })
    return ris;
  }
  else {
    return [GetMessages(messages)]
  }
}

const NoBackslashNMessages = (messages) => {
  if (regex.test(messages)) {
    let dates = messages.match(regex);
    let lastDatePos = 0;
    let ris = [];
    dates.map(date => {
      ris.push(GetMessages(messages.substring(lastDatePos, messages.indexOf(date) + 1)));
      lastDatePos = messages.indexOf(date) + 1;
    })
    ris.push(GetMessages(messages.substring(lastDatePos)))
    return ris;
  }
  else {
    return SplitMessages(messages)
  }
}

console.log(NoBackslashNMessages(InputStep4))

module.exports = { GetMessages, SplitMessages, NoBackslashNMessages }