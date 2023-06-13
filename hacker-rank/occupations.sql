SET @d := 0, @p := 0, @s := 0, @a := 0;

SELECT MIN(Doctor), MIN(Professor), MIN(Singer), MIN(Actor)
FROM (
  SELECT 
    CASE 
      WHEN Occupation = 'Doctor' THEN (@d := @d + 1)
      WHEN Occupation = 'Professor' THEN (@p := @p + 1)
      WHEN Occupation = 'Singer' THEN (@s := @s + 1)
      WHEN Occupation = 'Actor' THEN (@a := @a + 1) 
    END AS RowNumber,
    CASE WHEN Occupation = 'Doctor' THEN Name END AS Doctor,
    CASE WHEN Occupation = 'Professor' THEN Name END AS Professor,
    CASE WHEN Occupation = 'Singer' THEN Name END AS Singer,
    CASE WHEN Occupation = 'Actor' THEN Name END AS Actor
  FROM OCCUPATIONS
  ORDER BY Name
) AS temp
GROUP BY RowNumber;
