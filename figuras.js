// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`Área del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();

// Código del triangulo

console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2
console.log(`Área del triángulo es: ${areaTriangulo} cm^2`);

console.groupEnd();

// Código del circulo

console.group("Circulo")

const radioCirculo = 4;
console.log(`El radio del circulo es de: ${radioCirculo} cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del circulo es de: ${diametroCirculo} cm`);

const PI = Math.PI;

const perimetroCurculo = diametroCirculo * PI
console.log(`El perímetro del circulo es de: ${perimetroCurculo} cm`);

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El área del circulo es de: ${areaCirculo} cm^2`);


console.groupEnd();