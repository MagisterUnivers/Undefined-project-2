export default function clearConsoleOnError() {
  const originalError = console.error;

  console.error = function (message) {
    // Проверяем, содержит ли сообщение ошибку, которую вы хотите отслеживать
    if (
      typeof message === 'string' &&
      message.includes('A non-serializable value was detected')
    ) {
      console.clear(); // Очищаем консоль
    }

    // Вызываем оригинальную функцию console.error
    originalError.apply(console, arguments);
  };
}

// Вызываем функцию для установки пользовательской обработки ошибок
clearConsoleOnError();
