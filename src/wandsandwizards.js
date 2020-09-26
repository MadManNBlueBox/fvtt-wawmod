import Actor5e from "../../../systems/dnd5e/module/actor/entity.js";
import { DND5E } from "../../../systems/dnd5e/module/config.js";
import ActorSheet5eCharacter from "../../../systems/dnd5e/module/actor/sheets/character.js";

//Changing out deprecated 5e skills to their Wands & Wizards counterparts1
DND5E.skills["arc"] = "History of Magic";
DND5E.skills["his"] = "Muggle Studies";
DND5E.skills["nat"] = "Herbology";
DND5E.skills["ani"] = "Magical Creatures";
DND5E.skills["ptn"] = "Potion-Making";

//Add potion-making to the character sheet as a skill
const prep = Actor5e.prototype.prepareBaseData;	

function extendActorData() {
	const skl = this.data.data.skills;
	skl["ptn"] = skl["ptn"] || {value: 0, ability: "wis"};
	return prep.call(this);
}
Actor5e.prototype.prepareBaseData = extendActorData;

//Character sheets
class WandsAndWizardsBadgerSheet extends ActorSheet5eCharacter {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~BADGER SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('badger');
	  return options;
	}
  }
  
  class WandsAndWizardsEagleSheet extends ActorSheet5eCharacter {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~EAGLE SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('eagle');
	  return options;
	}
  }
  
  class WandsAndWizardsLionSheet extends ActorSheet5eCharacter {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~LION SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('lion');
	  return options;
	}
  }
  
  class WandsAndWizardsSnakeSheet extends ActorSheet5eCharacter {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~SNAKE SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('snake');
	  return options;
	}
  }

//Registering Wands & Wizards character sheet theme options
	console.log(`Initializing character sheets for Wands & Wizards Module`);
	Actors.registerSheet("dnd5e", WandsAndWizardsBadgerSheet, { 
		types: ["character"],
		makeDefault: false 
	});
	Actors.registerSheet("dnd5e", WandsAndWizardsEagleSheet, { 
		types: ["character"], 
		makeDefault: false 
	});
	Actors.registerSheet("dnd5e", WandsAndWizardsLionSheet, { 
		types: ["character"], 
		makeDefault: false 
	});
	Actors.registerSheet("dnd5e", WandsAndWizardsSnakeSheet, { 
		types: ["character"],
		makeDefault: false 
	});