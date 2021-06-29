// var boton = document.getElementById("boton_web");
// var texto = document.getElementById("texto_web");
// boton.addEventListener("click", dibujo_maldelbrot);

var d = document.getElementById("dibujo_canvas");
var lienzo = d.getContext("2d");

var x_centro = d.width / 2;
var y_centro = d.height / 2;

var x, y;
var Nuevox;
var Nuevoy;
//var iter = parseInt(texto.value);
iter = 1000;

    for (var col = 0; col < d.width; col++) {
        for (var fil = 0; fil < d.height; fil++) {
            var c_re = (1 * col) / d.width;
            var c_im = (1 * fil) / d.height;
            var c_re = (col - x_centro)/ (d.width/4);
            var c_im = (fil - y_centro)/ (d.height/4);

            x = 0;
            y = 0;
            for (var it = 0; it < iter; it++) {
                Nuevox = Math.pow(x, 2) - Math.pow(y, 2) + c_re;
                Nuevoy = 2 * x * y + c_im;
                x = Nuevox;
                y = Nuevoy;
                if (Math.pow(Nuevox, 2) + Math.pow(Nuevoy, 2) > 4) {
                    break;
                }
        }

    if (it < iter) {
        lienzo.fillStyle =
            "rgb(" +
            (it % 50) * 2 +
            "," +
            ((it % 50) * 10) +
            "," +
            ((it % 50) * 80) +
            ")";

        // lienzo.fillStyle = "white";
        lienzo.fillRect(col, fil, 1, 1);
    } 
    if (it == iter) {
        lienzo.fillStyle = "black";
        lienzo.fillRect(col, fil, 1, 1);
    }

    }
}


// function dibujo(it, iter, col, fil) {
//     if (it < iter) {
//         lienzo.fillStyle =
//             "rgb(" +
//             (it % 50) * 2 +
//             "," +
//             ((it % 50) * 10) +
//             "," +
//             ((it % 50) * 80) +
//             ")";

//         // lienzo.fillStyle = "white";
//         // lienzo.fillRect(col, fil, 1, 1);
//     } else if (it == iter) {
//         lienzo.fillStyle = "black";
//         lienzo.fillRect(col, fil, 1, 1);
//     }

// }




// function dibujo_punto(x, y) {
//     // lienzo.fillStyle = "black";
//     lienzo.beginPath();
//     lienzo.arc(x, y, pointSize, 0, Math.PI * 2, true);
//     lienzo.fill();
// }

//lienzo.fillStyle =
//"rgb(" + (col + fil * iter) + "," + col + "," + fil + ")";

// else if (Math.pow(x, 2) + Math.pow(y, 2) <= 4) {
//                     lienzo.fillStyle = "black";
//                     lienzo.fillRect(col, fil, 1, 1);
//                 }