/**
 * Created by Joker on 2017/7/20.
 */
//var testGlobal = {name: 'hell'};这里定义的可以全局使用。（可能需要调整下Gruntfile的配置）暂时不用这种写法。

var globalModule = angular.module('globalModule', []);
globalModule.service('global', ['$q',
    function ($q) {
        var o = {
            skin: {
                default: 'dest/style/app.default.min.css',
                classicRed: 'dest/style/app.red.min.css'
            }
        };
        return o;
    }]);