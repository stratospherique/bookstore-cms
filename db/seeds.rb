# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.create([{
  author: "CBS",
  title: 'Game Of thrones',
  category: 'History',
},
{
  author: "Sherlok Holmes",
  title: 'The Sign Of the Four',
  category: 'Sci-Fi',
},
{
  author: "Sherlok Holmes",
  title: 'A Study in Scarlet',
  category: 'Sci-Fi',
},
{
  author: "Sherlok Holmes",
  title: 'The Final Problem',
  category: 'Action',
}])