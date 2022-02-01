"use strict";

const dbConnector = require("./../utils/database/mongodb-connector");

exports.UrlDAO = class UrlDAO {

  constructor() {
    this.collectionName = "urls";
  }

  /**
   * 
   * @param {string} url 
   * @param {string} hash 
   */
  async upsert(url, hash){
    const indexes = [
      {
        key: {
          "hash": 1,
        },
        name: "hash_index",
        unique: true
      }
    ];
    return await dbConnector.upsert(this.collectionName, { hash }, { $set: { url, hash }}, indexes);
  }

  /**
   * 
   * @param {string} hash
   */
  async get(hash) {
    return await dbConnector.findOne(this.collectionName, {hash});
  }

};