/* Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! 
Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. 
Order your output in descending order by the total number of challenges in which the hacker earned a full score. 
If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id. */

SELECT
    h.hacker_id,
    h.name
FROM
    hackers h
    JOIN submissions s ON s.hacker_id = h.hacker_id
    JOIN challenges c ON c.challenge_id = s.challenge_id
    JOIN difficulty d ON d.difficulty_level = c.difficulty_level
WHERE
    s.score = d.score
GROUP BY
    h.hacker_id,
    h.name
HAVING
    COUNT(DISTINCT c.challenge_id) > 1
ORDER BY
    COUNT(DISTINCT c.challenge_id) DESC,
    h.hacker_id ASC;

