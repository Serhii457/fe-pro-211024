let productName = 'Orange'; // !== Milk
switch(productName){
    case 'cat':
        console.log('product cat');
        break;
    case 'milk':
    case 'Milk':
        // if(value === 'milk' && value === 'Milk')
        console.log('product milk');
        break;
    default:
        console.log('Any ifo');
        break;
}