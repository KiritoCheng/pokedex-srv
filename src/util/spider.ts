import * as http from "http";
import * as https from "https";
// import * as fs from "fs";
// import * as cheerio from "cheerio";
// import * as request from "request";
// const http = require('http');
// const fs = require('fs');
// const cheerio = require('cheerio');
// const request = require('request');
const url = "https://wiki.52poke.com/wiki/%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%88%97%E8%A1%A8%EF%BC%88%E6%8C%89%E5%85%A8%E5%9B%BD%E5%9B%BE%E9%89%B4%E7%BC%96%E5%8F%B7%EF%BC%89/%E7%AE%80%E5%8D%95%E7%89%88";

let startRequest = (url: string) => {
    https.get(url, (res => {
        console.log(res)
    }))
}


startRequest(url);
// const fetchPage = (x, iStart, iTotal, client) => {
//     startRequest(x, iStart, iTotal, client);
// }