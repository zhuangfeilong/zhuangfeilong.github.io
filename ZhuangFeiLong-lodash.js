var ZhuangFeiLong = {
  /**
   * _.chunk(array, [size=1]) ： Creates an array of elements split into groups the length of `size`.
   * If `array` can't be split evenly, the final chunk will be the remaining
   * 将一个数组拆开成多个等长的数组，最后多余的部分放在一个数组里。
   * @param {Array} array The array to process.
   * @param {number} [size=1] The length of each chunk
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {Array} Returns the new array of chunks.
   * @example示例
   * _.chunk(['a', 'b', 'c', 'd'], 2);
   * // => [['a', 'b'], ['c', 'd']]
   *
   * _.chunk(['a', 'b', 'c', 'd'], 3);
   * // => [['a', 'b', 'c'], ['d']]
   */
  chunk: function(arr, n) {
    var x = Math.ceil(arr.length / n)
    var result = new Array(x);
    for (var i = 0; i < x; i++) {
      result[i] = []
    }
    for (var j = 0; j < arr.length; j++) {
      result[parseInt(j / n)][j % n] = arr[j]
    }
    return result
  },
  // chunk2: function() {

  //   }
  /**
   * _.compact(array) : 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
   *
   * @param 参数
   * array (Array): 待处理的数组。
   *
   * @returns 返回值
   * (Array): 返回过滤掉假值的新数组。
   * 
   * @example 示例
   * _.compact([0, 1, false, 2, '', 3]);
   *  // => [1, 2, 3]
   *
   */
  compact: function(array) {
    var newarr = []
    for (var i = 0; i < array.length; i++) {
      if (Boolean(array[i]) !== false) {
        newarr.push(array[i])
      }
    }
    return newarr
  },

  /**
   * _.concat(array, [values]) : 创建一个新数组，将array与任何数组 或 值连接在一起。
   * 
   * @param 参数：array (Array): 待处理的数组.
   *      [values] (...*): 连接的值。
   * @returns 返回值：(Array): 返回连接后的新数组。
   * 
   * @example 示例
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   * 
   * console.log(other);
   * // => [1, 2, 3, [4]]
   * 
   * console.log(array);
   * // => [1]
   * 
   */

  concat: function(array, ann) {
    var newArray = []
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'object') {
        for (var j = 0; j < arguments[i].length; j++) {
          newArray.push(arguments[i][j])
        }
      } else {
        newArray.push(arguments[i])
      }
    }
    return newArray
  },

  /**
     * _.difference(array, [values]) : 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
     * 结果值的顺序是由第一个数组中的顺序确定。
     * 注意: 不像 _.pullAll，这个方法会返回一个新数组。 
     
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param 参数：array (Array): 要检查的数组。
     * @param       [values] (...Array): 排除的值。
     * @param       {Array} array The array to inspect.
     * @param       {...Array} [values] The values to exclude.
     * @returns 返回：{Array} Returns the new array of filtered values.
     * @example 示例
     *
     * _.difference([2, 1], [2, 3]);
     * => [1]
     * 
     */

  difference: function(array, annarr) {

    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < annarr.length; j++) {
        if (array[i] == annarr[j]) {
          array.splice(i, 1)
        }
      }
    }
    return array
  },

  /**
   * _.drop(array, [n=1]) : Creates a slice of `array` with `n` elements dropped from the beginning.
   * 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
   * 
   * @category Array
   * @param 参数：array (Array): 要查询的数组。
   *              [n=1] (number): 要去除的元素个数。
   *              {Array} array The array to query.
   * @param       {number} [n=1] The number of elements to drop.
   * @param-      {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns 返回：(Array): 返回array剩余切片。   
   *              {Array} Returns the slice of `array`.
   * @example 示例
   *
   * _.drop([1, 2, 3]);
   * // => [2, 3]
   *
   * _.drop([1, 2, 3], 2);
   * // => [3]
   *
   * _.drop([1, 2, 3], 5);
   * // => []
   *
   * _.drop([1, 2, 3], 0);
   * // => [1, 2, 3]
   */

  drop: function(arrdrop, n) {
    if (n === undefined) {
      n = 1
    }
    for (var i = 0; i < n; i++) {
      arrdrop.shift(arrdrop[i])
    }
    return array
  },



  // take: function() {

  // }



}