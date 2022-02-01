"use strict";

// eslint-disable-next-line new-cap
const router = require("express").Router();
const Ping = require("./../controllers/Ping").Ping.build();
const Url = require("./../controllers/Url").Url.build();

router.get("/ping", Ping.ping);


router.post("/shorturl", Url.short);
router.get("/shorturl/:hash", Url.get);

exports.Router = router;