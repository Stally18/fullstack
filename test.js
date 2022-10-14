function CheckOrbQuality(rune, level) {
    // 0: only R and N
    // 1: bad main or no important sub
    // 2: bad substat
    // 3: low sum of substats
    // 4: NYI
    subeffects = rune.SubEffectList.map(e => e.ParameterKind);
    sum = 0;
    if (rune.IsEquipped == null) {
        if (rune.Rarity == "3" && level>0) {
            // outdated
            //if (subeffects.includes("element"))
            //	return ""
            switch (rune.MainEffect.EffectKind) {
                case "mhp_add":
                    switch (level) {
                        case 3:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        case 2:
                            ImportantSub = rune.SubEffectList.filter(e => e.ParameterKind == "mhp");
                            if (ImportantSub.length > 0) if (ImportantSub[0].Rarity < 2)    return rune.UserRuneId;
                        default:
                            if (!subeffects.includes("mhp") || rune.MainEffect.Value < 3999) return rune.UserRuneId
                    }
                    break;
                case "mhp_ratio":
                    switch (level) {
                        case 3:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        case 2:
                            ImportantSub = rune.SubEffectList.filter(e => e.ParameterKind == "mhp");
                            if (ImportantSub.length > 0) if (ImportantSub[0].Rarity < 2)    return rune.UserRuneId;
                        default:
                            if (!subeffects.includes("mhp") || rune.MainEffect.Value < 44) return rune.UserRuneId
                    }
                    break;
                case "atk_add":
                    switch (level) {
                        case 3:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        case 2:
                            ImportantSub = rune.SubEffectList.filter(e => e.ParameterKind == "atk");
                            if (ImportantSub.length > 0) if (ImportantSub[0].Rarity < 3)    return rune.UserRuneId;
                        default:
                            if (!subeffects.includes("atk") || rune.MainEffect.Value < 255) return rune.UserRuneId
                    }
                    break;
                case "atk_ratio":
                    switch (level) {
                        case 3:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        //case 3:
                        //  if (!subeffects.includes("element")) return rune.UserRuneId;
                        case 2:
                            ImportantSub = rune.SubEffectList.filter(e => e.ParameterKind == "atk");
                            if (ImportantSub.length > 0) if (ImportantSub[0].Rarity < 3)    return rune.UserRuneId;
                        default:
                            if (!subeffects.includes("atk") || rune.MainEffect.Value < 44) return rune.UserRuneId
                    }
                    break;
                case "def_add":
                    switch (level) {
                        case 3:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        case 2:
                            ImportantSub = rune.SubEffectList.filter(e => e.ParameterKind == "def");
                            if (ImportantSub.length > 0) if (ImportantSub[0].Rarity < 2)    return rune.UserRuneId;
                        default:
                            if (!subeffects.includes("def") || rune.MainEffect.Value < 255) return rune.UserRuneId
                    }
                    break;
                case "def_ratio":
                    switch (level) {
                        case 3:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        case 2:
                            ImportantSub = rune.SubEffectList.filter(e => e.ParameterKind == "def");
                            if (ImportantSub.length > 0) if (ImportantSub[0].Rarity < 2)    return rune.UserRuneId;
                        default:
                            if (!subeffects.includes("def") || rune.MainEffect.Value < 44) return rune.UserRuneId
                    }
                    break;
                case "agi_add":
                    switch (level) {
                        case 3:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        case 2:
                            if (!subeffects.includes("all")) return rune.UserRuneId;
                        default:
                            if (rune.MainEffect.Value < 40) return rune.UserRuneId
                    }
                    break;
                case "acc_add":
                    switch (level) {
                        case 3:
                            // has spd/atk
                            if (!subeffects.includes("atk") && !subeffects.includes("agi")) return rune.UserRuneId;
                        case 2:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        default:
                            if (rune.MainEffect.Value < 60) return rune.UserRuneId
                    }
                    break;
                case "res_add":
                    switch (level) {
                        case 3:
                            // has the hp/def
                            if (!subeffects.includes("mhp") && !subeffects.includes("def")) return rune.UserRuneId;
                        case 2:
                            sum = rune.SubEffectList.map(e => e.Rarity).reduce((a,b) => a + (+b), 0);
                            if (sum < 7)    return rune.UserRuneId;
                        default:
                            if (rune.MainEffect.Value < 60) return rune.UserRuneId
                    }
                    break;
                default:
                    console.log("default return, something went wrong");
                    return rune.UserRuneId
            }
            return ""
        }
        else if (rune.Rarity == "4")    return ""
        // R and N orbs
        return rune.UserRuneId
    }
    return ""
}

// newFuckingRune = runes[runes.length-1].RuneGetUserRuneListResponse.UserRuneList.filter(e => e.UserRuneId == 6067284)[0]

function sellBadOrbs(level) {
    if (level > 3) {
        console.log("NOT MORE THAN 3 PLS READ");
        return ""
    }
    postGameMessage('//Rune/GetUserRuneList')
        .then(message => message?.RuneGetUserRuneListResponse?.UserRuneList?.filter(e => CheckOrbQuality(e,level)).map(e => e.UserRuneId))
        .then( (RuneIds) => {
            let i = 0;
            do {
                var UserRuneIds = RuneIds.slice(i, i+20);
                postGameMessage('//Rune/Exchange', {UserRuneIds});
                console.log("selling " + (UserRuneIds.length+i) + " out of " + RuneIds.length);
                i +=20;
            } while (i < RuneIds.length);
        });
}

function printBadOrbs(level) {
    if (level > 3) {
        console.log("NOT MORE THAN 3 PLS READ");
        return ""
    }
    postGameMessage('//Rune/GetUserRuneList')
        .then(message => message?.RuneGetUserRuneListResponse?.UserRuneList?.filter(e => CheckOrbQuality(e,level)))
        .then( (RuneIds) => {
            console.log(RuneIds)
        });
}