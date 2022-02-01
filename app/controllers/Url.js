"use strict";

const sh = require("shorthash");
const { UrlDAO } = require("./../daos/UrlDao");

exports.Url = class Url {

  constructor() { }

  static build() {
    const url = new Url();
    return url;
  }

  /**
   * 
   * @param {Express.Request} req 
   * @param {import("express").Response} res 
   */
  async short(req, res){
    const urlDAO = new UrlDAO();
    const url = req.body.url;
    if(!url){
      res.status().json({error: "url is required."});
      return;
    }
    const hash = sh.unique(url);
    await urlDAO.upsert(url, hash);
    res.json({url, hash});
  }

  /**
   * 
   * @param {Express.Request} req 
   * @param {import("express").Response} res 
   */
  async get(req, res){
    const urlDAO = new UrlDAO();
    const hash = req.params.hash;
    if (!hash) {
      res.status().json({ message: "hash is required." });
      return;
    }
    const uri = await urlDAO.get(hash);
    if(uri && uri.url){
      res.redirect(uri.url);
    } else {
      res.status(404).send({ error: "Not found" });
    }

  }
  

};