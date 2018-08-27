# WWZ Test Setup Documentation



* [Features](#features)
* [Run WWZ Tests](#run-tests)
* [Reports](#reports)

## Features
Further informations: WWZ_Backlog.xlsx

```bash

ID  | Titel                                     | Tags                  |
----| ----------------------------------------- | --------------------- |
1   | Kostenrechnung Strom für Privatkunde      | @id_1 @strom          |
8   | Kundendaten verwalten Login               | @id_8 @bestandskunde  |
9   | Kundendaten verwalten Account Übersicht   | @id_9 @bestandskunde  |
    |                                           |                       |
```

## Run WWZ Tests
Example:
```bash
//start all test cases
node index.js -s ./step-definitions

//start tests with specific tag
node index.js -t @id_9

```


## Reports