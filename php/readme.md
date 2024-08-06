# phpunit

# install

Macos install

```shell
brew install php
brew install phpunit
```

then run the tests with

```shell
phpunit --bootstrap src/autoload.php --log-junit output.xml
```

from the root dir

```
phpunit -c php/phpunit/phpunit.xml --bootstrap php/phpunit/src/autoload.php --log-junit tests/phpunit_test.xml
```




