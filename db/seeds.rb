# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
messages = [
  "Hello, World! Alishah",
  "Welcome to my Hello world!",
  "Greetings to you !",
  "Good after none!",
  "Hi to all!"
]

messages.each do |text|
  Greeting.create(message: text)
end