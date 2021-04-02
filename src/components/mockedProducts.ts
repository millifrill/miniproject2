import Beata from '../assets/images/boll/beata.jpg';
import Bonita from '../assets/images/boll/bonita.jpg';
import CasyMarilyn from '../assets/images/boll/casyMarilyn.jpg';
import GipzyNight from '../assets/images/boll/gipzyNight.jpg';
import Isabella from '../assets/images/boll/isabella.jpg';
import Jolinda from '../assets/images/boll/jolinda.jpg';
import JoweyHillson from '../assets/images/boll/joweyHillson.jpg';
import LowSunset from '../assets/images/boll/lowSunset.jpg';
import MasterGeorge from '../assets/images/boll/masterGeorge.jpg';
import Mirabelle from '../assets/images/boll/mirabelle.jpg';
import SeftSilvertop from '../assets/images/boll/seftSilvertop.jpg';

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

export const products: Product[] = [
    {
        id: 0,
        category: 'boll',
        title: 'Beata',
        image: Beata,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. Plocka bort färdigblommade blommor så stimuleras fortsatt blomning.',
        color: 'orange',
        price: 40,
    },
    {
        id: 1,
        category: 'boll',
        title: 'Bonita',
        image: Bonita,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Plocka bort färdigblommade blommor så stimuleras fortsatt blomning. Utmärkt som snittblomma!',
        color: 'string',
        price: 35,
    },
    {
        id: 2,
        category: 'boll',
        title: 'Casy Marilyn',
        image: CasyMarilyn,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. Plocka bort färdigblommade blommor så stimuleras fortsatt blomning.',
        color: 'string',
        price: 35,
    },
    {
        id: 3,
        category: 'boll',
        title: 'Gipzy Night',
        image: GipzyNight,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. Plocka bort färdigblommade blommor så stimuleras fortsatt blomning.',
        color: 'string',
        price: 35,
    },
    {
        id: 4,
        category: 'boll',
        title: 'Isabella',
        image: Isabella,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Utmärkt som snittblomma! ',
        color: 'string',
        price: 35,
    },
    {
        id: 5,
        category: 'boll',
        title: 'Jolinda',
        image: Jolinda,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Utmärkt som snittblomma! ',
        color: 'string',
        price: 35,
    },
    {
        id: 6,
        category: 'boll',
        title: 'Jowey Hillson',
        image: JoweyHillson,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
        color: 'string',
        price: 35,
    },
    {
        id: 7,
        category: 'boll',
        title: 'Low Sunset',
        image: LowSunset,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
        color: 'string',
        price: 35,
    },
    {
        id: 8,
        category: 'boll',
        title: 'Master George',
        image: MasterGeorge,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Utmärkt som snittblomma! ',
        color: 'string',
        price: 35,
    },
    {
        id: 9,
        category: 'boll',
        title: 'Mirabelle',
        image: Mirabelle,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma. ',
        color: 'string',
        price: 35,
    },
    {
        id: 10,
        category: 'boll',
        title: 'Seft Silvertop',
        image: SeftSilvertop,
        description:
            'Blommar rikligt och är en vacker och lättplacerad dahlia. Mycket hållbar och mycket lämplig snittblomma.',
        color: 'string',
        price: 35,
    },
];
