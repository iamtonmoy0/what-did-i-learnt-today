# List

Push/add

```
LPUSH key value [...] this will push the value to the right
RPUSH key value [...] this will push the value to the left

```

POP/remove

```
LPOP key
RPOP key
```

Length of the key

```
LLEN orders:101
```

Search index based result

```
LRANGE orders:101 0 -1
```
