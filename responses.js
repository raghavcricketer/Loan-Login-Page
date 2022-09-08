function getBotResponse(input) {
    // Simple responses
    if (input == "Loan eligibility") {
        return "What type of loan are you looking for?";
    } else if (input=="Personal loan" || input=="Home loan" || input=="Car loan" || input=="Education loan" || input=="Business loan") {
        return "Please provide your contact number";
    } 
    else if(/^[0-9]+$/.test(input))
    {
        return "A support member will be in touch with you shortly."
    }
    else {
        return "Try asking something else!";
    }
}