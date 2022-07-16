'use strict';
const { NoBackslashNMessages } = require("../index");
const { RisStep1, RisStep2, RisStep3, RisStep4, RisStep5, RisStep6, RisStep7 } = require("./testResults")
const { InputStep1, InputStep2, InputStep3, InputStep4, InputStep5, InputStep6, InputStep7 } = require("./testInputs")

describe('Test', () => {
    describe('Test cases', () => {
        it('Step 1', async () => {
            expect(NoBackslashNMessages(InputStep1)).toStrictEqual(RisStep1);
        });

        it('Step 2', async () => {
            expect(NoBackslashNMessages(InputStep2)).toStrictEqual(RisStep2);
        });

        it('Step 3', async () => {
            expect(NoBackslashNMessages(InputStep3)).toStrictEqual(RisStep3);
        });

        it('Step 4', async () => {
            expect(NoBackslashNMessages(InputStep4)).toStrictEqual(RisStep4);
        });

        it('Step 5', async () => {
            expect(NoBackslashNMessages(InputStep5)).toStrictEqual(RisStep5);
        });

        it('Step 6', async () => {
            expect(NoBackslashNMessages(InputStep6)).toStrictEqual(RisStep6);
        });

        // it('Step 7', async () => {
        //     expect(GetMessages(InputStep7)).toStrictEqual(RisStep7);
        // });
    });
});