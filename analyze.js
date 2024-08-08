//Import the target module
const moduleObj = require('moment');//wordwrap,color,resolve,dateformat,vue

//Get the signatures(paramaters) of the module
function Get_Signature(func) {
    if (func!=null){
        const funcString = func.toString();
        const signature =
            funcString.substring(funcString.indexOf('('),
                funcString.indexOf(')') + 1);
        return signature;}

}
//Get the property_names of the module
const Property_Names = Object.getOwnPropertyNames(moduleObj);
//Define a object that save the result
const moduleInterface = {};

//Get each property and it's type from the moduleObj
// and get the signature by executing Get_Signature function
Property_Names.forEach(propertyName => {
    const property = moduleObj[propertyName];

    moduleInterface[propertyName] = {
        name: propertyName,
        signature: Get_Signature(property),
        type:typeof property
    };
});

//Print the result to the terminal
console.log(moduleInterface);
console.log('Run time:'+performance.now()+'ms')