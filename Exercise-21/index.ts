/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/


const bouquets: Array<typeof bouquet> = [];

let bouquet =
{
    name: 'Redstire',
    description: 'Mixed red roses with silky ribbons.',
    price: 1460 ,
    currency: 'USD'
    
    }


    let bouquet1 =
    {
    name: 'Pursiabola',
    description:'Classic touch of White and Red Roses with velvit & silky ribbons.',
    price : 1240,
    currency : 'USD'
}


let bouquet2 =
{
    name: 'Black Beauty',
    description: 'Sylish arrangement of Lilly and Black ResizeObserver.',
    price: 2460 ,
    currency: 'USD'
    
    }
    

    let bouquet3 =
        {
        name: "Freshness", 
        description: "Nice display of red roses", 
        price:1000, 
        currency: 'USD'
    }

    let bouquet4 =
    {
        name: 'Farhat',
        description: 'Beautiful display of fully blossom Red Rose.',
        price: 1214 ,
        currency: 'USD'

    }


   bouquets.push(bouquet, bouquet1, bouquet2, bouquet3, bouquet4);
    
function displayBouquets(bouquets: Array<typeof bouquet>)
{
    for (let i of bouquets) {

        console.log(`
        title: ${i.name}
        description: ${i.description}
        price: ${i.price}
        currency: ${i.currency}
        ________________\n`);
    }
}
displayBouquets(bouquets);