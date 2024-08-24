function VerifyID()//this is my function//George Terbeck
{
    var FirstName = document.getElementById("FName").value;//This tells it to check the first name box, I typed it out myself
    var LastName = document.getElementById("LName").value;//This tells it to check the last name box, I typed it out myself
    var Zipcode = document.getElementById("Zipcode").value;//This tells it to check the zipcode box, I typed it out myself

    var FullName = FirstName+ " " + LastName;//This is how it knows what to check for the whole 20 characters thing, I typed it out myself

    if (FullName.length > 20)//This is what checks if the name is too long, I typed it out myself
    {
        document.getElementById("Login Status").innerHTML = "INCORRECT, COMPUTER WILL SELF DESTRUCT IN 5 SECONDS"//This is the message you get if your name is too long, I typed it out myself
    }
    else if (Zipcode.length !=5)//This is what checks the zipcode length, I typed it out myself
    {
        document.getElementById("Login Status").innerHTML = "INCORRECT, COMPUTER WILL SELF DESTRUCT IN 5 SECONDS"//This is the alert you get if your zipcode isn't 5 digits, I typed it out myself
    }
    else//This is the parameter for if you did everything right, I typed it out myself
    {
        alert("Good Dob");//This is the alert you get if you typed it right, I typed it out myself
    }
}


























// I don't know if you just didn't see my comment in canvas when I submitted 
// assignment 2.1 the second time but based off of your last comment I
// would assume not so, the code may have been very similar but it's not 
// like I copied and pasted your code, I did type it all out and I changed
// four parameters of what constituted a win or loss, on top of this your 
// slot for the sum of both die was not working while mine was.