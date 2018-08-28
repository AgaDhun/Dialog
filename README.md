#Микро_скрипт: dialog.js
	##Поможет вам, быстро и легко создавать всплывающее подсказки.
	[Демо: dialog]
	[Демо: dialog](http://portfolio.xn----ftbdevagxcz8j.xn--p1ai/trailer/dialog/)
###Пользовательская инструкция.
	**Подключите:**
```html
	<link rel="stylesheet" href="dialog.css">
	<script src="dialog.js"></script>
```
	В месте где нужен вывод подсказки 
	вставьте слушателя data-dialog="слушатель"
	
	ПРИМЕР:
	в [ html ]
```html
	<figure data-dialog="figure">
		<img src="img/name.jpg"/>
		<figcaption>Название</figcaption>
	</figure>'
``` 
		( figure - это будет слушатель )
	
	
	в [ dialog.js ] 
	впишите в 
	dialog.dialogObject={"figure":"Александр Сергеевич Пушкин.Русский поэт, драматург, прозаик."}
	
	ПРИМЕР:
	в [ dialog.js ]
```js
	dialog.dialogObject= {
		"figure":"Александр Сергеевич Пушкин.Русский поэт, драматург, прозаик.",
		"github":"Скачать на Github",
		"download":"Скачать исходники"
		};
```` 
	( "слушатель":"подсказка" )
	( "figure":"Александр Сергеевич Пушкин.Русский поэт, драматург, прозаик." 
	
	
	Микро_скрипт [ dialog.js ]
	создаёт класс ( class="dialog_слушатель" )
	
	в стилях [ dialog.css ]
	добавьте класс .dialog_слушатель{}
	
```css
.dialog_figure
{
	padding:1rem; 
	color:hsla(0,0%,100%,1);
	box-shadow:hsla(0,0%,0%,.6) 0 .4rem .4rem;
	background:hsla(240,100%,50%,1);
	z-index:999;
}
```` 
	Или в своих стилях
	добавьте класс .dialog_слушатель{}
	и оформите как требует 
	общий дизайн вашего сайта.
	
	####Всем удачи!!!
