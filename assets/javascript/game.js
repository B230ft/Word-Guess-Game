


    
   
        
       

        var carArray = ["audi",
        "bmw",
        "citroen",
        "dodge",
        "ferrari",
        "ford",
        "hummer",
        "isuzu",
        "jeep",
        "mercedes",
        "nissan",
        "opel",
        "pontiac",
        "saab",
        "tesla",
        "volvo"];
        
            const maxGuess = 10
            var pauseGame = false
        
            var guessedLetters = []
            var guessingWord = []
            var wordToMatch
            var numGuess
            var wins = 0
        
            resetGame()
        
            // Wait for key press
            document.onkeypress = function(event) {
                // Make sure key pressed is an alpha character
                if (isAlpha(event.key) && !pauseGame) {
                    checkForLetter(event.key.toUpperCase())
                }
            }
        
            // Game Functions
            // Check if letter is in word & process
            function checkForLetter(letter) {
                var foundLetter = false
                
        
                // Search string for letter
                for (var i=0, j= wordToMatch.length; i<j; i++) {
                    if (letter === wordToMatch[i]) {
                        guessingWord[i] = letter
                        foundLetter = true
                        
                        // If guessing word matches random word
                        if (guessingWord.join("") === wordToMatch) {
                            // Increment # of wins
                            wins++
                            pauseGame = true
                            updateDisplay()
                            setTimeout(resetGame,5000)
                        }
                    }
                }
        
                if (!foundLetter) {
                   
                    
                    if (!guessedLetters.includes(letter)) {
                        
                        guessedLetters.push(letter)
                        
                        numGuess--
                    }
                    if (numGuess === 0) {
                        
                        guessingWord = wordToMatch.split()
                        pauseGame = true
                        setTimeout(resetGame, 5000)
                    }
                }
        
                updateDisplay()
        
            }
            
            function isAlpha (ch){
                return /^[A-Z]$/i.test(ch);
            }
        
            function resetGame() {
                numGuess = maxGuess
                pauseGame = false
        
                // Get a new word
                wordToMatch = carArray[Math.floor(Math.random() * carArray.length)].toUpperCase()
                console.log(wordToMatch)
        
                // Reset word arrays
                guessedLetters = []
                guessingWord = []
        
                // Reset the guessed word
                for (var i=0, j=wordToMatch.length; i < j; i++){
                    // Put a space instead of an underscore between multi word "words"
                    if (wordToMatch[i] === " ") {
                        guessingWord.push(" ")
                    } else {
                        guessingWord.push("_")
                    }
                }
        
                // Update the Display
                updateDisplay()
            }
        
            function updateDisplay () {
                document.getElementById("totalWins").innerText = wins
                document.getElementById("currentWord").innerText = guessingWord.join("")
                document.getElementById("remainingGuesses").innerText = numGuess
                document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ")
            }
        