# kata

## Prerequisites

This project uses node so be sure to have node and npm installed

---
## Setup

To Install all dependencies use
```
npm i
```

## Run

Theres an input file called messages.txt which is used as a source to parse the messages

This code does not work if the message terminator swaps between "\n" and "." so for example an input like 
```
14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n
14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.
```
Will generate an unexpected output

---
To run the project use the following script

```
npm run start
```

## Tests

To run the test cases use

```
npm run test
```

This is a solution for the [THIS](https://github.com/wonderflow-bv/parse-chat-kata/blob/master/ASSIGNMENT.md) kata exercise, inputs and test results were taken from there.