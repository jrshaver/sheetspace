const mongoose = require('mongoose');

let characterSchema = mongoose.Schema({
    info: {
        name: String,
        class: String,
        race: String,
        level: Number,
        maxHp: Number,
        currentHp: Number,
        ac: Number,
        speed: Number
    },
    stats: [{
        name: String,
        value: Number,
        modifier: Number
        },
        {
        name: String,
        value: Number,
        modifier: Number
        },
        {
        name: String,
        value: Number,
        modifier: Number
        },
        {
        name: String,
        value: Number,
        modifier: Number
        },
        {
        name: String,
        value: Number,
        modifier: Number
        },
        {
        name: String,
        value: Number,
        modifier: Number
        }
    ],
    proficiencies: [String],
    abilities: [{
        name: String,
        description: String
    }],
    knowledge: [String],
    cantrips: [{
        name: String,
        castTime: String,
        range: String,
        components: String,
        duration: String,
        category: String,
        description: String
    }],
    spells: [{
        name: String,
        castTime: String,
        range: String,
        components: String,
        duration: String,
        category: String,
        description: String
    }],
    inventory: [{
        name: String,
        description: String,
        quantity: Number
    }],
    companions: [{
        info: {
            name: String,
            type: String,
            ac: Number,
            hp: Number,
            speed: Number
        },
        stats: [
            {
            name: String,
            value: Number,
            modifier: Number
            },
            {
            name: String,
            value: Number,
            modifier: Number
            },
            {
            name: String,
            value: Number,
            modifier: Number
            },
            {
            name: String,
            value: Number,
            modifier: Number
            },
            {
            name: String,
            value: Number,
            modifier: Number
            },
            {
            name: String,
            value: Number,
            modifier: Number
            }
        ],
        abilities: [
            {
                name: String,
                description: String
            },
            {
                name: String,
                description: String
            },
            {
                name: String,
                description: String
            }
        ]
    }],
    notes: String
});

let Character = module.exports = mongoose.model('Character', characterSchema);