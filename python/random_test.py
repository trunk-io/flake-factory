import pytest
import secrets

def test_95_percent():
    randomNumber = secrets.randbelow(100)
    assert randomNumber <= 95

def test_coin_toss():
    randomNumber = secrets.randbelow(100)
    assert randomNumber <= 50

def test_20_percent():
    randomNumber = secrets.randbelow(100)
    assert randomNumber <= 20

def test_10_percent():
    randomNumber = secrets.randbelow(100)
    assert randomNumber <= 10