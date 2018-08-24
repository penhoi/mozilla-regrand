function msg(i)
{  return (i*i);    }

function test1()
{
    var all = 0;
    for (var i=0; i<25; i++) {
        all += msg(i);
    }
    print("Total result is:", all);
}

test1();

