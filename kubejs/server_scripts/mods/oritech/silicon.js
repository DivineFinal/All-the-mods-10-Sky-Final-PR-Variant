// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  // Oritech and ExtendedAE silicon block recipes overlap, allow converting between them so both can be autocrafted
  allthemods
    .shapeless("oritech:silicon_block", ["extendedae:silicon_block"])
    .id("allthemods:oritech_silicon_block_from_extendedae")
  allthemods
    .shapeless("extendedae:silicon_block", ["oritech:silicon_block"])
    .id("allthemods:extendedae_silicon_block_from_oritech")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
