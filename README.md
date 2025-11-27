# trabajo-practico-4-franco-villalba

## GLOSARIO DE TYPESCRIPT

1. Tipo "string"
   - Representa texto.
   

*Ejemplo:* 


``` let nombreEjemplo: string = "Juan"; ```

---


2. Tipo "number"
   - Representa números.

*Ejemplo:* 


``` let edadEjemplo: number = 25; ```

---

3. Union Type
   - Permite más de un tipo.

*Ejemplo:*

```let idEjemplo: string | number = "A1";```

---

4. Interface
   - Define forma de un objeto.

*Ejemplo:*

```
interface Persona {
  nombre: string;
  edad: number;
}
```

---

5. Enum
   - Conjunto de valores constantes.

*Ejemplo:*

```
enum Dia { Lunes = "Lunes", Martes = "Martes" }
```

---

6. Función tipada

*Ejemplo:*

```
function sumar(a: number, b: number): number {
  return a + b;
}
```
