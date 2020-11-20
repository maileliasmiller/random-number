function random_number(){
    var random_number = 0;
    var randoms = [];
    //Time
    var time = Date.now();
    var time_length = time.toString().length;
    var time_to_float = 1;
    while (time_length > 0){
        time_to_float *= 10;
        time_length -= 1;
    }
    time /= time_to_float;
    time /= Math.random();
    random_number += time;
    randoms.push(time);

    //normal random
    var normal_random = Math.random() * Math.random() / Math.random();
    random_number -= normal_random;
    randoms.push(normal_random);

    //normal random with PI
    var random_PI = (Math.random() * Math.random() / Math.random())/Math.PI;
    random_number += random_PI;
    randoms.push(random_PI);

    //test if random_number > 0 or < 1
    while (random_number <= 0 || random_number >= 1){
        if (random_number <= 0){
            random_number += randoms[normal_random_(0, randoms.length - 1)] * randoms[normal_random_(0, randoms.length - 1)] / randoms[normal_random_(0, randoms.length - 1)];
        }else{
            random_number -= randoms[normal_random_(0, randoms.length - 1)] * randoms[normal_random_(0, randoms.length - 1)] / randoms[normal_random_(0, randoms.length - 1)];
        }
    }

    //return random number
    return random_number;
}

function random(min, max){
    max += 1;    
    return Math.floor(random_number() * (max - min)) + min;
}

function normal_random_(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
