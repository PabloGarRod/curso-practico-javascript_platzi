const lista1 =[
    1,
    2,
    3,
    1,
    2,
    4,
    1,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
        
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoa, elementob){
        return elementoa[1] - elementob[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];

