var mergeAlternately = function(word1, word2) {
    let n1 = word1.length
    let n2 = word2.length

    let n = Math.max(n1, n2)
    let result = ''

    // 遍历最长的单词，将两个单词的每个字母按顺序放入数组
    for(i = 0; i <= n; i++) {
        if(n1 > 0) {
            result += word1[i]
            n1--
        }

        if(n2 > 0) {
            result += word2[i]
            n2--
        }
    }

    // 返回字符串
    return result
};

console.log(mergeAlternately('abcd', 'pq'))
// 输出：'apbqcd'