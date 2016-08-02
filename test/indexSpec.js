"use strict" 
const mocha = require("mocha");
const expect = require("chai").expect;
const fs = require("fs");
const path = require("path");
const stripUnwatedProperties = require(path.join(__dirname, "../index"))

describe("stripUnwatedProperties", () => {

	describe("findUnpopulated", () => {

		it("will return true the the prop is type; array, object, number or bool", () => {
		
			let obj = {
				array: [],
				obj: {},
				number: 12,
				bool: true
			}

			expect(stripUnwatedProperties.findUnpopulated(obj.array)).to.be.ok
			expect(stripUnwatedProperties.findUnpopulated(obj.obj)).to.be.ok
			expect(stripUnwatedProperties.findUnpopulated(obj.number)).to.be.ok
			expect(stripUnwatedProperties.findUnpopulated(obj.bool)).to.be.ok

		})

		it("will return true is the string doesn't match the RegEx", () => {

			let obj = {
				smallString: "esrsersr",
				largeString: "To go on account chandler rope's end yard warp squiffy mizzen come about walk the plank hail-shot. List scourge of the seven seas draught Gold Road chantey blow the man down parley heave to clap of thunder keelhaul. Parley chase guns hardtack trysail Letter of Marque matey gaff topsail lass grog."
			}

			expect(stripUnwatedProperties.findUnpopulated(obj.smallString)).to.be.ok
			expect(stripUnwatedProperties.findUnpopulated(obj.largeString)).to.be.ok

		})

		it("will return false if the prop matches the RegEx", () => {

			let obj = {
				match1: "xf4l362lp7dpyi0xtenq32rf",
				match2:	"apay4q0lcxncdp7yg0f6fdv7",
				match3: "wjztmzknv11dhy6yd6o43d9f",
				match4: "40hls5z9cdwwwpyxt74asd3c"
			}

			expect(stripUnwatedProperties.findUnpopulated(obj.match1)).to.not.be.ok
			expect(stripUnwatedProperties.findUnpopulated(obj.match2)).to.not.be.ok
			expect(stripUnwatedProperties.findUnpopulated(obj.match3)).to.not.be.ok
			expect(stripUnwatedProperties.findUnpopulated(obj.match4)).to.not.be.ok

		})

	})

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

