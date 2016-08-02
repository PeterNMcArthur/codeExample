"use strict"
const mocha = require("mocha");
const expect = require("chai").expect;
const fs = require("fs");
const path = require("path");
const stripUnwatedProperties = require(path.join(__dirname, "../index"))

describe("stripUnwatedProperties", function() {


  describe("removeUnpopulatedProps()", () => {
let sampleData;

  beforeEach(() => {

   sampleData = [
          {
            "suitability": [
                {
                  "code": "suitable-vegetarian",
                  "en": {
                    "name": "Vegetarian",
                    "lang": "en",
                    "createdAt": "2016-06-16T12:27:49.016Z",
                    "updatedAt": "2016-06-16T12:27:49.016Z",
                    "id": "57629b45220125d550631e04"
                  },
                  "at": "57629b45220125d550631e05",
                  "de": "57629b45220125d550631e06",
                  "attribute": "suitable",
                  "createdAt": "2016-06-16T12:27:49.107Z",
                  "updatedAt": "2016-06-16T12:27:49.107Z",
                  "id": "57629b45220125d550631e69"
                },
                {
                  "code": "suitable-vegan",
                  "en": {
                    "name": "Vegan",
                    "lang": "en",
                    "createdAt": "2016-06-16T12:27:49.020Z",
                    "updatedAt": "2016-06-16T12:27:49.020Z",
                    "id": "57629b45220125d550631e0f"
                  },
                  "at": "57629b45220125d550631e10",
                  "de": "57629b45220125d550631e11",
                  "attribute": "suitable",
                  "createdAt": "2016-06-16T12:27:49.108Z",
                  "updatedAt": "2016-06-16T12:27:49.108Z",
                  "id": "57629b45220125d550631e6b"
                }
              ],
              "sku": "USPL-CQ11-0000",
              "inStock": true,
              "aac": null,
              "videoId": null,
              "name": "Cissus Quadrangularis ",
              "lang": "en",
              "meta": {
                  "title": "Cissus Quadrangularis Powder UK ",
              },
              "features": [
                  "The OFFICIAL and ORIGINAL Cissus",
                  "Available exclusively at ™",
                  "Potent 11% extract"
              ],
              "country": "uk",
              "slug": {
                  "value": "usplabs-cissus-quadrangularis.html",
                  "country": "uk",
                  "type": "product",
                  "createdAt": "2016-06-13T16:57:28.086Z",
                  "updatedAt": "2016-06-13T16:57:28.289Z",
                  "productId": "USPL-CQ11-0000",
                  "id": "575ee5f81a48e3d32975a9ac"
              },
              "enabled": true,
              "at": "575ee5f81a48e3d32975a9a2",
              "austria": "575ee5f81a48e3d32975a9ba",
              "de": "575ee5f81a48e3d32975a9a3",
              "germany": "575ee5f81a48e3d32975a9c2",
              "series": "Pure Series",
              "createdAt": "2016-06-13T16:57:28.118Z",
              "updatedAt": "2016-06-13T17:14:00.807Z",
              "reviewsCount": 23,
              "id": "575ee5f81a48e3d32975a9c6"
          },
          {
              "sku": "BPB-NALG-0000",
              "inStock": true,
              "aac": null,
              "videoId": null,
              "name": "N Acetyl L Glutamine ",
              "lang": "en",
              "meta": {
                  "title": "N Acetyl L Glutamine Powder UK ",
            },
              "features": [
                  "Water stable form of L-Glutamine",
                  "Most abundant amino acid in muscle tissue",
                  "Levels depleted during strenuous exercise"
              ],
              "country": "uk",
              "slug": {
                  "value": "n-acetyl-l-glutamine.html",
                  "country": "uk",
                  "type": "product",
                  "createdAt": "2016-06-13T16:57:29.320Z",
                  "updatedAt": "2016-06-13T16:57:29.531Z",
                  "productId": "BPB-NALG-0000",
                  "id": "575ee5f91a48e3d32975aa70"
              },
              "enabled": true,
              "at": "575ee5f91a48e3d32975aa66",
              "austria": "575ee5f91a48e3d32975aa7e",
              "de": "575ee5f91a48e3d32975aa67",
              "germany": "575ee5f91a48e3d32975aa86",
              "series": "Pure Series",
              "createdAt": "2016-06-13T16:57:29.359Z",
              "updatedAt": "2016-06-13T17:13:01.952Z",
              "reviewsCount": 4,
              "id": "575ee5f91a48e3d32975aa88"
          },
      ]
    }
  )

    it("filter to strip out unwanted values", () => {

      expect(stripUnwatedProperties.removeUnpopulatedProps(sampleData)).to.eql([
          {
            "suitability": [
                {
                  "code": "suitable-vegetarian",
                  "en": {
                    "name": "Vegetarian",
                    "lang": "en",
                    "createdAt": "2016-06-16T12:27:49.016Z",
                    "updatedAt": "2016-06-16T12:27:49.016Z",
                    "id": "57629b45220125d550631e04"
                  },
                  "attribute": "suitable",
                  "createdAt": "2016-06-16T12:27:49.107Z",
                  "updatedAt": "2016-06-16T12:27:49.107Z",
                  "id": "57629b45220125d550631e69"
                },
                {
                  "code": "suitable-vegan",
                  "en": {
                    "name": "Vegan",
                    "lang": "en",
                    "createdAt": "2016-06-16T12:27:49.020Z",
                    "updatedAt": "2016-06-16T12:27:49.020Z",
                    "id": "57629b45220125d550631e0f"
                  },
                  "attribute": "suitable",
                  "createdAt": "2016-06-16T12:27:49.108Z",
                  "updatedAt": "2016-06-16T12:27:49.108Z",
                  "id": "57629b45220125d550631e6b"
                }
              ],
              "sku": "USPL-CQ11-0000",
              "inStock": true,
              "aac": null,
              "videoId": null,
              "name": "Cissus Quadrangularis ",
              "lang": "en",
              "meta": {
                  "title": "Cissus Quadrangularis Powder UK ",
              },
              "features": [
                  "The OFFICIAL and ORIGINAL Cissus",
                  "Available exclusively at ™",
                  "Potent 11% extract"
              ],
              "country": "uk",
              "slug": {
                  "value": "usplabs-cissus-quadrangularis.html",
                  "country": "uk",
                  "type": "product",
                  "createdAt": "2016-06-13T16:57:28.086Z",
                  "updatedAt": "2016-06-13T16:57:28.289Z",
                  "productId": "USPL-CQ11-0000",
                  "id": "575ee5f81a48e3d32975a9ac"
              },
              "enabled": true,
              "series": "Pure Series",
              "createdAt": "2016-06-13T16:57:28.118Z",
              "updatedAt": "2016-06-13T17:14:00.807Z",
              "reviewsCount": 23,
              "id": "575ee5f81a48e3d32975a9c6"
          },
          {
              "sku": "BPB-NALG-0000",
              "inStock": true,
              "aac": null,
              "videoId": null,
              "name": "N Acetyl L Glutamine ",
              "lang": "en",
              "meta": {
                  "title": "N Acetyl L Glutamine Powder UK ",
              },
              "features": [
                  "Water stable form of L-Glutamine",
                  "Most abundant amino acid in muscle tissue",
                  "Levels depleted during strenuous exercise"
              ],
              "country": "uk",
              "slug": {
                  "value": "n-acetyl-l-glutamine.html",
                  "country": "uk",
                  "type": "product",
                  "createdAt": "2016-06-13T16:57:29.320Z",
                  "updatedAt": "2016-06-13T16:57:29.531Z",
                  "productId": "BPB-NALG-0000",
                  "id": "575ee5f91a48e3d32975aa70"
              },
              "enabled": true,
              "series": "Pure Series",
              "createdAt": "2016-06-13T16:57:29.359Z",
              "updatedAt": "2016-06-13T17:13:01.952Z",
              "reviewsCount": 4,
              "id": "575ee5f91a48e3d32975aa88"
          },
      ]
  )

    })

  })

})

