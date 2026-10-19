// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
	// Flight upgrade needs an Unstable Ingot (from ATM10 Aeronautics)
	allthemods.custom({
		"type": "excessive_utilities:shaped_unstable",
		"pattern": {
			"key": {
				"I": {
					"item": "excessive_utilities:unstable_ingot"
				},
				"L": {
					"item": "minecraft:phantom_membrane"
				},
				"F": {
					"tag": "c:feathers"
				},
				"B": {
					"item": "justdirethings:upgrade_blank"
				}
			},
			"pattern": [
				"LIL",
				"FBF",
				"LIL"
			]
		},
		"result": {
			"count": 1,
			"id": "justdirethings:upgrade_flight"
		}
	}).id("justdirethings:upgrade_flight")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
