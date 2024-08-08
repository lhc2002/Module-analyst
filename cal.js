ex= {

    tar_list:[0,3,6,9],
    pi:3.14,

    sub: function(a, b) {
        console.log(a-b);
        return a-b;
    },
    add: function(a, b) {
        console.log(a+b);
        return a+b;
    },
    mul: function(a, b) {
        console.log(a*b);
        return a*b;
    },
    div: function(a, b) {
        console.log(a/b);
        return a/b;
    }

};

val_pi=math.pi

math.sub(val_pi,233)
math.add(val_pi,666)
math.mul(val_pi,math.tar_list[1])
math.div(math.tar_list[3],math.tar_list[2])