var blocks = [
  {
    type: 'whenIdle',
    message0: 'Quando la coda di %1 è vuota',
    previousStatement: null,
    nextStatement: null,
    tooltip: 'Esegui delle operazioni quando questo ascensore non ha operazioni in coda',
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      },
    ],
    extensions: 'elevator_menu_extension',
    message1: '%1',
    colour: '#5f0f40',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "goToFloor",
    message0: "Aggiungi %1 alla coda di %2",
    tooltip: 'Aggiungi il piano in fondo alla coda dell\'ascensore',
    colour: '#9a031e',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_FLOOR'
      },
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      }
    ],
    extensions: ['elevator_menu_extension', 'floor_menu_extension'],
  },
  {
    type: "goToFloorNow",
    message0: "Manda %1 al piano %2 subito",
    tooltip: 'Vai subito al piano e poi continua con le altre operazioni in coda',
    colour: '#9a031e',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      },
      {
        type: 'input_dummy',
        name: 'INPUT_FLOOR'
      }
    ],
    extensions: ['elevator_menu_extension', 'floor_menu_extension'],
  },
  {
    type: "checkDirection",
    message0: "Se %1 sta %2",
    tooltip: 'Controlla se l\'ascensore sta salendo o scendendo',
    colour: '#589ab2',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      },
      {
        type: "field_dropdown",
        name: "DIRECTION",
        options: [
          [ "salendo", "up" ],
          [ "scendendo", "down" ]
        ]
      }
    ],
    extensions: ['elevator_menu_extension'],
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "floorCall",
    message0: "Quando premono %1 al piano %2",
    tooltip: 'Fai qualcosa quando viene premuto il tasto per salire/scendere a un certo piano',
    colour: '#5f0f40',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: "field_dropdown",
        name: "DIRECTION",
        options: [
          [ "salire", "up_button_pressed" ],
          [ "scendere", "down_button_pressed" ],
          [ "entrambi", "both"]
        ]
      },
      {
        type: 'input_dummy',
        name: 'INPUT_FLOOR'
      }
    ],
    extensions: ['floor_menu_extension'],
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "floorSelected",
    message0: "Quando scelgono un piano in %1",
    tooltip: 'Fai qualcosa quando viene scelto il piano di destinazione',
    colour: '#5f0f40',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      },
    ],
    extensions: ['elevator_menu_extension'],
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "forAllFloors",
    message0: "Per ogni piano",
    tooltip: 'Assegna un comportamento per ogni piano',
    colour: '#e36414',
    previousStatement: null,
    nextStatement: null,
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "forAllElevators",
    message0: "Per ogni ascensore",
    tooltip: 'Assegna un comportamento per ogni ascensore',
    colour: '#e36414',
    previousStatement: null,
    nextStatement: null,
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "sortQueue",
    message0: "Ordina la coda di %1 in senso %2",
    tooltip: 'Riordina le destinazioni dell\'ascensore in senso crescente o decrescente',
    colour: '#9a031e',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      },
      {
        type: "field_dropdown",
        name: "DIRECTION",
        options: [
          [ "crescente", "inc" ],
          [ "decrescente", "dec" ]
        ]
      },
    ],
    extensions: ['elevator_menu_extension'],
  },
  {
    type: "checkFloorInQueue",
    message0: "Se il piano %1 %2 in coda a %3",
    tooltip: 'Controlla se l\'ascensore ha/non ha in coda un certo piano',
    colour: '#589ab2',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_FLOOR'
      },
      {
        type: "field_dropdown",
        name: "CONDITION",
        options: [
          [ "è", "in" ],
          [ "non è", "out" ]
        ]
      },
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      },
    ],
    extensions: ['elevator_menu_extension', 'floor_menu_extension'],
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "passingThrough",
    message0: "Quando %1 sta per passare per un piano",
    tooltip: 'Controlla se l\'ascensore sta per passare per il piano senza fermarsi',
    colour: '#5f0f40',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      }
    ],
    extensions: ['elevator_menu_extension'],
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "stopAtFloor",
    message0: "Quando %1 arriva a un piano",
    tooltip: 'Controlla quando l\'ascensore arriva al piano in cima alla sua coda di operazioni',
    colour: '#5f0f40',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      }
    ],
    extensions: ['elevator_menu_extension'],
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "removeFloorFromQueue",
    message0: "Rimuovi %1 dalla coda di %2",
    tooltip: 'Rimuovi un piano dalla coda di operazioni dell\'ascensore',
    colour: '#9a031e',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_FLOOR'
      },
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      }
    ],
    extensions: ['elevator_menu_extension', 'floor_menu_extension']
  },
  {
    type: "ifElevatorLoad",
    message0: "Se il carico di %1 è %2 %3",
    tooltip: 'Esegui operazioni in base al carico dell\'ascensore',
    colour: '#589ab2',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      },
      {
        type: "field_dropdown",
        name: "COMPARISON",
        options: [
          [ "=", "===" ],
          [ ">", ">" ],
          [ "<=", "<=" ],
          [ "<", "<" ],
          [ ">=", ">=" ]
        ]
      },
      {
        type: "field_dropdown",
        name: "LOAD",
        options: [
          [ "0%", "0" ],
          [ "10%", "10" ],
          [ "20%", "20" ],
          [ "30%", "30" ],
          [ "40%", "40" ],
          [ "50%", "50" ],
          [ "60%", "60" ],
          [ "70%", "70" ],
          [ "80%", "80" ],
          [ "90%", "90" ],
          [ "100%", "100" ],
        ]
      },
    ],
    extensions: ['elevator_menu_extension'],
    message1: 'Fai %1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
    message2: 'Altrimenti %1',
    args2: [
      {"type": "input_statement", "name": "ELSE"}
    ]
  },
  {
    type: "chooseElevator",
    message0: "Scegli l\'ascensore %1 che sta %2",
    tooltip: 'Assegna al valore "questo ascensore" un particolare ascensore',
    colour: '#ab5852',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: "field_dropdown",
        name: "CHOICE",
        options: [
          [ "più carico", "maxWeight" ],
          [ "più scarico", "minWeight" ],
          [ "più capiente", "maxLoad" ],
          [ "meno capiente", "minLoad" ],
          [ "a caso", "random" ]
        ]
      },
      {
        type: "field_dropdown",
        name: "DIRECTION",
        options: [
          [ "indifferente", "whatever" ],
          [ "salendo", "up" ],
          [ "scendendo", "down" ]
        ]
      },
    ],
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
  {
    type: "checkElevatorFloor",
    message0: "Se l'ascensore %1 è su un piano %2 a %3",
    tooltip: 'Controlla la posizione dell\'ascensore rispetto a un piano',
    colour: '#589ab2',
    previousStatement: null,
    nextStatement: null,
    args0: [
      {
        type: 'input_dummy',
        name: 'INPUT_ELEVATOR'
      },
      {
        type: "field_dropdown",
        name: "CONDITION",
        options: [
          [ "uguale", "===" ],
          [ "diverso", "!==" ],
          [ "superiore", ">" ],
          [ "inferiore", "<" ],
        ]
      },
      {
        type: 'input_dummy',
        name: 'INPUT_FLOOR'
      }
    ],
    extensions: ['elevator_menu_extension', 'floor_menu_extension'],
    message1: '%1',
    args1: [
      {"type": "input_statement", "name": "DO"}
    ],
  },
]

Blockly.Extensions.register('elevator_menu_extension', function () {
  var currentUrl = window.location.href
  var currentChallenge = 0
  if (currentUrl.indexOf('challenge') >= 0) {
    var currentChallengeStr = currentUrl.split('=')[1]
    currentChallenge = parseInt(currentChallengeStr) - 1
  }
  var numOfElevators = challenges[currentChallenge].options.elevatorCount
  this.getInput('INPUT_ELEVATOR')
      .appendField(new Blockly.FieldDropdown(
        function() {
          var options = [];
          for(var i = 0; i < numOfElevators; i++) {
            options.push(['A' + i, i.toString()]);
          }
          options.push(['Questo ascensore', 'this'])
          return options;
        }), 'ELEVATOR');
})

Blockly.Extensions.register('floor_menu_extension', function () {
  var currentUrl = window.location.href
  var currentChallenge = 0
  if (currentUrl.indexOf('challenge') >= 0) {
    var currentChallengeStr = currentUrl.split('=')[1]
    currentChallenge = parseInt(currentChallengeStr) - 1
  }
  var numOfFloors = challenges[currentChallenge].options.floorCount
  this.getInput('INPUT_FLOOR')
      .appendField(new Blockly.FieldDropdown(
        function() {
          var options = [];
          for(var i = 0; i < numOfFloors; i++) {
            options.push(['P' + i, i.toString()]);
          }
          options.push(['Questo piano', 'this'])
          return options;
        }), 'FLOOR');
})

function whenIdle (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')

  var code = '// WHEN IDLE\n'
  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'
  code += 'elevators[currentElevator].on("idle", function(){\n'
  code += 'addLogLine("A" + currentElevator + " -> coda vuota.");\n'
  code += branch0
  code += '});\n'
  return code
}

function goToFloor (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var floor = block.getFieldValue('FLOOR')

  var code = '// GO TO FLOOR\n'
  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'
  if (floor !== 'this') code += 'currentFloor = ' + floor + ';\n'
  code += 'elevators[currentElevator].goToFloor(currentFloor);\n'
  code += 'addLogLine("A" + currentElevator + " -> aggiungi alla coda P" + currentFloor + "; coda -> " + printQueue(elevators[currentElevator].destinationQueue));\n'
  return code
}

function goToFloorNow (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var floor = block.getFieldValue('FLOOR')

  var code = '// GO TO FLOOR NOW\n'
  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'
  if (floor !== 'this') code += 'currentFloor = ' + floor + ';\n'
  code += 'addLogLine("A" + currentElevator + " -> vai subito al piano P" + currentFloor + "; coda -> " + printQueue(elevators[currentElevator].destinationQueue));\n'
  code += 'elevators[currentElevator].goToFloor(currentFloor, true);\n'
  return code
}

function checkDirection (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var direction = block.getFieldValue('DIRECTION')
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')

  var code = '// CHECK DIRECTION\n'
  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'
  code += 'if (elevators[currentElevator].destinationDirection() === "' + direction + '") {\n'
  code += branch0
  code += '};\n'
  return code
}

function floorCall (block) {
  var floor = block.getFieldValue('FLOOR')
  var direction = block.getFieldValue('DIRECTION')
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')

  var code = '// FLOOR CALL\n'
  if (floor !== 'this') code += 'currentFloor = ' + floor + ';\n'
  code += 'var floorCallFunc = function (currentFloor, currentElevator) {\n'
  code += 'return function () {\n'
  code += 'addLogLine("P" + currentFloor + " ha chiamato un ascensore");\n'
  code += branch0
  code += '};\n'
  code += '}(currentFloor, currentElevator);\n'

  if (direction === 'both') {
    code += 'floors[currentFloor].on("up_button_pressed", floorCallFunc);\n'
    code += 'floors[currentFloor].on("down_button_pressed", floorCallFunc);\n'
  } else {
    code += 'floors[currentFloor].on("' + direction + '", floorCallFunc);\n'
  }
  return code
}

function floorSelected (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')

  var code = '// FLOOR SELECTED\n'
  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'

  code += 'var floorSelectedFunc = function (currentElevator) {\n'
  code += 'return function (currentFloor) {\n'
  code += 'addLogLine("A" + currentElevator + " -> selezionato il piano P" + currentFloor + "; carico: " + toPercent(elevators[currentElevator].loadFactor()));\n'
  code += branch0
  code += '};\n'
  code += '}(currentElevator);\n'

  code += 'elevators[currentElevator].on("floor_button_pressed", floorSelectedFunc);\n'
  return code
}

function forAllFloors (block) {
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')
  var code = '// FOR ALL FLOORS\n'
  code += 'for (var floorIdx = 0; floorIdx < floors.length; floorIdx++) {\n'
  code += 'currentFloor = floorIdx;\n'
  code += branch0;
  code += '};\n'
  return code
}

function forAllElevators (block) {
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')
  var code = '// FOR ALL ELEVATORS\n'
  code += 'for (var elevatorIdx = 0; elevatorIdx < elevators.length; elevatorIdx++) {\n'
  code += 'currentElevator = elevatorIdx;\n'
  code += branch0;
  code += '};\n'
  return code
}

function sortQueue (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var direction = block.getFieldValue('DIRECTION')
  var code = '// SORT QUEUE\n'

  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'
  if (direction === 'inc') code += 'elevators[currentElevator].destinationQueue.sort();\n'
  else if (direction === 'dec') code += 'elevators[currentElevator].destinationQueue.sort().reverse();\n'
  code += 'elevators[currentElevator].checkDestinationQueue();\n'
  code += 'addLogLine("A" + currentElevator + " -> ordinata la coda dei piani" + "; coda -> " + printQueue(elevators[currentElevator].destinationQueue));\n'
  return code
}

function checkFloorInQueue (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var floor = block.getFieldValue('FLOOR')
  var condition = block.getFieldValue('CONDITION')
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')

  var code = '// CHECK FLOOR IN QUEUE\n'
  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'
  if (floor !== 'this') code += 'currentFloor = ' + floor + ';\n'
  code += 'if (elevators[currentElevator].destinationQueue.indexOf(currentFloor)'
  if (condition === 'in') code += ' >= 0'
  if (condition === 'out') code += ' < 0'
  code += ') {\n'
  code += branch0
  code += '};\n'

  return code
}

function passingThrough (block) {
  var elevator = block.getFieldValue('ELEVATOR')

  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')
  var code = '// PASSING THROUGH\n'

  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'

  code += 'var passingThroughFunc = function (currentElevator) {\n'
  code += 'return function (currentFloor) {\n'
  code += branch0
  code += '}\n'
  code += '}(currentElevator);\n'
  code += 'elevators[currentElevator].on("passing_floor", function (floorNum) {\n'
  code += 'return passingThroughFunc(floorNum);\n'
  code += '});\n'

  return code
}

function stopAtFloor (block) {
  var elevator = block.getFieldValue('ELEVATOR')

  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')
  var code = '// STOP AT FLOOR\n'

  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'

  code += 'var stopAtFloorFunc = function (currentElevator) {\n'
  code += 'return function (currentFloor) {\n'
  code += branch0
  code += '}\n'
  code += '}(currentElevator);\n'
  code += 'elevators[currentElevator].on("stopped_at_floor", function (floorNum) {\n'
  code += 'return stopAtFloorFunc(floorNum);\n'
  code += '});\n'

  return code
}

function removeFloorFromQueue (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var floor = block.getFieldValue('FLOOR')

  var code = '// REMOVE FLOOR FROM QUEUE\n'

  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'
  if (floor !== 'this') code += 'currentFloor = ' + floor + ';\n'

  code += 'while(elevators[currentElevator].destinationQueue.indexOf(currentFloor) >= 0) {\n'
  code += 'var idx = elevators[currentElevator].destinationQueue.indexOf(currentFloor);\n'
  code += 'elevators[currentElevator].destinationQueue.splice(idx, 1);\n'
  code += '};\n'
  code += 'elevators[currentElevator].checkDestinationQueue();\n'
  code += 'addLogLine("A" + currentElevator + " -> rimosso dalla coda il piano P" + currentFloor + "; coda -> " + printQueue(elevators[currentElevator].destinationQueue));\n'
  return code
}

function ifElevatorLoad (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var comparison = block.getFieldValue('COMPARISON')
  var load = block.getFieldValue('LOAD')
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')
  var branch1 = Blockly.JavaScript.statementToCode(block, 'ELSE')

  var code = '// IF ELEVATOR LOAD\n'

  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'

  var comp1 = 'elevators[currentElevator].loadFactor()'
  var comp2 = parseInt(load) / 100
  let comp = comp1 + ' ' + comparison + ' ' + comp2
  code += 'if(' + comp + ') {\n'
  code += branch0
  code += '} else {\n'
  code += branch1
  code += '};\n'
  return code
}

function chooseElevator (block) {
  var choice = block.getFieldValue('CHOICE')
  var direction = block.getFieldValue('DIRECTION')
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')

  var code = '// CHOOSE ELEVATOR\n'

  if (choice === 'maxLoad') {
    code += 'currentElevator = getMaxWeightElevator("' + direction + '");\n'
  } else if (choice === 'minLoad') {
    code += 'currentElevator = getMinWeightElevator("' + direction + '");\n'
  } else if (choice === 'maxWeight') {
    code += 'currentElevator = getMaxLoadElevator("' + direction + '");\n'
  } else if (choice === 'minWeight') {
    code += 'currentElevator = getMinLoadElevator("' + direction + '");\n'
  } else if (choice === 'random') {
    code += 'currentElevator = getRandomElevator("' + direction + '");\n'
  }

  code += branch0

  return code
}

function checkElevatorFloor (block) {
  var elevator = block.getFieldValue('ELEVATOR')
  var floor = block.getFieldValue('FLOOR')
  var condition = block.getFieldValue('CONDITION')
  var branch0 = Blockly.JavaScript.statementToCode(block, 'DO')

  var code = '// CHECK ELEVATOR FLOOR\n'
  if (elevator !== 'this') code += 'currentElevator = ' + elevator + ';\n'
  if (floor !== 'this') code += 'floorCheck = ' + floor + ';\n'
  else code += 'floorCheck = currentFloor;\n'

  var cond = 'elevators[currentElevator].currentFloor() ' + condition + ' floorCheck'
  code += 'if (' + cond + ') {\n'
  code += branch0
  code += '};\n'

  return code
}

Blockly.defineBlocksWithJsonArray(blocks)

Blockly.JavaScript.whenIdle = whenIdle
Blockly.JavaScript.goToFloor = goToFloor
Blockly.JavaScript.goToFloorNow = goToFloorNow
Blockly.JavaScript.checkDirection = checkDirection
Blockly.JavaScript.floorCall = floorCall
Blockly.JavaScript.floorSelected = floorSelected
Blockly.JavaScript.forAllFloors = forAllFloors
Blockly.JavaScript.forAllElevators = forAllElevators
Blockly.JavaScript.sortQueue = sortQueue
Blockly.JavaScript.checkFloorInQueue = checkFloorInQueue
Blockly.JavaScript.passingThrough = passingThrough
Blockly.JavaScript.removeFloorFromQueue = removeFloorFromQueue
Blockly.JavaScript.stopAtFloor = stopAtFloor
Blockly.JavaScript.ifElevatorLoad = ifElevatorLoad
Blockly.JavaScript.chooseElevator = chooseElevator
Blockly.JavaScript.checkElevatorFloor = checkElevatorFloor

var TOOLBOX_CONTENTS = [
  {
    kind: 'category',
    name: 'Cicli',
    colour: '#e36414',
    contents: [
      { kind: 'block', type: 'forAllFloors'},
      { kind: 'block', type: 'forAllElevators'},
    ]
  },
  {
    kind: 'category',
    name: 'Eventi',
    colour: '#5f0f40',
    contents: [
      { kind: 'block', type: 'whenIdle'},
      { kind: 'block', type: 'floorSelected'},
      { kind: 'block', type: 'floorCall'},
      { kind: 'block', type: 'passingThrough'},
      { kind: 'block', type: 'stopAtFloor'},
    ]
  },
  {
    kind: 'category',
    name: 'Azioni',
    colour: '#9a031e',
    contents: [
      { kind: 'block', type: 'goToFloor'},
      { kind: 'block', type: 'goToFloorNow'},
      { kind: 'block', type: 'sortQueue'},
      { kind: 'block', type: 'removeFloorFromQueue'},
    ]
  },
  {
    kind: 'category',
    name: 'Controlli',
    colour: '#589ab2',
    contents: [
      { kind: 'block', type: 'checkDirection'},
      { kind: 'block', type: 'checkFloorInQueue'},
      { kind: 'block', type: 'ifElevatorLoad'},
      { kind: 'block', type: 'checkElevatorFloor'},
    ]
  },
  {
    kind: 'category',
    name: 'Selezione',
    colour: '#ab5852',
    contents: [
      { kind: 'block', type: 'chooseElevator'},
    ]
  }
]

var DEFAULT_CODE = `
 var currentElevator = -1;
 var currentFloor = -1;
 var floorCheck = -1;

 function getMaxWeightElevator (direction) {
   var maxWeight = -1;
   var maxElevator = -1;
   for (var i = 0; i < elevators.length; i++) {
    if (['up', 'down'].indexOf(direction) >= 0 && direction !== elevators[i].destinationDirection()) continue

    if (elevators[i].maxPassengerCount() > maxWeight) {
      maxWeight = elevators[i].maxPassengerCount();
      maxElevator = i;
    }
   }

   if (maxElevator < 0) return getMaxWeightElevator('whatever');
   return maxElevator;
 }

 function getMinWeightElevator (direction) {
    var maxWeight = 1000;
    var minElevator = -1;
    for (var i = 0; i < elevators.length; i++) {
      if (['up', 'down'].indexOf(direction) >= 0 && direction !== elevators[i].destinationDirection()) continue

      if (elevators[i].maxPassengerCount() < maxWeight) {
        maxWeight = elevators[i].maxPassengerCount();
        minElevator = i;
      }
    }

    if (minElevator < 0) return getMinWeightElevator('whatever');

    return minElevator;
  }

  function getMaxLoadElevator (direction) {
    var maxWeight = -1;
    var maxElevator = -1;
    for (var i = 0; i < elevators.length; i++) {
      if (['up', 'down'].indexOf(direction) >= 0 && direction !== elevators[i].destinationDirection()) continue
      if (elevators[i].loadFactor() > maxWeight) {
        maxWeight = elevators[i].loadFactor();
        maxElevator = i;
      }
    }

    if (maxElevator < 0) return getMaxLoadElevator('whatever');

    return maxElevator;
  }

  function getMinLoadElevator (direction) {
    var maxWeight = 1000;
    var minElevator = -1;
    for (var i = 0; i < elevators.length; i++) {
    if (['up', 'down'].indexOf(direction) >= 0 && direction !== elevators[i].destinationDirection()) continue

    if (elevators[i].loadFactor() < maxWeight) {
      maxWeight = elevators[i].loadFactor();
      minElevator = i;
    }
    }

    if (minElevator < 0) return getMinLoadElevator('whatever');

    return minElevator;
  }

  function getRandomElevator (direction) {
    var min = Math.ceil(0)
    max = Math.floor(elevators.length - 1)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

 for (var i = 0; i < elevators.length; i++) {

  // elevators[i].on("passing_floor", function () {});

  var stoppedAtFloorFunc = function (currentElevator) {
   return function (currentFloor) {
    addLogLine("A" + currentElevator + " -> arrivato al piano P" + currentFloor + "; carico: " + toPercent(elevators[currentElevator].loadFactor()));
   }
  }(i)

  elevators[i].on("stopped_at_floor", stoppedAtFloorFunc);
 }

`