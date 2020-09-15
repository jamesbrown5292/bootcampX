SELECT cohorts.name as cohort_name, sum(completed_at - started_at) as duration
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohort_name
ORDER by duration ASC;