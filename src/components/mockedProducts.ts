import beata from '/assets/images/beata.jpg'

export interface Product {
    id: number;
    category: string;
    title: string;
    image: string;
    description: string;
    color: string;
    price: number;
}

// FÖRSLAG PÅ PRODUKT TEXT
// Blommar rikligt och är en vacker och lättplacerad dahlia.
// Mycket hållbar och mycket lämplig snittblomma.
// En fantastiskt ståtlig dahlia. 
// En graciös skönhet.
// Utmärkt som snittblomma!
// Stora och välfyllda blommor.
// Läckert rufsig dahlia och ljuvligt tvåfärgad.
// Ljuvliga små bollar.
// Lågväxande dekorativa dahlior, som är på gränsen till boll, är ovanligt. 
// Denna är utmärkt för krukor och lådor.
// Mörkt bladverk.
// Blommor med en något djupare och mörkare ton på undersidan av kronbladen gör att den får lite av en tvåfärgseffekt. 
// En snöstorm är lika rent vit som denna dahlia, bortsett från den rena vitheten är det inte mycket som för tankarna till vintern - tvärtom. Utmärkt till snitt.
// xxx är en bolldahlia med en perfekt form och riklig blomning. Som snittblomma står den sig länge.
// xxx en av de större dahliorna.
// xxx är en dekorativ dvärgdahlia. Lågväxande och lämplig för kruka.

export const products: Product[] = [{ 
    id: 0,
    category: 'boll',
    title: 'Beata',
    image: '/assets/images/boll/beata.jpg',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
    color: 'orange',
    price: 35,
}, {
    id: 1,
    category: 'boll',
    title: 'Bonita',
    image: '/assets/images/boll/bonita.jpg',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Utmärkt som snittblomma!',
    color: 'string',
    price: 35,
}, {
    id: 2,
    category: 'boll',
    title: 'Casy Marilyn',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
    color: 'string',
    price: 35,
}, {
    id: 3,
    category: 'boll',
    title: 'Gipzy Night',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
    color: 'string',
    price: 35,
}, {
    id: 4,
    category: 'boll',
    title: 'Isabella',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Utmärkt som snittblomma! ',
    color: 'string',
    price: 35,
}, {
    id: 5,
    category: 'boll',
    title: 'Jolinda',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Utmärkt som snittblomma! ',
    color: 'string',
    price: 35,
}, {
    id: 6,
    category: 'boll',
    title: 'Jowey Hillson',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
    color: 'string',
    price: 35,
}, {
    id: 7,
    category: 'boll',
    title: 'Low Sunset',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
    color: 'string',
    price: 35,
}, {
    id: 8,
    category: 'boll',
    title: 'Master George',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Utmärkt som snittblomma! ',
    color: 'string',
    price: 35,
}, {
    id: 9,
    category: 'boll',
    title: 'Mirabelle',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
    color: 'string',
    price: 35,
}, {
    id: 10,
    category: 'boll',
    title: 'Seft Silvertop',
    image: 'string',
    description: 'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma.',
    color: 'string',
    price: 35,
}]