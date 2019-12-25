//配置
let str = 'development';
window.global = str;

let developmentUrl = {
    commonAPi: '/xxx/developmentUrl'
};
let productionUrl = {
    commonAPi: '/xxx/productionUrl'
};

let baseUrl = {};

switch(str){
    case 'development':
        baseUrl = developmentUrl
    break;
    case 'production':
        baseUrl = productionUrl
    break;
}

export default baseUrl;