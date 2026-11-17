var shopInventory = [
  {
    "id": 0,
    "category": "rank",
    "name": "Набор предметов 1",
    "description": "Игровая коллекция предметов и дополнительных возможностей для каталога BloodMine. Выберите подходящий набор и посмотрите описание.",
    "price": 19,
    "active": true
  },
  {
    "id": 1,
    "category": "case",
    "name": "Набор предметов 2",
    "description": "Игровая коллекция предметов и дополнительных возможностей для каталога BloodMine. Выберите подходящий набор и посмотрите описание.",
    "price": 20,
    "active": true
  },
  {
    "id": 2,
    "category": "shards",
    "name": "Набор предметов 3",
    "description": "Игровая коллекция предметов и дополнительных возможностей для каталога BloodMine. Выберите подходящий набор и посмотрите описание.",
    "price": 21,
    "active": true
  },
  {
    "id": 3,
    "category": "effect",
    "name": "Набор предметов 4",
    "description": "Игровая коллекция предметов и дополнительных возможностей для каталога BloodMine. Выберите подходящий набор и посмотрите описание.",
    "price": 22,
    "active": true
  },
  {
    "id": 4,
    "category": "rank",
    "name": "Набор предметов 5",
    "description": "Игровая коллекция предметов и дополнительных возможностей для каталога BloodMine. Выберите подходящий набор и посмотрите описание.",
    "price": 23,
    "active": true
  },
  {
    "id": 5,
    "category": "case",
    "name": "Набор предметов 6",
    "description": "Игровая коллекция предметов и дополнительных возможностей для каталога BloodMine. Выберите подходящий набор и посмотрите описание.",
    "price": 24,
    "active": true
  },
];
var sortedInventory = shopInventory.slice().sort(function(a,b){ return a.name.localeCompare(b.name); });
