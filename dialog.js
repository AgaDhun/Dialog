'use strict';


//============Dialog================
var dialog = {
	getDialog:function(){
	//создать объект для данные("слушатель":"сообщение")
	const dialogObject = Object.create(null);
	//запрос файла + загрузка данных файла в объект
	function getJson(url = "dialog.json")
	{
		//запрос файла .json
		fetch(url).then(
			response =>
			{
				//проверка на ответ
				return response.ok ? response.json(): "false";
			}
		).then(
			json =>
			{
				//загрузить в данные в объект
				Object.assign(dialogObject, json);
			}
		);
	};
	getJson();

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
	{	
		//вставляем 
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
		for (let key in dialogObject) {
			if (target.getAttribute("data-dialog") == key) {
				createDialog(target,dialogObject[key],key);
			}
		}
	}//end eventDialog();
	
	//установка слушателя на событие
	if (Object.keys(dialogObject).length == 0) {
		//подождать загрузки файла .json
		setTimeout(function()
		{
			//обработать объект с данными
			for(let handler in dialogObject){
				let listener = document.querySelector("[data-dialog="+handler+"]");
				//установить слушателя
				listener.addEventListener("mouseenter",{handleEvent:eventDialog});
				listener.addEventListener("mouseleave",{handleEvent:deleteDialog});
			}
		},3000);
	} else {
		//обработать объект с данными
		for(let handler in dialogObject){
			let listener = document.querySelector("[data-dialog="+handler+"]");
			//установить слушателя
			listener.addEventListener("mouseenter",{handleEvent:eventDialog});
			listener.addEventListener("mouseleave",{handleEvent:deleteDialog});
		}
	};

	}//end_getDialog
}//end_dialog
/*===============================Dialog-end==================================*/
dialog.getDialog();
