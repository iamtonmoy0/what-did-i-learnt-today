### MongoDB Aggregation Framework

```
[
	$match: { "age" : { $gt : 18 } },
]
```

### Grouping

This is find the different types of documents in a collection. It groups by `type` field and returns count of each type

```
[
  {
    $group: {
      _id:"$color",

    }
  }
]
```

```
[
  {
    $group: {
      _id: "$color",
      count:{
        $sum:1
      }

    }
  }
]
```

```
[
  {
    $group: {
      _id: "$color",
      count:{
        $sum:1
      }

    }
  },
  {
    $sort: {
      count: -1
    }
  },
  {
    $limit: 2
  }
]
```
Find out the average
```
[
  {
    $group: {
      _id: null,
      average:{
      $avg: "$price"
      }
    }
  }

]
```
### Group sum

```

```
