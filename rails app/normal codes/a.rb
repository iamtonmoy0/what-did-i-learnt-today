
1 puts use to output of variables --------------
 puts "hello world"  

2 changing value -----------------------------------------------------

 hello = "hello world"

 hello ="it is changed"
 puts hello

3 function
 def hello(anything)
 	puts anything
	
 end

  hello "aj amar mon valo neii!" 

 concat ------------------------------------------------------------------

 puts " hello " + "" + " i mr kashem"

 hello = "mon amar kemon kemon kore"
 puts hello.class

  . class method use to know the variable type ------------------------------------
  puts 1.class
  puts true.class
  puts false.class


  methods used for to check  how meny class and parameters you can use in your variable --------
 name = "kashem"
 puts name.methods

  string interpulation ----------
 name = "mr kashem"
 puts "hello my name is {name} "


  \ use to escape errors  in using single quote
 puts 'mon amar kemon kemon \'kore\''

 name = "tonmoy"
 puts name.length
 name = ""
 puts name.empty?
 puts name.nil?


 getting input ------------------------------
   puts "what is your first name"
   name = gets.chomp
   puts "wellcome {name} to our house "

 revese method======================================

 name = "mr kashem"
 puts name.reverse



 puts  "enter nmber"
 x = gets.chomp
 puts  "enter number"
 y = gets.chomp

 puts  "the sum is    { x.to_f + y.to_f }"

 def multiply(first , second)
 	first.to_i + second.to_i

 end
 puts multiply( 5 , 5)

 def multily(first_number ,second_number)

 	first_number + second_number 
 end
 def devide(first_number ,second_number)

 	first_number / second_number 
 end
 def substract(first_number ,second_number)

 	first_number - second_number 
 end
 def mod(first_number ,second_number)

 	first_number % second_number 
 end




 puts " select 1 to  multily ) select 2 to divide ) select 3 to substract ) select 4  for remainder"
 prompt= gets.chomp

 puts "enter the first number"
  first_number = gets.chomp
  puts "enter the second number"
  second_number = gets.chomp


  if prompt == '1'
 	puts " the sum is "
 	result = multiply(first_number,second_number)
  elsif prompt == '2'
 	puts "the sum is "
 	result = divide(first_number,second_number)
 	elsif prompt == '3'
 		puts "the sum is  "
 		 result = substract(first_number,second_number)
 		elsif prompt == '4'
 			puts "the sum is  "
 			result = mod(first_number,second_number)
 		else 
 			puts "invalid choice"
 		end

 		puts "{result} "



 y = (0..99).to_a
 puts y.shuffle

 x = [1,2,3,4,5,6,7,]
 puts xitb


 y  =[ 'hello' , 'my name ' ]
 puts y.join(' ')
  class User 
  end

  user = User.new
  puts User.ancestors

  puts user
 class User 
  def initialize(name)
 	@name = name
	
  end
  def run
 	puts "iam on"
	
  end

 	end

 	user =User.new("tonmoy")
 	user1 = User.new("mr kashem")
 	user2 = User.new('hello world')
 user.run
 user1.run
 user2.run
 	puts user
 	puts user1
 	puts user2



 user_permissions_template.json:

 {"accounts": "read",

 "policies": "write",

 "users": "write"}

 user.rb:

 require 'json'

 class User

 attr_accessor :email, :name, :permissions

 def initialize(*args)

 @email = args[0]

 @name = args[1]

 @permissions = User.permissions_from_template

 end

 def self.permissions_from_template

 file = File.read 'user_permissions_template.json'

 JSON.load(file, nil, symbolize_names: true)

 end

 def save

 self_json = {email: @email, name: @name, permissions: @permissions}.to_json

 open('users.json', 'a') do |file|

 file.puts self_json

 end

 end

 end

 runner.rb:

 require 'pp'

 require_relative 'user'

 user = User.new 'joe@example.com', 'joe'

 pp user

 user.save


 puts "   /|"
 puts "  / |"
 puts " /  |"
 puts "/   |"

 num = 20.11
 puts num.round()
 


 array


 friends = ["kevin" ,"hello" ,"oscer" ,1 ,2]
 puts friends.include?("kevin")


 hashes starts here

 def all(hello)
 	puts ("helele " + hello + "jelele")
 end
  all('12')


 if else contidion

 ismale = true
 istall = false
 if ismale and istall 
 	hello = "you are male and tall"
 	puts hello
	
	
 elsif
 	puts "you are not tall"
	
 end

 case statement


 def days()
 day = ""

 case dayname 
 when "mon"
 	day = "Monday"
 end
 return day

 end
 puts days("mon")






