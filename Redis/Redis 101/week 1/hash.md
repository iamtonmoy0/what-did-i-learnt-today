# Hashes

set multiple value

```
hset event:travel capacity 1002 location berlin ticket gold
```

get single value

```
hexists event:travel capacity
```

incriment value

```
hincrby  event:travel  available:ticket -10
```
