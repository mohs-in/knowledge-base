---
tags:
  - my-sql
  - sql
---

`SELECT name, rankscore, year FROM movies ORDER BY year DESC LIMIT 10;`

This **ORDER BY** keyword is very useful when we want to order the result by some column. For example, we would want to buy a product which has the highest rating. Here in our example, we are listing the movies with their year in **DESC** (descending) order and an important point to note is that the default order is **ASC** (ascending), if you don’t want **ASC**, you should specify **DESC**.

**_Note:_** The output order row may not be same as the one in the table due to query optimizer and internal data-structures/indices.
