var mySnare, snareAmplitude, snarePlay, myKick, kickAmplitude, kickPlay, myTom1, tom1Amplitude, tom1Play, myTom2, tom2Amplitude, tom2Play, myTom3, tom3Amplitude, tom3Play, myHiHat, hiHatAmplitude, hiHatPlay, myCrash, crashAmplitude, crashPlay, myChina, chinaAmplitude, chinaPlay, myRide, rideAmplitude, ridePlay;

function preload() {
    mySnare = loadSound("Assets/snare.mp3");
    myKick = loadSound("Assets/kick.mp3");
    myTom1 = loadSound("Assets/tom1.mp3");
    myTom2 = loadSound("Assets/tom2.mp3");
    myTom3 = loadSound("Assets/tom3.mp3");
    myHiHat = loadSound("Assets/hi-hat.mp3");
    myCrash = loadSound("Assets/crash.mp3");
    myChina = loadSound("Assets/china.mp3");
    myRide = loadSound("Assets/ride.mp3");
}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("p5container");
    background(0)

    snareAmplitude = new p5.Amplitude();
    kickAmplitude = new p5.Amplitude();
    tom1Amplitude = new p5.Amplitude();
    tom2Amplitude = new p5.Amplitude();
    tom3Amplitude = new p5.Amplitude();
    hiHatAmplitude = new p5.Amplitude();
    crashAmplitude = new p5.Amplitude();
    chinaAmplitude = new p5.Amplitude();
    rideAmplitude = new p5.Amplitude();
}


function keyPressed() {
    //SnareButton
    if (keyCode === LEFT_ARROW) {
        snarePlay = true;
        kickPlay = false;
        tom1Play = false;
        tom2Play = false;
        tom3Play = false;
        hiHatPlay = false;
        crashPlay = false;
        chinaPlay = false;
        ridePlay = false;
        mySnare.play();

    //KickButton
    } else if (keyCode === ENTER) {
        kickPlay = true;
        snarePlay = false;
        tom1Play = false;
        tom2Play = false;
        tom3Play = false;
        hiHatPlay = false;
        crashPlay = false;
        chinaPlay = false;
        ridePlay = false;
        myKick.play();

    //Tom1Button
    } else if (keyCode === UP_ARROW) {
        tom1Play = true;
        snarePlay = false;
        kickPlay = false;
        tom2Play = false;
        tom3Play = false;
        hiHatPlay = false;
        crashPlay = false;
        chinaPlay = false;
        ridePlay = false;
        myTom1.play();

    //Tom2Button
    } else if (keyCode === RIGHT_ARROW) {
        tom2Play = true;
        snarePlay = false;
        kickPlay = false;
        tom1Play = false;
        tom3Play = false;
        hiHatPlay = false;
        crashPlay = false;
        chinaPlay = false;
        ridePlay = false;
        myTom2.play();

    //Tom3Button
    } else if (keyCode === DOWN_ARROW) {
        tom3Play = true;
        snarePlay = false;
        kickPlay = false;
        tom1Play = false;
        tom2Play = false;
        hiHatPlay = false;
        crashPlay = false;
        chinaPlay = false;
        ridePlay = false;
        myTom3.play();

    //Hi-HatButton
    } else if (keyCode === SHIFT) {
        hiHatPlay = true;
        snarePlay = false;
        kickPlay = false;
        tom1Play = false;
        tom2Play =false;
        tom3Play = false;
        crashPlay = false;
        chinaPlay = false;
        ridePlay = false;
        myHiHat.play();

    //CrashButton
    } else if (keyCode === BACKSPACE) {
        crashPlay = true;
        snarePlay = false;
        kickPlay = false;
        tom1Play = false;
        tom2Play = false;
        tom3Play = false;
        hiHatPlay = false;
        chinaPlay = false;
        ridePlay = false;
        myCrash.play();

    //ChinaButton
    } else if (keyCode === CONTROL) {
        chinaPlay = true;
        snarePlay = false;
        kickPlay = false;
        tom1Play = false;
        tom2Play = false;
        tom3Play = false;
        hiHatPlay = false;
        crashPlay = false;
        ridePlay = false;
        myChina.play();

    //RideButton
    } else if (keyCode === DELETE) {
        ridePlay = true;
        snarePlay = false;
        kickPlay = false;
        tom1Play = false;
        tom2Play = false;
        tom3Play = false;
        hiHatPlay = false;
        crashPlay = false;
        chinaPlay = false;
        myRide.play();
    }
}


function draw() {

    //SnareAmplitude
    if (snarePlay == true) {
        console.log('Snare is true');
        var level = snareAmplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);
        
        fill(col + 10)
        ellipse(width/4, height/1.8, vol + 100);
        background(col);

        //SnareEllipse
        fill(90, 90, 90);
        ellipse(width/4, height/1.8, vol / 2)
        snareplay = false;
    }

    //KickAmplitude
    if (kickPlay == true) {
        console.log('Kick is true')
        var level = kickAmplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        fill(col + 10)
        ellipse(200, 100, vol + 100);
        background(col);

        //KickEllipse
        fill(90, 90, 90);
        ellipse(width/2, height/1.2, vol / 1.2);
        kickplay = false;
    }

    //Tom1Amplitude
    if (tom1Play == true) {
        console.log("Tom1 is true")
        var level = tom1Amplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        fill(col + 10);
        ellipse(100, 100, vol/ 1.2)
        background(col);

        //Tom1Ellipse
        fill(90, 90, 90);
        ellipse(width/2.5, height/4, vol / 1.2);
    }

    //Tom2Amplitude
    if (tom2Play == true) {
        console.log("Tom2 is ture")
        var level = tom2Amplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        fill(col + 10);
        ellipse(100, 100, vol/1.2);
        background(col);

        //Tom2Ellipse
        fill(90, 90, 90);
        ellipse(width/1.5, height/4, vol/2.5);
    }

    //Tom3Amplitude
    if (tom3Play == true) {
        console.log("Tom3 is true")
        var level = tom3Amplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        fill(col + 10);
        ellipse(100, 100, vol/1.2);
        background(col);

        //Tom3Ellipse
        fill(90, 90, 90);
        ellipse(width/1.3, height/1.8, vol/2.5)
    }

    //Hi-HatAmplitude
    if (hiHatPlay == true) {
        console.log("Hi-Hat is true")
        var level = hiHatAmplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0 ,1, 0, 255);

        fill(col + 10);
        ellipse(100, 100, vol/1.2);
        background(col);

        //Hi-HatEllipse
        fill(col + 30);
        ellipse(width/15, height/2, vol/2);
    }

    //CrashAmplitude
    if (crashPlay == true) {
        console.log("Crash is true")
        var level = crashAmplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        fill(col + 10);
        ellipse(100, 100, vol/1.2);
        background(col);

        //CrashEllipse
        fill(col + 10);
        ellipse(width/15, height/10, vol);
    }

    //ChinaAmplitude
    if (chinaPlay == true) {
        console.log("China is true")
        var level = chinaAmplitude.getLevel();
        var vol = map(level, 0, 1, 0, 1000);
        var col = map(level, 0, 1, 0, 255);

        fill(col + 10);
        ellipse(100, 100, vol/1.2);
        background(col);

        //ChinaEllipse
        fill(col + 10);
        ellipse(width/3, height/10, vol)
    }

    //RideAmplitude
    if (ridePlay == true) {
        console.log("Ride is true")
        var level = rideAmplitude.getLevel();
        var vol = map(level, 0, 1, 0, 10000);
        var col = map(level, 0, 1, 0, 255);

        fill(col + 10);
        ellipse(100, 100, vol);
        background(col);

        //RideEllipse
        fill(col + 10);
        ellipse(30, height/5, vol + 30)
    }
}