//Q2 Create your own resume data in JSON formate
var Resume = 
    {
    Name                    : "J_Sriram",
    DOB                     : "01-11-1999",
    Age                     : "24",
    Father_Name             : "M_Jayaprakash",
    Father_Occupation       : "Agriculture",
    Sex                     : "Male",
    Marital_Status          : "Unmarried",
    Nationality             : "Indian",
    Language_Known          : "English,Tamil,Telugu",
    Hobbies                 : "Gardning,Swimming,Yoga",
    Mobile                  : "9444061968",
    Gmail                   : "sriram.fsd@gmail.com",
    Education_Qualification : "B.Com"
    };  
    for(let i in Resume)
    console.log(`${i}: ${Resume[i]}`);
