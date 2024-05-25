# keys

create new customar with key and get the data with key

```
set customer:1000 fred

get customer:1000
```

### scan

get all customar with the id started with 1

```
keys customer:1*
```

delete or unlink the data

```
del customer:1000
unlink customer:1000

```

if wanna check is there any data exist with this key

```
exists customar:1000
```

set key and also check same key not exist in db

```
set inventory:12345 1000 NX
```

this will create a new key and value but if is there any data exist with this name then it will rewrite it

```
set inventory:12345 1000 XX
```

# Key Expiration

PX=Milisecond
EX=Second

```
set hold-seat row:a:seat:4 PX 50000
set hold-seat row:a:seat:4 PX 50
```

increment the expiry time

```
pexpire  hold-seat 1
```

Check the remaining time

```
for second

ttl hold-seat

for milisecond

pttl hold-seat
```
