"use strict";

/**
 * @class Ping
 */
exports.Ping = class Ping {

  constructor () {}

  static build() {
    const ping = new Ping();
    return ping;
  }

  /**
   * 
   * @param {Express.Request} req 
   * @param {import("express").Response} res 
   */
  ping(req, res){
    res.send("OK");
  }

};