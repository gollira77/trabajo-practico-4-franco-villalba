
// a) Tipo literal
let orderStatus: "pending" | "shipped" | "delivered";
orderStatus = "shipped";

// b) Enum
enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error"
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}] - ${message}`);
}

logMessage(LogLevel.Info, "Sistema iniciado correctamente");
logMessage(LogLevel.Error, "Fallo al conectar con la base de datos");
