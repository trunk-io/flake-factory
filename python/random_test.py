from random import randint

import pytest


def test_95_percent():
    randomNumber = randint(0, 100)
    assert randomNumber <= 95


def test_coin_toss():
    randomNumber = randint(0, 100)
    assert randomNumber <= 50
