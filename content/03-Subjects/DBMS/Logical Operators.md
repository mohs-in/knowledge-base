---
tags:
  - sql
  - my-sql
---

There are many logical operators such as **AND**, **OR**, **NOT**, **ALL** , **ANY**, **BETWEEN**, **EXISTS**, **IN**, **LIKE**, **SOME**.

Now, let’s look at a few examples

### AND

`SELECT name, year, rankscore FROM movies WHERE rankscore > 9 AND year > 2000;`

When you use **AND** it means that both the conditions mentioned should be true for each record. In the example above we are filtering the movies which are released after 2000 and have rating more than 9.

### NOT

`SELECT name, year, rankscore FROM movies WHERE NOT year <= 2000 LIMIT 20;`

When **NOT** keyword is used it will just give the result opposite to the condition mentioned. In the example we are filtering the movies which are released after 2000 and limiting them to 20 records.

### OR

`SELECT name, year, rankscore FROM movies WHERE year > 2007 OR rankscore > 9.5;`

The **OR** keyword is used when you want either of the conditions mentioned to be true. In the above example, we will get the movies which are recently released, or the rating is more than 9.5

> [!NOTE] Note
> ALL and ANY are discussed in the Topic Sub Queries

### BETWEEN
