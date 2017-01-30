TinyTurtle.apply(window);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}

function triangle(){
right(60);
forward(50);
right(60);
forward(50);
right(150);
forward(75);
}

function hexagon(){
    forward(100);
    left(40);
    forward(40);
    left(100);
    forward(40);
    left(40);
    forward(50);
    left(40);
    forward(40);
    left(100);
    forward(40);
}
function house(){
square();
triangle();
}
// Type your function call below
house();
hexagon();

stamp();
