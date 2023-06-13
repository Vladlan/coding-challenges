SELECT
    N,
    CASE
        WHEN P IS NULL THEN 'Root'
        WHEN N IN (
            SELECT
                P
            FROM
                BST
        ) THEN 'Inner'
        ELSE 'Leaf'
    END
FROM
    BST
ORDER BY
    N;

SELECT
    Students.Name CASE
        WHEN CEIL(Students.Marks / 10) < 8 THEN null
        ELSE Students.Name
    END,
    CEIL(Students.Marks / 10) as grade,
    Students.Marks
FROM
    Students
ORDER BY
    grade DESC,
    Students.Name;