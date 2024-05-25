# Sets

add new elements to set

```
SSET  key member


```

get all members

```
SISMEMBERS key
```

scran

```
SSCAN key
```

intersection

```
(integer) 1
> sadd "hello:10" "englang" "bangladesh"
(integer) 0
> sadd "hello:20" "usa" "bangladesh"
(integer) 2
> sinter "hello:10" "hello:20"
1) "bangladesh"
```
