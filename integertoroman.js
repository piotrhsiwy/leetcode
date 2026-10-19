var appendRoman = function(digit, ten, five, one){
    let str = "";
    if(digit > 5){
        if(digit == 9){
            str += (one + ten);
        } else {
            str = str += (five);
            digit -= 5;
            while(digit-- > 0){
                str = str += (one);
            }
        }
    } else{
        if(digit == 5){
            str = str += (five);
        } else if(digit == 4){
            str = str += (one + five);
        } else{
            while(digit-- > 0){
                str = str += (one);
            }
        }
    } 
    return str;
}

/**
 * @param {number} num
 * @return {string}
 */
export var intToRoman = function(num) {
    let ret = "";
    let rest, base;

    base = Math.floor(num/1000);
    num %= 1000;    
    while(base-- > 0){
        ret = ret += ("M");
    }

    base = Math.floor(num/100);
    num %= 100;
    ret = ret += (appendRoman(base, "M", "D", "C"));

    base = Math.floor(num/10);
    num %= 10;
    ret = ret += (appendRoman(base, "C", "L", "X"));

    rest = num % 10;    
    ret = ret += (appendRoman(rest, "X", "V", "I"));
    
    return ret;
};
