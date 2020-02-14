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
 * Форматирование <не помню для чего>
 * @param markup
 * @returns {*}
 */
function EscapeMarkup(markup) {
	return markup;
}
