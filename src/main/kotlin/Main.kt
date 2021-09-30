//// Scope Functions
//
//Functions         Object Reference          Return Value
//
// Let                it                      Lambda Result
// apply              this                    Context Object
// with               this                    Lambda Result
// run                this                    Lambda Result
// also               it                      Context Object

// Let
//fun main(){
//    var a:Int? = null
//    a?.let{
//        println(it)
//    }
//    a = 20
//    a?.let{
//        println(it)
//    }
//}


// Apply
// Object reference: this
// Return value: Context Object

//class Company(){
//   lateinit var name: String
//   lateinit var objectives: String
//   lateinit var founder: String
//}
//
//fun main(){
//    var tuwaiq = Company().apply{
//        name = "Tuwaiq Academy"
//        objectives = "To make the future bright"
//        founder = "Saad Iqbal"
//    }
//
//    var misk = Company().apply{
//        name = "Misk Academy"
//        objectives = "To make the future bright"
//        founder = "Saad khan"
//    }
//
//    println(tuwaiq.name)
//}

// with
// Object Reference: this
// Return value: Lambda Result

//class Company(){
//    lateinit var name: String
//    lateinit var objectives: String
//    lateinit var founder: String
//}
//
//fun main(){
//    var tuwaiq = Company().apply{
//        name = "Tuwaiq Academy"
//        objectives = "To make the future bright"
//        founder = "Saad Iqbal"
//    }
//
//    var misk = Company().apply{
//        name = "Misk Academy"
//        objectives = "To make the future bright"
//        founder = "Saad khan"
//    }
//
//    with(tuwaiq) {
//        println("$name" + " is founded by " + "$founder" + " And the objective is " + "$objectives")
//    }
//
//    with(misk) {
//        println("$name" + " is founded by " + "$founder" + " And the objective is " + "$objectives")
//    }
//
//}


// run
// object reference: it
// return value: lambda result

//class Company(){
//    lateinit var name: String
//    lateinit var objectives: String
//    lateinit var founder: String
//}
//fun main(){
//
//    var company: Company? = null
//    println("Company Name: ")
//    company?.run{
//        print(this.name)
//    }
//
//    var tuwaiq = Company().apply{
//        name = "Tuwaiq Academy"
//        objectives = "To make the future bright"
//        founder = "Saad Iqbal"
//    }
//    var misk = Company().apply{
//        name = "Misk Academy"
//        objectives = "To make the future bright"
//        founder = "Saad khan"
//    }
//
//    print("Company Name: ")
//    tuwaiq?.run{
//        print(this.name)
//    }
//
//}


// also
// Object reference: it
// Return type: Context Object

fun main(){
    var list = mutableListOf<Int>(1,2,3,4)

    println(list)
    list.apply{
        this.add(5)
        this.remove(2)
    }
    println(list)
}











