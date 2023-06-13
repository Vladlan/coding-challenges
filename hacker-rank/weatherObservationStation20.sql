/* A median is defined as a number separating the higher half of a data set from the lower half. 
 Query the median of the Northern Latitudes (LAT_N) from STATION and round your answer to  decimal places. */
SELECT
    ROUND(t.LAT_N, 4)
FROM
    (
        SELECT
            LAT_N,
            ROW_NUMBER() OVER (
                ORDER BY
                    LAT_N
            ) AS RowNum,
            COUNT(*) OVER () AS TotalRows
        FROM
            STATION
    ) AS t
WHERE
    t.RowNum IN ((t.TotalRows + 1) / 2, (t.TotalRows + 2) / 2);