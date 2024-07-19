### 1. pnpm patch antd

```console
╭─root@HP ~/personal/antd-select-copiable ‹master›
╰─# pnpm patch antd
You can now edit the following folder: /tmp/e783e387c49ac2b86aeb04c9235729e8

Once you're done with your changes, run "pnpm patch-commit /tmp/e783e387c49ac2b86aeb04c9235729e8"
```

### 2. open folder and edit code

```console
code /tmp/e783e387c49ac2b86aeb04c9235729e8
```

find `https://github.com/ant-design/ant-design/issues/40421`,  
delete code `userSelect: 'none'`

### 3. pnpm patch-commit antd

```console
pnpm patch-commit /tmp/e783e387c49ac2b86aeb04c9235729e8
```

### 4. pnpm patch rc-select

```console
╭─root@HP ~/personal/antd-select-copiable ‹master●›
╰─# pnpm patch rc-select
You can now edit the following folder: /tmp/e2859d70b36cfa97375a194ae4ea0db0

Once you're done with your changes, run "pnpm patch-commit /tmp/e2859d70b36cfa97375a194ae4ea0db0"
```

### 5. open folder and edit code

```console
code /tmp/e2859d70b36cfa97375a194ae4ea0db0
```

find `if (event.target !== inputRef.current && !inputMouseDown && !( 'combobox' && disabled)) `

replace to `if (event.target !== inputRef.current && !inputMouseDown && !disabled) `

### 6. pnpm patch-commit rc-select

```console
pnpm patch-commit /tmp/e2859d70b36cfa97375a194ae4ea0db0
```

### 7. remove vite cache

```console
rm -rf node_modules/.vite
```

### 8. restart dev server and see if it's successful.
