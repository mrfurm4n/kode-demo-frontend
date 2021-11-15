
## Запуск проекта

    npm start

## Ментальная карта проекта
Весь проект изначально разрабатывался вначале на "листе бумаги". Прикладываю ссылку на ментальную карту ([нажать здесь](https://www.mindmeister.com/ru/2091626160/trainee-test-frontend?fullscreen=1))

## План выполнения + оценка (план / факт)

* Изучить ТЗ + составить майнд-карту -- **60 мин / 40 мин**
* Сделать декомпозицию -- **60 мин / 60 мин**
* Создать и настроить проект -- **120 мин / 80 мин**
* Составить архитектуру компонентов -- **40 мин / 32 мин**
* Вёрстка -- **330 мин / 265 мин**
    * Вёрстка 1.0.0 — Главная (Skeleton)
		* Сверстать поиск -- **60 мин / 60 мин**
		* Сверстать табы -- **30 мин / 30 мин**
		* Сверстать Skeleton-список -- **30 мин / 30 мин**
	* Критическая ошибка
		* Сверстать заглушку -- **15 мин / 30 мин**
	* 2.0.0 — Люди (Полный экран)
		Сверстать превью человека в списке -- **30 мин / 0 мин**
	* 2.0.1 — Фильтр
		* Сверстать окошко -- **10 мин / 15 мин**
		* Сверстать селект -- **20 минут / 20 мин**
	* 2.0.2.Г — Люди (Ошибка поиска)
		* Сверстать заглушку -- **15 мин / 0 мин**
	* 2.0.3.А — Профиль человека (Контакты)
		* Сверстать кнопку назад -- **5 мин / 5 мин**
		* Сверстать шапку -- **30 мин / 30 мин**
		* Сверстать тело профиля -- **25 мин / 15 мин**
	* Тестирование вёрстки
		* Протестировать вёрстку всех экранов -- **15 мин / 5 мин**
		* Протестировать адаптацию вёрстки -- **15 мин / 5 мин**
		* Исправить баги в вёрстке -- **30 мин / 30 мин**
* Функционал -- ** 990 мин / 587 мин**
	* Запуск
		* Загрузить актуальный список сотрудников -- **40 мин / 60 мин**
		* Перед загрузкой показываем экран 1.0.0, Skeleton -- **35 мин / 20 мин**
		* Проверить на ошибки загрузки (соединение или API) и отобразить экран критической ошибки -- **35 мин / 15 мин**
		* Показать Top App Bar и список людей при успехе -- **35 мин / 60 мин**
	* Top App Bar
		* Переключение между вкладками
			* Переключение вкладок -- **40 мин / 35 мин**
			* Фильтрация людей -- **90 мин / 60 мин**
		* Кнопка "Фильтр"
			* Открывается Bottom Sheet с вариантами сортировки списка работников -- **10 мин / 20 мин**
			* Виды сортировки
				* "По алфавиту" (по умолчанию) -- **60 мин / 60 мин**
				* "По дню рождения" -- **60 мин / 180 мин**
			* Сортировка применена
				* Панель закрывается -- **15 мин / 5 мин**
				* Список на главной перезагружается -- **30 мин / 0 мин**
		* Поиск
			* Фильтрация списка на главном экране -- **60 мин / 30 мин**
			* Если ничего не найдено, то показать экран ошибки поиска -- **15 мин / 15 мин**
	* Главная
		* Скроллинг списка работник -- **10 мин / 2 мин**
		* Список обновляется, если... -- **60 мин / 0 мин**
		* Клик на человека
			Открыть экран "Детали" -- **10 мин / 120 мин**
		* Доработка сортировки -- **40 мин / 50 мин**
	* Детали
		* Кнопка назад
			* Возвращает на главный экран -- **10 мин / 5 мин**
			* Аналогично для системной кнопки назад -- **15 мин / 0 мин**
		* Номер телефона
			* Открыть приложение для звонка по номеру -- **15 мин / 0 мин**
* Задача под звёздочкой -- **260 мин / 55 мин**
	* Если устройство отключается от сети
		* Сообщение об ошибке сети, Экран 2.0.0.А — Люди (Ошибка) -- **60 мин / 30 мин**
		* Использование данных, которые загрузились -- **60 мин / 0 мин**
	* Если доступ восстановился
		* Сообщение о загрузке, 2.0.0.А — Люди (Загрузка) -- **60 мин / 20 мин**
		* Список на активной вкладке должен обновиться -- **30 мин / 5 мин**
	* Проверка задачи на соответствие с ТЗ -- **20 мин / 0 мин**
	* Тестирование задачи -- **30 мин / 0 мин**
* Проверка проекта на соответствие с ТЗ -- **40 мин / 10 мин**
* Тестирование проекта -- **40 мин / 10 мин**
* Оптимизация проекта -- **2 часа / 186 мин**

## Итоговое время выполнения
**Планируемое время**
Итого без задачи со звёздочкой 1495 мин / 24,91 ч
Итого с задачей со звёздочкой 1755 мин / 29,25 ч

**Фактическое время**
Итого без задачи со звёздочкой 1270 мин / 21,16 ч
Итого с задачей со звёздочкой 1325 мин / 22 ч

## Что я не сделал?
Как бы я не пытался, я не смог в полном объёме выполнить задачу с сортировкой людей по дню рождения. Конкретно не удалось корректно отображать разделитель для следующего года

У меня разделитель показывается перед каждой карточкой человека, у которого день рождения уже в следующем году. Должен показываться один раз перед первым человеком

Убил на эту задачу больше 2-х часов, до меня так и не дошло решение этой задачи, возвращался к ней порционно 3 дня подряд

## Что бы я ещё сделал?
 - Анимации
 - Защита от атак
 - Redux, redux-saga
 - Воспользоваться код-ревью и внедрить фидбэк
- Оптимизировать ресурсы через мемоизацию, например
- Поработать над стилем кода через внедрение фидбэка
- Облегчить бизнес-компоненты:
	 - Вынести функции-хелперы
	 - Вынести стилевые компоненты