Микро_скрипт: dialog.js
=======================

Поможет вам быстро и легко создавать всплывающее подсказки.

[Демо: dialog](http://portfolio.xn----ftbdevagxcz8j.xn--p1ai/trailer/dialog/)
	
Пользовательская инструкция.
----------------------------
Подключите
	
```html
	<link rel="stylesheet" href="dialog.css">
	<script src="dialog.js"></script>
```

В месте, где нужен вывод подсказки,

вставьте слушателя `data-dialog="слушатель"`

_это будет слушатель **figure**_

ПРИМЕР:
в  **index.html**

```html
	<figure data-dialog="figure">
		<img src="img/name.jpg"/>
		<figcaption>Название</figcaption>
	</figure>'
``` 	
	
в файле **dialog.js**

в объекте `dialog.dialogObject` впишите данные

`dialog.dialogObject={"figure":"Александр Сергеевич Пушкин.Русский поэт, драматург, прозаик."}`

_это будет **"слушатель" : "подсказка"**_

"figure" : "Александр Сергеевич Пушкин.Русский поэт, драматург, прозаик."
	
ПРИМЕР:
в  **dialog.js**
	
```js
	dialog.dialogObject= {
		"figure":"Александр Сергеевич Пушкин.Русский поэт, драматург, прозаик.",
		"github":"Скачать на Github",
		"download":"Скачать исходники"
		};
```` 

Микро_скрипт dialog.js
----------------------
создаёт стилевой класс `class="dialog_слушатель"`

в файле **dialog.css**

добавьте класс `.dialog_слушатель { }`

ПРИМЕР:
в **dialog.css**

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

добавьте класс  `.dialog_слушатель{ }`

и оформите, как требует

общий дизайн вашего сайта.
	
**Всем удачи!!!**
	
