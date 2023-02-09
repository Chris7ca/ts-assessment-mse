/**
 * Develop a CLI application with the following requirements
 * 
 * 1.) The CLI should have this menu:
 *          1. Type Name: Enter a human name and predict they age and gender
 *          2. Upload name list: Simulate upload a list with many names in CSV format
 *          3. Search by name: Find record by name and display data
 *          4. Show all records in DB: Display all names with they predicted data (age and gender)
 *          5. Delete DB: Clear the temporal storage
 *          6. Exit: Finish the application
 * 
 * 2.) Considerations:
 *          1. Always that you enter a new name you should call two services to predict the age and gender according that name
 *          2. Every name must store in a temporal storage
 *          3. Every name must be unique in the temporal storage
 * 
 * 3.) Resources:
 *          1. Service to predict age by name: GET https://api.agify.io?name=[name-here]
 *          2. Service to predict gender by name: GET https://api.genderize.io?name=[name-here]
 */

import {  inputNamePrompt, inputNamesPrompt, mainOptions } from "./prompt";

(async () => {
    const option = await mainOptions();
    const name = await inputNamePrompt();
    const names = await inputNamesPrompt();

})();