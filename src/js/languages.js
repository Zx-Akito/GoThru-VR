import i18n from './i18n';

// ======================== //
// Languages Configuration
// ======================== //
const serviceLang = {
    updateLocale: (e,obj)=>{
        let data = _.merge(i18n.getLocaleMessage(e),obj);
        i18n.setLocaleMessage(e, data);
        console.log(JSON.parse(JSON.stringify(data)));
    },
    init: (e) =>{
        return new Promise(function(resolve, reject){
            axios.get(`${window.location.origin}/assets/i18n/${e}/home.json`).then(res =>{
                console.log(res);
                serviceLang.updateLocale(e,res.data);
                resolve(res);      
            }).catch(err =>{
                console.log(err);
                reject(err);
            });
        });
    }
};
export default serviceLang;