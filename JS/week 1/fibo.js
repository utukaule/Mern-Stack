let initial = 0;

for (let i = 1; i < 10; i++) {

    for (let j = i - 1; j < i; j++) {

        initial += j;

        console.log(initial);

    }

}
