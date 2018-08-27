'use strict';
window.onload = function(){
//============Dialog================
var dialog = {
	dialogObject:Object.create(null),
	getDialog:function(){
	//данные("слушатель":"диалог")
	dialog.dialogObject= {
		"h1":"dialog.js поможет вам, быстро и легко создавать всплывающее подсказки.",
		"img1":"Граф Лев Николаевич Толстой.<br>Русский писатель и мыслитель.<br>Один из величайших<br>писателей-романистов мира.",
		"img2":"Александр Сергеевич Пушкин.<br>Русский поэт, драматург, прозаик.<br>Один из самых авторитетных <br>литературных деятелей XIX века.",
		"img3":"Иван Сергеевич Тургенев.<br>Русский писатель-реалист, поэт,<br>публицист, драматург, переводчик.<br>Классик русской литературы",
		"img4":"Антон Павлович Чехов.<br>Русский писатель, прозаик,<br>драматург.<br>Классик мировой литературы.",
		"portfolio":"Dhunga - URL - Portfolio",
		};
	//создать контейнер(<div>) + вставить данные(подсказку,сообщение)
	function createDialog(target, hint, dialogClass)
	{
		let div = document.createElement("div");
		div.id = "dialogBox";
		div.className = "dialog_" + dialogClass;
		div.innerHTML = hint;
		insertDialog(div, target);
	}
	
	//вставить в документ + css(позиция)
	function insertDialog(div, target)
	{	//вставляем 
		document.body.insertBefore(div,null);
		
		//данные(размер + позиция) слушателя
		let communion = document.getElementById("dialogBox");
		
		if (communion) {
			//данные(размер + позиция) диалога
			let amountCommunion = communion.getBoundingClientRect();
			
			if (target.offsetTop > window.innerHeight/2) {
				communion.style.cssText = "position:absolute; top:"+((target.offsetTop - (amountCommunion.bottom - amountCommunion.top)) - 5)+"px;left:"+ target.offsetLeft +"px;";
			}
			if (target.offsetTop < window.innerHeight/2) {
				communion.style.cssText = "position:absolute; top:"+((target.offsetTop + target.offsetHeight) + 5)+"px; left:"+target.offsetLeft+"px;";
			}
			
		}
	}
	
	//удалить_диалог
	function deleteDialog()
	{
		let communion = document.getElementById("dialogBox");
		document.body.removeChild(communion);
	};
	
	//обработчик_события + выбор диалога
	function eventDialog(event)
	{
		this.event = event || window.event;
		let target = event.target || event.srcElement;
		
		for(let key in dialog.dialogObject){
		
			if (target.getAttribute("data-dialog") == key) {
				createDialog(target,dialog.dialogObject[key],key);
			}
		}
	}//end eventDialog();
	
	//установка слушателя на событие
	for(let handler in dialog.dialogObject){
		let listener = document.querySelector("[data-dialog="+handler+"]");
		//установка слушателя
		listener.addEventListener("mouseenter",{handleEvent:eventDialog});
		listener.addEventListener("mouseleave",{handleEvent:deleteDialog});
	}

	}//end_setDialog
}//end_dialog
/*===============================Dialog-end==================================*/
dialog.getDialog();
};