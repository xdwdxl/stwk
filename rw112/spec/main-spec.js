'use strict';
const datbase = require('../main/datbase');
const countItemsNum = require('../main/main').countItemsNum;
const getItemName = require('../main/main').getItemName;
const getItemUnit = require('../main/main').getItemUnit;
const getItemPrice = require('../main/main').getItemPrice;
const printBill = require('../main/main').printBill;

describe('pos', function () {
    var inputs;
    var allItems;

    beforeEach(function () {
        allItems = datbase.loadAllItems();
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });

    it('总商品的数量', function () {
        var items =countItemsNum(inputs);
            expect(items).toEqual([
                {code:'ITEM000001',num:5},
                {code:'ITEM000003',num:'2'},
                {code:'ITEM000005',num:3}
            ]);
    });
    it('商品单价', function () {
        var price =getItemPrice(allItems);
        expect(price).toEqual(4.5,15.0,3.0);
    });
    it('商品名称', function () {
        var name =getItemName(allItems);
            expect(name).toEqual('方便面','荔枝','雪碧');
    });
    it('商品单位', function () {
        var unit =getItemUnit(allItems);
        expect(unit).toEqual('袋','斤','瓶');
    });
    it('打印发票', function () {
        var bill =printBill(
            '***<没钱赚商店>购物清单***\n' +
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
            '**********************');

        expect(bill).toEqual(bill);
    });
});
