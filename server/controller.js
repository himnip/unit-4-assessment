module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

    getFortune: (req, res) => { 
        const fortunes = ["Go take a rest.", "Society prepares the crime, the criminal commits it.", "Welcome change.", "You never know who you touch.", "A faithful friend is a strong defense."];
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    }

    getLove: (req, res) => {
        const love = ["Love is a verb", "It really is the little things", "Be kinder than necessary"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * love.length);
        let randomLove = loves[randomIndex];
      
        res.status(200).send(randomLove);
    }

    getSong: (req, res) => {
        const song = ["Window by Still Woozy", "Borderline by Tame Impala", "Mind Over Matter by Young the Giant"];
        let randomIndex = Math.floor(Math.random() * song.length);
        let randomSong = songs[randomIndex];
      
        res.status(200).send(randomLove);
    }


};