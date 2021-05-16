const items = [
    {name: 'Echantillon de vigne d\'orin', recipe: null},
    {name: 'Graine de vigne d\'orin', recipe: null},
    {name: 'Qwartz', recipe: null},
    {name: 'Cuivre', recipe: null},
    {name: 'Argent', recipe: null},
    {name: 'Titane', recipe: null},
    {name: 'Or', recipe: null},
    {name: 'Soufre cristallin', recipe: null},
    {name: 'Plomb', recipe: null},
    {name: 'Diamant', recipe: null},
    {name: 'Lithium', recipe: null},
    {name: 'Rubis', recipe: null},
    {name: 'Nickel', recipe: null},
    {name: 'Disthène', recipe: null},
    {name: 'Spiralière coupée', recipe: null},
    {name: 'Plante à rubans', recipe: null},
    {name: 'Pochon', recipe: null},
    {name: 'Echantillon de corail plat', recipe: null},
    {
        name: 'Maille de fibre',
        recipe: [
            {name: 'Echantillon de vigne d\'orin', amount: 2}
        ]
    },{
        name: 'Caoutchouc en silicone',
        recipe: [
            {name: 'Graine de vigne d\'orin', amount: 1}
        ]
    },{
        name: 'Verre',
        recipe: [
            {name: 'Qwartz', amount: 2}
        ]
    },{
        name: 'Fil de cuivre',
        recipe: [
            {name: 'Cuivre', amount: 2}
        ]
    },{
        name: 'Pile',
        recipe: [
            {name: 'Cuivre', amount: 1},
            {name: 'Plante à rubans', amount: 2}
        ]
    },{
        name: 'Kit de cablage',
        recipe: [
            {name: 'Argent', amount: 2}
        ]
    },{
        name: 'Réservoir d\'O2 standard',
        recipe: [
            {name: 'Titane', amount: 2},
            {name: 'Maille de fibre', amount: 1}
        ]
    },{
        name: 'Palmes',
        recipe: [
            {name: 'Caoutchouc en silicone', amount: 2}
        ]
    },{
        name: 'Kit de soin',
        recipe: [
            {name: 'Maille de fibre', amount: 1}
        ]
    },{
        name: 'Boussole',
        recipe: [
            {name: 'Fil de cuivre', amount: 1},
            {name: 'Kit de cablage', amount: 1}
        ]
    },{
        name: 'Scanner',
        recipe: [
            {name: 'Pile', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Lampe de poche',
        recipe: [
            {name: 'Pile', amount: 1},
            {name: 'Verre', amount: 1}
        ]
    },{
        name: 'Couteau de survie',
        recipe: [
            {name: 'Caoutchouc en silicone', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Fusée éclairante',
        recipe: [
            {name: 'Soufre cristallin', amount: 1}
        ]
    },{
        name: 'Casier étanche',
        recipe: [
            {name: 'Titane', amount: 4}
        ]
    },{
        name: 'Eau filtrée',
        recipe: [
            {name: 'Pochon', amount: 1}
        ]
    },{
        name: 'Poche d\'aire',
        recipe: [
            {name: 'Pochon', amount: 1},
            {name: 'Caoutchouc en silicone', amount: 1}
        ]
    },{
        name: 'Tuyau',
        recipe: [
            {name: 'Titane', amount: 2}
        ]
    },{
        name: 'Pompe à air flottante',
        recipe: [
            {name: 'Titane', amount: 2}
        ]
    },{
        name: 'Lubrifiant',
        recipe: [
            {name: 'Graine de vigne d\'orin', amount: 1}
        ]
    },{
        name: 'Circuit intégré',
        recipe: [
            {name: 'Echantillon de corail plat', amount: 2},
            {name: 'Or', amount: 1},
            {name: 'Fil de cuivre', amount: 1}
        ]
    },{
        name: 'Outil de réparation',
        recipe: [
            {name: 'Caoutchouc en silicone', amount: 1},
            {name: 'Soufre cristallin', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Seaglide',
        recipe: [
            {name: 'Pile', amount: 1},
            {name: 'Lubrifiant', amount: 1},
            {name: 'Fil de cuivre', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Thermos à café',
        recipe: [
            {name: 'Verre', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Bâton lumineux',
        recipe: [
            {name: 'Pile', amount: 1},
            {name: 'Verre', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Détecteur de minéraux',
        recipe: [
            {name: 'Pile', amount: 1},
            {name: 'Fil de cuivre', amount: 1},
            {name: 'Caoutchouc en silicone', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Balise',
        recipe: [
            {name: 'Cuivre', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Projecteur industriel',
        recipe: [
            {name: 'Verre', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Distributeur automatique de café',
        recipe: [
            {name: 'Titane', amount: 2}
        ]
    },{
        name: 'Paillasse',
        recipe: [
            {name: 'Titane', amount: 2}
        ]
    },{
        name: 'Bureau',
        recipe: [
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Poubelle',
        recipe: [
            {name: 'Titane', amount: 2}
        ]
    },{
        name: 'Lingot de titane',
        recipe: [
            {name: 'Titane', amount: 5}
        ]
    },{
        name: 'Batterie',
        recipe: [
            {name: 'Pile', amount: 2},
            {name: 'Caoutchouc en silicone', amount: 1}
        ]
    },{
        name: 'Baie à véhicule mobile',
        recipe: [
            {name: 'Lingot de titane', amount: 1},
            {name: 'Circuit intégré', amount: 1},
            {name: 'Lubrifiant', amount: 1}
        ]
    },{
        name: 'Piège à gravité',
        recipe: [
            {name: 'Pile', amount: 1},
            {name: 'Cuivre', amount: 1},
            {name: 'Titane', amount: 1}
        ]
    },{
        name: 'Verre émaillé',
        recipe: [
            {name: 'Verre', amount: 1},
            {name: 'Plomb', amount: 1},
            {name: 'Diamant', amount: 1}
        ]
    },{
        name: 'Lingot de plastacier',
        recipe: [
            {name: 'Lingot de titane', amount: 1},
            {name: 'Lithium', amount: 2}
        ]
    },{
        name: 'Fibres synthétiques',
        recipe: [
            {name: 'Rubis', amount: 1},
            {name: 'Spiralière coupée', amount: 1}
        ]
    },{
        name: 'Kit de cablage avancé',
        recipe: [
            {name: 'Kit de cablage', amount: 1},
            {name: 'Circuit intégré', amount: 1}
        ]
    },{
        name: 'Aquatracteur',
        recipe: [
            {name: 'Lingot de titane', amount: 1},
            {name: 'Kit de cablage avancé', amount: 1},
            {name: 'Verre', amount: 2},
            {name: 'Plomb', amount: 3},
            {name: 'Batterie', amount: 1}
        ]
    },{
        name: 'Aquatracteur MK1',
        recipe: [
            {name: 'Lingot de plastacier', amount: 1},
            {name: 'Verre émaillé', amount: 2}
        ]
    },{
        name: 'Aquatracteur MK2',
        recipe: [
            {name: 'Rubis', amount: 1},
            {name: 'Verre émaillé', amount: 1},
            {name: 'Fibres synthétiques', amount: 1},
            {name: 'Aquatracteur MK1', amount: 1}
        ]
    },{
        name: 'Aquatracteur MK3',
        recipe: [
            {name: 'Nickel', amount: 3},
            {name: 'Disthène', amount: 2},
            {name: 'Lingot de plastacier', amount: 1},
            {name: 'Aquatracteur MK2', amount: 1}
        ]
    }
]
