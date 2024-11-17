"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
    console.log(apocalipsis);
})();
(() => {
    let nada = undefined;
    console.log(nada);
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.132323;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log({ exists });
    console.log({ power });
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    const villian = ["Omega Rojo", "Dormamu", "Duende Verde"];
    numbers.forEach(v => console.log(v));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    console.log({ isSuperman });
    isSuperman = true && false;
    console.log({ isSuperman });
    isBatman = (isSuperman) ? true : false;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
    console.log({ AudioLevel });
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    const error2 = (message) => {
        if (false)
            throw new Error(message);
        return 1;
    };
    error("Auxilio!");
})();
(() => {
    let avengers = 80;
    console.log(avengers);
    const villians = 20;
    if (avengers > villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = 123;
    console.log({ avengers });
    avengers = Number("44");
    console.log({ avengers });
    avengers = Number("55A");
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    const abc = 123;
    console.log({ batman });
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta batman");
})();
(() => {
    const hero = ["Dr Strange", 100, true];
    hero[0] = "IronMan";
    hero[1] = 3;
    hero[2] = true;
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log({ a });
})();
(() => {
    const fullName = (firstName, LastMame, upper = false) => {
        if (upper)
            return `${firstName} ${LastMame || "--------"}`.toUpperCase();
        else
            return `${firstName} ${LastMame || "--------"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, LastMame) => {
        return `${firstName} ${LastMame}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, LastMame) => {
        return `${firstName} ${LastMame}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
    const name2 = fullName("Tony", false);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => "El mundo está salvado!";
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"],
    };
    console.log(flash);
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    let myCustomVariables = "Francisco";
    console.log(myCustomVariables);
    console.log(typeof myCustomVariables);
    myCustomVariables = 20;
    console.log(myCustomVariables);
    console.log(typeof myCustomVariables);
    myCustomVariables = {
        name: "Bruce Wayne",
        age: 45,
        powers: [1],
    };
    console.log(myCustomVariables);
    console.log(typeof myCustomVariables);
})();
//# sourceMappingURL=main.js.map