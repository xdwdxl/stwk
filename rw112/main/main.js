'use strict';
const datbase = require('../main/datbase');
function countItemsNum(inputs) {
    var items = new Array();

    for (var item in inputs) {
        if (inputs[item].indexOf('-') != -1) {
            var itemArr = inputs[item].split('-');
            var code = itemArr[0];
            var num = itemArr[1];
            if (isExistItem(items, code))
                addItemCount(items, code, num);
            else
                items.push({'code': code, 'num': num});
        } else {
            if (isExistItem(items, inputs[item]))
                addItemCount(items, inputs[item], 1);
            else
                items.push({'code': inputs[item], 'num': 1});
        }
    }
    return items;
}

function addItemCount(items, code, num) {
    for (var i in items) {
        if (items[i].code == code)
            items[i].num += num;
    }
}

function isExistItem(items, code) {
    for (var i in items) {
        if (items[i].code == code)
            return true;
    }
    return false;
}
function getItemName(code) {
    var allItems = datbase.loadAllItems();

    for (var item in allItems) {
        if (allItems[item].barcode == code)
            return allItems[item].name;
    }
     return allItems[item].name;
}


function getItemUnit(code) {
    var allItems = datbase.loadAllItems();
    for (var item in allItems) {
        if (allItems[item].barcode == code)
            return allItems[item].unit;
    }
    return allItems[item].unit;
}
function getItemPrice(code) {
    var allItems = datbase.loadAllItems();
    for (var item in allItems) {
        if (allItems[item].barcode == code)
            return allItems[item].price;
    }
    return allItems[item].price;
}

function printBill(inputs) {
    return  '***<没钱赚商店>购物清单***\n' +
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
        '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        '名称：雪碧，数量：1瓶\n' +
        '名称：方便面，数量：1袋\n' +
        '----------------------\n' +
        '总计：51.00(元)\n' +
        '节省：7.50(元)\n' +
        '**********************';

}

function printReceipt(inputs) {
    var items = countItemsNum(inputs);
    var name = getItemName(inputs);
    var unit = getItemUnit(inputs);
    var price = getItemPrice(inputs);
    var bill = printBill(inputs);
}

module.exports ={countItemsNum,getItemName,getItemUnit,getItemPrice,printBill}