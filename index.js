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
    random_number += time;

    //return random number
    return random_number;
}

function random(min, max){
    return Math.floor(random_number() * (max - min)) + min;
}