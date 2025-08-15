---
tags:
  - my-sql
  - sql
---

`SELECT name, rankscore FROM movies LIMIT 20;`

When you want to limit the result to a specific limit then we should use the **LIMIT** keyword in the query, in the above example the result will just have 20 records.

`SELECT name, rankscore FROM movies LIMIT 20 OFFSET 20;`

When I say **LIMIT 20 OFFSET 20**. This means this will give the specified records, in our case we gave **LIMIT 20**, so 20 records are displayed and **OFFSET 20** means that it will ignore the 20 records or in other words it offsets the first 20 records and then gives us the next 20 records which are after those 20 records.

_Real World Analogy:_ When we query something and the records are huge, then we would want to display the data in terms of pages, like page 1 will have 20 records page 2 – 20 records and so on. This is one of the real-world analogies for this limit and offset.
