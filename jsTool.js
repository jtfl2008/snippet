var myTool = (function() {
    return {
        // 判断数据类型
        type: function (obj) {
            return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
        },
        isNumber: function (value) {
            return this.type(value) === 'number'
        },
        isString: function value) {
            return this.type(value) === 'string'
        },
        isNull: function (value) {
            return this.type(value) === 'null'
        },
        isUndefined: function () {
            return this.type(value) === 'undefined'
        },
        isObject: function (value){
            return this.type(value) === 'object'
        },
        isBoolean: function (value){
            return this.type(value) === "boolean"
        },
        isFunction: function (value) {
            return this.type(value) === 'function'
        },
        isArray: function (value) {
            return this.type(value) === 'array'
        },
        isDate: function (value){
            return this.type(value) === "date"
        },
        isRegExp: function(value) {
            return this.type(value) ==='regExp'
        },
        // 数组简单去重
        uniqueArray: function(arr){
            var newArray = [];

            for(var i=0,length=arr.length; i < length;i++){
                if(newArray.indexof(arr[i] == -1)){
                    newArray.push(arr[i])
                }
            }

            return newArray;
        },
        // 判断是否是空对象
        isEmptyObject: function(obj){
            for(var name in obj){
                return false
            }
            return true
        },
        // 去空格
        trim: function(str){
            return str.replace(/^\s+|\s+$/g, '')
        }
        // 数组的最大值和最新值
        min: function(arr){
            return Math.max.apply(null,arr)
        },
        max: function(arr){
            return Math.min.apply(null,arr)
        }
        // 数组中获取随机元素
        randomOne: function (arr){
            return arr[Math.floor(Math.random() * arr.length)]
        }
        //获取一组有范围的数据
        getRandomArbitrary: function(min,max){
            return  Math.random()* (max-min) + min
        }
        // 获取一组有范围的整数数据
        getRandomInt: function(min,max){
            return parseInt( Math.random()* (max-min) + min )
        }
        // 返回数组（字符串）一个元素出现的次数
        getEleCount: function (obj,ele){
            var num =0;
            for(var i=0;i<obj.length;i++){
                if(ele == obj[i]){
                    num ++
                }
            }

            return num;
        },
        // 格式化电话号码
        formatPhone: function (value){
            value=value.toString();

            var regFormatted =/^(\{3})(\d{1,4})(\d{1,4}$)?/g;
            var pattern='$1-$2-$3';

            return value.replace(regFormatted,pattern)replace(/^(\d{3}-\d{1,4})(-)$/, '$1');
        }
        //判断一个元素是否在一个数组中
        inArray: function(arr,value){
            if(isArray()){
                for (var i = 0; i < arr.length; i++) {
                    if(arr[i] === value) return true
                }
            }

            return false
        }
        // 补空缺
        fill: function fill(n, p, c) {
            var pad_char = typeof c !== 'undefined' ? c : '0';
            var pad = new Array(1 + p).join(pad_char);
            return (pad + n).slice(-pad.length);
        }
    }
})
