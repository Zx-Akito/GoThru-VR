import i18n from './i18n';
import serviceLang from './languages';

var vueConfig = new Vue({
	el: '#app',
	i18n,
	delimiters: ['@{', '}'],
	data: {
		currentLocale: i18n.locale,
		message: 'Hello Vue!',
		language:['en','jp','fr','it','es','nl','pl','sk','de','da','sv','pt','ro','ru','zh']
	},
	created: function(){
        let getSavedLocale = localStorage.getItem('language');
        if(getSavedLocale){
        serviceLang.init(getSavedLocale); 
           this.changeLanguage(getSavedLocale);
        }else{
            let detectLocale = window.navigator.language.split('-')[0];
            let findLocale = _.find(this.language,(x)=>{
                detectLocale === x;
            });
            if(!findLocale) detectLocale = 'en';
            this.currentLocale = detectLocale;
            serviceLang.init(detectLocale); 
        }
        
    },
    methods: {
        changeLanguage: function(e){
            let isEmpty = i18n.getLocaleMessage(e).submenu == undefined;
            if(isEmpty){
                i18n.locale = e;
                serviceLang.init(e);
                this.currentLocale = e;
                localStorage.setItem('language',e);
                console.log(i18n.locale);
            }else{
                i18n.locale = e;
                this.currentLocale = e;
            }
        }
    }
});

export default vueConfig;