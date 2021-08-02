// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getErrorMessage = (message: string) =>
  message
    ? message.slice(message.indexOf("'") + 1, message.lastIndexOf("'"))
    : "Erro desconhecido";
