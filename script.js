TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function triangle(a){
right(60);
forward(a);
right(60);
forward(a);
right(150);
forward(a);
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
function shape(size, angle){
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle)
    forward(size);
}
function house(){
square();
triangle();
}
// Type your function call bel(
//square(25);
//triangle(35);
//hexagon();
shape(25, 60);
shape(25, 60);
shape(25, 60);
shape(25, 60);
shape(25, 60);
shape(25, 60);

stamp();
