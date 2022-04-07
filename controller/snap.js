"use strict";

const puppeteer = require('puppeteer');
const config = require('../config');

let browser = null;

exports.create = function (req, res) {
    var name = req.body.name;
    var url = req.body.url;
    var fullname = 'fs/' + name.substr(0, 2) + '/' + name.substr(2, 2) + '/' + name;
    (async () => {
        if (!browser) {
            browser = await  puppeteer.launch({
                headless: !config.debug,
                args: ['--no-sandbox']
            });
        }
        const page = await browser.newPage();
        await page.goto(url);
        await page.screenshot({path: fullname});
        await page.close();
        res.send(JSON.stringify({
           url: url,
           filename: fullname
        }));
    })().catch(function (error) {
        res.sendStatus(500);
        console.log(error);
        if (browser) {
            browser.close();
            browser = null;
        }
    });

};

