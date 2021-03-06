'use strict';
const { NoColonsMessages } = require("../index");
const { RisStep1, RisStep2, RisStep3, RisStep4, RisStep5, RisStep6, RisStep7 } = require("./testResults")
const { InputStep1, InputStep2, InputStep3, InputStep4, InputStep5, InputStep6, InputStep7 } = require("./testInputs")

describe('Test', () => {
    describe('Test cases', () => {
        it('Step 1', async () => {
            expect(NoColonsMessages(InputStep1)).toStrictEqual(RisStep1);
        });

        it('Step 2', async () => {
            expect(NoColonsMessages(InputStep2)).toStrictEqual(RisStep2);
        });

        it('Step 3', async () => {
            expect(NoColonsMessages(InputStep3)).toStrictEqual(RisStep3);
        });

        it('Step 4', async () => {
            expect(NoColonsMessages(InputStep4)).toStrictEqual(RisStep4);
        });

        it('Step 5', async () => {
            expect(NoColonsMessages(InputStep5)).toStrictEqual(RisStep5);
        });

        it('Step 6', async () => {
            expect(NoColonsMessages(InputStep6)).toStrictEqual(RisStep6);
        });

        it('Step 7', async () => {
            expect(NoColonsMessages(InputStep7)).toStrictEqual(RisStep7);
        });
    });
});