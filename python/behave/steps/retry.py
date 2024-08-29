import os
import time

from behave import *

# the retry.data file is stored as a GH artifact by the run so we can reliably have it in place between exec cycles
current_dir = os.getcwd()
test_file = os.path.join(current_dir, "python", "behave", "retry.data")


@given("start the behave test")
def step_impl(context):
    time.sleep(0.2)  # sleep for 500 milliseconds


@when("read file - if its not there - create it and fail")
def step_impl(context):
    time.sleep(0.3)  # sleep for 300 milliseconds
    if not os.path.exists(test_file):
        with open(test_file, "w") as f:
            f.write("")
        raise AssertionError("File was not there, created it and failed")


@then("file existed - verify it contains the string Hello World")
def step_impl(context):
    time.sleep(0.5)  # sleep for 500 milliseconds
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
