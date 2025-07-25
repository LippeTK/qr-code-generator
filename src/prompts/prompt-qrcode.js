import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Insira o link para gerar o qr-code"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QR code(1-Normal 2-Terminal)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptQRCode;
