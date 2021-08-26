import { catToString } from 'custom/npegl.js'

export default {
    npeglStringify: (values) => catToString(values),
    npeglCQP: (tokens) => "(" + tokens.map(item => `_.e_cat="${item}"`).join(" | ") + ")",
}