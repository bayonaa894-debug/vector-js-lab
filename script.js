const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function dibujar() {

    let ax = parseFloat(document.getElementById("ax").value) || 0;
    let ay = parseFloat(document.getElementById("ay").value) || 0;
    let bx = parseFloat(document.getElementById("bx").value) || 0;
    let by = parseFloat(document.getElementById("by").value) || 0;

    let escala = document.getElementById("escala").value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ox = 250;
    let oy = 250;

    ctx.beginPath();
    ctx.moveTo(0, oy);
    ctx.lineTo(500, oy);
    ctx.moveTo(ox, 0);
    ctx.lineTo(ox, 500);
    ctx.strokeStyle = "#aaa";
    ctx.stroke();

    ax *= escala;
    ay *= escala;

    dibujarVector(ox, oy, ax, ay, "blue");


    dibujarVector(ox, oy, bx, by, "red");

    let rx = ax + bx;
    let ry = ay + by;
    dibujarVector(ox, oy, rx, ry, "green");

    
    let dot = ax * bx + ay * by;

    let magA = Math.sqrt(ax*ax + ay*ay);
    let magB = Math.sqrt(bx*bx + by*by);


    let angulo = 0;
    if (magA !== 0 && magB !== 0) {
        angulo = Math.acos(dot / (magA * magB)) * (180 / Math.PI);
    }


    let distancia = Math.sqrt((bx - ax)**2 + (by - ay)**2);

    document.getElementById("resultado").innerHTML =
        `Producto Punto: ${dot.toFixed(2)} <br>
         Ángulo: ${angulo.toFixed(2)}° <br>
         Distancia: ${distancia.toFixed(2)}`;
}

function dibujarVector(ox, oy, x, y, color) {
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + x, oy - y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
}