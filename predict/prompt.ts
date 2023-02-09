const { Select, prompt } = require("enquirer");

const CHOICES = [
  {
    name: "ENTER_NAME",
    message: "Enter name",
    value: "ENTER_NAME",
  },
  {
    name: "ENTER_NAMES",
    message: "Upload names",
    value: "ENTER_NAMES",
  },
  {
    name: "LIST_NAMES",
    message: "Display names",
    value: "LIST_NAMES",
  },
  {
    name: "EXIT",
    message: "Exit",
    value: "EXIT",
  },
];

export async function mainOptions(): Promise<string> {
  const input = new Select({
    name: "option",
    message: "Please, select an option",
    choices: CHOICES,
  });

  return input.run();
}

export async function inputNamePrompt(): Promise<string> {
  const { name } = await prompt({
    type: "input",
    name: "name",
    message: 'Type name:',
    format: (input: string) => input.toUpperCase(),
  });

  return name.trim().toUpperCase();
}

export async function inputNamesPrompt(): Promise<string> {
  const { names } = await prompt({
    type: "input",
    name: "names",
    message: 'Type names:',
    format: (input: string) => input.toUpperCase(),
  });

  return names.trim().toUpperCase();
}
