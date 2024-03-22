import os

from behave import *

test_file = "python/behave/test_data/retry.data"


@given("start the behave test")
def step_impl(context):
    pass


@when("read file - if its not there - create it and fail")
def step_impl(context):
    if not os.path.exists(test_file):
        with open(test_file, "w") as f:
            f.write("")
        raise AssertionError("File was not there, created it and failed")


@then("file existed - verify it contains the string Hello World")
def step_impl(context):
    with open(test_file, "r") as f:
        contents = f.read()
    if "Hello World" not in contents:
        with open(test_file, "a") as f:
            f.write("Hello World")
        raise AssertionError(
            "File did not contain the string Hello World, added it and failed"
        )
    # file existed - everything is good (delete it)
    os.remove(test_file)
