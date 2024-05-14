# magic_ball.rb
require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use! Minitest::Reporters::JUnitReporter.new('ruby/minitest/results', write_files: true)

class ColorMixerTest < Minitest::Test
  def test_red_and_blue
    mixer = ColorMixer.new
    assert mixer.mix('red', 'blue') == 'purple'
  end

  def test_red_and_yellow
    mixer = ColorMixer.new
    assert mixer.mix('red', 'yellow') == 'orange'
  end

  def test_blue_and_yellow
    mixer = ColorMixer.new
    assert mixer.mix('blue', 'yellow') == 'green'
  end
end

class ColorMixer
  def mix(color1, color2)
    if color1 == 'red' && color2 == 'blue'
      'purple'
    elsif color1 == 'red' && color2 == 'yellow'
      'orange'
    elsif color1 == 'blue' && color2 == 'yellow'
      'green'
    else
      'something'
    end
  end
end
