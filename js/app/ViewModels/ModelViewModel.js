var ModelViewModel = function(model, indexViewModel) {
	var self = this;
	
	self.name = model.name;
	self.faction = model.faction;
	
	self.characteristics = ko.computed(function() {
		return model.characteristicList.join(', ');
	});
	
	self.cost = model.cost;
	self.cache = model.cache;
	
	self.addToCrew = function() {
		indexViewModel.addToCrew(model);
	};
}