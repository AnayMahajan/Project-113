function preload(){
}

function setup()
{
    canvas= createCanvas(700, 500);
    canvas.position(90, 300);
    video= createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 185,100, 300, 300);

    circle(50, 50, 50);
    fill(0,150,0);

    circle(650, 50, 50);
    fill(0,150,0);

    circle(50, 450, 50);
    fill(0, 0, 200);

    circle(650, 450, 50);
    fill(255, 255, 255);

    rect(50, 100, 50, 300, 20);
    fill(255 ,255, 255);

    rect(600, 100, 50, 300, 20);
    fill(0 ,0, 200);
}

function take_snapshot(){
    save('student_name_png');
}

