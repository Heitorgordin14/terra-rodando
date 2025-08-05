function setup() {
  createCanvas(1920, 1080, WEBGL); // plano 3D
  terra = loadImage('terra.jpg');
}

function draw() {
  background(50, 50, 150); // Cor de fundo: um tom de azul escuro para simular o espaço
  rotateY(millis() / 5000); // Rotação da terra mais lenta
  texture(terra); // Textura da terra
  sphere(200); // Esfera 3D maior, com raio de 200
}
