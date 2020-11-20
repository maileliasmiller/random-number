function random_number(){
    var random_number = 0;
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

    //test random_number > 0 or < 1
    while (random_number <= 0 || random_number >= 1){
        console.log(random_number);
        if (random_number <= 0){
            random_number += time;
        }else{
            random_number -= time;
        }
    }

    //return random number
    return random_number;
}

function random(min, max){
    return Math.floor(random_number() * (max - min)) + min;
}
