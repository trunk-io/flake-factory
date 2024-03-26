# trunk-ignore-all(bandit/B101)
import secrets


def test_95_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 95


def test_coin_toss():
    random_number = secrets.randbelow(100)
    assert random_number <= 50


def test_20_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 20


def test_10_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 10
