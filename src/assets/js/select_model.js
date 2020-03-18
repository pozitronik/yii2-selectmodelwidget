/**
 * Форматирование элемента списка по умолчанию
 * @param item
 * @returns {*}
 */
function TemplateResult(item) {
	return item.text;
}

/**
 * Форматирование элемента списка при AJAX-запросе
 * @param item
 * @returns {*}
 */
function TemplateResultAJAX(item) {
	return item.text;
}


/**
 * Форматирование при передаче HTML
 * @param markup
 * @returns {*}
 */
function EscapeMarkup(markup) {
	return markup;
}

/**
 * Расширенный поиск
 * @param params -- даныне поиска, params.text - набираемый текст
 * @param data -- объект поиска, data.text - непосредственно текст, data.element - объект списка
 * @returns {null|*}
 */
function MatchCustom(params, data) {
	return null;
}