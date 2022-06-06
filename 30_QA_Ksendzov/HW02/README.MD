### Termial. HW_2

#### 1. Сделать папку dir_1

`mkdir dir1`

#### 2. Зайти в папку dir_1

`cd dir1`

#### 3. Создать папку inner_dir_1

`mkdir inner_dir_1`

#### 4. Посмотреть где ты находишься

`pwd`

#### 5. Находясь в папке dir_1 создать пустой текстовый файл tf_1.txt

`touch tf_1.txt`

#### 6. Находясь в папке dir_1 через команду cat создать текстовый файл tf_2.txt со следующими строками:
- the first 1
- the second 2
- the third 3

```
cat > tf_2.txt
the first 1
the second 2
the third 3
^C
```
#### 7. Зайти в папку inner_dir_1

`cd inner_dir_1`

#### 8. Через cat сделать текстовый файл tf_3.txt  c любыми строками

```
cat > tf_3.txt
Donec eget lorem mi.
Nam vel ex nec eros blandit pellentesque in vel arcu. 
Fusce gravida, felis eu vestibulum porttitor, sapien enim venenatis turpis, ac cursus neque diam vitae tortor.
^C
```

#### 9. Через cat добавить в текстовый файл tf_3.txt строку “the second 2”

```
cat >> tf_3.txt
the second 2
^C
```

#### 10. Через cat добавить в текстовый файл tf_3.txt строку “the sec 2”

```
cat >> tf_3.txt
the sec 2
^C
```

#### 11. Через cat добавить в текстовый файл tf_2.txt строку “the sec 3”

```
cat >> ../tf_2.txt
the second 2
^C
```

#### 12. Через cat добавить в текстовый файл tf_3.txt строку “the SeCoNd 2”

```
cat >> tf_3.txt
the SeCoNd 2
^C
```

#### 13. Через cat добавить в текстовый файл tf_2.txt строку “the seConD 2”

```
cat >> ../tf_2.txt
the seConD 2
^C
```

#### 14. Сделать текстовый файл tf_4.txt в котором будет 15 строк.

`echo -ne "\n\n\n\n\n\n\n\n\n\n\n\n\n\n" > tf_4.txt`

another: `printf "\n\n\n\n\n\n\n\n\n\n\n\n\n\n" > tf_4.txt`

another: `printf "%s\n" "line number "{1..15} > tf_4.txt`

empty lines: `printf "%s\n" "line number "{1..15} | sed 's/.*//' > tf_4.txt`

#### 15. Сделать текстовый файл tF_5.txt в котором будет 13 строк.

`echo -ne {1..13}"\n" > tf_4.txt`

#### 16. Вывести список всех файлов в папке.

`ls` - and spice up with options to taste :)

#### 17. Выйти из папки inner_dir_1

`cd ..`

#### 18. Вывести содержимое файла tf_3.txt в терминал.

`cat inner_dir_1/tf_3.txt`

#### 19. Найти путь к файлу tf_4.txt

`find -name tf_4.txt` // print relative path and filename

`find -name tf_4.txt | xargs realpath`  // print absolute names with realpath

`readlink -f $(find -name tf_4.txt) 2>/dev/null || echo 'not found'`  // print absolute path and filename or 'not found'

#### 20. Отчистить файл tf_4.txt от содержимого без удаления самого файла.

`> tf_4.txt`

`truncate -s 0 tf_4.txt`  // best to use with large files

#### 21. Найти путь к файлам у которых есть  “tf” в названии.

`find . -name "*tf*"`

#### 22. Найти путь к файлам у которых есть  “tf” в названии и буквы в любом регистре.

`find . -iname "*tf*" -exec readlink -f '{}' \;`

#### 23. Найти строки в файлах где есть комбинация букв “sec” в текущей папке

`grep -s sec *` // -s suppress messages like 'Is a directory'

#### 24. Найти строки в файлах где есть комбинация букв “sec” в любом регистре в текущей папке

`grep -is sec *`

#### 25. Найти строки в файлах где есть только комбинация букв “sec” в текущей папке

`grep -s '^sec$' *`

`grep -xs sec *`

#### 26. Найти строки в файлах где есть только комбинация букв “sec” в любом регистре в текущей папке

`grep -is '^sec$' *`

`grep -ixs sec *`

#### 27. Найти строки в файлах где есть комбинация букв “second” в текущей папке

`grep -s second *`

#### 28. Найти строки в файлах где есть комбинация букв “second” в любом регистре в текущей папке

`grep -si second *`

#### 29. Найти строки в файлах где есть комбинация букв “second” во всех папках ниже уровнем

`grep -sir second` // include cur dir

`find . -mindepth 2 | xargs grep -r second` // exclude cur dir

`grep -r 'second' */` // this work too

#### 30. Найти только путь и название файла в строках которых есть комбинация букв “second” в текущей папке

`grep -sl second *`

#### 31. Найти все строки во всех файлах где нет комбинации “second”

`grep -sv second *`

#### 32. Найти только название и путь к файлам где нет комбинации “second”

`grep -sL second *` // be careful: 'grep -svl' will give wrong result 

#### 33. Вывести в терминал 4 последних строк любого текстового файла

`tail -4 tf_3.txt`

#### 34. Вывести в терминал 4 первые строки любого текстового файла.

`head -4 tf_3.txt`

#### 35. Команда в одну строку. Создать папку и создать текстовый файл с содержиммым.

`mkdir -p dir; echo "some text" > dir/file.txt`

#### 36. Команда в одну строку. Переместить в любую одну папку текстовые файлы у которых в содержимом есть слово “sec”

`grep -wl sec *.txt | xargs -I% mv % dir`

`grep -wl sec *.txt | xargs mv -t dir`

`mv -t dir $(grep -wl sec *.txt)`

#### 37. Команда в одну строку. Скопировать в любую одну папку текстовые файлы у которых в содержимом есть слово “sec”

`grep -wl sec *.txt | xargs -I% cp % dir`

#### 38. Команда в одну строку. Найти все строки c “sec” во всех текстовых файлах, скопировать и вставить эти строки в один новый созданный текстовый файл.

`grep -h sec *.txt > tf_5.txt`

#### 39. Команда в одну строку. Удалить текстовые файлы у которых в содержимом есть слово “sec”

`grep -wl sec *.txt | xargs rm -f`

#### 40. Просто вывести в терминал строку “Good job!!”

`echo "Good job!!"`
