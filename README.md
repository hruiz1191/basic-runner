
# Basic Runner - Educational BASIC Compiler

## :trophy: Mission
Basic Runner is an educational and recreational compiler based on BASIC, designed to teach programming to beginners. It allows the creation of interactive activities, visual puzzles, and creative exercises directly accessible from browsers and platforms like Blogger.

## :earth_americas: Vision
Basic Runner aims to become the main reference tool for creating visual programming activities using BASIC, inspiring teachers, students, and creators to design and share their own missions and mini-games on the web.

## :wrench: Core Functions
| Function               | Description |
|------------------|--------------|
| BASIC Interpretation | Directly executes BASIC programs in the browser. |
| Control Structures | Supports FOR, WHILE, IF-THEN, LET, INPUT, PRINT. |
| Visual Activities | Draws lines, shapes, and visual effects. |
| Retro Sounds | Supports BEEPs and effects. |
| Blogger Integration | Generates ready-to-embed code for Blogger. |
| Exporting | Save as .bas file or capture image. |
| Theme Switching | Supports dark mode, retro mode, and custom themes. |
| Save and Load | Uses localStorage for saving and loading. |
| Mobile-Friendly | Responsive design for tablets and phones. |

---

## :rocket: Expectations
| Expectation                    | Details |
|------------------|--------------|
| Continuous Evolution | Add more commands, visual effects, and sounds. |
| Active Community | Teachers and creators contribute new content. |
| School and Online Use | Popular in classrooms and educational blogs. |
| Intuitive and Accessible | No technical barriers to start. |
| Integration | Compatible with other platforms. |

---

## :file_folder: Project Structure
```
Basic-Runner/
|-- index.html                # Main interface
|-- styles.css                 # Visual styling
|-- README.md                  # This document
|-- test-codes.json            # Predefined example codes
|-- BloggerIntegration.html    # Blogger embed example
|
|-- scripts/
|   |-- basic-interpreter.js   # Core interpreter
|   |-- parser.js               # Syntax analyzer
|   |-- executor.js             # Command executor
|   |-- storage.js               # Save/load to localStorage
|   |-- sound.js                  # Retro sounds
|   |-- graphics.js               # Drawing (LINE, CIRCLE)
|   |-- effects.js                # Visual effects (blinking, vibration)
|   |-- themes.js                 # Theme switching (dark, retro)
|   |-- exporter.js               # Export to .bas or PNG
|   |-- embed-generator.js     # Blogger embed generator
|
|-- assets/
|   |-- images/                  # Backgrounds and sprites
|   |-- sounds/                  # Sound effects
|   |-- fonts/                    # Retro fonts
|
|-- templates/
|   |-- basic-template.bas     # Basic code template
|   |-- treasure-hunt.bas      # Sample mission
|   |-- space-puzzle.bas       # Puzzle example
|
|-- docs/
|   |-- TechnicalDesign.pdf
|   |-- UserGuide.pdf
|   |-- BloggerGuide.pdf
|
|-- tests/
|   |-- test-parser.js
|   |-- test-interpreter.js
|   |-- test-graphics.js
|   |-- test-sound.js
```

---

## :scroll: Supported BASIC Commands
| Command    | Example                   | Description |
|------------|----------------|-----------------|
| PRINT     | PRINT "Hello"    | Display text. |
| INPUT     | INPUT X         | Ask for user input. |
| LET       | LET X = 10      | Assign variable. |
| IF-THEN   | IF X>5 THEN PRINT "OK" | Conditional logic. |
| FOR-NEXT  | FOR I=1 TO 10   | Loop counter. |
| BACKGROUND| BACKGROUND "bg.png" | Set background image. |
| PLOT      | PLOT 50,50      | Draw point. |
| LINE      | LINE 10,10,100,100 | Draw line. |
| CIRCLE    | CIRCLE 50,50,20 | Draw circle. |
| COLOR     | COLOR "red"     | Set draw color. |
| BEEP      | BEEP            | Retro sound. |

---

## :office: High-Level UML Package Diagram
```
+--------------------+
| Presentation Layer |
+--------------------+
| index.html        |
| styles.css        |
| BloggerIntegration|
+--------------------+
       |
       v
+--------------------+
| Business Logic    |
+--------------------+
| basic-interpreter |
| parser.js         |
| executor.js       |
+--------------------+
       |
       v
+--------------------+
| Data Layer        |
+--------------------+
| storage.js        |
| test-codes.json   |
| templates/        |
+--------------------+
```

---

## :bulb: Execution Flow
1. User writes BASIC code.
2. `parser.js` validates syntax.
3. `executor.js` executes each command.
4. `graphics.js`, `sound.js`, `effects.js` handle visual/audio feedback.
5. Output is displayed in the terminal (text) and canvas (graphics).

---

## :page_with_curl: License
MIT - Open Source - 2025

Official repository: [https://github.com/hruiz1191/basic-runner](https://github.com/hruiz1191/basic-runner)

---

:star2: Contributions Welcome :star2:
