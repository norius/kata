'use strict';
const GetMessages = require("../index");
const { RisStep1, RisStep2, RisStep3, RisStep4, RisStep5, RisStep6, RisStep7 } = require("./testResults")
const { InputStep1, InputStep2, InputStep3, InputStep4, InputStep5, InputStep6, InputStep7 } = require("./testInputs")

describe('Test', () => {
    describe('Test cases', () => {
        it('Step 1', async () => {
            expect(GetMessages(InputStep1)).toBe(RisStep1);
        });

        it('Step 2', async () => {
            expect(GetMessages(InputStep2)).toBe(RisStep2);
        });

        it('Step 3', async () => {
            expect(GetMessages(InputStep3)).toBe(RisStep3);
        });
        it('Step 4', async () => {
            expect(GetMessages(InputStep4)).toBe(RisStep4);
        });
        it('Step 5', async () => {
            expect(GetMessages(InputStep5)).toBe(RisStep5);
        });
        it('Step 6', async () => {
            expect(GetMessages(InputStep6)).toBe(RisStep6);
        });
        it('Step 7', async () => {
            expect(GetMessages(InputStep7)).toBe(RisStep7);
        });
    });
});