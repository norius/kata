'use strict';
const { InputStep1, InputStep2, InputStep3, InputStep4, InputStep5, InputStep6, InputStep7 } = require("./tests/testInputs");
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

const HasntFullName = (str) => {
  return str.toLowerCase() === 'customer' || str.toLowerCase() === 'agent'
}

const regex = /\.\d{2}:\d{2}:\d{2}/g;
let semaforo = true; //I assume the names of the agents are in some sort of DB, without that information I can't tell which is the customer and which is the agent so starting with the customer I interchange customer and agent for the type field

const GetMessages = (string, noColon = false) => {
  let splittedMessage = string.split(" "), date = splittedMessage[0], type, mention;
  if (noColon) {
    type = splittedMessage[1].toLowerCase();
    mention = `${splittedMessage.splice(0, 2).join(" ")} `;
  }
  else {
    if (HasntFullName(splittedMessage[1])) {
      type = splittedMessage[1].toLowerCase();
      mention = `${splittedMessage.splice(0, 3).join(" ")} `;
    }
    else {
      type = semaforo ? 'customer' : 'agent';
      mention = `${splittedMessage.splice(0, 4).join(" ")} `;
      semaforo = !semaforo;
    }
  }
  const sentence = splittedMessage.join(" ");
  return {
    date,
    mention,
    sentence,
    type,
  }
}

const SplitMessages = (messages, noColons = false) => {
  if (messages.includes("\n")) {
    let ris = [];
    const arrayMessages = messages.split("\n");
    arrayMessages.map(sms => {
      ris.push(GetMessages(sms, noColons))
    })
    return ris;
  }
  else {
    return [GetMessages(messages, noColons)]
  }
}

const NoBackslashNMessages = (messages, noColons = false) => {
  semaforo = true;
  if (regex.test(messages)) {
    let dates = messages.match(regex);
    let lastDatePos = 0;
    let ris = [];
    dates.map(date => {
      ris.push(GetMessages(messages.substring(lastDatePos, messages.indexOf(date) + 1), noColons));
      lastDatePos = messages.indexOf(date) + 1;
    })
    ris.push(GetMessages(messages.substring(lastDatePos), noColons))
    return ris;
  }
  else {
    return SplitMessages(messages, noColons)
  }
}

const checkColons = (msg) => {
  let arrMsg = msg.split(" ");
  if (HasntFullName(arrMsg[1]) && arrMsg[2] !== ':') { //I assume that if it has a full name then it also has the colons since I wouldnt know without an exact check on the name if it's a full name or it's part of the message content
    return false;
  }
  return true;
}

const NoColonsMessages = (messages) => {
  return NoBackslashNMessages(messages, !checkColons(messages))

}

console.log(NoColonsMessages(InputStep7))

module.exports = { NoColonsMessages }