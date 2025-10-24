export function validateFields(name: string, email: string, message: string): boolean {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,}\s+[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const messageRegex = /\S+/;

  return (
    nameRegex.test(name) &&
    emailRegex.test(email) &&
    messageRegex.test(message)
  );
}