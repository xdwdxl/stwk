function sameElement(input) {
    var number = 0;
    var inputs = [];
    for (var i = 0; i < input.length;) {
        for (var j = 0; j < input.length; j++) {
            if (input[i] === input[j]) {
                number++;
            }
        }

        i += number;
        inputs.push({barcode: input[i - 1], count: number});
        number = 0;
    }

    return inputs;
}

function statisticsTheSameElement(item) {
    var result = [];

    for (var i = 0; i < item.length; i++) {
        var items = item[i].barcode.split("-");
        if (items.length === 1) {
            result.push({barcode: items[0], count: item[i].count})
        } else if (items.length === 2) {
            result.push({barcode: items[0], count: items[1] * item[i].count})
        }
    }

    return result;
}

function outputTheResult(input) {
    var item = sameElement(input);
    return statisticsTheSameElement(item);
}

function MergeInformation(output, zitem) {
    var outputItems = [];
    for (var i = 0; i < output.length; i++) {
        for (var j = 0; j < zitem.length; j++) {
            if (output[i].barcode === zitem[j].barcode) {
                outputItems.push(Object.assign(output[i], zitem[j]));
            }
        }
    }

    return outputItems;
}

function splicingInformation(outputItems) {
    var text1 = `***<没钱赚商店>购物清单***\n`;
    var text2 = `----------------------\n`;
    var text3 = `**********************`;
    var text4 = "";
    var text5 = "挥泪赠送商品：\n";

    var allPrice = 0;
    var savePrice = 0;
    for (var i = 0; i < outputItems.length; i++) {
        var itemCount = outputItems[i].count;
        if (itemCount >= 3) {
            itemCount -= parseInt(itemCount / 3);
            text5 += `名称：${outputItems[i].name}，数量：${parseInt(outputItems[i].count / 3)}${outputItems[i].unit}\n`
        }

        var itemPrice = itemCount * outputItems[i].price;
        allPrice += itemPrice;
        savePrice += (parseInt(outputItems[i].count / 3)) * outputItems[i].price;
        text4 += `名称：${outputItems[i].name}，数量：${outputItems[i].count}${outputItems[i].unit}，单价：${parseFloat(outputItems[i].price).toFixed(2)}(元)，小计：${parseFloat(itemPrice).toFixed(2)}(元)\n`;
    }

    var html_all = `总计：${parseFloat(allPrice).toFixed(2)}(元)\n`;
    var html_save = `节省：${parseFloat(savePrice).toFixed(2)}(元)\n`;

    return text1 + text4 + text2 + text5 + text2 + html_all + html_save + text3;
}

module.exports = function main(input, zitem) {

    var output = outputTheResult(input);

    var outputItems = MergeInformation(output, zitem);

    console.log(splicingInformation(outputItems));
};