angular.module('userApp',['appRoutes', 'emailController', 'userControllers','userServices', 'ngAnimate', 'maincontroller', 'authServices','managementController','chapterController','chapterServices', 'customerController','customerServices',
	'invoiceController', 'invoiceServices', 'configServices','configController', 'glaccountController','glaccountServices','itemController','itemServices',
	'paymentController', 'journalentryController', 'journalentryServices', 'postingperiodController','postingperiodServices', 
	,'homeController', 'ngRoute'])
.config(function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptors');
});