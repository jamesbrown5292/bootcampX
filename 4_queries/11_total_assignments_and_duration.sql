SELECT day, count(day) as number_of_addignments, sum(duration)
FROM assignments
GROUP BY day
ORDER BY day;