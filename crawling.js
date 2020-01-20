var client = require('cheerio-httpcli');
let url = 'https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%EB%AF%B8%EB%A6%BC%EC%97%AC%EA%B3%A0';
var param = {};

client.fetch(url, param, function (err, $, res) {
    if (err) {
        console.log(err);
        return;
    }
    $(".menu_info").each(function (post) {
        console.log($(this).text());
    });
});