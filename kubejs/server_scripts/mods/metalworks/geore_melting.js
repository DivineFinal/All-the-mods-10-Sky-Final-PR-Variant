// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  // Productive Metalworks has GeOre melting for other metals but not the ATM metals
  ;["allthemodium", "vibranium", "unobtainium"].forEach((metal) => {
    ;[
      ["shard", 90],
      ["block", 360]
    ].forEach(([form, amount]) => {
      allthemods
        .custom({
          type: "productivemetalworks:item_melting",
          ingredient: { item: `geore:${metal}_${form}` },
          maximum_temperature: 0,
          minimum_temperature: 3000,
          result: [{ amount: amount, id: `allthemodium:molten_${metal}` }]
        })
        .id(`allthemods:metalworks/melting/geore/${metal}_${form}`)
    })
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
