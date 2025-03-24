# 🧠 Basic Runner v1 - Educational BASIC Compiler

**Basic Runner** es un compilador educativo basado en el lenguaje BASIC clásico, diseñado como una herramienta de pasatiempos visual, auditiva y lógica para usuarios de todas las edades. Esta versión permite experimentar con estructuras de control, sonidos retro, arte ASCII, colores y efectos visuales, directamente desde el navegador o plataformas como Blogger.

---

## 🏆 Misión

Crear una herramienta de programación **creativa, visual y accesible**, ideal para enseñar lógica, diseño y expresión artística a estudiantes, autodidactas y entusiastas retro.

---

## 🌎 Visión

Convertirse en la principal referencia para crear **actividades educativas y de entretenimiento** con programación visual BASIC, integrable fácilmente en clases, blogs y comunidades online.

---

## ✨ Funcionalidades en v1

| Categoría         | Funciones principales |
|-------------------|------------------------|
| 🧠 Intérprete      | `PRINT`, `LET`, `IF`, `FOR`, `WHILE`, `INPUT`, `CLS` |
| 🎨 Visual Canvas   | Salida directa en canvas (modo consola retro 40x20) |
| 🖼️ Fondo opcional  | Fondo blanco o imagen escalada al canvas |
| 🔊 Sonido          | `BEEP` básico y `MELODY` retro (con presets: WIN, GAMEOVER) |
| 🎮 Arte ASCII      | Compatible con Unicode, emojis, y hexadecimales |
| 🎓 Estilo educativo| El usuario construye arte, lógica y estructuras paso a paso |
| 📱 Responsive      | Adaptado para celular, tableta o computadora |
| 💾 Guardado local  | `saveCode()` y `loadCode()` via localStorage |

---

## 📁 Estructura del proyecto
Basic-Runner/
│
├── index.html               # Interfaz principal con canvas y botones
├── styles.css               # Estilos visuales (colores, layout, responsive)
├── README.md                # Documentación general del proyecto
│
├── assets/                  # Recursos visuales y gráficos
│   └── images/
│       └── fondo1.jpg       # Fondo opcional para el canvas
│
├── scripts/                 # Lógica funcional del compilador
│   ├── basic_interpreter.js # Controlador principal (runCode, flujo, onload)
│   ├── parser.js            # Analiza y convierte líneas BASIC en comandos
│   ├── executor.js          # Ejecuta cada comando interpretado
│   ├── graphics.js          # Dibuja texto y puntos en el canvas (incluye fondo)
│   └── sound.js             # Genera sonido retro (BEEP y MELODY) sin archivos externos


## 🎵 Comandos soportados

| Comando     | Ejemplo                             | Función                       |
|-------------|-------------------------------------|-------------------------------|
| `PRINT`     | `PRINT "Hola"`                      | Muestra texto                 |
| `COLOR`     | `COLOR rojo`                        | Cambia color del texto        |
| `LET`       | `LET A = 10`                        | Define variables              |
| `IF-THEN`   | `IF A > 5 THEN PRINT "OK"`          | Condicional                   |
| `FOR-NEXT`  | `FOR I=1 TO 5 ... NEXT`             | Bucle de contador             |
| `WHILE`     | `WHILE A < 10`                      | Bucle lógico (experimental)   |
| `INPUT`     | `INPUT NOMBRE`                      | Pide al usuario un valor      |
| `CLS`       | `CLS`                               | Limpia pantalla               |
| `PLOT`      | `PLOT 50,50`                        | Dibuja un punto               |
| `BEEP`      | `BEEP 880 0.3 triangle`             | Sonido retro personalizado    |
| `MELODY`    | `MELODY "440:0.2:square,660:0.2"`   | Melodía retro personalizada   |
| `MELODY WIN`| `MELODY WIN`                        | Melodía predefinida de victoria|

---

## 📏 Límite visual del canvas

- **40 caracteres por línea**
- **20 líneas totales**
- Estilo **monospace** para mantener estructura retro

---

## 💬 Conclusión de la versión 1

Basic Runner v1 cumple su misión inicial:  
- Crear una experiencia retro-programable educativa  
- Estimular la creatividad del usuario con arte y lógica  
- Mantenerlo accesible, visual y musical sin librerías externas

🧩 Lo más importante: **el usuario construye**, como en los pasatiempos de papel clásicos, pero ahora en digital.

---

## 🧭 Próximos pasos

- Soporte para `LINE`, `CIRCLE`, `TEXT X,Y,"Hola"`
- Exportar `.bas` o imagen del canvas
- Modo presentación (pantalla completa)
- Generador visual para actividades educativas

---

## 📃 Licencia

MIT – Open Source – 2025  
Repositorio oficial: [github.com/hruiz1191/basic-runner](https://github.com/hruiz1191/basic-runner)

---

**¡Gracias por usar Basic Runner!**  
¿Listo para crear tu próxima misión retro-educativa?
