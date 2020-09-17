const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`
const cohortName = process.argv[2];


const prom = pool.query(queryString, [cohortName]).then(res => {
  return res.rows;
}).catch(err => console.error(err.stack));

prom.then(function (data) {data.forEach( (item) => {console.log('item', item.cohort)})});