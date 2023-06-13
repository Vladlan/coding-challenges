SELECT CONCAT(Name, '(', SUBSTR(Occupation, 1, 1), ')') AS ConcatenatedName
FROM OCCUPATIONS
ORDER BY Name;

SELECT CONCAT('There are a total of ', COUNT(Name), ' ', LOWER(Occupation), 's.') AS OccupationSummary
FROM Occupations
GROUP BY Occupation
ORDER BY COUNT(Name), Occupation;