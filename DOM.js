(function (DOM) {

    function DOM (elements){
        if( !(this instanceof DOM) ) {
            return new DOM(elements);
        }
        this.element = document.querySelectorAll(elements);
    }
    this.isArray = function isArray (arr){
        return Object.prototype.toString.call(arr) === '[object array]';
    };

    this.isObject = function isObject (obj){
        return Object.prototype.toString.call(obj) === '[object object]';
    };

    this.isFunction = function isFunction ( func ){
        return Object.prototype.toString.call( func ) === '[object function]';
    };

    this.isNumber = function isNumber ( number ){
        return Object.prototype.toString.call( number ) === '[object Number]';
    };

    this.isString = function isString (str){
        return Object.prototype.toString.call(str) === '[object String]';
    };


    this.isBoolean = function isBoolean ( func ){
        return Object.prototype.toString.call( func ) === '[object Boolean]';
    };

    this.isNull = function isNull ( nulo ){
        var aux = Object.prototype.toString.call( nulo );
        return aux === '[object Null]' || aux === '[object Undefined]';
    };
   

    DOM.prototype.on = function on (event, clallback){
        Array.prototype.forEach.call( this.element,function( button ){
            button.addEventListener(event,clallback,false);
        } );
    };

    DOM.prototype.off = function off (event, clallback){
        Array.prototype.forEach.call( this.element,function( button ){
            button.removeEventListener(event,clallback,false);
        } );
    };

    DOM.prototype.get = function get (index){
        if(!index)
            return this.element[0];
        return this.element[index];
    };

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply( this.element, arguments )
    };
    DOM.prototype.map = function map(){
        return Array.prototype.map.apply( this.element, arguments )
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply( this.element, arguments )
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply( this.element, arguments )
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply( this.element, arguments )
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply( this.element, arguments )
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply( this.element, arguments )
    };


    window.DOM = DOM;


})(window);