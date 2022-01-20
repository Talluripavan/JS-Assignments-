// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if (height>1 && mass>1){
        res=mass/(height*height);
        return res;
    }else{
    return "INVALID INPUT";
    }

    
}

module.exports = BMICalculator;
