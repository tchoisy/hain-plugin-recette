'use strict';


const got = require('got');

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;
    const toast = pluginContext.toast;

    

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }

        // var url ="http://m.marmiton.org/webservices/json.svc/GetRecipeSearch?SiteId=1&KeyWord="+query_trim+"&SearchType=0&ItemsPerPage=10&StartIndex=1";
        // got(url)
        // .then(response => {
        //     var result  = response.body;
        //     var data = JSON.parse(result);
        //     toast.enqueue(data.items.length, 2500);
        // })
        // .catch(error => {
        //     toast.enqueue("An error has occurred", 2500);
        //     toast.enqueue(error.response.body, 2500);
        // });
        res.add({
            id: queryParse,
            payload: 'recette',
            title: 'recette'),
            desc: 'recette',
            icon: "#fa fa-language",
        });
        
    }

    function execute(id, payload) {
        
        if (payload == 'recette') {
    
        }else{
            return;
        }
    }

   
    return {search, execute};
};