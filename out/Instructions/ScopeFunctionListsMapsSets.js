// Lecture Preparation
// Prepare your own lecture and also github repo or some slides.



// Shared screen
// Scope Functions Slide or Github

////////////////////////////////////////
1.

// 10.30 - 12.00
// Hello guys.

// Welcome to the last day of week 1 of the course.
// how are you all?
// Kaifa Halokum Jamiaa

// So are you laptops ready?

// So its a weekend. I will try not to make this day too hectic for you guys. InshaAllah I will try my best.


///////////////////////////////////////
2.
// and most important thing: 
// I am seeing some worried faces or confuse faces during the whole week, so please dont get worried about anything. Me and my team are always here to support you guys. so dont worry about anything. cool.

// The main principle of getting a developer is to be clam, is to be relax. Not to take tension. Beleive me, if you are tensed, you will forget the things which even you already know. And if you are relax then your mind will automatically start making the logic for you.

// I am doing programming from last 14 years, but see how clam I am. so be patient guys.


///////////////////////////////////////
3.
// I will start the lecture with the objectives and will end the lecture by discussing a summary with you guys that what we have studied today.


/////////////// Objectives ///////////////////////
4.
// So the objectives for todays class are Kotlin Scope Functions

//Kotlin – Scope Function

// we will discuss about what is the purpose of scope functions and why we need it.

// Then we will talk about List, sets, and Maps

// So these are the objectives for today, we will be exploring one by one in our live coding session.

/////////////////////////////////////////
5.

// ok before starting the lecture, I had a question from you guys. why we are studying the kotlin. Why not Java.

// Its an imp interview question.

// Kotlin Application Deployment is faster to compile, lightweight, and prevents applications from increasing size. Any chunk of code written in Kotlin is much smaller compared to Java,


/////////// Scope Functions ////////////



////////// Getting Ready ///////////////

// Open your IntelliJ 
// give loaction where you want to save
// kolin
// intelliJ


/////////// Introduction ///////////////
// So lets start our dicussion by Scope Functions.

// Anybody already knows about kotlin scope functions. Please let me know.


// You have already used one of them yesterday.... Common on guys?

// let

// ok

// So, There are several functions in the Kotlin standard library that help in the execution of a block of code within the context of an object. 

// Now the question arises that what is an object.
// In Kotlin, object is a special class that only has one instance. If you create a class with the object keyword instead of class , the Kotlin compiler makes the constructor private, creates a static reference for the object, and initializes the reference in a static block.

// Object is something that is created once and then we can create multiple instances out of it. we can reuse Object again and again instead of rewriting the whole code, becuase we need to follow th DRY principle. DRY is a programming principal which says dont repeat yourself so we will not be repeating ourself and instead will create an object.

// so object constructor is like a blueprint as shown in the gif file here.
// we make the model of the object once and then we can make as many instance as we want from that specific model.

// In simple words you can just say that object is a single instance of a class.

// IGNORE
// Calling these functions on an object with lambda expression creates a temporary scope.
//These functions are called Scope Functions. We can access the object of these functions without its name. Sounds confusing! Dont worry we will see all of them in a code along session.

// So those functions which helps us in exceution of bolck of code within the context of an object are know as scope functions.



/////////////////////////////////////////
// types of scope functions
/////////////////////////////////////////

// So we have 5 types of scope functions which are very common in kotlin andriod development

// let
// apply
// with
// run
// also


// and Every scope function has well-defined use cases, although all of them have nearly the same outcome. Now let’s look at each scope functions and its use cases:


/////////////////////////////////
//Application of using scope functions
/////////////////////////////////

// Scope functions make code more clear, readable, and concise which are Kotlin language’s main features.


// and remember that
// Each of these functions are quite similar in nature with minor differences. It’s often confusing to decide which function to use and when. So, we need to know what are the differences between these functions and their use cases.


// IGNORE
///////////////////// Differences in these functions: //////////////////////

// There are mainly two differences among these functions:

// Way of referring to a context object (i.e. using either ‘this’ or ‘it’ keyword)
// return value (i.e. returns either ‘context object’ or ‘lambda result’)

// Note: Context object refers to the object on which we are using the scope functions. 

// In simple words, its the way you are refering to the object.


////////////////////////////////////
// Scope functions table:
////////////////////////////////////
// Write on BOARD

Function - Object Reference - Return Value

let it Lambda result

apply this Context object

with this Lambda result

run this Lambda result

also it Context object




/////////////// CODE ALONG ///////////////





// 1. let function
// Context object Reference :   it 
// Return value    :   lambda result

// Use Case:

// let function is often used to provide null safety calls. Use safe call operator(?.) with ‘let’ for null safety. It executes the block only with the non-null value.

// Example:
fun main() {
	// nullable variable a
	// with value as null
	var a: Int? = null
	// using let function
	a?.let {
		// statement(s) will
		// not execute as a is null
		print(it)
	}
	// re-initializing value of a to 2
	a = 2
	a?.let {
		// statement(s) will execute
		// as a is not null
		print(it)
	}
}

// Output:
// 2

// Explanation:

// Show them scope of let.

// As you see when the value of ‘a’ is ‘null’ let function simply avoid the code block. Hence, solving the biggest nightmare of programmers – NullPointerException.







// 2. apply function
// Context object Reference  :    this
// Return value     :    context object

// Use Case:
// As the name implies – “Apply these to the object”. It can be used to operate on members of the receiver object mostly to initialize members.


///////////////////////////////////////
// IGNORE 
// lateinit means late initialization. If you do not want to initialize a variable in the constructor instead you want to initialize it later on and if you can guarantee the initialization before using it, then declare that variable with lateinit keyword. It will not allocate memory until initialized.

class Company() {
    var name: String = ""
    var objective: String = ""
    var founder: String = ""
}

/////////////////////////////////////////

// Example: Without using scope function

class Company() {
    lateinit var name: String
    lateinit var objective: String
    lateinit var founder: String
}

fun main(){
    val tuwaiq = Company()

    tuwaiq.name = "Tuwaiq Academy"
    tuwaiq.objective = "To make the future bright"
    tuwaiq.founder = "Saad Iqbal"

    println(tuwaiq.name)

}

Output:
Tuwaiq Academy


// Example: Using scope function

class Company() {
	lateinit var name: String
	lateinit var objective: String
	lateinit var founder: String
}

fun main(){
    val tuwaiq = Company().apply{

        this.name = "Tuwaiq Academy"
        this.objective = "To make the future bright"
        this.founder = "Saad Iqbal"
    }


    println(tuwaiq.name)

}
Output:
Tuwaiq Academy


// Show them scope of apply

// Also works without this keyword

// Explanation
// You must have noticed that when we are not using the scope function, we need to write the object name every time to refer to members of the class. While using the scope function, we can directly refer to members without the object name. This is one of the ways of using the scope function. We will learn more about them in this article.

//////////////////////////////////////












// 3. with function
// Context object Reference :   this
// Return value    :   lambda result

// Use Case:
// Recommended use of ‘with’ for calling functions on context objects without providing the lambda result.

// It gives you access to all the elements of the object directly.


fun main(){
    val tuwaiq = Company().apply{

        this.name = "Tuwaiq Academy"
        this.objective = "To make the future bright"
        this.founder = "Saad Iqbal"
    }


    with(tuwaiq) {
        println(name)
    }


//    println(tuwaiq.name)

}

Output:
Misk Academy


// Make another object

val misk = Company().apply{

    this.name = "Misk Academy"
    this.objective = "To make the future bright"
    this.founder = "Saad khan"
}

with(misk) {
    println(name)
}


// OR

with(tuwaiq) {
    println("$name" + " is founded by " + "$founder" + " And the objective is " + "$objective")
}

with(misk) {
    println("$name" + " is founded by " + "$founder" + " And the objective is " + "$objective")
}



// Is it clear guys?

// Does this make sense for everyone?
// If it does not make sense for any one please speak now.




// 4. run function
// Context object Reference  :    this
// Return value     :    lambda result

// ‘run’ function can be said as the combination of ‘let’ and ‘with’ functions.

// Use Case:

// Used when the object lambda contains both initialization and the computation of the return value.  Using run we can perform null safety calls as well as other computations.

// class Company() {
// 	lateinit var name: String
// 	lateinit var objective: String
// 	lateinit var founder: String
// }

// fun main(){

    var company: Company? = null
    println("Company Name : ")
    company?.run{
        print(this.name)
    }

//     val tuwaiq = Company().apply{

//         this.name = "Tuwaiq Academy"
//         this.objective = "To make the future bright"
//         this.founder = "Saad Iqbal"
//     }

//     val misk = Company().apply{

//         this.name = "Misk Academy"
//         this.objective = "To make the future bright"
//         this.founder = "Saad khan"
//     }
    
    print("Company Name:")
    tuwaiq?.run{
        print(this.name)
    }


//     println(tuwaiq.name)

// }
Output:
Company Name : 
Company Name: Tuwaiq Academy

// Explanation:

// When the ‘company’ value is null, the body of the run is simply ignored. When it is non-null, the body executes.




// Send the code on slack



// 5. also function
// Context object Reference  :    it
// Return value     :    context object

// Use Case:
// It is used where we have to perform additional operations when we have initialized the object members.

// e.g I also want to do this and that and that.

// e.g. I am learning kotlin, I also want to learn .Net, I also want to learn Java and so on.

fun main() {
	// initialized
	val list = mutableListOf<Int>(1, 2, 3)

	// later if we want to perform
	// multiple operations on this list
	list.also {
		it.add(4)
		it.remove(2)
		// more operations if needed
	}
	println(list)
}
[1, 3, 4]





// Summary
// Scope functions make code more readable, clear and concise.
// Object reference – ‘this’ and ‘it’.
// Return value – context object and lambda result.
// let : working with nullable objects to avoid NullPointerException.
// apply : changing object configuration.
// with : operating on non-null objects, and gives access to the properties of the objects.
// run: Combination of let and with. Operate on nullable object, executing lambda expressions.
// also : adding additional operations.





// Ref: https://www.geeksforgeeks.org/kotlin-scope-function/






// Push code to github repository
git init
git add .
git commit -m "Scope Functions Completed"

// Make a git repo with name "Scope Functions"
    git push origin master


// slack the link








// 01:00 to 03.00

// After break
//////////// Lists, Sets, Map //////////////////////////////////////////////////




// New project ListsSetsMap or same one.


/////////////////////////////////////////
//////////////////// List ///////////////
/////////////////////////////////////////

// A list is an ordered collection of items. In Kotlin, lists can be either mutable (MutableList) or read-only (List). For list creation, use the standard library functions listOf() for read-only lists and mutableListOf() for mutable lists. To prevent unwanted modifications, obtain read-only views of mutable lists by casting them to List.


///////////// 1. listOf //////////////////

// and with only listOf
fun main() {
    // initialized
    var list = listOf<Int>(1, 2, 3)

    list.add(40)
    list.remove(2)


    println(list)
}


////////// 2. mutableListOf ///////////////

fun main() {
    // initialized
    val list = mutableListOf<Int>(1, 2, 3)

    list.add(40)
    list.remove(2)


    println(list)
}


/////////// List Operations ///////////
/////////// 3. Accessing elements of List ///////////

// list.removeAt(2)
// list.add(4, 600)
// println(list.indexOf(2))

// If we want to access the first element of list so how we gonna write it.
println(list.get(0))
println(list[0])
list.get(5)     // exception!
println(list.getOrNull(5))   // null
println(list.getOrElse(5, {it}))


// to check the size of list
println(set.size)


///////////// 4. Sorting on list /////////
// Descending
list.sortDescending()
println(list)

//Ascending
list.sort()
println(list)

//reverse
list.reverse()
println(list)





///////////// 5. Looping List ////////////


// How many loops we have in kotlin?

// for loop
for(num in list){
    println(num)
}

// forEach loop
list.forEach { it ->
    println(it.length)
}

// Ok, how we can print index in forEach loop. For example, if i want this output so
0 ------- 1
1 ------- 2
2 ------- 3


// forEachIndexed
list.forEachIndexed { index, i ->
    println(index.toString() + " ------- " + i)
}



///////// 6. Searching the element in List /////////////////////////////
if(1 in list)
//OR
if("saad" in list)
{
    println("true")
}
else
{
    println("false")
}


// How can we write this in one line statement.
if("saad" in list) println("true") else println("false")




////////// 7 . Creating a Mutable/Read-only Copy ///////////////////////

val patronList = listOf("Saad", "Ali", "Fouad")
val mutablePatronList = patronList.toMutableList()
val readOnly = mutablePatronList.toList()


// so no body else can change it directly. Create a copy and modifying is allowed but not on the same list.



////////////// Lists LAB ////////////////

// Write a program and Make a list of Strings. Check that how sorting behaves on Strings And print all the elements of list using loops.

// Solution

fun main() {
    // initialized
    val list = mutableListOf<String>("saad", "zsaad", "asaad")

    println(list)


    // Descending
    list.sortDescending()
    println(list)

//Ascending
    list.sort()
    println(list)

//reverse
    list.reverse()
    println(list)

    for(num in list){
        println(num)
    }
}





/////////////////////////////////////////
///////////////////// Set ///////////////
/////////////////////////////////////////

// A set is an unordered collection that does not support duplicates. For creating sets, there are functions setOf() and mutableSetOf(). 

// Just like list, it also has readonly form and mutable means changeble form.

// Ignore casting
//A read-only view of a mutable set can be obtained by casting it to Set.



/////////////// 1. setOf /////////////////

fun main(){
    var set = setOf<Int>(1,2,3,4,5,1)


    // Looping
    for(num in set){
        println(num)
    }
}

// change it to
var set = setOf<Int>(1,2,3,4,5,1,2,3,4,5)

// change it to

var set = setOf<Int>(1,2,3,4,5,1,2,3,4,5,100)

// So duplicate are truncated automatically. Sets are not for duplicate values.


/////////// 2. mutablesetOf //////////////
// mutablesetOf means that this set can be changed 


fun main(){
    var set = mutableSetOf<Int>(1,2,3,4,5)

    println(set)

    set.remove(5)
    set.add(100)

    // Looping
    for(num in set){
        println(num)
    }
}

// Its unordered so doesnot have indexes.

////////////// Set Operations //////////////////////////// 3. Accessing Set elements ////////////////////////////

val uniquePatrons = mutableSetOf<String>()
uniquePatrons += "Alex"
[Alex]
uniquePatrons += "Alex"
[Alex]





////////////// 4. Sorting Set ////////////

println(set.sortedDescending())
println(set.sorted())
println(set.reversed())


// If we want to know the size of set, so we can do something like this.
println(set.size)


// IGNORE
/////////////// Union //////////////////
// Set can also be used for 
println(set union setOf("four", "five"))
println(setOf("four", "five") union set)

println(set intersect setOf("two", "one"))
println(set subtract setOf("three", "four"))
println(set subtract setOf("four", "three")) // same output



////////////// 5. Looping Set ////////////




//////////// 6. Searching Set ////////////

// Not working





/////////////////////////////////////////
///////////////////// Map ///////////////
/////////////////////////////////////////

// A map is a collection of key/value pairs, where each key is unique and is used to retrieve the corresponding value. For creating maps, there are functions mapOf() and mutableMapOf(). 


///////////// mapOf() ///////////////////

fun main(){

    var map = mapOf<String, Int>("one" to 1, "two" to 2, "three" to 3)
}



//////////// mutableMapOf() /////////////

fun main(){

    val map = mutableMapOf<String, Int>("one" to 1, "two" to 2, "three" to 3)

    // Accessing
    println(map.get("one"))
    println(map["one"])
    println(map.getOrDefault("four", 10))
    println(map["five"])               // null
//numbersMap.getValue("six")      // exception!


    //size
    println(map.size)

    // Looping
    for (num in map){
        print(num.key)
        println(num.value)
    }


}



////////////// Map Operations ////////////////////////////


map.remove("one")
println(map)

map.put("four", 4)
println(map)

map.replace("two", 2, 200)
println(map)







/////////////////////////////////////////
//////////////////// Array ///////////////
/////////////////////////////////////////


fun main(){
    val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
    for (x in cars) {
        println(x)
    }
}


// Difference between Array and List.

// Array<T> is a class with known implementation: it's a sequential fixed-size memory region storing the items (and on JVM it is represented by Java array).

// List<T> and MutableList<T> are interfaces which have different implementations: ArrayList<T>, LinkedList<T> etc


// ref: https://stackoverflow.com/questions/36262305/difference-between-list-and-array-types-in-kotlin



// 03.00 - 03.30 break



// 03.30 to 05.00
///////////// LAB for today /////////////
// 
// SLACK

// LAB - Kotlin Collections
// Time to solve: 1 hour 

//1. Write a program to find the sum of negative and positive integers.

//2. Take the size of the list from the user.

//3. Add a condition that list size should not be less than 10, else prompt the user again without exiting from the program.

//4. Prompts the user number of time equivalent to the size of the list(Already taken from the user).

//5. Loop over the inputs from the user and calculate the sum of negative and positive integers.


// Solution

fun main() {

    var list = mutableListOf<Int>()
    var size = getListSize()
    // println("size" + size)
    var num = 0

    var i = 0
    while (i < size) {
        print("Enter the Element of the list:")
        num = readLine()!!.toInt()
        list.add(num)
        i++
    }

//    println(list)
    var sumPostive = 0
    var sumNegative = 0

    for (number in list) {
        if (number > 0) {
            sumPostive += number
        } else {
            sumNegative += number
        }
    }

    println("sum of positive number : " + sumPostive)
    println("sum of Negative number : " + sumNegative)
}

fun getListSize():Int{
    println("Enter the size of the array: ")
    var listSize = readLine()!!.toInt()
    // println("---------" + listSize)

    return if(listSize >= 10){
        listSize
    }
    else
    {
        getListSize()
    }
}


// Whoever solves it, can enjoy thier weekend and leave early.








// Send intelliJ shortcuts to students for MAC and Windows

// Warmup presentation - ask students to present the solutions.