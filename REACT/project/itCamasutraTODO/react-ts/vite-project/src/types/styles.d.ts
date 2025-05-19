// Для CSS-модулей
declare module '*.module.css' {
  const classes: {
    readonly [key: string]: string;
    container: string; // Явно указываем существующие классы
  };
  export default classes;
}