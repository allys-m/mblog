'use strict';

let myMain = {};

const auto = $(function(){

	var link = {
		video      : $('#vid'),
		contact    : $('#contact'),
		galerie    : $('#galerie'),
		ideeDev    : $('#ideeDev'),
		formation  : $('#formation'),
		aPropos    : $('#aPropos'),
		Astrategie : $('#Astrategie'),
		pInfoImg   : $('.cImg')
	};
	var inf = {
		inf0: $('#fieldContact'), inf1: $('#infO1'),
		inf2: $('#infO2'), inf3: $('#infO3'),
		inf4: $('#infO4')
	};
	var infoList = [
	inf.inf0, inf.inf1, inf.inf2, inf.inf3, inf.inf4
	];

	for (var i=0; i<infoList.length; i++) {
		infoList[i].hide(1500);
	}
    
// CONTACT DESIGN MODIFICATION 
	link.contact.on('click', function(){

		link.video.slideUp(1500, function(){
			for (var i=0; i<infoList.length; i++) {
				infoList[i].hide(1000);
			}

			infoList[0].show(1000, () => {
				link.Astrategie.on('mouseover', (test) => {
					//link.pInfoImg.hide();
					test = $('#Astrategie .lab0').css({
						'color': 'red'
					});
				});
				
				link.Astrategie.on('mouseout', (test) => {
					//link.pInfoImg.hide();
					test = $('#Astrategie .lab0').css({
						'color': 'white'
					});
				});
				
				infoList[0].on('click', ()=>{
					infoList[0].hide(1000, ()=>{
						link.video.slideDown(1500);
					});
				});
			});
		});
	});
	
// GALERIE DESIGN MODIFICATION 	
	link.galerie.on('click', function(){
		link.video.slideUp(1500, function(test){

			for (var i=0; i<infoList.length; i++) {
				infoList[i].hide(1500);
			}

			infoList[1].show(1000, () => {
				
				infoList[1].on('click', ()=>{
					infoList[1].hide(1000, ()=>{
						link.video.slideDown(1500);
					});
				});
			});
		});
    });

// IDEEDEV DESIGN MODIFICATION 
	link.ideeDev.on('click', function(){
		link.video.slideUp(1500, function(test){
			for (var i=0; i<infoList.length; i++) {
				infoList[i].hide(1500);
			}

			infoList[2].show(1000, () => {
				
				infoList[2].on('click', ()=>{
					infoList[2].hide(1000, ()=>{
						link.video.slideDown(1500);
					});
				});
			});
		});
	});

// FORMATION DESIGN MODIFICATION 	
	link.formation.on('click', function(){
		link.video.slideUp(1500, function(test){

			for (var i=0; i<infoList.length; i++) {
				infoList[i].hide(1500);
			}

			infoList[3].show(1000, () => {
				
				infoList[3].on('click', ()=>{
					infoList[3].hide(1000, ()=>{
						link.video.slideDown(1500);
					});
				});
			});
		});
    });

// APROPOS DESIGN MODIFICATION 
	link.aPropos.on('click', function(){
		link.video.slideUp(1500, function(test){
			for (var i=0; i<infoList.length; i++) {
				infoList[i].hide(1500);
			}

			infoList[4].show(1000, () => {
				
				infoList[4].on('click', ()=>{
					infoList[4].hide(1000, ()=>{
						link.video.slideDown(1500);
					});
				});
			});
		});
	});

});
//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
myMain.start = (() => {

	var mTime = new Date();
	var time = {
		jourDay: mTime.getDate(),
		moisDay: mTime.getMonth(),
		hours  : mTime.getHours(),
		minute : mTime.getMinutes(),
		second : mTime.getSeconds(),
		utcDat : mTime.getUTCDay()
	};

	var heureExat = time.hours+':'+time.minute+':'+time.second;

	alert("Heures de la connection : [ "+heureExat+" ]");

})();
