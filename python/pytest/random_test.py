# trunk-ignore-all(bandit/B101)
import secrets


def test_99_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 99


def test_98_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 98


def test_97_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 97


def test_95_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 95


def test_coin_toss():
    random_number = secrets.randbelow(100)
    assert random_number <= 50


def test_90_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 90


def test_80_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 80


def test_70_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 70


def test_60_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 60


def test_50_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 50


def test_40_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 40


def test_30_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 30


def test_20_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 20


def test_10_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 10

def test_tyler_50_percent():
    random_number = secrets.randbelow(100)
    assert random_number <= 50
