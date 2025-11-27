// a) Tipo literal
var orderStatus;
orderStatus = "shipped";
// b) Enum
var LogLevel;
(function (LogLevel) {
    LogLevel["Info"] = "Info";
    LogLevel["Warning"] = "Warning";
    LogLevel["Error"] = "Error";
})(LogLevel || (LogLevel = {}));
function logMessage(level, message) {
    console.log("[".concat(level, "] - ").concat(message));
}
logMessage(LogLevel.Info, "Sistema iniciado correctamente");
logMessage(LogLevel.Error, "Fallo al conectar con la base de datos");
