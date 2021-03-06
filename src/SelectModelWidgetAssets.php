<?php
declare(strict_types = 1);

namespace pozitronik\widgets;

use yii\web\AssetBundle;

/**
 * Class SelectModelWidgetAssets
 * @package app\components\select_model
 */
class SelectModelWidgetAssets extends AssetBundle {
	/**
	 * @inheritdoc
	 */
	public function init():void {
		$this->sourcePath = __DIR__.'/assets';
		$this->css = ['css/select_model.css'];
		$this->js = [
			'js/common.js',
			'js/select_model.js'
		];
		parent::init();
	}
}