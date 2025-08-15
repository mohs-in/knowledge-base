---
tags:
  - sql
  - my-sql
---

`SELECT name, rankscore, year FROM movies WHERE rankscore > 9;`

This will give you the **_name_**, **_rankscore_**, **_year_** of the movies whose **_rankscore_** is more than 9. Very useful when you want to filter out the movies or in let’s say you want to buy a T-shirt from Amazon in the categories you would be required to select the T-shirt category.

`SELECT name, rankscore, year FROM movies WHERE rankscore > 9 ORDER BY year DESC LIMIT 20;`

 We can also combine the keyword as shown, if we run the above query, it’ll give us the first 20 movies whose rating is more than 9 and sorted by recent.

Condition options: TRUE, FALSE, NULL | The condition can be TRUE, FALSE or NULL

What comparisons can be made?

Well, to name a few (=, <> or !=, >, >=, <, <=)

**Few more examples:**

`SELECT * FROM movies_genres WHERE genre = ‘Comedy’;`

`SELECT * FROM movies_genres WHERE genre <> ‘Horror’;`

NULL --> in SQL is a special keyword, when we have this, it means it doesn’t-exist or unknown or missing.

`SELECT name, year, rankscore FROM movies WHERE rankscore = NULL;`

When we run this query, even though after having so many records where rankscore is NULL we would get result as Empty Set. This is because “=” symbol doesn’t work with NULL.

When you want to get the records NULL you should use something like the below query

`SELECT name, year, rankscore FROM movies WHERE rankscore IS NULL LIMIT 20;`

`SELECT name, year, rankscore FROM movies WHERE rankscore IS NOT NULL LIMIT 20;`
