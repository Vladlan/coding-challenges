SELECT
    CASE
        WHEN Students.Marks < 70 THEN "NULL"
        ELSE Students.Name
    END as SName,
    CASE
        WHEN Students.Marks = 100 then 10
        ELSE CEIL((Students.Marks + 0.1) / 10)
    END as grade,
    Students.Marks
FROM
    Students
ORDER BY
    grade DESC,
    Students.Name;