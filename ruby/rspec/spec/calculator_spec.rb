# spec/calculator_spec.rb
# require "calculator"
require_relative "../lib/calculator"

describe Calculator do
  describe ".add" do
    context "given 1 and 2" do
      it "returns " do
        expect(Calculator.add(1, 2)).to eq(3)
      end
    end
  end

  describe ".halve" do
    context "given the number 4" do
      it "returns 2" do
        expect(Calculator.halve(4)).to eq(2)
      end
    end
  end

  describe ".halve" do
    context "given the number 3" do
      it "returns 1.5" do
        expect(Calculator.halve(3)).to eq(1.5)
      end
    end
  end
end
