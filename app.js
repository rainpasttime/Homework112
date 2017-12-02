"use strict";
describe("pos",function(){
    it("spec one",function(){
        spyOn(console,"log");

        const main = require('./main/main');

        let inputs = [
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

        main(inputs);

        let expectText =
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
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });

    it("spec two",function(){
        spyOn(console,"log");

        const main = require('./main/main');

        let inputs = [
            'ITEM000000',
            'ITEM000001',
            'ITEM000000',
            'ITEM000001',
            'ITEM000000',
            'ITEM000003-2',
            'ITEM000004',
            'ITEM000004',
            'ITEM000002-1'
        ];

        main(inputs);

        let expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：6.00(元)\n' +
            '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n'+
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：电池，数量：2个，单价：2.00(元)，小计：4.00(元)\n' +
            '名称：苹果，数量：1斤，单价：5.50(元)，小计：5.50(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '名称：可口可乐，数量：1瓶\n' +
            '----------------------\n' +
            '总计：51.50(元)\n' +
            '节省：3.00(元)\n' +
            '**********************';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });

});