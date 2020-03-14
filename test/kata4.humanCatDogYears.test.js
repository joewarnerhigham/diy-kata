const { humanCatDogYears } = require("../src");

 describe('humanCatDogYears', () => {
     it ('returns human age followed by cat and dog age', () => {
         expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
     });
 });