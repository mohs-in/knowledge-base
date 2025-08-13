---
tags:
  - my-sql
  - sql
---

`SELECT DISTINCT genre from movies_genres;`

In this example the query will give the distinct **_genres_** from the **_movies_genres_** table.

`SELECT DISTINCT first_name, last_name FROM directors ORDER BY first_name LIMIT 20;`

In you run the above query there would be same **_first_name_** displayed you might think even after giving the distinct keyword it’s not working, but you are wrong since here we have multiple columns it takes the combination of both **_first_name_** and **_last_name_** and then select distinct among them.
