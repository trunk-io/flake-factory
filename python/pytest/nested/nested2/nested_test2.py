# trunk-ignore-all(bandit/B101)
import secrets


def test_50_percent_nested_2():
    random_number = secrets.randbelow(100)
    assert random_number <= 50
