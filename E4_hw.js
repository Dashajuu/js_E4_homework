/* Задание 1: Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и 
значения только собственных свойств. Данная функция не должна возвращать значение */

function getObjectOwnProperty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}


const person = {
    personName: 'Dan',
    personAge: 28,
    personCity: 'Moscow',
};

const personAddInfo = Object.create(person);
personAddInfo.contact = 79987310998;


console.log('Задание 1');
getObjectOwnProperty(personAddInfo);


/* Задание 2: Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет 
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false */

function isExpressionInObject(str, obj) {
    return str in obj;
}


const obj = {
    a: 1, 
    b: 2, 
    c: 3
};

let str1 = 'c';
let str2 = 'd';


console.log('Задание 2');
console.log(isExpressionInObject(str1, obj));
console.log(isExpressionInObject(str2, obj));


/* Задание 3: Написать функцию, которая создает пустой объект, но без прототипа */

function createEmptyObject() {
    return new Object();
}


const emptyObject = createEmptyObject();


console.log('Задание 3');
console.log(typeof emptyObject);
console.log(emptyObject);


/* Задание 4:
    1. Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
    2. Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
    3. У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
    4. Создать экземпляры каждого прибора. */

function Appliance(applianceName) {
    this.applianceType = 'wired',
    this.applianceName = applianceName
}

Appliance.prototype.getAppliancePower = function(power) {
    console.log(`The power of ${this.applianceName} is ${power} volt`);
}

Appliance.prototype.plugIntoOutlet = function() {
    console.log(`The ${this.applianceName} is turned on`);
}

Appliance.prototype.unplugFromOutlet = function() {
    console.log(`The ${this.applianceName} is turned off`);
}


function TableLamp(applianceName, lightSource) {
    this.brightnessControl = true,
    this.applianceName = applianceName,
    this.lightSource = lightSource
}

TableLamp.prototype = new Appliance()


function Kettle(applianceName, waterVolume) {
    this.applianceName = applianceName,
    this.waterVolume = waterVolume
}

Kettle.prototype = new Appliance()
Kettle.prototype.heatWater = function() {
    console.log('Kettle will boil in 2 minutes');
}


const kettleECON = new Kettle('Kettle ECON ECO-1874KE', 1.8);
const lampERA = new TableLamp('Table Lamp ERA-11', 'E27');

console.log('Задание 4');

kettleECON.getAppliancePower(1500)
lampERA.getAppliancePower(40)

kettleECON.plugIntoOutlet()
kettleECON.heatWater()

lampERA.plugIntoOutlet()


/* Задание 5: Переписать консольное приложение из предыдущего юнита на классы */

class Device {
    constructor(deviceName, devicePower) {
        this.deviceName = deviceName;
        this.devicePower = devicePower;
        this.deviceType = 'wired';
    }

    getDevicePower() {
        console.log(`The power of ${this.deviceName} is ${this.devicePower} volt`);
    }

    plugIntoOutlet() {
        console.log(`The ${this.deviceName} is turned on`);
    }

    unplugIntoOutlet() {
        console.log(`The ${this.deviceName} is turned off`);
    }
}


class Lamp extends Device {
    constructor(lightSource, deviceName, devicePower) {
        super(deviceName, devicePower);
        this.lightSource = lightSource;
        this.brightnessControl = true;
    }
}


class Teapot extends Device {
    constructor(waterVolume, deviceName, devicePower) {
        super(deviceName, devicePower);
        this.waterVolume = waterVolume;
    }

    heatWater() {
        console.log('Kettle will boil in 2 minutes');
    }
}


const tableLampElectrical = new Lamp('E45', 'Lamp table 2.0', 40);
const teapotElectrical = new Teapot(2, 'Teapot Red One', 1500);

console.log('Задание 5');

tableLampElectrical.getDevicePower()
tableLampElectrical.plugIntoOutlet()
teapotElectrical.plugIntoOutlet()
teapotElectrical.heatWater()