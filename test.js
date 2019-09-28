function fun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 3000);
    });
}

function play() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2);
        }, 2000);
    });
}
function main() {
    //fun().then(() => play());
    //    play.then(res=>console.log(res));

    fun()
        .then(() => {
            play();
        });
}

main();

/* try {
        await git().add('data.txt').commit('Another Commit!!', { '--date': date }).push();

    } catch (error) {
        console.log(error.message);
    } */

    /* try {
        var writeStream = fs.createWriteStream('./data.txt', { 'flags': 'a' });
        await writeStream.write(`\n Last Modified: ${date}`);
    } catch (error) {
        console.log(error.message);
    } */