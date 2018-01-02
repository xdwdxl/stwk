module.exports = function main(number) {

    var printInfo = "";

    for (; number > 2; number--) {
            printInfo += number + ' bottles of beer on the wall, '+number+' bottles of beer.\nTake one down and pass it around, ' +(number - 1) + ' bottles of beer on the wall.\n';
    }

    printInfo += '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    printInfo += '1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n';
    printInfo += 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';

    return printInfo;
}