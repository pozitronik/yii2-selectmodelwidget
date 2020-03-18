<?php
declare(strict_types = 1);

/**
 * @var View $this
 * @var ActiveRecord $model
 * @var array $data
 * @var int $data_mode
 * @var bool $multiple
 * @var string $postUrl
 * @var null|string $attribute
 * @var string $ajax_search_url
 * @var array $pluginOptions
 * @var array $options
 */


use kartik\select2\Select2;
use yii\db\ActiveRecord;
use yii\helpers\Html;
use yii\web\View;
use yii\widgets\ActiveForm;

?>


<?php $form = ActiveForm::begin(['action' => $postUrl]); ?>

<?= Select2::widget([
	'addon' => [
		'append' => [
			'content' => Html::submitButton("<i class='fa fa-plus'></i>", ['class' => 'btn btn-primary', 'disabled' => 'disabled']),
			'asButton' => true
		]
	],
	'model' => $model,
	'attribute' => $attribute,
	'data' => $data,
	'options' => $options,
	'pluginOptions' => $pluginOptions,
	'pluginEvents' => [
		"change.select2" => "function(e) {submit_toggle(e)}"
	]
])

?>
<?php ActiveForm::end(); ?>