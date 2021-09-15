'use strict';


//===--- Dialog ---===
var dialog = {
    // #url файл .json с текстовым набором подсказок
	getDialog:function(url = "dialog.json")
	{
		// объект для данных("слушатель":"сообщение")
		const dialogObject = Object.create(null);
		
		// создать_диалог
		// создать контейнер(<div>) + вставить данные(подсказку,сообщение)
		function createDialog(target, data, events)
		{
            // данные объекта [геометрия]
            let data_target = target.getBoundingClientRect();
            // создать контейнер для подсказки
			let div = document.createElement("div");
			div.id = "dialogBox";
			div.innerHTML = data;
			// вставляем 
			target.insertBefore(div,null);
			insertDialog(data_target, events);
		};
		// end createDialog()
		
		// удалить_диалог
		function deleteDialog(event)
		{
			this.event = event || window.event;
			let target = event.target || event.srcElement;
			let prompts = document.getElementById("dialogBox");
			// удалить
			target.removeChild(prompts);
		};
		// end deleteDialog()
		
		// вставить в документ + css(позиция)
		function insertDialog(data_target, events)
		{
			// экран || окно
            let win_w = window.innerWidth;
            let win_h = window.innerHeight;
			// данные(размер + позиция)
            // событие данные
            let e_cX = events.clientX;
            let e_pY = events.pageY;
            // цель данные
            let t_t = data_target.top;
            // подсказка
			let prompts = document.getElementById("dialogBox");
            // поверка
			if (prompts) {
				// подсказка данные
				let data_prompts = prompts.getBoundingClientRect();
                let p_w = data_prompts.width;
                let p_h = data_prompts.height;
                let p_left = data_prompts.left;
                // предварительно размер+позиция
				let position = "z-index:999;opacity:.9;position:absolute;";
                // вертикаль сверху
                if (t_t < win_h/2) {
                    prompts.style.cssText = position+"top:"+(e_pY+20)+"px;left:"+(e_cX+20)+"px;";
                    // переполнение слева
                    if (p_left < 0) {
                        prompts.style.cssText = position+"top:"+(e_pY+20)+"px;left:"+(win_w/2-p_w)+"px;";
                    }
                    // переполнение справа
                    if (e_cX + p_w > win_w) {
                        prompts.style.cssText = position+"top:"+(e_pY+20)+"px;left:"+(e_cX-(((e_cX+p_w)-win_w)+20))+"px;";
                    }
                }
                // вертикаль снизу
                if (t_t > win_h/2) {
                    prompts.style.cssText = position+"top:"+((e_pY-p_h)-20)+"px;left:"+(e_cX+20)+"px;";
                    // переполнение слева
                    if (p_left < 0) {
                        prompts.style.cssText = position+"top:"+((e_pY-p_h)-20)+"px;left:"+(win_w/2-p_w)+"px;";
                    }
                    // переполнение справа
                    if (e_cX + p_w > win_w) {
                        prompts.style.cssText = position+"top:"+((e_pY-p_h)-20)+"px;left:"+(e_cX-(((e_cX+p_w)-win_w)+20))+"px;";
                    }
                } 
			}
		};
		// end insertDialog()
		
		// обработчик_события + выбор диалога
		function eventDialog(event)
		{
			let events = event || window.event;
			let target = events.target || events.srcElement;
			
			for (let key in dialogObject) {
				if (target.getAttribute("data-dialog") == key) {
					createDialog(target, dialogObject[key], events);
				}
			}
		};
		// end eventDialog();
		
		// запрос файла + загрузка данных из файла в объект
		// проверка загрузки + установка слушателя
		function getJson(url)
		{
			// запрос файла .json
			fetch(url).then(
				response =>
				{
					// проверка на ответ
					return response.ok ? response.json(): "false";
				}
			).then(
				json =>
				{
					// загрузить в данные в объект
					Object.assign(dialogObject, json);
					
					// проверка о загружены ли данные
					if (Object.keys(dialogObject).length) {
						// обработка данных
						for (let handler in dialogObject) {
							let listener = document.querySelector("[data-dialog="+handler+"]");
							// установить слушателя
							listener.addEventListener("mouseenter", {handleEvent:eventDialog});
							listener.addEventListener("mouseleave", {handleEvent:deleteDialog});
						}
					}
				}
			);
		};
		// end getJson();
		
		// запуск загрузки данных и установки слушателя на событие
		getJson(url);
		// end getJson()
		
	}
	// end_getDialog
}
// end_dialog
/*===--- Dialog-end ---===*/

// start
dialog.getDialog();
