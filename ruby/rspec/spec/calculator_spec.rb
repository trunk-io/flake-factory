# spec/square.rb
require "calculator"

describe Calculator do
  describe ".add" do
    context "given an empty string" do
      it "returns zero" do
        expect(Calculator.add("")).to eq(0)
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
