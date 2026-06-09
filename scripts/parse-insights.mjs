import fs from 'fs'

const h = fs.readFileSync('temp-insights.html', 'utf8')
const i = h.indexOf('formId":')
console.log(h.slice(i, i + 800))
