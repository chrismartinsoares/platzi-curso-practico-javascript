// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

function perimetroCuadrado(lado){
    return lado * 4;
} 

//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

function areaCuadrado(lado){
    // Math.pow([base], [exponente]), eleva un número con el exponente que se requiera
    return Math.pow(lado, 2);;
}

//console.log(`Área del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();

// Código del triangulo

console.group("Triangulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triángulo es de: ${alturaTriangulo} cm`);

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log(`El perímetro del triángulo es ${perimetroTriangulo} cm`);

function areaTriangulo(base, altura){
    return (base * altura) / 2
}
// console.log(`Área del triángulo es: ${areaTriangulo} cm^2`);

console.groupEnd();

// Código del circulo

console.group("Circulo")

// const radioCirculo = 4;
// console.log(`El radio del circulo es de: ${radioCirculo} cm`);

function diametroCirculo(radio){
    return radio * 2;
}
// console.log(`El diámetro del circulo es de: ${diametroCirculo} cm`);

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log(`El perímetro del circulo es de: ${perimetroCurculo} cm`);

function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log(`El área del circulo es de: ${areaCirculo} cm^2`);


console.groupEnd();


// Interactuación con el HTML
    // Calculos cuadrado
    function calcularPerimetroCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);

        alert(perimetro);
    }

    function calcularAreaCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);

        alert(area);
    }

    // Calculos Triángulos
    function calcularPerimetroTriangulo() {
        const input1 = document.getElementById("inputTriangulo1");
        const input2 = document.getElementById("inputTriangulo2");
        const input3 = document.getElementById("inputTriangulo3");
        const value1 = input1.value;
        const value2 = input2.value;
        const value3 = input3.value;

        const perimetro = perimetroTriangulo(value1, value2, value3);

        alert(perimetro);
    }

    function calcularAreaTriangulo() {
        const input1 = document.getElementById("inputTriangulo1");
        const input2 = document.getElementById("inputTriangulo2");
        const value1 = input1.value;
        const value2 = input2.value;

        const area = areaTriangulo(value1, value2);

        alert(area);
    }

    // Calculos circulos
    function calcularDiametroCirculo() {
        const input = document.getElementById("inputCirculo");
        const value = input.value;

        const diametro = diametroCirculo(value);

        alert(diametro);
    }

    function calcularAreaCirculo() {
        const input = document.getElementById("inputCirculo");
        const value = input.value;

        const area = areaCirculo(value);

        alert(area);
    }