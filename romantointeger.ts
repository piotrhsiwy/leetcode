/**
 * @param {string} s
 * @return {number}
 */
export const romanToInt = (s: string) : number => {
    let i : number = 0;
    let ret : number = 0;
    let n : number = 1;
    while(i < s.length){
        const c : string = s[i];
        if(i+1 < s.length && s[i+1] === c){
            n++;
            i++;
            continue;
        }
        if(n === 1){
            // single
            if(c === 'I'){
                if(i+1 < s.length){
                    if(s[i+1] === 'X'){
                        ret += 9;      
                        i++;
                    } else if(s[i+1] === 'V'){
                        ret += 4;
                        i++;
                    } else{
                        ret += 1;
                    }
                } else {
                    ret += 1;
                }
            } else if(c === 'X'){
                if(i+1 < s.length){
                    if(s[i+1] === 'C'){
                        ret += 90;      
                        i++;
                    } else if(s[i+1] === 'L'){
                        ret += 40;
                        i++;
                    } else{
                        ret += 10;
                    }
                } else{
                    ret += 10;
                }
            } else if(c === 'C'){
                if(i+1 < s.length){
                    if(s[i+1] === 'M'){
                        ret += 900;      
                        i++;
                    } else if(s[i+1] === 'D'){
                        ret += 400;
                        i++;
                    } else{
                        ret += 100;
                    }
                } else{
                    ret += 100;
                }
            } else if(c === 'V'){
                ret += 5;
            } else if(c === 'L'){
                ret += 50;
            } else if(c === 'D'){
                ret += 500;
            } else if(c === 'M'){
                ret += 1000;
            }
            n = 1;
        } else{
            // multiple
            if(c === 'I'){
                ret += n;
            } else if(c === 'X'){
                ret += n*10;
            } else if(c === 'C'){
                ret += n*100;
            } else if(c === 'M'){
                ret += n*1000;
            }
            n = 1;
        }
        i++; 
    }
    return ret;
};

const s = "DCXXI";
romanToInt(s);

